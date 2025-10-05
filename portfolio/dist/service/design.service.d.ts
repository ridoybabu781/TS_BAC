import type { NextFunction, Request } from "express";
import type { IDesign } from "../interfaces/design.interface.js";
export declare const DService: {
    SCreateDesign: (req: Request, payload: IDesign, next: NextFunction) => Promise<void | (import("mongoose").Document<unknown, {}, IDesign, {}, import("mongoose").DefaultSchemaOptions> & IDesign & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })>;
    SGetDesigns: () => Promise<(import("mongoose").Document<unknown, {}, IDesign, {}, import("mongoose").DefaultSchemaOptions> & IDesign & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    SGetDesign: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IDesign, {}, import("mongoose").DefaultSchemaOptions> & IDesign & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=design.service.d.ts.map