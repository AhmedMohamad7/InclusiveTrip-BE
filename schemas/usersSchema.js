import Joi from "joi";


const usersSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    roleId: Joi.number().default(3),
    profilePhoto: Joi.string().optional(),
    blocked: Joi.boolean().default(false),

});


export default usersSchema;