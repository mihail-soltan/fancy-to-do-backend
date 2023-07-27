import { Router } from "express";

import { getCategories, postCategory, updateCategory, deleteCategory,getCategoriesByUser } from "../controllers/categories.js";

const categoryRouter =  Router();

categoryRouter.route("/")
    .get(getCategories)
    .post(postCategory)

categoryRouter.route("/:id")
    .put(updateCategory)
    .delete(deleteCategory)

categoryRouter.route("/user/:userId")
    .get(getCategoriesByUser)

export default categoryRouter