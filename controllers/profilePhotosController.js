import users from "../models/usersModel.js";

import { deleteFile2 } from "./profileFiles.js";


export const createProfilePhoto = async (req, res) => {
    try{
        const user = await users.findOne({ where: { id: req.params.userid } });
        if (!user) throw new Error("User not found");
        user.profilePhoto = `http://localhost:3000/uploads/profilePhotos/${req.file.filename}`;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getProfilePhoto = async (req, res) => {
    try {
        const user = await users.findOne({ where: { id: req.params.userid } });
        if (!user) throw new Error("User not found");
        res.status(200).json(user.profilePhoto);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteProfilePhoto = async (req, res) => {
    try {
        const user = await users.findOne({ where: { id: req.params.userid } });
        if (!user) throw new Error("User not found");
        user.profilePhoto = null;
        await user.save();
        deleteFile2(req.params.id);
        res.status(200).json({ message: "Profile photo deleted" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateProfilePhoto = async (req, res) => {
    try {
        const user = await users.findOne({ where: { id: req.params.userid } });
        if (!user) throw new Error("User not found");
        user.profilePhoto = req.body.profilePhoto;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


