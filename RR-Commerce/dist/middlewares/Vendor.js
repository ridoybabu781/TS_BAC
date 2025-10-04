import createHttpError from "http-errors";
import jwt, {} from "jsonwebtoken";
import User from "../modules/auth/user.model.js";
import dotenv from "dotenv";
dotenv.config();
export const isVendor = async (req, res, next) => {
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
        if (user.role !== "vendor" &&
            (user.isBlocked || user.isDeleted || user.isVendor === "no")) {
            res.clearCookie("token", {
                httpOnly: true,
                secure: false,
            });
            return next(createHttpError(401, "You're not allowed to fetch data"));
        }
        req.vendorId = user._id;
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=Vendor.js.map