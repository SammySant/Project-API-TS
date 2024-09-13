import { Router } from "express";
import TaskController from "../../controllers/task/task.controller";
import authMiddleware from "../../middlewares/auth.middleware";

const taskRoutes = Router()

taskRoutes.get("/", TaskController.index)
taskRoutes.post("/", authMiddleware, TaskController.store)
taskRoutes.get("/:id", TaskController.show)
taskRoutes.delete("/:id", TaskController.delete)

export default taskRoutes