import type { NextFunction, Request, Response } from "express";
import User from "../modules/auth/user/user.model.js";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import "dotenv";

export const Student = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const studentId = req.cookies.id;

    if (!studentId) {
      return next(createHttpError(401, "Unauthorized"));
    }

    const student = await User.findById(studentId);
    if (!student || student.role !== "student") {
      return next(createHttpError(403, "Forbidden: Not an student"));
    }

    if (!process.env.JWT_SECRET) {
      return next(createHttpError(500, "JWT secret is not defined"));
    }

    const decoded = jwt.verify(studentId, process.env.JWT_SECRET as string);
    req.StudentId = decoded.id;

    next();
  } catch (error: unknown) {
    next(error);
  }
};
