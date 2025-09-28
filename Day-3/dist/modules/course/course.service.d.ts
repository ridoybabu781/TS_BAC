import type { ICourse } from "./course.interface.js";
export declare const courseService: {
    createCourseService: (payload: ICourse) => Promise<import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
};
//# sourceMappingURL=course.service.d.ts.map