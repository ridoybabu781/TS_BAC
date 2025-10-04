import createHttpError from "http-errors";
import { SUser } from "./user.service.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const createUser = async (req, res, next) => {
    try {
        const user = await SUser.UCreate(req.body);
        if (!user) {
            return next(createHttpError(400, "User creation failed"));
        }
        res
            .status(201)
            .json({ message: "User Created Successfully, Go to login page" });
    }
    catch (error) {
        next(error);
    }
};
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await SUser.ULogin(email, password, next);
        if (!user) {
            return;
        }
        const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res
            .status(200)
            .cookie("token", token, {
            httpOnly: true,
            secure: false,
        })
            .json({ message: "User Fetched Successfully", user });
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
        res.status(200).json({ message: "User fetched successfully", user });
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
        res.status(201).json({ message: "User Updation Successful", updatedUser });
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
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=user.controller.js.map