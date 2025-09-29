import type { NextFunction, Request, Response } from "express";
import User from "../modules/auth/user/user.model.js";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import "dotenv";

export const Admin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const adminId = req.cookies.id;

    if (!adminId) {
      return next(createHttpError(401, "Unauthorized"));
    }

    const admin = await User.findById(adminId);
    if (!admin || admin.role !== "admin") {
      return next(createHttpError(403, "Forbidden: Not an admin"));
    }

    if (!process.env.JWT_SECRET) {
      return next(createHttpError(500, "JWT secret is not defined"));
    }

    const decoded = jwt.verify(adminId, process.env.JWT_SECRET as string);
    req.adminId = decoded.id;

    next();
  } catch (error: unknown) {
    next(error);
  }
};
