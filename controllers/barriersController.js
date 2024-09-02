import barrier from "../models/barriersModel.js";


export const getBarriers = async (req, res) => {
    try {
        const barriers = await barrier.findAll();
        res.status(200).json(barriers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSelectedBarriers = async (req, res) => {
    try {
        const barriers = await barrier.findAll({ where: { selected: true } });
        res.status(200).json(barriers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
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
        const newBarrier = await barrier.create({ name, description, selected });
        res.status(201).json(newBarrier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBarrier = async (req, res) => {
    const { name, description, selected } = req.body;
    try {
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
        if (!req.params.barrier) throw new Error("must provide name in the params");
        const barrier1 = await barrier.findOne({ where: { id: req.params.barrier } });
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

