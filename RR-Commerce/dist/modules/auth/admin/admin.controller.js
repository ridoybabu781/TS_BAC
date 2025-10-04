import { AService } from "./admin.service.js";
import createHttpError from "http-errors";
export const createAdmin = async (req, res, next) => {
    try {
        const user = await AService.ACreate(req.body);
        if (!user) {
            return next(createHttpError(400, "Vendor Creation Failed"));
        }
        res.status(201).json({
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
        await AService.ABlock(id, next);
    }
    catch (error) {
        next(error);
    }
};
export const unBlockUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await AService.AUnBlock(id, next);
    }
    catch (error) {
        next(error);
    }
};
export const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await AService.ADelete(id, next);
    }
    catch (error) {
        next(error);
    }
};
export const unDeleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await AService.AUnDelete(id, next);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=admin.controller.js.map