import { User } from "../model/User";
import { UserService } from "../service/User"

// const userService = new UserService();

export class UserController{
    async getUsers(req: Request, res: Response) {
        // const users = await userService.getAllUsers();
        const users: User[] = [{id:1, name:"Van"} as User];
        users.push()
        // res.json(users);
    }
}