import mongoose from "mongoose";
declare const User: mongoose.Model<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address?: string | null;
    avater?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address?: string | null;
    avater?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address?: string | null;
    avater?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address?: string | null;
    avater?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address?: string | null;
    avater?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address?: string | null;
    avater?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default User;
//# sourceMappingURL=user.model.d.ts.map