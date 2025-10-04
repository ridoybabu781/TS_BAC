import type { NextFunction, Request, Response } from "express";
import { AService } from "./admin.service.js";
import createHttpError from "http-errors";

export const createAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await AService.ACreate(req.body);
    if (!user) {
      return next(createHttpError(400, "Vendor Creation Failed"));
    }
    res.status(201).json({
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
    await AService.ABlock(id as string, next);
  } catch (error) {
    next(error);
  }
};

export const unBlockUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    await AService.AUnBlock(id as string, next);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    await AService.ADelete(id as string, next);
  } catch (error) {
    next(error);
  }
};

export const unDeleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    await AService.AUnDelete(id as string, next);
  } catch (error) {
    next(error);
  }
};
