import express from "express";
import {
  getServices,
  getService,
  updateService,
  deleteService,
  createService,
} from "../Controllers/servicesController.js";

const router = express.Router();

router.route("/").post(createService).get(getServices);
router.route("/:id").put(updateService).delete(deleteService).get(getService);

export default router;
