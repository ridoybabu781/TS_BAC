import type { NextFunction, Request, Response } from "express";
import type { IProduct } from "./product.interface.js";
import { PService } from "./product.service.js";

export const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await PService.Add(req.body as IProduct);
    if (!product) {
      return res.status(400).json({ message: "Product creation failed" });
    }

    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await PService.Get();
    if (!products) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json({ message: "Product fetched successfully", products });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await PService.GetOne(req.params.id as string);
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json({ message: "Product fetched successfully", product });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await PService.Update(
      req.params.id as string,
      req.body as IProduct
    );
    if (!product) {
      return res.status(404).json({ message: "Product updation failed" });
    }
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    next(error);
  }
};
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await PService.Delete(req.params.id as string);
    if (!product) {
      return res.status(404).json({ message: "Product deletion failed" });
    }
    res.status(200).json({ message: "Product deleted successfully", product });
  } catch (error) {
    next(error);
  }
};
