import { SPurchase } from "./purchase.service.js";
import createHttpError from "http-errors";
export const makePurchase = async (req, res, next) => {
    try {
        const purchase = await SPurchase.SMakePurchase(req, req.body);
        if (!purchase) {
            return next(createHttpError(400, "Purchace making failed"));
        }
        res.status(201).json({ message: "Purchase making success", purchase });
    }
    catch (error) {
        next(error);
    }
};
export const getMyPurchase = async (req, res, next) => {
    try {
        const purchases = await SPurchase.SGetMyPurchase(req.userId);
        if (!purchases) {
            return next(createHttpError(404, "No purchases found"));
        }
        res
            .status(200)
            .json({ message: "Purchases fetched successfully", purchases });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=purchase.controller.js.map