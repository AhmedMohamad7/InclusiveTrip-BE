import review from "../models/reviewsModel.js";

export const getReviews = async (req, res) => {
    try {
        const reviews = await review.findAll();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getReview = async (req, res) => {
    const { id } = req.params;
    try {
        const reviewToGet = await review.findByPk(id);
        res.status(200).json(reviewToGet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createReview = async (req, res) => {
    const { gpsCode, comment ,userId,placeCategoriesId} = req.body;
    try {
        const newReview = await review.create({ gpsCode, comment,userId,placeCategoriesId });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateReview = async (req, res) => {
    const { id } = req.params;
    const { gpsCode, comment ,userId,placeCategoriesId} = req.body;
    try {
        const updatedReview = await review.update({ gpsCode, comment ,userId,placeCategoriesId }, { where: { id } });
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        await review.destroy({ where: { id } });
        res.status(200).json({ message: "Review deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}