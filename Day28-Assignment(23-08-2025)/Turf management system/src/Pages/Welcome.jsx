import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div
        className="text-center p-5 border rounded shadow bg-light"
        style={{ maxWidth: "420px" }}
      >
        <h2 className="mb-3 fw-bold">Welcome to Turf Management System</h2>
        <p className="mb-4 text-muted">Please login or register to continue</p>
        <div>
          <button
            className="btn btn-primary me-3"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="btn btn-success"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
