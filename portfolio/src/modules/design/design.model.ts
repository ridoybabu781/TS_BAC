import { model, Schema } from "mongoose";
import type { IDesign } from "../interfaces/design.interface.js";

const designSchema = new Schema<IDesign>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    image: {
      imageUrl: { type: String, required: true },
      imagePublicId: { type: String, required: true },
    },
    designerName: {
      type: String,
      required: true,
    },
    usedTools: [
      {
        type: String,
        required: true,
      },
    ],
    effectsUsed: [{ type: String, required: true }],
    price: {
      type: Number,
      required: true,
    },
    tags: [{ type: String, required: true }],
    complexityLevel: {
      type: String,
      enum: ["Basic", "Intermediate", "Advanced"],
      required: true,
      default: "Basic",
    },
    status: {
      type: String,
      enum: ["Active", "Draft", "Archived"],
      default: "Active",
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    favouritesCount: {
      type: Number,
      default: 0,
    },
    downloadCount: {
      type: Number,
      default: 0,
    },
    purchaseCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Design = model("Design", designSchema);
