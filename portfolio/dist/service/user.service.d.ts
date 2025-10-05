import type { IUser } from "../interfaces/user.interface.js";
import type { NextFunction } from "express";
export declare const UService: {
    UCreate: (payload: IUser) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    ULogin: (email: String, password: String, next: NextFunction) => Promise<void | (IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })>;
    UProfile: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=user.service.d.ts.map