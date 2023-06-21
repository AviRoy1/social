const User = require("../models/User");
const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { verifytoken } = require("./verifyToken");
const JWTSEC = "@ee!$^$#@@#fekedek 99##";
const Post = require("../models/Post");

const router = express.Router();

router.post(
  "/create/user",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  body("username").isLength({ min: 5 }),
  body("phonrnumber").isLength({ min: 10 }),
  async (req, res) => {
    const error = validationResult(req.body);
    if (!error.isEmpty()) {
      console.log(error);
      return res.status(400).json("Some Error occured");
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(200).json("This email is already registered!!");
      }
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: secpass,
        profile: req.body.profile,
        phonenumber: req.body.phonenumber,
      });
      const accessToken = jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        JWTSEC
      );

      await user.save();
      return res.status(200).json({ user, accessToken });
    } catch (error) {
      return res.status(400).json("Internal Error Occured");
    }
  }
);

// Login
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    const error = validationResult(req.body);
    if (!error.isEmpty()) {
      // console.log(error);
      return res.status(400).json("Some Error occured");
    }
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json("User doesn't found");
      }
      const comparePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!comparePassword) {
        return res.status(400).json("Password error");
      }
      const accessToken = jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        JWTSEC
      );
      const { password, ...other } = user._doc;
      return res.status(200).json({ other, accessToken });
    } catch (error) {
      return res.status(400).json("Internal Error Occured");
    }
  }
);

//Following
router.put("/following/:id", verifytoken, async (req, res) => {
  if (req.params.id !== req.body.user) {
    const user = await User.findById(req.params.id);
    const otheruser = await User.findById(req.body.user);

    if (!user.Followers.includes(req.body.user)) {
      await user.updateOne({ $push: { Followers: req.body.user } });
      await otheruser.updateOne({ $push: { Following: req.params.id } });
      return res.status(200).json("User has followed");
    } else {
      await user.updateOne({ $pull: { Followers: req.body.user } });
      await otheruser.updateOne({ $pull: { Following: req.params.id } });
      return res.status(200).json("User has Unfollowed");
    }
  } else {
    return res.status(400).json("You can't follow yourself");
  }
});

// Fetch post from followers
router.get("/flw/:id", verifytoken, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const followersPost = await Promise.all(
      user.following.map((item) => {
        return Post.find({ user: item });
      })
    );
    res.status(200).json(followersPost);
  } catch (error) {
    // console.log(error);
    return res.status(500).json("Internal server error");
  }
});

//  Update User Profile
router.put("/update/:id", verifytoken, async (req, res) => {
  try {
    if (!(req.params.id !== req.user.id)) {
      return res
        .status(500)
        .json("You are not allow to update this user account");
    }
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      req.body.password = secpass;
      const updateuser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      await updateuser.save();
      res.status(200).json(updateuser);
    }
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
});

//  Delete user account
router.delete("/delete/:id", verifytoken, async (req, res) => {
  try {
    if (req.params.id !== req.user.id) {
      return res.status(400).json("Account doesn't match");
    } else {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("User account has been deleted");
    }
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
});

// get user details for post
router.get("/post/user/details/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json("User not found");
    }
    const { email, password, phonenumber, followers, following, ...others } =
      user._doc;
    res.status(200).json(others);
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
});

//  get user to follow
router.get("/all/user", verifytoken, async (req, res) => {
  try {
    const alluser = await User.find();
    const user = await User.findById(req.user.id);
    const followinguser = await Promise.all(
      user.following.map((item) => {
        return item;
      })
    );

    let UsertoFollow = alluser.filter((val) => {
      return !followinguser.find((item) => {
        return val._id.toString() === item;
      });
    });

    let filteruser = await Promise.all(
      UsertoFollow.map((item) => {
        const {
          email,
          password,
          followers,
          following,
          phonenumber,
          ...others
        } = item._doc;
        return others;
      })
    );
    res.status(200).json(filteruser);
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
});

module.exports = router;
