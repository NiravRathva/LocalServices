import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
const app = express();
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