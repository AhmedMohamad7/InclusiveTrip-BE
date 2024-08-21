import e from "express";
import user from "../models/usersModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await user.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => {
    const { username } = req.params;
    try {
        const userToGet = await user.findOne({ where: { username } });
        if (!userToGet) throw new Error('User not found');
        res.status(200).json(userToGet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const { username, firstName, lastName, email, password, roleId = 3, profilePhoto, blocked = false } = req.body;
    try {
        // Existiert die email bereits?
        const existingUser = await user.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }


        const newUser = await user.create({ username, firstName, lastName, email, password, roleId, profilePhoto, blocked });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { username } = req.params;
    const { userName, firstName, lastName, email, password, roleId, profilePhoto, blocked } = req.body;
    try {
        const userToUpdate = await user.findOne({ where: { username } });
        if (!userToUpdate) throw new Error('User not found');
        userToUpdate.userName = userName;
        userToUpdate.firstName = firstName;
        userToUpdate.lastName = lastName;
        userToUpdate.email = email;
        userToUpdate.password = password;
        userToUpdate.roleId = roleId;
        userToUpdate.profilePhoto = profilePhoto;
        userToUpdate.blocked = blocked;
        await userToUpdate.save();
        res.status(200).json(userToUpdate);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    const { username } = req.params;
    try {
        const userToDelete = await user.findOne({ where: { username } });
        if (!userToDelete) throw new Error('User not found');
        await userToDelete.destroy();

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}