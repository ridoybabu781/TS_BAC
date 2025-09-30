import type { IProduct } from "./product.interface.js";
export declare const PService: {
    Add: (payload: IProduct) => Promise<import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    Get: () => Promise<(import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
        _id: string;
    }> & {
        __v: number;
    })[]>;
    GetOne: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
    Update: (id: string, payload: IProduct) => Promise<(import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
    Delete: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=product.service.d.ts.map