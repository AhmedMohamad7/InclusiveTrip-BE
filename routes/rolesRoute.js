import { Router } from "express";

import { getRoles, getRole, createRole, updateRole, deleteRole } from "../controllers/rolesController.js";


const rolesRoute = Router();


rolesRoute.get('/', getRoles);
rolesRoute.get('/:id', getRole);
rolesRoute.post('/', createRole);
rolesRoute.put('/:id', updateRole);
rolesRoute.delete('/:id', deleteRole);


export default rolesRoute;