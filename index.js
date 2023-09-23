import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import servicesRoutes from "./Routes/servicesRoutes.js";
import packagesRoutes from "./Routes/packagesRoutes.js";
import reviewRoutes from "./Routes/reviewRoutes.js";
import { globalErrorHandler } from "./Controllers/errorController.js";
import stripeRoutes from "./Routes/stripe.js";
import cors from "cors";
const app = express();


app.use(cors());
dotenv.config();
//connecting to mongodb
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
  });

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

//Middleware
app.use(express.json());

//Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/packages", packagesRoutes);
app.use("/api/v1/services", servicesRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/stripe", stripeRoutes);
app.use(globalErrorHandler);
