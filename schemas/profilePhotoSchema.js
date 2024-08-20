import Joi from "joi";


const profilePhotoSchema = Joi.object({

    profilePhoto: Joi.string().required(),


});


export default profilePhotoSchema;