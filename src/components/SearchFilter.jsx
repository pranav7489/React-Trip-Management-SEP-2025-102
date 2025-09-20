import React from "react";

const SearchFilter = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
      <input
        type="text"
        placeholder="Search by destination"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-2 md:mb-0 w-full md:w-1/2"
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/4"
      >
        <option value="">All Status</option>
        <option value="PLANNED">PLANNED</option>
        <option value="ONGOING">ONGOING</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
    </div>
  );
};

export default SearchFilter;