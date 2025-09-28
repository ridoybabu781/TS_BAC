import mongoose, { Schema, Document } from 'mongoose';
import { ISeminar } from './seminar.interface';
const SeminarSchema = new Schema({
    id: Number,
    speaker: String,
    title: String,
    date: String,
    time: String,
    image: String
}, { timestamps: true });
export default mongoose.model('Seminar', SeminarSchema);
//# sourceMappingURL=seminar.model.js.map