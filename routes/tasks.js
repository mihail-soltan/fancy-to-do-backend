import { Router } from "express";

import { getTasks, postTask, updateTask, deleteTask, toggleActiveTask} from "../controllers/tasks.js";

const taskRouter = Router();

taskRouter.route("/")
    .get(getTasks)
    .post(postTask)

taskRouter.route("/:id")
    .put(updateTask)
    .delete(deleteTask)

taskRouter.route("completed/:id")
    .put(toggleActiveTask)


export default taskRouter