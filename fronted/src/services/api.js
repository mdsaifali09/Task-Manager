import axios from "axios";

// ✅ Base API
const API = axios.create({
   baseURL:"https://task-manager-500v.onrender.com",
 // baseURL: "http://localhost:5000/api",
});

// ✅ Token automatically attach karega
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`; // 🔥 important
  }

  return req;
});

// ================= AUTH APIs =================

// Register
export const registerUser = (data) =>
  API.post("/auth/register", data);

// Login
export const loginUser = (data) =>
  API.post("/auth/login", data);

// ================= TASK APIs =================

// Get all tasks
export const getTasks = () =>
  API.get("/tasks");

// Create task (admin)
export const createTask = (data) =>
  API.post("/tasks", data);

// Update task status
export const updateTask = (id, data) =>
  API.put(`/tasks/${id}`, data);

export default API;