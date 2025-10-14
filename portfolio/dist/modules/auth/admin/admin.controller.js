import createHttpError from "http-errors";
import { SAdmin } from "./admin.service.js";
export const createAdmin = async (req, res, next) => {
    try {
        const user = await SAdmin.ACreate(req.body);
        if (!user) {
            return next(createHttpError(400, "Vendor Creation Failed"));
        }
        res.status(201).json({
            message: "Admin creation request successfull",
        });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=admin.controller.js.map