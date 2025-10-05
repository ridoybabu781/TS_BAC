import mongoose from "mongoose";
import type { IProduct } from "./product.interface.js";
export declare const Product: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct, {}, mongoose.DefaultSchemaOptions> & IProduct & Required<{
    _id: unknown;
}> & {
    __v: number;
}, mongoose.Schema<IProduct, mongoose.Model<IProduct, any, any, any, mongoose.Document<unknown, any, IProduct, any, {}> & IProduct & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IProduct, mongoose.Document<unknown, {}, mongoose.FlatRecord<IProduct>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<IProduct> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
//# sourceMappingURL=product.model.d.ts.map