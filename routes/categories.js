import { Router } from "express";

import { getCategories, postCategory, updateCategory, deleteCategory } from "../controllers/categories.js";

const categoryRouter =  Router();

categoryRouter.route("/")
    .get(getCategories)
    .post(postCategory)

categoryRouter.route("/:id")
    .put(updateCategory)
    .delete(deleteCategory)

export default categoryRouter