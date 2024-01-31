import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

//import routes
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app is running on ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
