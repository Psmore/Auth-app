import express, { urlencoded } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const __dirname = path.resolve();

const app = express();
app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "api", "dist", "index.html"))
});

//'mongodb://127.0.0.1:27017/Authapp'
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch(error => {
      console.log("connection failed!");
      console.log(error);
  });


app.use(express.json());
app.use(cookieParser());

app.listen(4000, () => {
    console.log(`listening on port 4000!`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        error: message,
        statusCode,
    });
});