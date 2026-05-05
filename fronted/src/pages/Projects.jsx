import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";

export default function Projects() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Projects</h1>

          {/* Project 1 */}
          <div className="bg-white p-5 rounded-xl shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Project: Task Manager App
            </h2>

            <div className="grid grid-cols-3 gap-4">
              <TaskCard 
                title="Design UI" 
                status="Completed" 
                assignedTo="Saif" 
              />

              <TaskCard 
                title="Build Backend" 
                status="Pending" 
                assignedTo="Ali" 
              />

              <TaskCard 
                title="Connect API" 
                status="Overdue" 
                assignedTo="Ahmed" 
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
              Project: E-commerce Website
            </h2>

            <div className="grid grid-cols-3 gap-4">
              <TaskCard 
                title="Create Product Page" 
                status="Pending" 
                assignedTo="Saif" 
              />

              <TaskCard 
                title="Payment Integration" 
                status="Pending" 
                assignedTo="Ali" 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}