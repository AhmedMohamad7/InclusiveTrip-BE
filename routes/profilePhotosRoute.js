import { Router } from "express";

import { createProfilePhoto,getProfilePhoto,deleteProfilePhoto,updateProfilePhoto } from "../controllers/profilePhotosController.js";
import { uploadProfilePhotos } from "../controllers/profileFiles.js";
import validateSchema from "../middlewares/validateSchema.js";
import profilePhotoSchema from "../schemas/profilePhotoSchema.js";
const ProfilePhotosRouter = Router();


ProfilePhotosRouter.post("/:userid", uploadProfilePhotos.single("file"), createProfilePhoto);

ProfilePhotosRouter.get("/:userid", getProfilePhoto);

ProfilePhotosRouter.delete("/:userid", deleteProfilePhoto);

ProfilePhotosRouter.put("/:userid",validateSchema(profilePhotoSchema), updateProfilePhoto);


export default ProfilePhotosRouter;