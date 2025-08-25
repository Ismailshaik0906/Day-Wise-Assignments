import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/cart?userId=${user.id}`)
      .then((res) => setCart(res.data));
  }, [user.id]);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Save bookings
    for (const item of cart) {
      await axios.post("http://localhost:5001/bookings", {
        userId: user.id,
        userName: user.name,
        turfTitle: item.title,
        amount: item.price * item.quantity,
      });
      // Remove from cart
      await axios.delete(`http://localhost:5001/cart/${item.id}`);
    }

    alert("Booking successful!");
    navigate("/user");
  };

  return (
    <div>
      <UserNavbar />
      <div className="container mt-4">
        <h3>Checkout</h3>
        <p>Total items: {cart.length}</p>
        <button className="btn btn-success" onClick={handleCheckout}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Checkout;
