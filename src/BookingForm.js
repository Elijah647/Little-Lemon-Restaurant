import React, { useState } from "react";

const BookingForm = ({ availableTimes, updateAvailableTimes, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState(""); // State for the occasion

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      date,
      time,
      guests,
      occasion, // Include the occasion in formData
    };

    console.log("Form Data:", formData); // Log the form data
    submitForm(formData); // Pass the form data to the parent component
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <label htmlFor="date">Select Date</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)} // Use setDate to update the date
        required
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} // Styling for input
      />

      <label htmlFor="time">Select Time</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)} // Use setTime to update the time
        required
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} // Styling for select
      >
        <option value="">Select a time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)} // Use setGuests to update the guests count
        min="1"
        max="10" // Assuming a max of 10 guests; adjust as necessary
        required
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} // Styling for input
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)} // Update state on change
        required
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} // Styling for select
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Business Meeting">Business Meeting</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit" style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
        Submit
      </button>
    </form>
  );
};

export default BookingForm;