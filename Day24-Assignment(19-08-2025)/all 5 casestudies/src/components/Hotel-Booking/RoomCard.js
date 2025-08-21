import React from "react";

const RoomCard = ({ room, isSelected, setSelectedRoom }) => {
  return (
    <div
      onClick={() => setSelectedRoom(room)}
      style={{
        border: isSelected ? "3px solid green" : "1px solid gray",
        padding: "15px",
        margin: "10px",
        cursor: "pointer",
        width: "200px",
      }}
    >
      <h3>{room.type}</h3>
      <p>Price: ₹{room.price} / night</p>
      {isSelected && <p style={{ color: "green" }}>Selected</p>}
    </div>
  );
};

export default RoomCard;
