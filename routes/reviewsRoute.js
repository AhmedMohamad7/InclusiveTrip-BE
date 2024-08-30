import { Router } from "express";
import { getReviews, createReview, getReview,updateReview,deleteReview,getReviewsByUser,getReviewsCount} from "../controllers/reviewsController.js";
import validateSchema from "../middlewares/validateSchema.js";
import reviewsSchema from "../schemas/reviewsSchema.js";
import verifyToken from "../middlewares/verifyToken.js";

const reviewRouter = Router();


reviewRouter.get("/", getReviews);
reviewRouter.get("/user",verifyToken, getReviewsByUser);
reviewRouter.get("/count", getReviewsCount);
reviewRouter.get("/:gpsCode", getReview);
reviewRouter.post("/",validateSchema(reviewsSchema),verifyToken, createReview);
reviewRouter.put("/:gpscode",validateSchema(reviewsSchema),verifyToken, updateReview);
reviewRouter.delete("/:gpscode",verifyToken, deleteReview);



export default reviewRouter;