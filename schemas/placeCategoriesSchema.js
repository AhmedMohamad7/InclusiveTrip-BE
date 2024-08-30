import Joi from "joi";


const placeCategoriesSchema = Joi.object({
    name: Joi.string().required().messages({ 'string.base': 'Name should be a type of text.', 'string.empty': 'Name cannot be an empty field.', 'any.required': 'name is required.' }), 
    icon: Joi.string().required().messages({ 'string.base': 'Icon should be a type of text.', 'string.empty': 'Icon cannot be an empty field.', 'any.required': 'Icon is required.' }),
    description: Joi.string().optional().messages({ 'string.base': 'Description should be a type of text.' }), 
    selected: Joi.boolean().required().messages({ 'boolean.base': 'Selected should be a boolean.', 'any.required': 'Selected is required.' }) 
});

export default placeCategoriesSchema;