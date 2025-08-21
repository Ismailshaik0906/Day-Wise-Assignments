import React, { useState } from "react";
import StepsTracker from "./StepsTracker";
import CaloriesTracker from "./CaloriesTracker";
import WaterTracker from "./WaterTracker";

const FitnessDashboard = () => {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [water, setWater] = useState(0); // in glasses

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>💪 Fitness Tracker Dashboard</h1>

      <div style={{ display: "flex", justifyContent: "space-around", margin: "20px" }}>
        <StepsTracker steps={steps} setSteps={setSteps} />
        <CaloriesTracker calories={calories} setCalories={setCalories} />
        <WaterTracker water={water} setWater={setWater} />
      </div>

      <div style={{ borderTop: "2px solid black", padding: "15px", marginTop: "20px" }}>
        <h2>Summary</h2>
        <p>🚶 Steps Walked: {steps}</p>
        <p>🔥 Calories Burned: {calories}</p>
        <p>🥤 Water Intake: {water} glasses</p>
      </div>
    </div>
  );
};

export default FitnessDashboard;
