import type { ICourse } from "./course.interface.js";
import type { Request, Response, NextFunction } from "express";
import { courseService } from "./course.service.js";
import createHttpError from "http-errors";

const createCourse = async (
  req: Request<{}, {}, ICourse>,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await courseService.createCourseService(req.body as ICourse);
    if (!course) {
      return next(createHttpError(400));
    }
    res.status(201).json({ message: "Course Created Successfully", course });
  } catch (error) {
    next(error);
  }
};

export const courseController = {
  createCourse,
};
