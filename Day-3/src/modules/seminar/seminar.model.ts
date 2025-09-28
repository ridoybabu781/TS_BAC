import mongoose, { Schema, Document } from 'mongoose';
import { ISeminar } from './seminar.interface';


const SeminarSchema = new Schema<ISeminar>({
    id: Number,
    speaker: String,
    title: String,
    date: String,
    time: String,
    image: String
}, { timestamps: true });


export default mongoose.model<ISeminar>('Seminar', SeminarSchema);
