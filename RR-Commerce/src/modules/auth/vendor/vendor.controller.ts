import type { NextFunction, Request, Response } from "express";
import { VService } from "./vendor.service.js";
import createHttpError from "http-errors";

export const createVendor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await VService.VCreate(req.body);
    if (!user) {
      return next(createHttpError(400, "Vendor Creation Failed"));
    }
    res
      .status(201)
      .json({
        message:
          "Vendor creation request successfull, please wait for verification",
      });
  } catch (error) {
    next(error);
  }
};

export const blockUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    await VService.VBlock(id as string, next);
  } catch (error) {
    next(error);
  }
};

