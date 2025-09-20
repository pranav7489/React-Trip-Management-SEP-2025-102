import React from "react";
import TripForm from "../components/TripForm.jsx";
import { useNavigate } from "react-router-dom";

const AddTrip = ({ trips, setTrips }) => {
  const navigate = useNavigate();

  const handleAddTrip = (trip) => {
    const newTrip = {
      id: trips.length > 0 ? trips[trips.length - 1].id + 1 : 1,
      ...trip,
    };
    setTrips([...trips, newTrip]);
    alert("Trip added successfully!");
    navigate("/");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Trip</h1>
      <TripForm onSubmit={handleAddTrip} />
    </div>
  );
};

export default AddTrip;