import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./ormconfig";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use(userRoutes);

AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => {
            console.log("🚀 Server started on http://localhost:3000");
        });
    })
    .catch((error) => console.log("❌ Database error:", error));