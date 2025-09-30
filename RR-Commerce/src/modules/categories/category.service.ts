import type { ICategory } from "./category.interface.js";
import { Category } from "./category.model.js";

const Add = async (payload: ICategory) => {
  return await Category.create(payload);
};
const Get = async () => {
  return await Category.find();
};

const Delete = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};

export const CService = { Add, Get, Delete };
