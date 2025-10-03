import { Schema } from "mongoose";
import type { IBaseUser } from "./user.interface.js";
declare const User: import("mongoose").Model<IBaseUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
    _id: string;
}> & {
    __v: number;
}, Schema<IBaseUser, import("mongoose").Model<IBaseUser, any, any, any, import("mongoose").Document<unknown, any, IBaseUser, any, {}> & IBaseUser & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IBaseUser, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IBaseUser>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IBaseUser> & Required<{
    _id: string;
}> & {
    __v: number;
}>>;
export default User;
//# sourceMappingURL=user.model.d.ts.map