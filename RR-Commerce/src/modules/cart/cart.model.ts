import { model, Schema } from "mongoose";
import type { ICart } from "./cart.interface.js";

export const cartItemSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { _id: false }
);

const cartSchema = new Schema<ICart>({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  items: {
    type: [cartItemSchema],
    required: true,
    default: [],
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

export const Cart = model("Cart", cartSchema);
