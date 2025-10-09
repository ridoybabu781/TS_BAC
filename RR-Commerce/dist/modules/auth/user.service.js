import User from "./user.model.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendMail } from "../../utils/sendMail.js";
import { VerifyCode } from "./verificationCode.model.js";
const USendCode = async (email) => {
    const user = await User.findOne({ email });
    if (user) {
        throw createHttpError(400, "User already exist");
    }
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    const result = await VerifyCode.create({ email, verificationCode });
    if (!result) {
        throw createHttpError(400, "Failed to create verification code");
    }
    await sendMail(email, "Your RR-Commerce verification code", `${verificationCode}`);
    return result;
};
const UVerifyCode = async (req) => {
    return await VerifyCode.findOne({
        email: req.body.email,
        verificationCode: req.body.verificationCode,
    });
};
const UCreate = async (payload) => {
    const hashedPass = await bcrypt.hash(payload.password, 10);
    const user = new User({ ...payload, password: hashedPass });
    await VerifyCode.deleteMany({ email: user.email });
    const accessToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const refreshToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
    user.refreshToken = refreshToken;
    await user.save();
    const userData = user.toObject();
    delete userData.password;
    return {
        user: userData,
        accessToken,
        refreshToken,
    };
};
const ULogin = async (email, password, next) => {
    const user = await User.findOne({ email });
    if (!user) {
        return next(createHttpError(404, "User Not Found"));
    }
    if (user.role === "vendor" &&
        (user.isBlocked || user.isDeleted || user.isVendor !== "yes")) {
        return next(createHttpError(401, "Your'e not allowed to login"));
    }
    if (user.isDeleted) {
        return next(createHttpError(400, "Your account is deleted"));
    }
    const isPassMatched = await bcrypt.compare(password, user.password);
    if (!isPassMatched) {
        return next(createHttpError(400, "Password didn't matched"));
    }
    const accessToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const refreshToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
    user.refreshToken = refreshToken;
    await user.save();
    const userData = user.toObject();
    delete userData.password;
    return {
        user: userData,
        accessToken,
        refreshToken,
    };
};
const UProfile = async (userId) => {
    return await User.findById(userId).select("-password");
};
const UUpdate = async (id, payload) => {
    return await User.findByIdAndUpdate(id, payload, { new: true });
};
const UDelete = async (id) => {
    return await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};
const UChangePassword = async (req) => {
    const userId = req.userId;
    const { oldPass, newPass } = req.body;
    const user = await User.findById(userId);
    const isPassMatched = await bcrypt.compare(oldPass, user?.password);
    if (!isPassMatched) {
        throw createHttpError(400, "Password didn't matched");
    }
    return await User.findByIdAndUpdate(userId, { password: newPass }, { new: true });
};
const USendForgetPassCode = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw createHttpError(404, "User not found");
    }
    await VerifyCode.deleteMany({ email });
    const code = Math.floor(100000 + Math.random() * 900000);
    const verifyCode = await VerifyCode.create({ email, verificationCode: code });
    if (!verifyCode) {
        throw createHttpError(400, "Failed to generate verification code");
    }
    await sendMail(email, "Your password reset code", `${code}`);
    return {
        success: true,
        message: "Verification code sent successfully",
    };
};
const UForgetPassword = async (email, verificationCode, newPass) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw createHttpError(404, "User not found");
    }
    const codeDoc = await VerifyCode.findOne({ email, verificationCode });
    if (!codeDoc) {
        throw createHttpError(400, "Invalid or expired verification code");
    }
    const hashedPass = await bcrypt.hash(newPass, 10);
    user.password = hashedPass;
    await user.save();
    await VerifyCode.deleteOne({ email, verificationCode });
    return {
        success: true,
        message: "Password reset successfully",
    };
};
export const SUser = {
    USendCode,
    UCreate,
    ULogin,
    UProfile,
    UUpdate,
    UDelete,
    UVerifyCode,
    UChangePassword,
    UForgetPassword,
    USendForgetPassCode,
};
//# sourceMappingURL=user.service.js.map