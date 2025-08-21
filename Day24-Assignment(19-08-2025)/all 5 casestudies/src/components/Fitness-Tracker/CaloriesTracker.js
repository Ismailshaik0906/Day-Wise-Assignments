import React from "react";

const CaloriesTracker = ({ calories, setCalories }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", width: "200px" }}>
      <h3>Calories Tracker</h3>
      <p>Calories: {calories}</p>
      <button onClick={() => setCalories(calories + 50)}>+50 Calories</button>
    </div>
  );
};

export default CaloriesTracker;
