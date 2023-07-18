import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {required: true, type: String},
    category: {required: true, type: String},
    description: {type: String},
    completed: {type: Boolean},
    deadline: {type: Date},
    created_at: {type: Date, default: Date.now},
    created_by: {type: String, required: true},
    updated_at: {type: Date, default: null},
    updated_by: {type: String, default: null}
})

const Task = mongoose.model("Task", taskSchema);
export default Task;