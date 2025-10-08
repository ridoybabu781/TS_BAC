import type { NextFunction, Request } from "express";
import type { IBaseUser } from "./user.interface.js";
export declare const SUser: {
    USendCode: (email: string) => Promise<import("mongoose").Document<unknown, {}, import("./verificationCode.model.js").IVerifyCode, {}, import("mongoose").DefaultSchemaOptions> & import("./verificationCode.model.js").IVerifyCode & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    UCreate: (payload: IBaseUser) => Promise<{
        user: import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
            _id: string;
        }> & {
            __v: number;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    ULogin: (email: String, password: String, next: NextFunction) => Promise<void | {
        user: IBaseUser & Required<{
            _id: string;
        }> & {
            __v: number;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    UProfile: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
    UUpdate: (id: string, payload: IBaseUser) => Promise<(import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
    UDelete: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
    UVerifyCode: (req: Request) => Promise<(import("mongoose").Document<unknown, {}, import("./verificationCode.model.js").IVerifyCode, {}, import("mongoose").DefaultSchemaOptions> & import("./verificationCode.model.js").IVerifyCode & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=user.service.d.ts.map