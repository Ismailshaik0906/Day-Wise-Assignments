import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/admin" className="navbar-brand fw-bold">
          Turf Admin
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/turfs">Manage Turfs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/bookings">View Bookings</Link>
            </li>
            <li className="nav-item">
              <button
                onClick={handleLogout}
                className="btn btn-outline-light ms-3"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
