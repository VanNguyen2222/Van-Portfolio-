import { User } from "../model/User";
import { UserRepository } from "../repository/User";

export class UserService {
    async getAllUsers(): Promise<User[]> {
        return await UserRepository.find();
    }
}