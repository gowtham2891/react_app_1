import React from 'react';
import './VisitCard.module.css';

const VisitCard = () => {
  return (
    <div className="visit-card">
      <img src="logo.png" alt="Logo" className="logo" />
      <p>Contact Information: 123-456-7890</p>
    </div>
  );
};

export default VisitCard;