import barrierReview from "../models/barriersReviewsModel.js";

export const getBarriersReviews = async (req, res) => {
    try {
        const barriersReviews = await barrierReview.findAll();
        res.json(barriersReviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBarrierReview = async (req, res) => {
    try {
        const barrierReview = await barrierReview.findByPk(req.params.id);
        res.json(barrierReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBarrierReview = async (req, res) => {
    const { barrierId, reviewId, reviews } = req.body;
    try {
        const newBarrierReview = await barrierReview.create({ barrierId, reviewId, reviews });
        res.status(201).res.json(newBarrierReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBarrierReview = async (req, res) => {
    const { barrierId, reviewId, reviews } = req.body;
    try {
        const barrierReview = await barrierReview.findByPk(req.params.id);
        if (barrierReview) {
            barrierReview.barrierId = barrierId;
            barrierReview.reviewId = reviewId;
            barrierReview.reviews = reviews;
            await barrierReview.save();
            res.json(barrierReview);
        } else {
            res.status(404).json({ message: "Barrier Review not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBarrierReview = async (req, res) => {
    try {
        const barrierReview = await barrierReview.findByPk(req.params.id);
        if (barrierReview) {
            await barrierReview.destroy();
            res.json({ message: "Barrier Review deleted successfully" });
        } else {
            res.status(404).json({ message: "Barrier Review not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};