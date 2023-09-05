import User from "../Models/userModel.js";
import { deleteOne, updateOne, getOne, getAll } from "./handleFactory.js";

//Get All Users
export const getUsers = getAll(User);
// Get User
export const getUser = getOne(User);
//Update User
export const updateUser = updateOne(User);
//Delete User
export const deleteUser = deleteOne(User);
