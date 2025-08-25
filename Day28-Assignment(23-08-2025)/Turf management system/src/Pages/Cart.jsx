import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "../components/UserNavbar";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchCart = () => {
    axios.get(`http://localhost:5001/cart?userId=${user.id}`)
      .then((res) => setCart(res.data));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (item, qty) => {
    if (qty <= 0) return;
    await axios.put(`http://localhost:5001/cart/${item.id}`, { ...item, quantity: qty });
    fetchCart();
  };

  const removeItem = async (id) => {
    await axios.delete(`http://localhost:5001/cart/${id}`);
    fetchCart();
  };

  return (
    <div>
      <UserNavbar />
      <div className="container mt-4">
        <h3>Your Cart</h3>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Turf</th>
              <th>Location</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.location}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-sm btn-secondary me-2"
                    onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                  {item.quantity}
                  <button className="btn btn-sm btn-secondary ms-2"
                    onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button onClick={() => removeItem(item.id)} className="btn btn-danger btn-sm">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
