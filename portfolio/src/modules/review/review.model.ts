import { model, Schema } from "mongoose";
import type { IReview } from "../interfaces/review.interface.js";

const reviewModel = new Schema<IReview>({
  reviewer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  design: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Design",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Review = model("Review", reviewModel);
