import React from "react";

const SeatSelector = ({ selectedSeats, toggleSeat }) => {
  const seats = ["A1", "A2", "A3", "A4", "A5"];

  return (
    <div style={{ margin: "20px" }}>
      <h3>Select Seats:</h3>
      {seats.map((seat) => (
        <button
          key={seat}
          onClick={() => toggleSeat(seat)}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: selectedSeats.includes(seat) ? "green" : "lightgray",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {seat}
        </button>
      ))}
    </div>
  );
};

export default SeatSelector;
