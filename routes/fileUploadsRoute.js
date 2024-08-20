import { Router } from "express";

import { createFile,getFile,getFiles,deleteFile,updateFile } from "../controllers/fileUploadsController.js";
import {upload} from "../controllers/file.js";
import validateSchema from "../middlewares/validateSchema.js";
import fileUploadSchema from "../schemas/fileUploadSchema.js";

const FileRouter = Router();

FileRouter.post("/", upload.single("file"), createFile);
FileRouter.get("/", getFiles);
FileRouter.get("/:filename", getFile);
FileRouter.delete("/:filename", deleteFile);
FileRouter.put("/:filename",validateSchema(fileUploadSchema), updateFile);

export default FileRouter;