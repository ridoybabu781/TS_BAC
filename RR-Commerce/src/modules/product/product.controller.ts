import type { NextFunction, Request, Response } from "express";
import type { IProduct } from "./product.interface.js";
import { PService } from "./product.service.js";

export const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await PService.Add(req as Request, req.body as IProduct);
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
    const result = await PService.Get(req as Request);
    if (result.products.length === 0) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res
      .status(200)
      .json({
        message: "Product fetched successfully",
        products: result.products,
      });
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
      req as Request,
      req.params.id as string,
      req.body as IProduct,
      next as NextFunction
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
    const product = await PService.Delete(
      req as Request,
      req.params.id as string,
      next as NextFunction
    );
    if (!product) {
      return res.status(404).json({ message: "Product deletion failed" });
    }
    res.status(200).json({ message: "Product deleted successfully", product });
  } catch (error) {
    next(error);
  }
};
