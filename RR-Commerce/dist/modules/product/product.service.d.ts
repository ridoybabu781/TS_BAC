import type { NextFunction, Request } from "express";
import type { IProduct } from "./product.interface.js";
export declare const PService: {
    Add: (req: Request, payload: IProduct, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })>;
    Get: (req: Request) => Promise<{
        products: (import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        success: boolean;
        totalProduct: number;
        totalPages: number;
        currentPage: number;
    }>;
    GetOne: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    Update: (req: Request, id: string, payload: IProduct, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    Delete: (req: Request, id: string, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=product.service.d.ts.map