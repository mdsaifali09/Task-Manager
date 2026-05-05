import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Menu</h2>

      <ul className="space-y-4">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </div>
  );
}