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
    const { id } = req.params;
    try {
        const placeCategoryToGet = await placeCategory.findByPk(id);
        res.status(200).json(placeCategoryToGet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPlaceCategory = async (req, res) => {
    const { type } = req.body;
    try {
        const newPlaceCategory = await placeCategory.create({ type});
        res.status(201).json(newPlaceCategory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePlaceCategory = async (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    try {
        const updatedPlaceCategory = await placeCategory.update({ type }, { where: { id } });
        res.status(200).json(updatedPlaceCategory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deletePlaceCategory = async (req, res) => {
    const { id } = req.params;
    try {
        await placeCategory.destroy({ where: { id } });
        res.status(200).json({ message: "Place category deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}