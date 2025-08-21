import React, { useState, useEffect } from "react";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true); 
    setError("");      

    let url = "https://fakestoreapi.com/products";
    if (category !== "all") {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);  
        setLoading(false);  
      })
      .catch((err) => {
        setError(err.message); 
        setLoading(false);
      });
  }, [category]); 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Catalog</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              width: "200px",
              borderRadius: "8px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h4 style={{ fontSize: "14px" }}>{product.title}</h4>
            <p><b>Price:</b> ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
