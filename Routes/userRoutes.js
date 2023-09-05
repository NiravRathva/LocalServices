import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../Controllers/userController.js";
// import { verifyToken } from "../Controllers/authController.js";


const router = express.Router();

router.get("/",getUsers)
router.route("/:id").put(updateUser).delete(deleteUser).get(getUser);

export default router;
