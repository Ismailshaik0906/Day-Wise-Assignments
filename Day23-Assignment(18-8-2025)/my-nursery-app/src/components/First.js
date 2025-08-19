import React from 'react';
import '../First.css';

const First = () => {
  return (
    <div className="container">
      <h2>Creating the Nursery Page</h2>
      <p>Welcome to the landing page of my Nursery App.</p>

      <select className="dropdown">
        <option selected value="chennai">Chennai</option>
        <option>Bangalore</option>
        <option>Mumbai</option>
        <option>Delhi</option>
      </select>

      <ul className="flower-list">
        <li>Rose</li>
        <li>Lily</li>
        <li>Tulip</li>
        <li>Sunflower</li>
        <li>Jasmine</li>
      </ul>
    </div>
  );
};

export default First;
