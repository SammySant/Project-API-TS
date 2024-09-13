import { Router } from "express";
import TaskController from "../../controllers/task/task.controller";
import authMiddleware from "../../middlewares/auth.middleware";

const taskRoutes = Router()

taskRoutes.get("/", authMiddleware, TaskController.index)
taskRoutes.post("/", authMiddleware, TaskController.store)
taskRoutes.get("/:id", authMiddleware, TaskController.show)
taskRoutes.delete("/:id", authMiddleware, TaskController.delete)
taskRoutes.put("/:id", authMiddleware, TaskController.update)


export default taskRoutes