import e, { Router } from "express";
import { getPlaceCategories, createPlaceCategory, getPlaceCategory,updatePlaceCategory,deletePlaceCategory } from "../controllers/placeCategoriesController.js";
import validateSchema from "../middlewares/validateSchema.js";
import placeCategoriesSchema from "../schemas/placeCategoriesSchema.js";

const placeCategoriesRouter = Router();


placeCategoriesRouter.get("/", getPlaceCategories);
placeCategoriesRouter.get("/:type", getPlaceCategory);
placeCategoriesRouter.post("/",validateSchema(placeCategoriesSchema), createPlaceCategory);
placeCategoriesRouter.put("/:id", validateSchema(placeCategoriesSchema),updatePlaceCategory);
placeCategoriesRouter.delete("/:id", deletePlaceCategory);


export default placeCategoriesRouter;