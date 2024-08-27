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
        const barrier1 = await barrier.findOne({ where: { name: req.params.name } });
        if (!barrier1) throw new Error("Barrier not found");
        res.json(barrier1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBarrier = async (req, res) => {
    const { name, description, selected } = req.body;
    try {
        if (!name || !description || !selected) throw new Error("Name and description and selcted values are required");
        const newBarrier = await barrier.create({ name, description, selected });
        res.status(201).json(newBarrier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBarrier = async (req, res) => {
    const { name, description, selected } = req.body;
    try {
        if (!name || !description || !selected) throw new Error("Name and description and selcted values are required");
        const barrier1 = await barrier.findOne({ where: { name: req.params.name } });
        if (!req.params.name) throw new Error("must provide name in the params");
        if (barrier1) {
            barrier1.name = name;
            barrier1.description = description;
            barrier1.selected = selected;
            await barrier1.save();
            res.json(barrier1);
        } else {
            res.status(404).json({ message: "Barrier not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBarrier = async (req, res) => {
    try {
        if (!req.params.name) throw new Error("must provide name in the params");
        const barrier1 = await barrier.findOne({ where: { name: req.params.name } });
        if (barrier1) {
            await barrier1.destroy();
            res.json({ message: "Barrier deleted successfully" });
        } else {
            res.status(404).json({ message: "Barrier not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

