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
const updateCourseService = async (payload: string, data: ICourse) => {
  const courses = await CourseModel.findByIdAndUpdate(payload, data, {
    new: true,
  });
  return courses;
};
const deleteCourseService = async (payload: string) => {
  const deletedCourse = await CourseModel.findOneAndDelete({ _id: payload });
  return deletedCourse;
};

export const courseService = {
  createCourseService,
  getSingleCourseService,
  getCoursesService,
  updateCourseService,
  deleteCourseService,
};
