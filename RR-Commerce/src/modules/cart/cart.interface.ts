import type { Document, Types } from "mongoose";

export interface cartItem {
  product: Types.ObjectId;
  qty: number;
  price: number;
}

export interface ICart extends Document {
  user: Types.ObjectId;
  items: cartItem[];
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
