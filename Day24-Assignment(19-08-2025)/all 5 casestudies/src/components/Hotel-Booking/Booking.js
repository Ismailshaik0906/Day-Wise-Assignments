import React, { useState } from "react";
import RoomCard from "./RoomCard";
import BookingSummary from "./BookingSummary";

const HotelBooking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [numRooms, setNumRooms] = useState(1);

  const rooms = [
    { id: 1, type: "Standard Room", price: 1500 },
    { id: 2, type: "Deluxe Room", price: 2500 },
    { id: 3, type: "Suite", price: 4000 },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🏨 Hotel Room Reservation</h1>

      <div style={{ margin: "15px" }}>
        <label>Check-in: </label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>

      <div style={{ margin: "15px" }}>
        <label>Check-out: </label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            isSelected={selectedRoom?.id === room.id}
            setSelectedRoom={setSelectedRoom}
          />
        ))}
      </div>

      <div style={{ margin: "15px" }}>
        <label>Number of Rooms: </label>
        <input
          type="number"
          min="1"
          value={numRooms}
          onChange={(e) => setNumRooms(Number(e.target.value))}
        />
      </div>

      <BookingSummary
        checkIn={checkIn}
        checkOut={checkOut}
        selectedRoom={selectedRoom}
        numRooms={numRooms}
      />
    </div>
  );
};

export default HotelBooking;
