import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String },
    created_by: { type: mongoose.Schema.Types.ObjectId }
})


const Category = mongoose.model("Category", categorySchema);
export default Category;