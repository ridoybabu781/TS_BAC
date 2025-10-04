import type { Types } from "mongoose";

export interface IVendor {
  companyName?: string;
  isVerified?: boolean;
  products?: Types.ObjectId;
  isVendor?: "yes" | "pending" | "no";
}
