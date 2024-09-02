
import review from "../models/reviewsModel.js";


export const getReviews = async (req, res) => {
    try {
        const reviews = await review.findAll();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getReviewsCount = async (req, res) => {
    try {
        const reviews = await review.count();
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
    const { placeId } = req.params;
    try {
        if (!placeId) throw new Error("Please provide placeId in the params");
        const reviewToGet = await review.findOne({ where: { placeId } });
        if (!reviewToGet) throw new Error("No review found.");
        res.status(200).json(reviewToGet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createReview = async (req, res) => {
    const { placeName, placeId, comment, placeCategoryId } = req.body;
    const { userId } = req;
    try {
        if (!placeId || !comment || !placeCategoryId) throw new Error("Please provide placeId and comment and placeCategoryId in the body");
        if (!userId) throw new Error("Please login first");
        const hasTheUserReviewed = await review.findOne({ where: { placeId, userId } });
        if (hasTheUserReviewed) throw new Error("You have already reviewed this place.");
        const newReview = await review.create({ placeName, placeId, comment, placeCategoryId, userId });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateReview = async (req, res) => {
    const { review } = req.params;
    const { placeName, placeId, comment, placeCategoryId } = req.body;
    const { userId } = req;
    try {
        if (!placeId || !comment || !placeCategoryId) throw new Error("Please provide placeId and comment and placeCategoryId in the body");
        if (!placeId) throw new Error("please provide placeId in the params");
        if (!userId) throw new Error("Please login first");
        const updatedReview = await review.findOne({ where: { id: review } });
        if (!updatedReview) throw new Error("Review not found.");
        if (updatedReview.userId !== userId) throw new Error("You are not allowed to update this review.");
        await updatedReview.update({ placeName, placeId, comment, placeCategoryId, userId });
        await updatedReview.save();
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteReview = async (req, res) => {
    const { placeId } = req.params;
    const { userId } = req;
    try {
        if (!placeId) throw new Error("please provide placeId in the params");
        if (!userId) throw new Error("Please login first");
        const review1 = await review.findOne({ where: { placeId: placeId } });
        if (!review1) throw new Error("Review not found.");
        if (review1.userId !== userId) throw new Error("You are not allowed to delete this review.");
        await review1.destroy();
        res.status(200).json({ message: "Review deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}