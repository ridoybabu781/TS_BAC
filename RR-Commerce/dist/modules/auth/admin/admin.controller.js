import { AService } from "./admin.service.js";
import createHttpError from "http-errors";
import User from "../user.model.js";
import { sendMail } from "../../../utils/sendMail.js";
export const createAdmin = async (req, res, next) => {
    try {
        const user = await AService.ACreate(req.body);
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
export const approveVendor = async (req, res, next) => {
    try {
        const approveVendor = await User.findByIdAndUpdate(req.params.id, { isVendor: "yes" }, { new: true });
        if (!approveVendor) {
            return next(createHttpError(400, "Vendor not found"));
        }
        res.status(200).json({ message: "Vendor request Approved" });
        await sendMail(approveVendor.email, "Vendor Request Approved", ``);
    }
    catch (error) {
        next(error);
    }
};
export const rejectVendor = async (req, res, next) => {
    try {
        const rejectedVendor = await User.findByIdAndUpdate(req.params.id, { isVendor: "no" }, { new: true });
        if (!rejectedVendor) {
            return next(createHttpError(400, "Vendor not found"));
        }
        res.status(200).json({ message: "Vendor request Rejected" });
        await sendMail(rejectedVendor.email, "Vendor Request Rejected", ``);
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