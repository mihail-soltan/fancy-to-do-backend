import { Router } from "express";

import { getTasks, postTask, updateTask, deleteTask, toggleActiveTask, getTasksByCategory} from "../controllers/tasks.js";

const taskRouter = Router();

taskRouter.route("/")
    .get(getTasks)
    .post(postTask)

taskRouter.route("/:id")
    .put(updateTask)
    .delete(deleteTask)

taskRouter.route("/completed/:id")
    .put(toggleActiveTask)

taskRouter.route("/category/:category") 
    .get(getTasksByCategory)

export default taskRouter