import { Schema } from "mongoose";
import { IPricing } from "../interfaces/pricingPlan.interface.js";

const PricingSchema = new Schema<IPricing>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: [
    {
      type: String,
      required: true,
    },
  ],
  duration: {
    type: String,
    required: true,
  },
});
