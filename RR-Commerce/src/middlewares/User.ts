import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import jwt, { type JwtPayload } from "jsonwebtoken";
import User from "../modules/auth/user.model.js";
import dotenv from "dotenv";
dotenv.config();

export const isUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return next(createHttpError("Unauthorized"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(createHttpError(404, "User not found"));
    }

    req.userId = user._id;
    next();
  } catch (error) {
    next(error);
  }
};
