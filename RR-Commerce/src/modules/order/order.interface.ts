import type { Document, Types } from "mongoose";
import type { cartItem } from "../cart/cart.interface.js";

type address = {
  street: string;
  city: string;
  country: string;
  postalCode: string;
};

export interface IOrder extends Document {
  customer?: Types.ObjectId;
  items: cartItem;
  totalPrice: number;
  status: "pending" | "paid" | "shipped" | "completed" | "canceled";
  paymentMethod: "cod" | "sslcommerz";
  shippingAddress: address;
  phone: string;
  transactionId?: string;
  paymentStatus: "unpaid" | "paid" | "failed";
  createdAt: Date;
  updatedAt: Date;
}
