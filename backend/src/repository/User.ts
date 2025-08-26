import { AppDataSource } from "../config/db";
import { User } from "../model/User";

export const UserRepository = AppDataSource.getRepository(User);