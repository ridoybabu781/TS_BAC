import { Schema } from "mongoose";
export interface IVerifyCode {
    email: string;
    verificationCode: number;
    createdAt?: Date;
}
export declare const VerifyCode: import("mongoose").Model<IVerifyCode, {}, {}, {}, import("mongoose").Document<unknown, {}, IVerifyCode, {}, import("mongoose").DefaultSchemaOptions> & IVerifyCode & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<IVerifyCode, import("mongoose").Model<IVerifyCode, any, any, any, import("mongoose").Document<unknown, any, IVerifyCode, any, {}> & IVerifyCode & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IVerifyCode, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IVerifyCode>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IVerifyCode> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=verificationCode.model.d.ts.map