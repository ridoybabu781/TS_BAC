import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import jwt, { type JwtPayload } from "jsonwebtoken";
import User from "../modules/auth/user.model.js";
import dotenv from "dotenv";
dotenv.config();

export const isVendor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    const refreshToken = req.cookies.refreshToken;

    if (!token && refreshToken) {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) {
        return next(createHttpError(401, "Please login first"));
      }
      const decodedRefresh = jwt.verify(
        refreshToken,
        process.env.JWT_SECRET as string
      ) as JwtPayload;

      const newAccessToken = jwt.sign(
        { id: decodedRefresh.id, email: decodedRefresh.email },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
      );

      res.cookie("token", newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 60 * 60 * 1000,
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(createHttpError(404, "User not found"));
    }

    if (
      user.role !== "vendor" &&
      (user.isBlocked || user.isDeleted || user.isVendor === "no")
    ) {
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
      });
      return next(createHttpError(401, "You're not allowed to fetch data"));
    }

    req.vendorId = user._id;
    next();
  } catch (error) {
    next(error);
  }
};
