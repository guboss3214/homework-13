import { User } from "../entities/User";
import { AppDataSource } from "../ormconfig";


export class UserService {
    private userRepository = AppDataSource.getRepository(User)

    async getAllUsers() {
        return await this.userRepository.find();
    }

    async createUser(username: string, email: string) {
        const newUser = this.userRepository.create({ username, email })
        return await this.userRepository.save(newUser)
    }

    async updateUser(id: string, username: string, email: string) {
        await this.userRepository.update(id, { username, email })
        return await this.userRepository.findOneBy({ id: id as any });
    }

    async deleteUser(id: string | string[]){
        return await this.userRepository.delete(id)
    }
}