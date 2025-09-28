import mongoose, { Schema, Document } from 'mongoose';
import { ICategory } from './category.interface';
const CategorySchema = new Schema({
    id: Number,
    name: String,
    slug: String,
    icon: String
}, { timestamps: true });
export default mongoose.model('Category', CategorySchema);
//# sourceMappingURL=category.model.js.map