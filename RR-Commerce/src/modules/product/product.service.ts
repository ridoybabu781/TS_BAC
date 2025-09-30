import type { IProduct } from "./product.interface.js";
import { Product } from "./product.model.js";

const Add = async (payload: IProduct) => {
  return await Product.create(payload);
};
const Get = async () => {
  return await Product.find();
};
const GetOne = async (id: string) => {
  return await Product.findById(id);
};
const Update = async (id: string, payload: IProduct) => {
  return await Product.findByIdAndUpdate(id, payload, { new: true });
};

const Delete = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export const PService = { Add, Get, GetOne, Update, Delete };
