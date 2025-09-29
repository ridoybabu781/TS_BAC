import type { NextFunction, Request, Response } from "express";
import Course from "./course.model.js";
import { create } from "./course.service.js";

export const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next(error);
  }
};
