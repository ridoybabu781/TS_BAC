import createHttpError from "http-errors";
import jwt, {} from "jsonwebtoken";
import User from "../modules/auth/user.model.js";
import dotenv from "dotenv";
dotenv.config();
export const isUser = async (req, res, next) => {
    try {
        let token = req.cookies.token;
        const refreshToken = req.cookies.refreshToken;
        if (!token && refreshToken) {
            try {
                const decodedRefresh = jwt.verify(refreshToken, process.env.JWT_SECRET);
                const newAccessToken = jwt.sign({ id: decodedRefresh.id, email: decodedRefresh.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
                res.cookie("token", newAccessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    maxAge: 60 * 60 * 1000,
                });
                token = newAccessToken;
            }
            catch (err) {
                return next(createHttpError(401, "Invalid or expired refresh token"));
            }
        }
        if (!token) {
            return next(createHttpError(401, "Please login first"));
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user)
            return next(createHttpError(404, "User not found"));
        req.userId = user._id;
        next();
    }
    catch (error) {
        return next(createHttpError(401, "Unauthorized: invalid or expired token"));
    }
};
//# sourceMappingURL=User.js.map