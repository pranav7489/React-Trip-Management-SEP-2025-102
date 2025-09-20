import React, { useState, useEffect } from "react";

const TripForm = ({ initialData, onSubmit }) => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("PLANNED");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setDestination(initialData.destination);
      setStartDate(initialData.startDate);
      setEndDate(initialData.endDate);
      setPrice(initialData.price);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const validate = () => {
    const newErrors = {};
    if (!destination) newErrors.destination = "Destination is required";
    if (!startDate) newErrors.startDate = "Start date is required";
    if (!endDate) newErrors.endDate = "End date is required";
    if (startDate && endDate && startDate > endDate) newErrors.endDate = "End date must be after start date";
    if (!price) newErrors.price = "Price is required";
    else if (isNaN(price) || price <= 0) newErrors.price = "Price must be a positive number";
    if (!status) newErrors.status = "Status is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        destination,
        startDate,
        endDate,
        price: Number(price),
        status,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Destination</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.destination && <p className="text-red-500 text-sm">{errors.destination}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Price ($)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="PLANNED">PLANNED</option>
          <option value="ONGOING">ONGOING</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default TripForm;