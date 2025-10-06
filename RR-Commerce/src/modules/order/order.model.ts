import { model, Schema } from "mongoose";
import type { IOrder } from "./order.interface.js";
import { cartItemSchema } from "../cart/cart.model.js";

const OrderSchema = new Schema<IOrder>(
  {
    customer: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    items: [cartItemSchema],
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
    phone: {
      type: String,
      required: true,
    },

    transactionId: { type: String },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "failed"],
      default: "unpaid",
    },
  },
  { timestamps: true }
);

export const Order = model("Order", OrderSchema);
