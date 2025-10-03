import type { ICategory } from "./category.interface.js";
export declare const CService: {
    Add: (payload: ICategory) => Promise<import("mongoose").Document<unknown, {}, ICategory, {}, import("mongoose").DefaultSchemaOptions> & ICategory & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    Get: () => Promise<(import("mongoose").Document<unknown, {}, ICategory, {}, import("mongoose").DefaultSchemaOptions> & ICategory & Required<{
        _id: string;
    }> & {
        __v: number;
    })[]>;
    Delete: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ICategory, {}, import("mongoose").DefaultSchemaOptions> & ICategory & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=category.service.d.ts.map