import React from "react";
import './Kit.css';

const Kit = ({kit, clickHandler, url}) => {
  console.log(kit);
  return (
    <div className="Kit">
      <button>BACK</button>
      <h1 className="kit-header">{kit.name}</h1>
      <div className="kit-content">
        <div className="kit-img">
          <img src={`${url}${kit.photos[0]}`}/>
        </div>
      </div>
    </div>
  )
};

export default Kit;
