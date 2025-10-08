import createHttpError from "http-errors";
import { SUser } from "./user.service.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "./user.model.js";
dotenv.config();
export const sendVerificationCode = async (req, res, next) => {
    try {
        await SUser.USendCode(req.body.email);
        res
            .status(200)
            .json({ success: true, message: "A 6 digit code sent to your account" });
    }
    catch (error) {
        next(error);
    }
};
export const verifyCode = async (req, res, next) => {
    try {
        const resp = await SUser.UVerifyCode(req);
        if (!resp) {
            return next(createHttpError(400, "Code didn't matched, Try again"));
        }
        res
            .status(200)
            .json({ success: true, message: "Code verified successfully" });
    }
    catch (error) {
        next(error);
    }
};
export const createUser = async (req, res, next) => {
    try {
        const result = await SUser.UCreate(req.body);
        if (!result) {
            return next(createHttpError(400, "User creation failed"));
        }
        res
            .status(201)
            .cookie("token", result.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "none",
            maxAge: 60 * 60 * 1000,
        })
            .cookie("refreshToken", result.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
            .json({
            success: true,
            message: "User Created Successfully, Go to login page",
        });
    }
    catch (error) {
        next(error);
    }
};
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await SUser.ULogin(email, password, next);
        if (!result) {
            return next(createHttpError(400, "Login failed"));
        }
        res
            .status(200)
            .cookie("token", result.accessToken, {
            httpOnly: true,
            secure: false,
            maxAge: 60 * 60 * 1000,
        })
            .cookie("refreshToken", result.refreshToken, {
            httpOnly: true,
            secure: false,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
            .json({
            success: true,
            message: "User Fetched Successfully",
            user: result.user,
        });
    }
    catch (error) {
        next(error);
    }
};
export const profile = async (req, res, next) => {
    try {
        const userId = req.userId;
        const user = await SUser.UProfile(userId);
        if (!user) {
            return next(createHttpError(400, "User fetching failed"));
        }
        res
            .status(200)
            .json({ success: true, message: "User fetched successfully", user });
    }
    catch (error) {
        next(error);
    }
};
export const update = async (req, res, next) => {
    try {
        const updatedUser = await SUser.UUpdate(req.userId, req.body);
        if (!updatedUser) {
            return next(createHttpError(400, "User Updation failed"));
        }
        res.status(201).json({
            success: true,
            message: "User Updation Successful",
            updatedUser,
        });
    }
    catch (error) {
        next(error);
    }
};
export const deleteUser = async (req, res, next) => {
    try {
        const id = req.userId;
        const deletedUser = await SUser.UDelete(id);
        if (!deleteUser) {
            return next(createHttpError(400).json({
                message: "User Deletion Failed",
                deleteUser,
            }));
        }
        res
            .status(200)
            .json({ success: true, message: "User Deleted Successfully" });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=user.controller.js.map