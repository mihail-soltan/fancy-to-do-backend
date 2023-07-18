import Task from "../models/task.js";

export async function getTasks(req, res) {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function postTask(req, res) {
    try {
        // const { name, createdBy } = req.body;
        const task = new Task(req.body);
        const newTask = await task.save();
        res.status(201).json(newTask);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function updateTask(req, res) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

export async function deleteTask(req,res) {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.json(task);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}
