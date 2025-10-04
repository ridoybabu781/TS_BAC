import type { NextFunction, Request } from "express";
import type { IProduct } from "./product.interface.js";
import { Product } from "./product.model.js";
import User from "../auth/user.model.js";
import createHttpError from "http-errors";

const Add = async (req: Request, payload: IProduct) => {
  const id = req.vendorId;

  return await Product.create({ ...payload, seller: id });
};
const Get = async () => {
  return await Product.find();
};
const GetOne = async (id: string) => {
  return await Product.findById(id);
};
const Update = async (
  req: Request,
  id: string,
  payload: IProduct,
  next: NextFunction
) => {
  const vendorId = req.vendorId;
  const product = await Product.findOne({ _id: id, seller: vendorId });

  if (!product) {
    return next(
      createHttpError(404, "Product Not Found or vendor didn't matched")
    );
  }

  return await Product.findByIdAndUpdate(id, payload, { new: true });
};

const Delete = async (req: Request, id: string, next: NextFunction) => {
  const vendorId = req.vendorId;

  const product = await Product.findOne({ _id: id, seller: vendorId });

  if (!product) {
    return next(
      createHttpError(404, "Product Not Found or vendor didn't matched")
    );
  }

  return await Product.findByIdAndDelete(id);
};

export const PService = { Add, Get, GetOne, Update, Delete };
