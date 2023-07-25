import mongoose from "mongoose";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import taskRouter from "./routes/tasks.js";
import categoryRouter from "./routes/categories.js";
import userRouter from "./routes/users.js";

dotenv.config()

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use("/tasks", taskRouter);
app.use("/categories", categoryRouter)
app.use("/auth", userRouter)

app.use("/", (req, res) => {
    res.json({
        message: "Hello!",
    });
})
async function connectToDB() {
    try {
        await mongoose.connect(process.env.CONNECTION_URI);
    }
    catch (err) {
        console.log(err);
    }
}

connectToDB().then((err) => {
    if (err) {
        return console.log(err);
    }
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
})