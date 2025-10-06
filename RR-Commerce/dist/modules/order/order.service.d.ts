import type { NextFunction, Request } from "express";
import type { IOrder } from "./order.interface.js";
export declare const SOrder: {
    SCreateOrder: (payload: IOrder, req: Request, next: NextFunction) => Promise<void | {
        type: string;
        order: import("mongoose").Document<unknown, {}, IOrder, {}, import("mongoose").DefaultSchemaOptions> & IOrder & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    SGetMyOrders: (req: Request) => Promise<(import("mongoose").Document<unknown, {}, IOrder, {}, import("mongoose").DefaultSchemaOptions> & IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    SUpdateOrderStatus: (req: Request, status: string, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=order.service.d.ts.map