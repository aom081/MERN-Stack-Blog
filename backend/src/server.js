import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
import UserRouter from "./routes/User.router.js";
import PostRouter from "./routes/Post.router.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/se-npru-blog";

app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Welcome to the SE NPRU Blog API");
});

// Mount user routes
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/post", PostRouter);

if (!MONGO_URI) {
  console.error("MONGO_URI is not defined in environment variables.");
} else {
  connectDB(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
      console.error("Failed to connect to MongoDB:", err);
    });
}

app.listen(PORT, () => {
  console.log(`API server listening on port http://localhost:${PORT}`);
});
