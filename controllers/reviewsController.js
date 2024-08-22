
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
    const {gpsCode } = req.params;
    try {
        const reviewToGet = await review.findOne({ where: { gpsCode } });
        if (!reviewToGet) throw new Error("No review found.");
        res.status(200).json(reviewToGet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createReview = async (req, res) => {
    const { gpsCode, comment ,placeCategoriesId} = req.body;
    const { userId } = req;
    try {
        const newReview = await review.create({ gpsCode, comment,placeCategoriesId,userId });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateReview = async (req, res) => {
    const { gpscode } = req.params;
    const { gpsCode, comment ,placeCategoriesId} = req.body;
    const { userId } = req;
    try {
        const updatedReview = await review.findOne({ where: { gpsCode:gpscode } });
        if (!updatedReview) throw new Error("Review not found.");
        if(updatedReview.userId !== userId) throw new Error("You are not allowed to update this review.");
        await updatedReview.update({ gpsCode, comment,placeCategoriesId,userId });
        await updatedReview.save();
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteReview = async (req, res) => {
    const { gpscode } = req.params;
    const { userId } = req;
    try {
        const review1 = await review.findOne({ where: { gpsCode:gpscode } });
        if (!review1) throw new Error("Review not found.");
        if(review1.userId !== userId) throw new Error("You are not allowed to delete this review.");
        await review1.destroy();
        res.status(200).json({ message: "Review deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}