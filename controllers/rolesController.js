import role from "../models/rolesModel.js";


export const getRoles = async (req, res) => {
    try {
        const roles = await role.findAll();
        res.status(200).json(roles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getRole = async (req, res) => {
    const { id } = req.params;
    try {
        const roleToGet = await role.findByPk(id);
        res.status(200).json(roleToGet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRole = async (req, res) => {
    const { roleType } = req.body;
    try {
        const newRole = await role.create({ roleType });
        res.status(201).json(newRole);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateRole = async (req, res) => {
    const { id } = req.params;
    const { roleType } = req.body;
    try {
        const roleToUpdate = await role.findByPk(id);
        roleToUpdate.roleType = roleType;
        await roleToUpdate.save();
        res.status(200).json(roleToUpdate);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const deleteRole = async (req, res) => {
    const { id } = req.params;
    try {
        await role.destroy({ where: { id } });
        res.status(200).json({ message: 'Role deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}