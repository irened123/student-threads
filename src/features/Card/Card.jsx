import React from 'react';
import './Card.css';

function Card({ className, children }) {
  const cardClasses = `card-container ${className}`;
  return <div className={cardClasses}>{children}</div>;
}

export default Card;
