import express from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviews,
  updateReview,
} from "../Controllers/reviewController.js";
const router = express.Router();

router.route("/").get(getReviews).post(createReview);
router.route("/:id").put(updateReview).delete(deleteReview);

export default router;
