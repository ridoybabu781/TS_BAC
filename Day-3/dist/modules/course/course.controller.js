import { courseService } from "./course.service.js";
import createHttpError from "http-errors";
const createCourse = async (req, res, next) => {
    try {
        const course = await courseService.createCourseService(req.body);
        if (!course) {
            return next(createHttpError(400));
        }
        res.status(201).json({ message: "Course Created Successfully", course });
    }
    catch (error) {
        next(error);
    }
};
export const courseController = {
    createCourse,
};
//# sourceMappingURL=course.controller.js.map