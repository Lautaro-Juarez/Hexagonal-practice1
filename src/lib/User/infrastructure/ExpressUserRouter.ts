import { Router } from "express";
import { ExpressUserController } from "./ExpressUserController";

const controller = new ExpressUserController();

const userRouter = Router();

userRouter.get("/api/user", controller.getAll);
userRouter.get("/api/user/:id", controller.getOneById);
userRouter.post("/api/user", controller.create);
userRouter.put("/api/user", controller.edit);
userRouter.delete("/api/user/:id", controller.delete);

export { userRouter };
