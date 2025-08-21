import React, { useState, useEffect } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setError("Failed to load users"));
  }, []);

  const fetchUserDetails = (id) => {
    setLoading(true);
    setError("");

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load user details");
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Management Dashboard</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", gap: "40px" }}>
        <div style={{ flex: 1 }}>
          <h2>All Users</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((user) => (
              <li
                key={user.id}
                onClick={() => fetchUserDetails(user.id)}
                style={{
                  border: "1px solid gray",
                  margin: "5px 0",
                  padding: "10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                <b>{user.name}</b>
                <br />
                {user.email}
                <br />
                {user.phone}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h2>User Details</h2>
          {loading && <p>Loading details...</p>}
          {selectedUser && !loading && (
            <div
              style={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "6px",
              }}
            >
              <h3>{selectedUser.name}</h3>
              <p>Email: {selectedUser.email}</p>
              <p>Phone: {selectedUser.phone}</p>
              <p>Username: {selectedUser.username}</p>
              <p>Website: {selectedUser.website}</p>
              <p>Company: {selectedUser.company?.name}</p>
              <p>
                Address: {selectedUser.address?.street},{" "}
                {selectedUser.address?.city}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
