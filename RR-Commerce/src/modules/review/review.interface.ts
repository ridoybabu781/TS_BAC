import type { Types } from "mongoose";

export interface IReview {
  _id?: string;
  reviewer: Types.ObjectId;
  rating: number;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}
