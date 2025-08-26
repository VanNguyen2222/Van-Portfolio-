import { UserService } from "../service/User"

const userService = new UserService();

export class UserController{
    async getUsers(req: Request, res: Response) {
        const users = await userService.getAllUsers();
        res.json(users);
    }
}