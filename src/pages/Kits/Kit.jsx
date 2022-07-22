import React from "react";
import KitCarousel from './KitCarousel/KitCarousel.jsx';
import KitInfo from './KitCarousel/KitCarousel.jsx';
import './Kit.css';

const Kit = ({kit, clickHandler, url}) => {
  console.log(kit);
  return (
    <div className="Kit">
      <button>BACK</button>
      <div className="kit-content">

        <div className="kit-carousel">
          <KitCarousel slides={kit.photos} url={url}/>
        </div>

        <div className="kit-info">
          {/* <h1 className="kit-name">{kit.name}</h1>
          <div className="kit-img">
            <img src={`${url}${kit.photos[0]}`}/>
          </div> */}
        </div>

      </div>
    </div>
  )
};

export default Kit;
