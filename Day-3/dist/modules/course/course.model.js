import { model, Schema, Types } from "mongoose";
const courseSchema = new Schema({
    courseId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    type: { type: String, required: true },
    thumbnail: { type: String },
    fee: { type: String, required: true },
    rating: { type: Number, default: 0 },
    totalRating: { type: Number, default: 0 },
    totalStudentEnroll: { type: Number, default: 0 },
    mentors: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    courseStart: { type: Date, required: true },
    duration: { type: Number },
    lectures: { type: Number, required: true },
    totalExam: { type: Number, default: 0 },
    totalProject: { type: Number, default: 0 },
    courseDetails: { type: String, required: true },
    courseOverview: { type: String },
    curriculum: [{ type: String, required: true }],
    courseIncludes: [{ type: String, required: true }],
    softwareIncludes: [{ type: String, required: true }],
    jobOption: [{ type: String, required: true }],
}, {
    timestamps: true,
});
export const CourseModel = model("Course", courseSchema);
//# sourceMappingURL=course.model.js.map