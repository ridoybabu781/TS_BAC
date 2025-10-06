import type { NextFunction, Request, Response } from "express";
export declare const SPayment: {
    SPayBill: (req: Request, res: Response, next: NextFunction) => Promise<void | {
        url: any;
        message: string;
        order: import("mongoose").Document<unknown, {}, import("../order/order.interface.js").IOrder, {}, import("mongoose").DefaultSchemaOptions> & import("../order/order.interface.js").IOrder & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
};
//# sourceMappingURL=payment.service.d.ts.map