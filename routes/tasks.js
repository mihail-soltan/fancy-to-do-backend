import { Router } from "express";

import { getTasks, postTask, updateTask, deleteTask } from "../controllers/tasks.js";

const taskRouter = Router();

taskRouter.route("/")
    .get(getTasks)
    .post(postTask)

taskRouter.route("/:id")
    .put(updateTask)
    .delete(deleteTask)

export default taskRouter