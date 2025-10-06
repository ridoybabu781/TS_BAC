import { Schema } from "mongoose";
import type { ICart } from "./cart.interface.js";
export declare const cartItemSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
}, {
    price: number;
    product: import("mongoose").Types.ObjectId;
    qty: number;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    price: number;
    product: import("mongoose").Types.ObjectId;
    qty: number;
}>, {}, import("mongoose").ResolveSchemaOptions<{
    _id: false;
}>> & import("mongoose").FlatRecord<{
    price: number;
    product: import("mongoose").Types.ObjectId;
    qty: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Cart: import("mongoose").Model<ICart, {}, {}, {}, import("mongoose").Document<unknown, {}, ICart, {}, import("mongoose").DefaultSchemaOptions> & ICart & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<ICart, import("mongoose").Model<ICart, any, any, any, import("mongoose").Document<unknown, any, ICart, any, {}> & ICart & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ICart, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ICart>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<ICart> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
//# sourceMappingURL=cart.model.d.ts.map