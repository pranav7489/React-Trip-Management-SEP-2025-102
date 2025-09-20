import React, { useState, useEffect } from "react";
import TripForm from "../components/TripForm.jsx";
import { useParams, useNavigate } from "react-router-dom";

const EditTrip = ({ trips, setTrips }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tripToEdit, setTripToEdit] = useState(null);

  useEffect(() => {
    const trip = trips.find((t) => t.id === Number(id));
    if (trip) {
      setTripToEdit(trip);
    } else {
      alert("Trip not found");
      navigate("/");
    }
  }, [id, trips, navigate]);

  const handleEditTrip = (updatedTrip) => {
    const updatedTrips = trips.map((trip) =>
      trip.id === Number(id) ? { ...trip, ...updatedTrip } : trip
    );
    setTrips(updatedTrips);
    alert("Trip updated successfully!");
    navigate("/");
  };

  if (!tripToEdit) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Trip</h1>
      <TripForm initialData={tripToEdit} onSubmit={handleEditTrip} />
    </div>
  );
};

export default EditTrip;