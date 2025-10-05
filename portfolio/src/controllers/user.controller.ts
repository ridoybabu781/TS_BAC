import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import { UService } from "../service/user.service.js";
import createHttpError from "http-errors";
import { configDotenv } from "dotenv";
configDotenv();

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UService.UCreate(req.body);
    if (!user) {
      return next(createHttpError(400, "User creation failed"));
    }
    res
      .status(201)
      .json({ message: "User created successfully, go to login page" });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UService.ULogin(
      req.body.email as string,
      req.body.password as string,
      next as NextFunction
    );

    if (!user) {
      return;
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
      })
      .json({ message: "User looged in", user });
  } catch (error) {
    next(error);
  }
};

export const profile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.userId;

    const user = await UService.UProfile(userId as string);
    if (!user) {
      return next(createHttpError(400, "User fetching failed"));
    }
    res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    next(error);
  }
};
