const express = require("express");
const Post = require("../models/Post");
const { verifytoken } = require("./verifyToken");
const User = require("../models/User");
const Message = require("../models/Message");

const router = express.Router();

//  Create post
router.post("/user/post", verifytoken, async (req, res) => {
  try {
    let { title, image, video } = req.body;
    let newPost = new Post({
      title,
      image,
      video,
      user: req.user.id,
    });
    await newPost.save();
    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json("Internal error occure");
  }
});

//  Upload post by one user
router.get("/get/post/:id", async (req, res) => {
  try {
    const mypost = await Post.find({ user: req.params.id });
    if (!mypost) {
      return res.status(200).json("You don't have any post");
    }
    res.status(200).json(mypost);
  } catch (error) {
    res.status(500).json("Internal error occure");
  }
});

// Update user post
router.put("/update/post/:id", verifytoken, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).json("Post does not found");
    }
    post = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    let updatepost = await post.save();
    res.status(200).json(updatepost);
  } catch (error) {
    res.status(500).json("Internal error occure");
  }
});

// Like
router.put("/:id/like", verifytoken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.like.includes(req.user.id)) {
      // if (post.dislike.includes(req.user.id)) {
      //   await post.updateOne({ $pull: { dislike: req.user.id } });
      // }
      await post.updateOne({ $push: { like: req.user.id } });
      return res.status(200).json("Post has been liked");
    } else {
      await post.updateOne({ $pull: { like: req.user.id } });
      return res.status(200).json("Post has been unlike");
    }
  } catch (error) {
    return res.status(500).json("Internal server error ");
  }
});

//  Dislike
router.put("/:id/dislike", verifytoken, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post.dislikelike.includes(req.body.user)) {
      await post.updateOne({ $push: { dislikelike: req.body.user } });
      return res.status(200).json("Post has been liked");
    } else {
      await post.updateOne({ $pull: { dislikelike: req.body.user } });
      return res.status(200).json("Post has been unliked");
    }
  } catch (error) {
    res.status(500).json("Internal error occure");
  }
});

//  Comment
router.put("/comment/post", verifytoken, async (req, res) => {
  try {
    const { comment, postid } = req.body;
    const user = await User.findById(req.user.id);
    let pic = user.profile;
    // console.log(req.user);
    const comments = {
      user: req.user.id,
      username: req.user.username,
      profile: pic,
      comment: comment,
    };
    let post = await Post.findById(postid);
    post.comments.push(comments);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("Internal error occure");
  }
});

//  Delete post
router.delete("/delete/post/:id", verifytoken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.user === req.user.id) {
      const deletepost = await Post.findByIdAndDelete(req.params.id);
      return res.status(200).json("Your post has been deleted");
    } else {
      return res.status(400).json("You are not allow to delete this post");
    }
  } catch (error) {
    res.status(500).json("Internal error occure");
  }
});

//  Get all following users
router.get("/following/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const followingusers = await Promise.all(
      user.following.map((item) => {
        return User.findById(item);
      })
    );

    let followingusrsList = [];
    followingusers.map((item) => {
      const { phonenumber, email, password, following, followers, ...others } =
        item._doc;
      followingusrsList.push(others);
    });
    return res.status(200).json(followingusrsList);
  } catch (error) {
    res.status(500).json("Internal error occure");
  }
});

//  Get all followers
router.get("/followers/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const followingusers = await Promise.all(
      user.followers.map((item) => {
        return User.findById(item);
      })
    );

    let followersList = [];
    followingusers.map((item) => {
      const { phonenumber, email, password, following, followers, ...others } =
        item._doc;
      followersList.push({ others });
    });
    return res.status(200).json(followersList);
  } catch (error) {
    res.status(500).json("Internal error occure");
  }
});

//  create message
router.post("/msg", verifytoken, async (req, res) => {
  try {
    const { from, to, message } = req.body;
    const newmessage = await Message.create({
      Chatusers: [from, to],
      Sender: from,
      message: message,
    });
    return res.status(200).json(newmessage);
  } catch (error) {
    res.status(500).json("Internal error occure");
  }
});

// chat between two users

router.get("/get/chat/msg/:user1Id/:user2Id", async (req, res) => {
  try {
    const from = req.params.user1Id;
    const to = req.params.user2Id;

    const newmessage = await Message.find({
      Chatusers: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const allmessage = newmessage.map((msg) => {
      return {
        myself: msg.Sender.toString() === from,
        message: msg.message,
      };
    });

    return res.status(200).json(allmessage);
  } catch (error) {
    res.status(500).json("Internal error occure");
  }
});

module.exports = router;
