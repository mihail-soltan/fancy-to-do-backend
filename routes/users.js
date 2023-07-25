import { Router } from "express";
import { signUp, login } from "../controllers/users.js";

const userRouter = Router()

userRouter.route("/signup")
    .post(signUp)

userRouter.route("/signin")
    .post(login)

export default userRouter;