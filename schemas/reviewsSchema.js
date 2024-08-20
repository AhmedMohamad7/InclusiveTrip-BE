import Joi from "joi";
import user from "../models/usersModel.js";

const reviewsSchema = Joi.object({
    gpsCode: Joi.string().required(),
    comment : Joi.string().required(),
    userId: Joi.number().required(),
    placeCategoriesId: Joi.number().required(),

});

export default reviewsSchema;