import createHttpError from "http-errors";
import { Review } from "./review.model.js";
const SAddReview = async (reviewer, design, payload) => {
    return await Review.create({ ...payload, reviewer, design });
};
export const SGetReviews = async (id) => {
    return await Review.find({ design: id });
};
export const SDeleteReview = async (userId, id, next) => {
    const review = await Review.findById(id);
    if (review && review.reviewer?.toString() !== userId) {
        return next(createHttpError(401, "You're not allowed to delete this review"));
    }
    return await Review.findByIdAndDelete(id);
};
export const RService = {
    SAddReview,
    SGetReviews,
    SDeleteReview,
};
//# sourceMappingURL=review.service.js.map