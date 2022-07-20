import React from "react";
import './KitCard.css';

const KitCard = ({kit}) => {
  console.log('kit card', kit)
  return (
    <div className="KitCard">
      <h1 className="card-header">{kit.name}</h1>
      <div className="card-content">

      </div>
    </div>
  )
};

export default KitCard;
