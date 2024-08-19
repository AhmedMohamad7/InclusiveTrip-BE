import { Router } from "express";

import { getBarriersReviews , getBarrierReview, createBarrierReview, updateBarrierReview, deleteBarrierReview} from "../controllers/barriersReviewsController.js";


const barrierReviewRouter = Router();


barrierReviewRouter.get("/", getBarriersReviews);
barrierReviewRouter.get("/:id", getBarrierReview);
barrierReviewRouter.post("/", createBarrierReview);
barrierReviewRouter.put("/:id", updateBarrierReview);
barrierReviewRouter.delete("/:id", deleteBarrierReview);


export default barrierReviewRouter;