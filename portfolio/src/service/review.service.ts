import type { NextFunction } from "express";
import type { IReview } from "../interfaces/review.interface.js";
import { Review } from "../models/review.model.js";
import { User } from "../models/user.model.js";
import createHttpError from "http-errors";

const SAddReview = async (
  reviewer: string,
  design: string,
  payload: IReview
) => {
  return await Review.create({ ...payload, reviewer, design });
};

export const SGetReviews = async (id: string) => {
  return await Review.find({ design: id });
};

export const SDeleteReview = async (
  userId: string | undefined,
  id: string,
  next: NextFunction
) => {
  const review = await Review.findById(id);

  if (review && review.reviewer?.toString() !== userId) {
    return next(
      createHttpError(401, "You're not allowed to delete this review")
    );
  }
  return await Review.findByIdAndDelete(id);
};

export const RService = {
  SAddReview,
  SGetReviews,
  SDeleteReview,
};
