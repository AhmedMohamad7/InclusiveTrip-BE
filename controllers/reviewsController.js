
import review from "../models/reviewsModel.js";
import user from "../models/usersModel.js";
export const getReviews = async (req, res) => {
    try {
        const reviews = await review.findAll();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getReviewsByUser = async (req, res) => {
    const { userId } = req;
    try {
        if (!userId) throw new Error("Please login first");
        const reviews = await review.findAll({ where: { userId } });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getReview = async (req, res) => {
    const {gpsCode } = req.params;
    try {
        if (!gpsCode) throw new Error("Please provide gpsCode in the params");
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
        if (!gpsCode || !comment || !placeCategoriesId) throw new Error("Please provide gpsCode and comment and placeCategoryId in the body");
        if (!userId) throw new Error("Please login first");
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
        if (!gpsCode || !comment || !placeCategoriesId) throw new Error("Please provide gpsCode and comment and placeCategoryId in the body");
        if (!gpscode) throw new Error("please provide gpscode in the params");
        if (!userId) throw new Error("Please login first");
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
        if (!gpscode) throw new Error("please provide gpscode in the params");
        if (!userId) throw new Error("Please login first");
        const review1 = await review.findOne({ where: { gpsCode:gpscode } });
        if (!review1) throw new Error("Review not found.");
        if(review1.userId !== userId) throw new Error("You are not allowed to delete this review.");
        await review1.destroy();
        res.status(200).json({ message: "Review deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}