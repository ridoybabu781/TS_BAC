import jwt from "jsonwebtoken";
import { UService } from "../service/user.service.js";
import createHttpError from "http-errors";
import { configDotenv } from "dotenv";
configDotenv();
export const createUser = async (req, res, next) => {
    try {
        const user = await UService.UCreate(req.body);
        if (!user) {
            return next(createHttpError(400, "User creation failed"));
        }
        res
            .status(201)
            .json({ message: "User created successfully, go to login page" });
    }
    catch (error) {
        next(error);
    }
};
export const login = async (req, res, next) => {
    try {
        const user = await UService.ULogin(req.body.email, req.body.password, next);
        if (!user) {
            return;
        }
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res
            .status(200)
            .cookie("token", token, {
            httpOnly: true,
            secure: false,
        })
            .json({ message: "User looged in", user });
    }
    catch (error) {
        next(error);
    }
};
export const profile = async (req, res, next) => {
    try {
        const userId = req.userId;
        const user = await UService.UProfile(userId);
        if (!user) {
            return next(createHttpError(400, "User fetching failed"));
        }
        res.status(200).json({ message: "User fetched successfully", user });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=user.controller.js.map