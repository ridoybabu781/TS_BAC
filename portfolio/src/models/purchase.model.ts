import { model, Schema } from "mongoose";
import type { IPurchase } from "../interfaces/purchace.interface.js";

const purchaseSchema = new Schema<IPurchase>({
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  design: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Design",
  },
  selectedPricing: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Pricing",
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "cancelled"],
    required: true,
    default: "pending",
  },
  purchaseDate: Date.now(),
});

export const Purchase = model("Purchase", purchaseSchema);
