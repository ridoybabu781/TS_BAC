import type { NextFunction, Request, Response } from "express";

import createHttpError from "http-errors";
import { SAdmin } from "./admin.service.js";

export const createAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await SAdmin.ACreate(req.body);
    if (!user) {
      return next(createHttpError(400, "Vendor Creation Failed"));
    }
    res.status(201).json({
      message: "Admin creation request successfull",
    });
  } catch (error) {
    next(error);
  }
};
