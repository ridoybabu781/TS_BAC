import createHttpError from "http-errors";
import jwt, {} from "jsonwebtoken";
import User from "../modules/auth/user.model.js";
import dotenv from "dotenv";
dotenv.config();
export const isUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken) {
                return "Unauthorized, please login first";
            }
            const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
            console.log(decoded);
            const accessToken = jwt.sign({ id: decoded.id, email: decoded.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.cookie("token", accessToken, {
                httpOnly: true,
                sameSite: "none",
                secure: false,
                maxAge: 60 * 60 * 1000,
            });
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