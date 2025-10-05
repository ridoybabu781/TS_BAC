import type { Request } from "express";
import type { ICart } from "./cart.interface.js";
export declare const CService: {
    SAddToCart: (req: Request) => Promise<import("mongoose").Document<unknown, {}, ICart, {}, import("mongoose").DefaultSchemaOptions> & ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    SGetCartItems: (req: Request) => Promise<(import("mongoose").Document<unknown, {}, ICart, {}, import("mongoose").DefaultSchemaOptions> & ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    SRemoveCartItem: (req: Request) => Promise<(import("mongoose").Document<unknown, {}, ICart, {}, import("mongoose").DefaultSchemaOptions> & ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=cart.service.d.ts.map