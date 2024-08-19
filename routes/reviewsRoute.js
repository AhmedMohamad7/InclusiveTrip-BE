import { Router } from "express";
import { getReviews, createReview, getReview,updateReview,deleteReview } from "../controllers/reviewsController.js";


const reviewRouter = Router();


reviewRouter.get("/", getReviews);
reviewRouter.get("/:id", getReview);
reviewRouter.post("/", createReview);
reviewRouter.put("/:id", updateReview);
reviewRouter.delete("/:id", deleteReview);



export default reviewRouter;