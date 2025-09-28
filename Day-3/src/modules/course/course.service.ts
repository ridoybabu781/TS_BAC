import type { ICourse } from "./course.interface.js";
import { CourseModel } from "./course.model.js";

const createCourseService = async (payload: ICourse) => {
  const course = await CourseModel.create(payload);
  return course;
};

export const courseService = {
  createCourseService,
};
