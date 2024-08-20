import Joi from "joi";


const usersSchema = Joi.object({
    username: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    roleId: Joi.number().required(),   
    profilePhoto: Joi.string().required(),
    blocked: Joi.boolean().required(),

});


export default usersSchema;