import Joi from "joi";

const profilePhotoSchema = Joi.object({
  profilePhoto: Joi.any().meta({ swaggerType: 'file' }).required()
});

export default profilePhotoSchema;