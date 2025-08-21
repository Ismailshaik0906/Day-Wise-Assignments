import React, { useState } from "react";
import FoodCard from "./FoodCard";
import Cart from "./Cart";

const Menu = () => {
  const [cart, setCart] = useState([]);

  const foodItems = [
    { id: 1, name: "Pizza", price: 250, description: "Cheese burst" },
    { id: 2, name: "Burger", price: 120, description: "Double Patty" },
    { id: 3, name: "Pasta", price: 180, description: "White Sauce" },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      <div>
        <h2>Menu</h2>
        {foodItems.map((food) => (
          <FoodCard key={food.id} food={food} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default Menu;
