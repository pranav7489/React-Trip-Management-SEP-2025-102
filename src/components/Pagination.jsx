import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded border ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
      >
        Previous
      </button>
      <span className="px-3 py-1 border rounded bg-white">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded border ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;