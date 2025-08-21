import React from "react";

const StepsTracker = ({ steps, setSteps }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", width: "200px" }}>
      <h3>Steps Tracker</h3>
      <p>Steps: {steps}</p>
      <button onClick={() => setSteps(steps + 100)}>+100 Steps</button>
    </div>
  );
};

export default StepsTracker;
