import { Router } from "express";
import { isUser } from "../../middlewares/User.js";
import { addReview, deleteReview, getReviews } from "./review.controller.js";
import { Validator } from "../../middlewares/validator.js";
import { VReviewSchema } from "./review.validator.js";
const router = Router();
router.post("/addReview/:id", isUser, Validator(VReviewSchema), addReview);
router.get("/getReviews/:id", getReviews);
router.delete("/delete/:id", isUser, deleteReview);
export const ReviewRouter = router;
//# sourceMappingURL=review.routes.js.map