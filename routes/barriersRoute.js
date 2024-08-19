import { Router } from "express";

import { getBarriersReviews , getBarrierReview, createBarrierReview, updateBarrierReview, deleteBarrierReview} from "../controllers/barriersReviewsController.js";


const barrierRouter = Router();



barrierRouter.get("/", getBarriersReviews);
barrierRouter.get("/:id", getBarrierReview);
barrierRouter.post("/", createBarrierReview);
barrierRouter.put("/:id", updateBarrierReview);
barrierRouter.delete("/:id", deleteBarrierReview);


export default barrierRouter;
