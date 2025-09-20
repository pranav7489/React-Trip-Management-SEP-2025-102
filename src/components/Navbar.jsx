import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="font-bold text-xl">Trip Management</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/add" className="hover:underline">Add Trip</Link>
      </div>
    </nav>
  );
};

export default Navbar;