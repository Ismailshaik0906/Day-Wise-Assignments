import React, { useState, useEffect } from "react";

const TodoTracker = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load todos");
        setLoading(false);
      });
  }, []);

  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "completed"
      ? todos.filter((t) => t.completed)
      : todos.filter((t) => !t.completed);

  const completedCount = todos.filter((t) => t.completed).length;
  const pendingCount = todos.filter((t) => !t.completed).length;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Todo Tracker</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading todos...</p>}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
      <p>
        Completed: {completedCount} | Pending: {pendingCount}
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            style={{
              border: "1px solid gray",
              margin: "5px 0",
              padding: "10px",
              borderRadius: "6px",
              background: todo.completed ? "#d4edda" : "#f8d7da",
            }}
          >
            {todo.title} {todo.completed ? "(Done)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoTracker;
