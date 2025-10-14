import type { NextFunction } from "express";
import type { IReview } from "./review.interface.js";
export declare const SGetReviews: (id: string) => Promise<(import("mongoose").Document<unknown, {}, {
    [x: number]: unknown;
    [x: symbol]: unknown;
    [x: string]: unknown;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    [x: number]: unknown;
    [x: symbol]: unknown;
    [x: string]: unknown;
} & Required<{
    _id: unknown;
}> & {
    __v: number;
})[]>;
export declare const SDeleteReview: (userId: string | undefined, id: string, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, {
    [x: number]: unknown;
    [x: symbol]: unknown;
    [x: string]: unknown;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    [x: number]: unknown;
    [x: symbol]: unknown;
    [x: string]: unknown;
} & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare const RService: {
    SAddReview: (reviewer: string, design: string, payload: IReview) => Promise<import("mongoose").Document<unknown, {}, {
        [x: number]: unknown;
        [x: symbol]: unknown;
        [x: string]: unknown;
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        [x: number]: unknown;
        [x: symbol]: unknown;
        [x: string]: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    SGetReviews: (id: string) => Promise<(import("mongoose").Document<unknown, {}, {
        [x: number]: unknown;
        [x: symbol]: unknown;
        [x: string]: unknown;
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        [x: number]: unknown;
        [x: symbol]: unknown;
        [x: string]: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    SDeleteReview: (userId: string | undefined, id: string, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, {
        [x: number]: unknown;
        [x: symbol]: unknown;
        [x: string]: unknown;
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        [x: number]: unknown;
        [x: symbol]: unknown;
        [x: string]: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=review.service.d.ts.map