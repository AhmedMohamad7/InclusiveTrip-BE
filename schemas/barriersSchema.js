import Joi from "joi";

const barriersSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional(),
    selected: Joi.boolean().required(),
});

export default barriersSchema;