import React from "react";

const TripList = ({ trips, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Destination</th>
            <th className="py-2 px-4 border">Start Date</th>
            <th className="py-2 px-4 border">End Date</th>
            <th className="py-2 px-4 border">Price ($)</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4">No trips found.</td>
            </tr>
          ) : (
            trips.map((trip) => (
              <tr key={trip.id} className="text-center border-t">
                <td className="py-2 px-4 border">{trip.destination}</td>
                <td className="py-2 px-4 border">{trip.startDate}</td>
                <td className="py-2 px-4 border">{trip.endDate}</td>
                <td className="py-2 px-4 border">{trip.price}</td>
                <td className="py-2 px-4 border">{trip.status}</td>
                <td className="py-2 px-4 border space-x-2">
                  <button
                    onClick={() => onEdit(trip.id)}
                    className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(trip.id)}
                    className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TripList;