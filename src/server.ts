import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { AppDataSource } from "./ormconfig";
import { UserController } from "./controllers/user.controller";

AppDataSource.initialize()
    .then(() => {
        const app = createExpressServer({
            controllers: [UserController],
        });

        app.listen(3000, () => {
            console.log("Server started");
        });
    })
    .catch((error) => console.log("Database error:", error));