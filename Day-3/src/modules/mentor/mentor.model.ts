import mongoose, { Schema, Document } from 'mongoose';
import { IMentor } from './mentor.interface';

const MentorSchema = new Schema<IMentor>({
  id: String,
  name: { type: String, required: true },
  gender: { type: String, enum: ['male','female','other'] },
  dateOfBirth: String,
  email: String,
  contactNo: String,
  emergencyContact: String,
  address: String,
  profileImg: String,
  designation: String,
  departmentName: String,
  specialized_area: [String],
  education_qualification: [String],
  workExperience: [String],
  experienceYears: String,
  experienceTrainedStudents: String,
  reviews: { type: Number, default: 0 },
  bio: String,
  lifeJourney: String,
}, { timestamps: true });

const MentorModel = mongoose.model<IMentor>('Mentor', MentorSchema);
export default MentorModel;
