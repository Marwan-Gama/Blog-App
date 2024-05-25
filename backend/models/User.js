const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: string,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 100,
      unique: true,
    },
    password: {
      type: string,
      required: true,
      trim: true,
      minlength: 8,
    },
    profilePhoto: {
      type: Object,
      default: {
        url:
          "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png",
        publicId: null,
      },
    },
    bio: {
      type: string,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// User model
const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
