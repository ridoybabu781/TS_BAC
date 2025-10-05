import { RService } from "../service/review.service.js";
import createHttpError from "http-errors";
export const addReview = async (req, res, next) => {
    try {
        const review = await RService.SAddReview(req.userId, req.params.id, req.body);
        if (!review) {
            next(createHttpError(400, "Review addition failed"));
        }
        res.status(201).json({ message: "Review added successfully", review });
    }
    catch (error) {
        next(error);
    }
};
export const getReviews = async (req, res, next) => {
    try {
        const reviews = await RService.SGetReviews(req.params.id);
        if (!reviews) {
            return next(createHttpError(404, "No Review Found"));
        }
        res.status(200).json({ message: "Review fetched successfully", reviews });
    }
    catch (error) {
        next(error);
    }
};
export const deleteReview = async (req, res, next) => {
    try {
        const reviews = await RService.SDeleteReview(req.userId, req.params.id, next);
        if (!reviews) {
            return next(createHttpError(400, "review deletion failed"));
        }
        res.status(200).json({ message: "Review deleted successfully", reviews });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=review.controller.js.map