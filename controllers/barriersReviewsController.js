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
        if (!req.params.id) throw new Error("must provide id in the params");
        const barrierReview1 = await barrierReview.findOne({ where: { id: req.params.id } });
        if (!barrierReview1) throw new Error("Barrier Review not found");
        res.status(200).json(barrierReview1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBarrierReview = async (req, res) => {
    const { barrierId, reviewId, reviews } = req.body;
    try {
        if (!barrierId || !reviewId || !reviews) throw new Error("BarrierId, reviewId and reviews are required");
        const newBarrierReview = await barrierReview.create({ barrierId, reviewId, reviews });
        res.status(201).json(newBarrierReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBarrierReview = async (req, res) => {
    const { barrierId, reviewId, reviews } = req.body;
    try {
        if (!barrierId || !reviewId || !reviews) throw new Error("BarrierId, reviewId and reviews are required");
        if (!req.params.id) throw new Error("must provide id in the params");
        const barrierReview1 = await barrierReview.findOne({ where: { id: req.params.id } });
        if (barrierReview1) {
            barrierReview1.barrierId = barrierId;
            barrierReview1.reviewId = reviewId;
            barrierReview1.reviews = reviews;
            await barrierReview1.save();
            res.json(barrierReview1);
        } else {
            res.status(404).json({ message: "Barrier Review not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBarrierReview = async (req, res) => {
    try {
        if (!req.params.id) throw new Error("must provide id in the params");
        const barrierReview1 = await barrierReview.findOne({ where: { id: req.params.id } });
        if (barrierReview1) {
            await barrierReview1.destroy();
            res.json({ message: "Barrier Review deleted successfully" });
        } else {
            res.status(404).json({ message: "Barrier Review not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};