import express from "express";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

import {
  createTask,
  getTasks,
  updateTask
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.post("/", protect, isAdmin); // only admin create
router.get("/", protect);           // all users
router.put("/:id", protect);        // update

export default router;