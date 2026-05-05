import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import { useEffect, useState } from "react";
import { getTasks, createTask } from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));

  // 🔥 Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 🔥 Create Task
  const handleCreateTask = async () => {
    try {
      await createTask(newTask);

      alert("Task Created ✅");

      setNewTask({ title: "", description: "" });

      fetchTasks(); // 🔥 refresh without reload
    } catch (err) {
      alert("Only Admin can create task ❌");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6 space-y-6">

          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard Overview
          </h1>

          {/* 🔐 ADMIN ONLY FORM */}
          {user?.role === "admin" && (
            <div className="bg-white p-5 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-3">
                Create Task
              </h2>

              <input
                type="text"
                placeholder="Task Title"
                value={newTask.title}
                className="w-full mb-3 p-2 border rounded"
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Description"
                value={newTask.description}
                className="w-full mb-3 p-2 border rounded"
                onChange={(e) =>
                  setNewTask({ ...newTask, description: e.target.value })
                }
              />

              <button
                onClick={handleCreateTask}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Create Task
              </button>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h2>Total Tasks</h2>
              <p className="text-2xl font-bold mt-2">{tasks.length}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h2>Completed</h2>
              <p className="text-2xl text-green-600 mt-2">
                {tasks.filter(t => t.status === "Completed").length}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h2>Pending</h2>
              <p className="text-2xl text-red-500 mt-2">
                {tasks.filter(t => t.status === "Pending").length}
              </p>
            </div>
          </div>

          {/* Tasks */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Recent Tasks
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  title={task.title}
                  status={task.status}
                  assignedTo={task.assignedTo?.name || "Unknown"}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}