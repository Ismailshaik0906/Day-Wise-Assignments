import React from "react";

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ border: "2px solid black", padding: "15px", width: "250px" }}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items added</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹ {item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₹ {total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
