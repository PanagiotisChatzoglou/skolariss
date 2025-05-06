import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },
  socialMedia: {
    type: Object,
    required: false,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  designation: {
    type: String,
    required: false,
  },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);
