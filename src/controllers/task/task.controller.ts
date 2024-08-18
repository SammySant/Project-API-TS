import { Request, Response } from "express";
import Task from "../../models/task.entity";
import { timeLog } from "console";

export default class TaskController {
    static async store(req: Request, res: Response){
        const {title, cpleted} = req.body

        if(!title){
            return res.status(400).json({msg: "Título obrigatório"})
        }

        const task = new Task()
        task.title = title
        task.completed = true
        task.save()

        return res.status(201).json(task)
    }
}