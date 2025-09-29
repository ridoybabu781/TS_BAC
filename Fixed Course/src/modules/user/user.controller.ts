import type { Request, Response, NextFunction } from "express";
import { userService } from "./user.service.js";
import createHttpError from "http-errors";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const newStudent = await userService.Login(email, password, next);
    if (!newStudent) {
      return next(createHttpError(400, "Failed To Create Student"));
    }
    res.status(201).json({
      message: "Student Account Creation Request Successful. Go To Login Page",
    });
  } catch (error) {
    next(error);
  }
};
