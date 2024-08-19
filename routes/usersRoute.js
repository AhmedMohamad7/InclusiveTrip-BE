import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/usersController.js";



const usersRoute = Router();


usersRoute.get('/', getUsers);
usersRoute.get('/:id', getUser);
usersRoute.post('/', createUser);
usersRoute.put('/:id', updateUser);
usersRoute.delete('/:id', deleteUser);

export default usersRoute;