import type { IPricing } from "./pricingPlan.interface.js";
export declare const PService: {
    SCreatePricing: (payload: IPricing) => Promise<import("mongoose").Document<unknown, {}, IPricing, {}, import("mongoose").DefaultSchemaOptions> & IPricing & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    SGetPricing: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IPricing, {}, import("mongoose").DefaultSchemaOptions> & IPricing & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    SGetPricings: () => Promise<(import("mongoose").Document<unknown, {}, IPricing, {}, import("mongoose").DefaultSchemaOptions> & IPricing & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    SDeletePricing: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IPricing, {}, import("mongoose").DefaultSchemaOptions> & IPricing & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=pricing.service.d.ts.map