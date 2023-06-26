const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const VerificationTokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  token: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
    default: Date.now(),
  },
});

VerificationTokenSchema.pre("Save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  if (this.isModified("token")) {
    const hash = await bcrypt.hash(this.token, salt);
    this.token = hash;
  }
  next();
});

module.exports = mongoose.model("VerificationToken", VerificationTokenSchema);
