import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  modules: {
    type: [Schema.ObjectId],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  category: {
    type: Schema.ObjectId,
    ref: "Category",
  },
  instructor: {
    type: Schema.ObjectId,
    required: true,
  },
  testimonials: {
    type: [Schema.ObjectId],
    required: true,
  },
  quizSet: {
    type: Schema.ObjectId,
    required: true,
  },
  learning: {
    type: [String],
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
  },
  modifiedOn: {
    type: Date,
    required: true,
  },
});

export const Course =
  mongoose.models.Course ?? mongoose.model("Course", courseSchema);
