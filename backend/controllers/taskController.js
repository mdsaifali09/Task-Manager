import Task from "../models/Task.js";

// CREATE TASK
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL TASKS
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignedTo", "name");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE TASK STATUS
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};