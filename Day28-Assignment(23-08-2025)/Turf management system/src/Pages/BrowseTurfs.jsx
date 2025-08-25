import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "../components/UserNavbar";

const BrowseTurfs = () => {
  const [turfs, setTurfs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get("http://localhost:5001/turfs")
    .then((res) => setTurfs(res.data));
  }, []);

  const addToCart = async (turf) => {
    await axios.post("http://localhost:5001/cart", {
      ...turf,
      userId: user.id,
      quantity: 1,
    });
    alert("Turf added to cart ");
  };

  return (
    <div>
      <UserNavbar />
      <div className="container mt-4">
        <h3>Browse Turfs</h3>
        <div className="row">
          {turfs.map((t) => (
            <div className="col-md-4 mb-3" key={t.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{t.title}</h5>
                  <p>{t.location}</p>
                  <p>${t.price}</p>
                  <button onClick={() => addToCart(t)} className="btn btn-success">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseTurfs;
