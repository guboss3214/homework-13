import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

router.get("/", UserController.getAuthor);
router.get("/users", UserController.getAll);
router.post("/users", UserController.create);
router.patch("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

export default router;