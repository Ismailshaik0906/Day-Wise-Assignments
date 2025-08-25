import React from "react";
import AdminNavbar from "../components/AdminNavbar";

const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="container mt-4">
        <h2>Welcome Admin </h2>
        <p>Use the navigation bar to manage turfs or view bookings.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
