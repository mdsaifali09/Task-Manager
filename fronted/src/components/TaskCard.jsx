export default function TaskCard({ title, status, assignedTo }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition border-l-4 border-blue-500">

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">
        {title || "No Title"}
      </h3>

      {/* Assigned User */}
      <p className="text-sm text-gray-500 mt-1">
        Assigned to: {assignedTo || "Unassigned"}
      </p>

      {/* Status Badge */}
      <span
        className={`inline-block mt-3 px-3 py-1 text-sm rounded-full ${
          status === "Completed"
            ? "bg-green-100 text-green-600"
            : status === "Pending"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        {status || "Unknown"}
      </span>

    </div>
  );
}