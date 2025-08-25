import React from "react";
import UserNavbar from "../components/UserNavbar";

const UserDashboard = () => {
  return (
    <div>
      <UserNavbar />
      <div className="container mt-4">
        <h2>Welcome User </h2>
        <p>Add Turf to cart!</p>
      </div>
    </div>
  );
};

export default UserDashboard;
