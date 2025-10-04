import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import jwt, { type JwtPayload } from "jsonwebtoken";
import User from "../modules/auth/user.model.js";

export const isAdmin = async (
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

    if (user.role !== "admin" && user.isBlocked && user.isDeleted) {
      res.clearCookie("token", {
        httpOnly: true,
        secure: false,
      });
      return next(createHttpError(401, "You're not allowed to fetch data"));
    }

    req.adminId = user._id;
    next();
  } catch (error) {
    next(error);
  }
};
