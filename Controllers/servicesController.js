import Services from "../Models/servicesModel.js";
import { deleteOne, updateOne, createOne, getOne ,getAll} from "./handleFactory.js";

// Create Service
export const createService = createOne(Services);
//Get All Services
export const getServices = getAll(Services)
// Get Service
export const getService = getOne(Services);
//Update Service
export const updateService = updateOne(Services);
//Delete Service
export const deleteService = deleteOne(Services);
