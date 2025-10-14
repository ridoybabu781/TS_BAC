import bcrypt from "bcrypt";
import createHttpError from "http-errors";
import { User } from "./user.model.js";
const UCreate = async (payload, next) => {
    if (payload.role === "admin") {
        return next(createHttpError(401, "Admin cannot be created with this api"));
    }
    const hashedPass = await bcrypt.hash(payload.password, 10);
    return await User.create({ ...payload, password: hashedPass });
};
const ULogin = async (email, password, next) => {
    const user = await User.findOne({ email });
    if (!user) {
        return next(createHttpError(404, "User Not Found"));
    }
    const isPassMatched = await bcrypt.compare(password, user.password);
    if (!isPassMatched) {
        return next(createHttpError(400, "Password didn't matched"));
    }
    const userData = user.toObject();
    delete userData.password;
    return userData;
};
const UProfile = async (userId) => {
    return await User.findById(userId).select("-password");
};
export const UService = {
    UCreate,
    ULogin,
    UProfile,
};
//# sourceMappingURL=user.service.js.map