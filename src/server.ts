import "reflect-metadata";
import express from "express";
import { useExpressServer } from "routing-controllers";
import { AppDataSource } from "./ormconfig";
import { UserController } from "./controllers/user.controller";

const PORT = 5000;

AppDataSource.initialize()
    .then(() => {
        const app = express();
        app.use(express.json());

        useExpressServer(app, {
            controllers: [UserController],
            classTransformer: false,
        });

        app.listen(PORT, () => {
            console.log(`Server started on PORT: ${PORT}`);
        });
    })
    .catch((error) => console.log("Database error:", error));