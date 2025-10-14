import type { Types } from "mongoose";

export interface IPurchase {
  _id?: Types.ObjectId;
  customer?: Types.ObjectId;
  design?: Types.ObjectId;
  selectedPricing?: Types.ObjectId;
  paymentStatus: "pending" | "paid" | "cancelled";
  purchaseDate: Date;
}
