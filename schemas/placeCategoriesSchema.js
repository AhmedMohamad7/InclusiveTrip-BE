import Joi from "joi";


const placeCategoriesSchema = Joi.object({
    type: Joi.string().required(),

});

export default placeCategoriesSchema;