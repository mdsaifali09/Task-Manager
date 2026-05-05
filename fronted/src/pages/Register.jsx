import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser(form);

      alert("Registered Successfully ✅");

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-400">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account 🚀
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 border rounded-lg"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button 
          onClick={handleRegister}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
        >
          Register
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-purple-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}