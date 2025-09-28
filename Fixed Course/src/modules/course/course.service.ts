import type { ICourse } from "./course.interface.js";
import { CourseModel } from "./course.model.js";

const createCourseService = async (payload: ICourse) => {
  const course = await CourseModel.create(payload);
  return course;
};

const getSingleCourseService = async (payload: string) => {
  const course = await CourseModel.findById(payload);
  return course;
};
const getCoursesService = async () => {
  const courses = await CourseModel.find();
  return courses;
};
export const courseService = {
  createCourseService,
  getSingleCourseService,
  getCoursesService,
};
