import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

export default mongoose.model<IUser & Document>('User', userSchema);