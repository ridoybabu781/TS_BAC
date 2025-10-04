import { model, Schema } from "mongoose";
import type { IOrder } from "./order.interface.js";

const OrderSchema = new Schema<IOrder>(
  {
    customer: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    items: {
      products: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      price: { type: Number, required: true },
      qty: { type: Number, required: true, default: 1 },
    },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: ["pending", "paid", "shipped", "completed", "canceled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["cod", "sslcommerz"],
      default: "cod",
      required: true,
    },
    shippingAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export const Order = model("Order", OrderSchema);
