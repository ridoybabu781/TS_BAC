import type { NextFunction, Request, Response } from "express";
import { UserModel } from "../user.model.js";
import createHttpError from "http-errors";
import { studentService } from "./student.service.js";

export const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newStudent = await studentService.SCreateStudent(req.body, next);
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


