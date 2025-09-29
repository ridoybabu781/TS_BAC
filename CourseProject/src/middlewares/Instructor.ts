import type { NextFunction, Request, Response } from "express";
import User from "../modules/auth/user/user.model.js";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import "dotenv";

export const Instructor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const instructorId = req.cookies.id;

    if (!instructorId) {
      return next(createHttpError(401, "Unauthorized"));
    }

    const instructor = await User.findById(instructorId);
    if (!instructor || instructor.role !== "instructor") {
      return next(createHttpError(403, "Forbidden: Not an instructor"));
    }

    if (!process.env.JWT_SECRET) {
      return next(createHttpError(500, "JWT secret is not defined"));
    }

    const decoded = jwt.verify(instructorId, process.env.JWT_SECRET as string);
    req.instructorId = decoded.id;

    next();
  } catch (error: unknown) {
    next(error);
  }
};
