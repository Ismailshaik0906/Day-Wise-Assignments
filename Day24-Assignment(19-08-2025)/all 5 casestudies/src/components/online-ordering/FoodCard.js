import React from "react";

const FoodCard = ({ food, addToCart }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <p>₹ {food.price}</p>
      <button onClick={() => addToCart(food)}>Add to Cart</button>
    </div>
  );
};

export default FoodCard;
