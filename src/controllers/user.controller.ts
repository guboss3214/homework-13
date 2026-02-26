import { Controller, Get, Post, Patch, Delete, Param, Body } from "routing-controllers";
import { UserService } from "../services/user.service";

@Controller()
export class UserController {
    private userService = new UserService();

    @Get("/")
    getAuthor() {
        return { author: "Me" };
    }

    @Get("/users")
    getAll() {
        return this.userService.getAllUsers();
    }

    @Post("/users")
    create(@Body() body: { username: string; email: string }) {
        return this.userService.createUser(body.username, body.email);
    }

    @Patch("/users/:id")
    update(@Param("id") id: string, @Body() body: { username: string; email: string }) {
        return this.userService.updateUser(id, body.username, body.email);
    }

    @Delete("/users/:id")
    remove(@Param("id") id: string) {
        return this.userService.deleteUser(id);
    }
}