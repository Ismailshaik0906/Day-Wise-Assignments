import React from "react";
import "./ProductList.css";

const ProductList = () => {
  
  const products = [
    {
      productId: 101,
      productName: "Shirt",
      description: "Cotton material",
      price: 699,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productId: 102,
      productName: "Jeans",
      description: "Slim fit denim",
      price: 1299,
      sizes: ["M", "L", "XL"],
    },
    {
      productId: 103,
      productName: "Jacket",
      description: "Winter collection",
      price: 2499,
      sizes: ["L", "XL"],
    },
  ];

  return (
    <div>
      {products.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price (₹)</th>
              <th>Available Sizes</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td className="price">₹{product.price}</td>
                <td>
                {product.sizes.map((size) => (
                    <span key={size} className={`size-badge size-${size}`}>{size}</span>
                ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Products Available</p>
      )}
    </div>
  );
};

export default ProductList;