import React, { useState } from "react";
import TripList from "../components/TripList.jsx";
import SearchFilter from "../components/SearchFilter.jsx";
import Pagination from "../components/Pagination.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ trips, setTrips }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tripsPerPage = 5;
  const navigate = useNavigate();

  // Filter and search
  const filteredTrips = trips
    .filter((trip) =>
      trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((trip) => (statusFilter ? trip.status === statusFilter : true));

  // Sort
  if (sortBy === "price") {
    filteredTrips.sort((a, b) => a.price - b.price);
  } else if (sortBy === "startDate") {
    filteredTrips.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }

  // Pagination
  const totalPages = Math.ceil(filteredTrips.length / tripsPerPage);
  const startIndex = (currentPage - 1) * tripsPerPage;
  const currentTrips = filteredTrips.slice(startIndex, startIndex + tripsPerPage);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      setTrips(trips.filter((trip) => trip.id !== id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <div className="mb-4">
        <label className="mr-2 font-semibold">Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="">None</option>
          <option value="price">Price</option>
          <option value="startDate">Start Date</option>
        </select>
      </div>

      <TripList trips={currentTrips} onEdit={handleEdit} onDelete={handleDelete} />

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Dashboard;