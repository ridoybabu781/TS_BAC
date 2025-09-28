import mongoose, { Schema, Document } from 'mongoose';
import { ICategory } from './category.interface';


const CategorySchema = new Schema<ICategory>({
    id: Number,
    name: String,
    slug: String,
    icon: String
}, { timestamps: true });


export default mongoose.model<ICategory>('Category', CategorySchema);
