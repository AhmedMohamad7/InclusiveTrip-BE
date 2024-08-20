import { Router } from "express";
import { getReviews, createReview, getReview,updateReview,deleteReview } from "../controllers/reviewsController.js";
import validateSchema from "../middlewares/validateSchema.js";
import reviewsSchema from "../schemas/reviewsSchema.js";

const reviewRouter = Router();


reviewRouter.get("/", getReviews);
reviewRouter.get("/:gpsCode", getReview);
reviewRouter.post("/",validateSchema(reviewsSchema), createReview);
reviewRouter.put("/:gpscode",validateSchema(reviewsSchema), updateReview);
reviewRouter.delete("/:gpscode", deleteReview);



export default reviewRouter;