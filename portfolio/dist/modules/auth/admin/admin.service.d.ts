import type { IUser } from "../user/user.interface.js";
export declare const SAdmin: {
    ACreate: (payload: IUser) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map