import Joi from "joi";

const fileUploadSchema = Joi.object({
    fileName: Joi.string().required(),
    fileType: Joi.string().required(),
    fileSize: Joi.number().required(),
    filePath: Joi.string().required(), 
    reviewId: Joi.number().required(), 
});

export default fileUploadSchema;