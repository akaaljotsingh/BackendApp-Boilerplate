import { IUser } from '../interfaces/user.interface';
import User from '../models/user.model';

export const createUser = async (data: IUser): Promise<IUser> => {
  const user = new User(data);
  return await user.save();
};

export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

export const deleteUser = async (id: string): Promise<void> => {
  await User.findByIdAndDelete(id);
};