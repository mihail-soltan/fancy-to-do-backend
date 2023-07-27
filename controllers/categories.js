import Category from "../models/category.js";

export async function getCategories(req, res) {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function getCategoriesByUser(req, res) {
    try {
        const categories = await Category.find({ created_by: req.params.userId })
        res.status(200).json(categories)
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function postCategory(req, res) {
    try {
        // const { name, createdBy } = req.body;
        const category = new Category(req.body);
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function updateCategory(req, res) {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(category);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

export async function deleteCategory(req, res) {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.json(category);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}