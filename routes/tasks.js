import { Router } from "express";

import { getTasks, postTask, updateTask, deleteTask, toggleActiveTask, getTasksByCategory, getAllTasksByUser, getUserTasksByCategory} from "../controllers/tasks.js";

const taskRouter = Router();

taskRouter.route("/")
    .get(getTasks)
    .post(postTask)

taskRouter.route("/user/:userId")
    .get(getAllTasksByUser)

taskRouter.route("/:id")
    .put(updateTask)
    .delete(deleteTask)

taskRouter.route("/completed/:id")
    .put(toggleActiveTask)

// taskRouter.route("/category/:category") 
//     .get(getTasksByCategory)

taskRouter.route("/user/:userId/category/:category") 
    .get(getUserTasksByCategory)

export default taskRouter