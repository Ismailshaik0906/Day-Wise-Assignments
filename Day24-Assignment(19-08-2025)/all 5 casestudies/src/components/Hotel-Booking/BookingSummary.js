import React from "react";

const BookingSummary = ({ checkIn, checkOut, selectedRoom, numRooms }) => {
  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = getNights();
  const total = selectedRoom ? nights * selectedRoom.price * numRooms : 0;

  return (
    <div style={{ borderTop: "2px solid black", marginTop: "20px", padding: "15px" }}>
      <h2>Booking Summary</h2>
      {!selectedRoom ? (
        <p>Please select a room</p>
      ) : (
        <>
          <p>Check-in: {checkIn || "Not selected"}</p>
          <p>Check-out: {checkOut || "Not selected"}</p>
          <p>Room Type: {selectedRoom.type}</p>
          <p>Nights: {nights}</p>
          <p>Number of Rooms: {numRooms}</p>
          <h3>Total Price: ₹{total}</h3>
          {nights > 0 && (
            <button
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
          )}
        </>
      )}
    </div>
  );
};

export default BookingSummary;
