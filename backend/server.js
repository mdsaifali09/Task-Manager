import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express(); // 🔥 pehle app banao

app.use(cors());
app.use(express.json());

// ✅ Routes yaha lagao (app ke baad)
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// DB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});