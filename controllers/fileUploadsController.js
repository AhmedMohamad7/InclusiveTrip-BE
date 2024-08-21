import fileUpload from "../models/fileUploadsModel.js";
import { deleteFile1 } from "./file.js";


export const createFile = async (req, res) => {
    try {
        const files = req.files;
        if (!files || files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded' });
        }
        const savedFiles = [];
        for (const file of files) {
        const newFile = new fileUpload({
        fileName: file.filename, 
        fileType: file.mimetype,
        fileSize: file.size,
        filePath: `http://localhost:3000/uploads/reviewsPhotos/${file.filename}`, 
        reviewId: req.body.reviewId,  
        });
        const savedFile = await newFile.save();
            savedFiles.push(savedFile);
        }

        res.status(201).json(savedFiles);
    }   catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getFiles = async (req, res) => {
    try {
        const files = await fileUpload.findAll();
        res.status(200).json(files);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getFile = async (req, res) => {
    try {
        const file = await fileUpload.findOne({ where: { fileName: req.params.filename } });
        if (!file) throw new Error("File not found");
        res.status(200).json(file);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteFile = async (req, res) => {
    try {
        const file = await fileUpload.findOne({ where: { fileName: req.params.filename } });
        if (!file) throw new Error("File not found");
        await file.destroy();
        deleteFile1(req.params.filename);
        res.status(200).json({ message: "File deleted" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateFile = async (req, res) => {
    try {
        const file = await fileUpload.findOne({ where: { fileName: req.params.filename } });
        if (!file) throw new Error("File not found");
        file.fileName = req.body.fileName;
        file.fileType = req.body.fileType;
        file.fileSize = req.body.fileSize;
        file.filePath = req.body.filePath;
        await file.save();
        res.status(200).json(file);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

