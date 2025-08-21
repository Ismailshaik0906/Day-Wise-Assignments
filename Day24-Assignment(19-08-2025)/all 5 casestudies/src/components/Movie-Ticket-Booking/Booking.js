import React, { useState } from "react";
import SeatSelector from "./SeatSelector";
import Summary from "./Summary";

const MovieBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const movie = {
    title: "Avengers: Endgame",
    timing: "7:00 PM",
    pricePerSeat: 200,
  };

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const confirmBooking = () => {
    if (selectedSeats.length > 0) {
      setIsConfirmed(true);
    } else {
      alert("Please select at least one seat!");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1> Movie Ticket Booking</h1>
      <h2>{movie.title}</h2>
      <p>Time: {movie.timing} | Price per seat: ₹{movie.pricePerSeat}</p>

      <SeatSelector selectedSeats={selectedSeats} toggleSeat={toggleSeat} />

      <Summary
        selectedSeats={selectedSeats}
        pricePerSeat={movie.pricePerSeat}
        isConfirmed={isConfirmed}
        confirmBooking={confirmBooking}
      />
    </div>
  );
};

export default MovieBooking;
