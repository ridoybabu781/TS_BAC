import type { NextFunction } from "express";
import type { IBaseUser } from "../user.interface.js";
export declare const VService: {
    VCreate: (payload: IBaseUser) => Promise<import("mongoose").Document<unknown, {}, IBaseUser, {}, import("mongoose").DefaultSchemaOptions> & IBaseUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    VBlock: (id: string, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=vendor.service.d.ts.map