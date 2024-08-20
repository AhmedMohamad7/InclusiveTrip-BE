import { where } from "sequelize";
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
    const { gpsCode, comment ,userId,placeCategoriesId} = req.body;
    try {
        const newReview = await review.create({ gpsCode, comment,userId,placeCategoriesId });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateReview = async (req, res) => {
    const { gpscode } = req.params;
    const { gpsCode, comment ,userId,placeCategoriesId} = req.body;
    try {
        const updatedReview = await review.update({ gpsCode, comment ,userId,placeCategoriesId }, { where: { gpsCode:gpscode } });
        if (!updatedReview) throw new Error("An error occurred while updating the review.");
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteReview = async (req, res) => {
    const { gpscode } = req.params;
    try {
        const review1 = await review.findOne({ where: { gpsCode:gpscode } });
        if (!review1) throw new Error("Review not found.");
        await review1.destroy();
        res.status(200).json({ message: "Review deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}