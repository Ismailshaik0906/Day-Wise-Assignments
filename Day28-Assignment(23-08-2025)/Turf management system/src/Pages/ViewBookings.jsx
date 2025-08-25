import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/bookings")
    .then((res) => setBookings(res.data));
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="container mt-4">
        <h3>All Bookings</h3>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>User</th>
              <th>Turf</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.userName}</td>
                <td>{b.turfTitle}</td>
                <td>${b.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBookings;
