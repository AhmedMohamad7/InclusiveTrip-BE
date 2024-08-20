import Joi from "joi";

const barriersReviewsSchema = Joi.object({
    barrierId: Joi.number().required(),
    reviewId: Joi.number().required(),
    reviews:Joi.number().required(),

});

export default barriersReviewsSchema;