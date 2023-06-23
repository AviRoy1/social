const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  video: {
    type: String,
  },
  like: {
    type: Array,
    default: 0,
  },
  dislike: {
    type: Array,
    default: 0,
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
      },
      username: {
        type: String,
        require: true,
      },
      comment: {
        type: String,
        require: true,
      },
      profile: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Post", postSchema);
