const express = require("express");
const Post = require("../models/Post");
const { verifytoken } = require("./verifyToken");

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
router.get("/get/post", verifytoken, async (req, res) => {
  try {
    const mypost = await Post.find({ user: req.user.id });
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
    let post = await Post.findById(req.params.id);
    if (!post.like.includes(req.body.user)) {
      await post.updateOne({ $push: { like: req.body.user } });
      return res.status(200).json("Post has been liked");
    } else {
      await post.updateOne({ $pull: { like: req.body.user } });
      return res.status(200).json("Post has been unliked");
    }
  } catch (error) {
    res.status(500).json("Internal error occure");
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
router.put("/id/comment", verifytoken, async (req, res) => {
  try {
    const { comment, postid } = req.body;
    const comments = {
      user: req.user.id,
      username: req.user.username,
      comment,
    };
    let post = await Post.findById(postid);
    post.comments.push(comments);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("Internal error occure");
  }
});

module.exports = router;
