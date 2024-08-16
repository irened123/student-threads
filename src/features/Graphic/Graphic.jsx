import React from 'react';
import './Graphic.css';
import cozyImage from '../../assets/cozy-coffee-shop.jpg'; 

const Graphic = () => {
  return (
    <div className="graphic-container">
      <img src={cozyImage} alt="Cozy Coffee Shop" className="graphic-image" />
    </div>
  );
};

export default Graphic;
