import type { Types } from "mongoose";

export interface IPricing {
  _id?:Types.ObjectId
  name: string;
  price: number;
  features: string[];
  duration: string;
}

