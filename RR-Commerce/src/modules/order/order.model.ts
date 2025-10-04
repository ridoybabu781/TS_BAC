import { Schema } from "mongoose";
import type { IOrder } from "./order.interface.js";

const OrderSchema = new Schema<IOrder>({
  customer: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  items: {
    products: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true, default: 1 },
  },
  totalPrice: { type: Number, required: true },
  status:{
    
  }
});
