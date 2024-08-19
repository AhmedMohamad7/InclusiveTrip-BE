import e, { Router } from "express";
import { getPlaceCategories, createPlaceCategory, getPlaceCategory,updatePlaceCategory,deletePlaceCategory } from "../controllers/placeCategoriesController.js";


const placeCategoriesRouter = Router();


placeCategoriesRouter.get("/", getPlaceCategories);
placeCategoriesRouter.get("/:id", getPlaceCategory);
placeCategoriesRouter.post("/", createPlaceCategory);
placeCategoriesRouter.put("/:id", updatePlaceCategory);
placeCategoriesRouter.delete("/:id", deletePlaceCategory);


export default placeCategoriesRouter;