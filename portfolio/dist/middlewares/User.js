import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { configDotenv } from "dotenv";
configDotenv();
export const isUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return next(createHttpError(401, "Unauthorized"));
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return next(createHttpError(404, "User not found"));
        }
        req.userId = user._id;
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=User.js.map