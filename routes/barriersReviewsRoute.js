import { Router } from "express";

import { getBarriersReviews , getBarrierReview, createBarrierReview, updateBarrierReview, deleteBarrierReview} from "../controllers/barriersReviewsController.js";
import validateSchema from "../middlewares/validateSchema.js";
import barriersReviewsSchema from "../schemas/barriersReviewsSchema.js";

const barrierReviewRouter = Router();


barrierReviewRouter.get("/", getBarriersReviews);
barrierReviewRouter.get("/:id", getBarrierReview);
barrierReviewRouter.post("/",validateSchema(barriersReviewsSchema), createBarrierReview);
barrierReviewRouter.put("/:id",validateSchema(barriersReviewsSchema), updateBarrierReview);
barrierReviewRouter.delete("/:id", deleteBarrierReview);


export default barrierReviewRouter;