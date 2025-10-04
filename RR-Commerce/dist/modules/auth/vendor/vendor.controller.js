import { VService } from "./vendor.service.js";
import createHttpError from "http-errors";
export const createVendor = async (req, res, next) => {
    try {
        const user = await VService.VCreate(req.body);
        if (!user) {
            return next(createHttpError(400, "Vendor Creation Failed"));
        }
        res
            .status(201)
            .json({
            message: "Vendor creation request successfull, please wait for verification",
        });
    }
    catch (error) {
        next(error);
    }
};
export const blockUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await VService.VBlock(id, next);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=vendor.controller.js.map