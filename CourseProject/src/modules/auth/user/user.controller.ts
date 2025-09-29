import createHttpError from "http-errors";
import User from "./user.model.js";
import type { Request, Response, NextFunction } from "express";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return next(createHttpError(400, "User Already Exists"));
    }

    const newUser = new User({
      name,
      email,
      password,
      role,
      status: "pending",
    });

    if (!user) {
      return next(createHttpError(400, "User creation failed"));
    }

    res.status(201).json({ message: "User Created Successful" });
  } catch (error: unknown) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return next(createHttpError(400, "User not found"));
    }

    if (user.status === "pending") {
      
    }

  } catch (error: unknown) {
    next(error);
  }
};
