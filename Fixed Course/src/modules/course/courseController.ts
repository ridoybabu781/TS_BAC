import type { ICourse } from "./course.interface.js";
import type { Request, Response, NextFunction } from "express";
import { courseService } from "./course.service.js";
import createHttpError from "http-errors";

const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await courseService.createCourseService(req.body as ICourse);
    if (!course) {
      return next(createHttpError(400, "Course Creation Failed"));
    }
    res.status(201).json({ message: "Course Created Successfully", course });
  } catch (error) {
    next(error);
  }
};

const getSingleCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await courseService.getSingleCourseService(req.params.id);
    if (!course) {
      return next(createHttpError(404, "course not found"));
    }
    res.status(201).json({ message: "course fetched successfully", course });
  } catch (error) {
    next(error);
  }
};

const getCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const courses = await courseService.getCoursesService();
    if (!courses) {
      return next(createHttpError(404, "courses not found"));
    }
    res.status(201).json({ message: "course fetched successfully", courses });
  } catch (error) {
    next(error);
  }
};

export const courseController = {
  createCourse,
  getSingleCourse,
  getCourses,
};
