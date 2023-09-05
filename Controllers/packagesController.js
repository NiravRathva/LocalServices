import { catchAsync } from "../Utils/catchAsnc.js";
import Packages from "../Models/packagesModel.js";

// Create Package
export const createPackage = catchAsync(async (req, res, next) => {
  const Package = await Packages.create({
    serviceName: req.body.serviceName,
    name: req.body.name,
    rating: req.body.rating,
    price: req.body.price,
    time: req.body.time,
    desc: req.body.desc,
  });
  res.status(201).json(Package);
});
//Get All Packages
export const getPackages = catchAsync(async (req, res, next) => {
  const Package = await Packages.find();
  res.status(200).json(Package);
});

// Get All Packages
export const getAllPackages = catchAsync(async (req, res, next) => {
  const packages = await Packages.find({ serviceName: req.params.serviceName }).populate("reviews");
  res.status(200).json(packages);
});

//Update Package
export const updatePackage = catchAsync(async (req, res, next) => {
  const Package = await Packages.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(Package);
});
//Delete Package
export const deletePackage = catchAsync(async (req, res, next) => {
  const Package = await Packages.findByIdAndDelete(req.params.id);
  res.status(200).json({ msg: "package has been deleted" });
});
