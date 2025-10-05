import { Router } from "express";
import { isUser } from "../middlewares/User.js";
import { addReview, deleteReview, getReviews, } from "../controllers/review.controller.js";
const router = Router();
router.post("/addReview/:id", isUser, addReview);
router.get("/getReviews/:id", getReviews);
router.delete("/delete/:id", isUser, deleteReview);
export const ReviewRouter = router;
//# sourceMappingURL=review.routes.js.map