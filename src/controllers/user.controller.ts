import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
    static async getAuthor(_: Request, res: Response){
        res.json({ author: "Me" })
    }

    static async getAll(_: Request, res: Response){
        const users = await userService.getAllUsers();
        res.json(users)
    }

    static async create(req: Request, res: Response){
        const { username, email } = req.body
        const newUser = await userService.createUser(username, email)
        res.status(201).json(newUser);
    }

    static async update(req: Request, res: Response){
        const { id } = req.params
        const { username, email } = req.body
        const updatedUser = await userService.updateUser(id as string, username, email)
        res.json(updatedUser)
    }

    static async delete(req: Request, res: Response){
        await userService.deleteUser(req.params.id);
        res.json({ message: "User deleted" });
    }
}