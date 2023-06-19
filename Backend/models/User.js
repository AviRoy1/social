const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  followers: {
    type: Array,
  },
  following: {
    type: Array,
  },
  phonenumber: {
    type: Number,
    require: true,
  },
  profile: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
