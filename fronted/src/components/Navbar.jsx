import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔥 clear data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // 🔄 redirect to login
    navigate("/");
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      
      <h1 className="font-bold text-lg text-gray-800">
        Task Manager
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>

    </div>
  );
}