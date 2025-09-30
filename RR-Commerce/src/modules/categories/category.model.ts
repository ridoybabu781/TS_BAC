import { model, Schema } from "mongoose";
import type { ICategory } from "./category.interface.js";

const categoryModel = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
});

export const Category = model("Category", categoryModel);
