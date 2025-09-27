import type { ICourse } from "./course.interface.js";
import mongoose, { model, Schema } from "mongoose";

const courseSchema = new Schema<ICourse>(
  {
    courseId: {
      type: String,
      required: true,
    },
    title: { type: String, required: [true, "Title is required"], trim: true },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
    },
    about: {
      type: String,
      required: true,
    },
    batchNo: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    instructors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    slug: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    batchType: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
    },
    TotalRating: {
      type: Number,
    },
    studentCount: { type: Number },
    duration: {
      type: String,
    },
    lessonCount: {
      type: Number,
    },
    completedLearner: {
      type: Number,
    },
    curriculum: [{ type: String }],

    softwareIncludes: [{ type: String, required: true }],
    whatWillLearn: [{ type: String, required: true }],
    forWhom: [
      {
        type: String,
        required: true,
      },
    ],
    discount: {
      type: Number,
    },
    enrollmentStartAt: { type: Date, required: true },
    enrollmentEndsIn: { type: Date, required: true },
    courseStartingDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Course = model<ICourse>("Course", courseSchema);

export default Course;
