import placeCategory from "../models/placeCategoriesModel.js";


export const getPlaceCategories = async (req, res) => {
    try {
        const placeCategories = await placeCategory.findAll();
        res.status(200).json(placeCategories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPlaceCategory = async (req, res) => {
    const { name } = req.params;
    try {
        if (!name) throw new Error("please provide type in the params");
        const placeCategoryToGet = await placeCategory.findOne({ where: { name } });
        if (!placeCategoryToGet) throw new Error("No place category found.");
        res.status(200).json(placeCategoryToGet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getSelectedPlaceCategories = async (req, res) => {
    try {
        const placeCategories = await placeCategory.findAll({ where: { selected: true } });
        res.status(200).json(placeCategories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPlaceCategory = async (req, res) => {
    const {name,icon,description,selected} = req.body;
    try {
        const newPlaceCategory = await placeCategory.create({ name,icon,description,selected });
        res.status(201).json(newPlaceCategory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePlaceCategory = async (req, res) => {
    const { id } = req.params;
    const { name,icon,description,selected } = req.body;
    try {
        if (!name) throw new Error("please provide type in the body");
        if (!id) throw new Error("please provide id in the params");
        const updatedPlaceCategory = await placeCategory.update({ name,icon,description,selected }, { where: { id } });
        if (!updatedPlaceCategory) throw new Error("An error occurred while updating the place category."); 
        res.status(200).json(updatedPlaceCategory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deletePlaceCategory = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) throw new Error("please provide id in the params");
        const placeCategory1 = await placeCategory.findOne({ where: { id } });
        if (!placeCategory1) throw new Error("Place category not found.");
        await placeCategory1.destroy();
        res.status(200).json({ message: "Place category deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}