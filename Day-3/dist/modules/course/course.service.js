import { CourseModel } from "./course.model.js";
const createCourseService = async (payload) => {
    const course = await CourseModel.create(payload);
    return course;
};
export const courseService = {
    createCourseService,
};
//# sourceMappingURL=course.service.js.map