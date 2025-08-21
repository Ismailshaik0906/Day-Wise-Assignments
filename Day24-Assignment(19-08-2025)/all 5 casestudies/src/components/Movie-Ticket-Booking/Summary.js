import React from "react";

const Summary = ({ selectedSeats, pricePerSeat, isConfirmed, confirmBooking }) => {
  const total = selectedSeats.length * pricePerSeat;

  return (
    <div style={{ marginTop: "20px", borderTop: "2px solid black", padding: "15px" }}>
      <h3>Booking Summary</h3>
      {selectedSeats.length === 0 ? (
        <p>No seats selected</p>
      ) : (
        <>
          <p>Selected Seats: {selectedSeats.join(", ")}</p>
          <p>Total Price: ₹{total}</p>
          {!isConfirmed ? (
            <button
              onClick={confirmBooking}
              style={{
                padding: "10px 20px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Confirm Booking
            </button>
          ) : (
            <h2 style={{ color: "green" }}>✅ Booking Confirmed!</h2>
          )}
        </>
      )}
    </div>
  );
};

export default Summary;
