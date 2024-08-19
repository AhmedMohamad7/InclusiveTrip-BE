import barrier from "../models/barriersModel.js";


export const getBarriers = async (req, res) => {
    try {
        const barriers = await barrier.findAll();
        res.json(barriers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBarrier = async (req, res) => {
    try {
        const barrier = await barrier.findByPk(req.params.id);
        res.json(barrier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBarrier = async (req, res) => {
    const { name, description, selected } = req.body;
    try {
        const newBarrier = await barrier.create({ name, description, selected });
        res.status(201).res.json(newBarrier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBarrier = async (req, res) => {
    const { name, description, selected } = req.body;
    try {
        const barrier = await barrier.findByPk(req.params.id);
        if (barrier) {
            barrier.name = name;
            barrier.description = description;
            barrier.selected = selected;
            await barrier.save();
            res.json(barrier);
        } else {
            res.status(404).json({ message: "Barrier not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBarrier = async (req, res) => {
    try {
        const barrier = await barrier.findByPk(req.params.id);
        if (barrier) {
            await barrier.destroy();
            res.json({ message: "Barrier deleted successfully" });
        } else {
            res.status(404).json({ message: "Barrier not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

