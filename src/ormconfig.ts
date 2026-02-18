import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "lesson13",
    password: "password",
    database: "lesson13",
    synchronize: true,
    logging: false,
    entities: [User],
});