import Joi from "joi";
import user from "../models/usersModel.js";

const reviewsSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.base': 'Name should be a type of text.',
        'string.empty': 'Name cannot be an empty field.',
        'any.required': 'Name is required.'
    }),
    gpsCode: Joi.string().required().messages({
        'string.base': 'GPS code must be a string',
        'string.empty': 'GPS code is required',
        'any.required': 'GPS code is required'
    }),
    comment: Joi.string().required().messages({
        'string.base': 'Comment must be a string',
        'string.empty': 'Comment is required',
        'any.required': 'Comment is required'
    }),
    placeCategoriesId: Joi.number().required().messages({
        'number.base': 'Place category ID must be a number',
        'any.required': 'Place category ID is required'
    })
});

export default reviewsSchema;