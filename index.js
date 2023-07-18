import mongoose from "mongoose";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import taskRouter from "./routes/tasks.js";

dotenv.config()

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/tasks", taskRouter);
app.use("/", (req, res) => {
    res.json({ message: "Hello!",
    teams: "http://localhost:3000/teams",
    players: "http://localhost:3000/players" });
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