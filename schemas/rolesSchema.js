import Joi from "joi";


const rolesSchema = Joi.object({
    type: Joi.string().required(),

});


export default rolesSchema;