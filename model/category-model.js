import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

export const Category =
  mongoose.models.Category ?? mongoose.model("Category", categorySchema);
