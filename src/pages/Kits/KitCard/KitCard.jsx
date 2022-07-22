import React from "react";
import './KitCard.css';

const KitCard = ({kit, clickHandler, url}) => {
  console.log('kit card', kit);

  return (
    <div className="KitCard" onClick={clickHandler}>
      <h1 className="kit-card-header">{kit.name}</h1>
      <div className="kit-card-img">
        <img src={`${url}${kit.photos[0]}`} data-name={kit.link}/>
      </div>
      <h2 className="kit-card-short">{kit.short}</h2>
    </div>
  )
};

export default KitCard;
