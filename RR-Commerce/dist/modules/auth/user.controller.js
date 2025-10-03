import createHttpError from "http-errors";
import { SUser } from "./user.service.js";
export const createUser = async (req, res, next) => {
    try {
        const user = await SUser.UCreate(req.body);
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
            return next(createHttpError(404, "User Fetching Error"));
        }
        res.status(200).json({ message: "User Fetched Successfully", user });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=user.controller.js.map