import type { NextFunction } from "express";
import type { IBaseUser } from "./user.interface.js";
export declare const SUser: {
    UCreate: (payload: IBaseUser) => Promise<import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    ULogin: (email: String, password: String, next: NextFunction) => Promise<void | (IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    })>;
};
//# sourceMappingURL=user.service.d.ts.map