import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]); 
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => setError("Failed to load products"));
  }, []);

  const fetchProductDetails = (id) => {
    setLoading(true);
    setError("");
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load product details");
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      <div className="product-list">
        {products.map((p) => (
          <div
            key={p.id}
            className="product-card"
            onClick={() => fetchProductDetails(p.id)}
          >
            <img src={p.image} alt={p.title} />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
          </div>
        ))}
      </div>

      <div className="details">
        {loading && <p>Loading product details...</p>}
        {error && <p className="error">{error}</p>}
        {selectedProduct && !loading && (
          <div>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p><b>Price:</b> ${selectedProduct.price}</p>
            <p><b>Description:</b> {selectedProduct.description}</p>
            <p><b>Rating:</b> {selectedProduct.rating?.rate} ⭐</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
