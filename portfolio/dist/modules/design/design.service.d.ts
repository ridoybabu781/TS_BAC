import type { NextFunction, Request } from "express";
import type { IDesign } from "./design.interface.js";
export declare const DService: {
    SCreateDesign: (req: Request, payload: IDesign, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, {
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
    })>;
    SGetDesigns: () => Promise<(import("mongoose").Document<unknown, {}, {
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
    SGetDesign: (id: string) => Promise<(import("mongoose").Document<unknown, {}, {
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
    SDeleteDesign: (id: string, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, {
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
//# sourceMappingURL=design.service.d.ts.map