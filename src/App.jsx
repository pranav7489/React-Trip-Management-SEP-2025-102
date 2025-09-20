import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddTrip from "./pages/AddTrip.jsx";
import EditTrip from "./pages/EditTrip.jsx";
import { tripsData as initialTrips } from "./data/trips.js";

const App = () => {
  const [trips, setTrips] = useState(initialTrips);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard trips={trips} setTrips={setTrips} />} />
          <Route path="/add" element={<AddTrip trips={trips} setTrips={setTrips} />} />
          <Route path="/edit/:id" element={<EditTrip trips={trips} setTrips={setTrips} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;