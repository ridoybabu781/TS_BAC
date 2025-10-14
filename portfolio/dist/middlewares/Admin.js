import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import { User } from "../modules/auth/user/user.model.js";
import { configDotenv } from "dotenv";
configDotenv();
export const isAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return next(createHttpError("Unauthorized"));
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return next(createHttpError(404, "User not found"));
        }
        if (user.role !== "admin") {
            res.clearCookie("token", {
                httpOnly: true,
                secure: false,
            });
            return next(createHttpError(401, "You're not allowed to do the work"));
        }
        req.adminId = user._id;
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=Admin.js.map