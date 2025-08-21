import React from "react";

const WaterTracker = ({ water, setWater }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", width: "200px" }}>
      <h3>Water Tracker</h3>
      <p>Water: {water} glasses</p>
      <button onClick={() => setWater(water + 1)}>+1 Glass</button>
    </div>
  );
};

export default WaterTracker;
