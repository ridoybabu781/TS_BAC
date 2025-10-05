import type { Request } from "express";
import type { IPurchase } from "../interfaces/purchace.interface.js";
export declare const SPurchase: {
    SMakePurchase: (req: Request, payload: IPurchase) => Promise<import("mongoose").Document<unknown, {}, IPurchase, {}, import("mongoose").DefaultSchemaOptions> & IPurchase & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    SGetMyPurchase: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IPurchase, {}, import("mongoose").DefaultSchemaOptions> & IPurchase & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=purchase.service.d.ts.map