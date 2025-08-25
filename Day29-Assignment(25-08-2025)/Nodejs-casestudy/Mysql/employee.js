import mysql from 'mysql2';

// 🔹 Create a connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PASS@word1',  // change if different
    database: 'employeeDB'
});

// 🔹 Connect
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

// 🔹 Insert Employee
const insertQuery = `INSERT INTO employees (name, email, department) VALUES (?, ?, ?)`;
connection.query(insertQuery, ['Alice', 'alice@example.com', 'HR'], (err, result) => {
    if (err) throw err;
    console.log('Employee inserted, ID:', result.insertId);
});

// 🔹 Fetch All Employees
connection.query('SELECT * FROM employees', (err, rows) => {
    if (err) throw err;
    console.log('Employees:', rows);
});

// 🔹 Update Employee
const updateQuery = `UPDATE employees SET department = ? WHERE id = ?`;
connection.query(updateQuery, ['Finance', 1], (err, result) => {
    if (err) throw err;
    console.log('Employee updated:', result.message);
});

// 🔹 Delete Employee
const deleteQuery = `DELETE FROM employees WHERE id = ?`;
connection.query(deleteQuery, [2], (err, result) => {
    if (err) throw err;
    console.log('Employee deleted:', result.message);
});

// 🔹 Close connection
connection.end();




/*
my sql database


CREATE DATABASE employeeDB;
USE employeeDB;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    department VARCHAR(50)
);


*/
