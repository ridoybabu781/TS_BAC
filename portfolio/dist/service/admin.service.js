import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
const ACreate = async (payload) => {
    const hashedPass = await bcrypt.hash(payload.password, 10);
    return await User.create({ ...payload, password: hashedPass });
};
export const SAdmin = { ACreate };
//# sourceMappingURL=admin.service.js.map