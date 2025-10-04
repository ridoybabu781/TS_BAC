import type { NextFunction } from "express";
import type { IBaseUser } from "../user.interface.js";
export declare const AService: {
    ACreate: (payload: IBaseUser) => Promise<import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    ABlock: (id: string, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    })>;
    AUnBlock: (id: string, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    })>;
    ADelete: (id: string, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    })>;
    AUnDelete: (id: string, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    })>;
};
//# sourceMappingURL=admin.service.d.ts.map