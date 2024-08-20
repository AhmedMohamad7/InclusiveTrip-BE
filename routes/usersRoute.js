import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/usersController.js";
import validateSchema from "../middlewares/validateSchema.js";
import usersSchema from "../schemas/usersSchema.js";


const usersRoute = Router();


usersRoute.get('/', getUsers);
usersRoute.get('/:username', getUser);
usersRoute.post('/',validateSchema(usersSchema), createUser);
usersRoute.put('/:username',validateSchema(usersSchema), updateUser);
usersRoute.delete('/:username', deleteUser);

export default usersRoute;