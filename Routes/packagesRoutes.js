import express from "express";
import {
  createPackage,
  deletePackage,
  getAllPackages,
  getPackages,
  updatePackage
} from "../Controllers/packagesController.js";
import { protect ,restrictTo} from "../Controllers/authController.js";

const router = express.Router();

router.route("/").post(createPackage).get(protect,getPackages);
router.route("/:id").put(updatePackage).delete(restrictTo('admin'),deletePackage)
router.get("/:serviceName",getAllPackages)

// router.route("/:id").put(updateService).delete(deleteService).get(getService);

export default router;