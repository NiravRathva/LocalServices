import { catchAsync } from "../Utils/catchAsnc.js";
import Reviews from "../Models/reviewModel.js";
import { deleteOne, updateOne, createOne } from "./handleFactory.js";
// Create review
export const createReview = createOne(Reviews);
//Get All Reviews
export const getReviews = catchAsync(async (req, res, next) => {
  const review = await Reviews.find();
  res.status(200).json({ result: review.length, review });
});

// Get All Reviews for specific service
export const getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Reviews.find({ service: req.params.service });
  res.status(200).json(reviews);
});
// Get All Reviews for specific package
export const getPackageReviews = catchAsync(async (req, res, next) => {
  const reviews = await Reviews.find({ package: req.params.package });
  res.status(200).json(reviews);
});

//Update Review
export const updateReview = updateOne(Reviews);
//Delete review
export const deleteReview = deleteOne(Reviews);
