import React from "react";
import KitCarousel from '../KitCarousel/KitCarousel.jsx';
import KitInfo from '../KitInfo/KitInfo.jsx';
import './Kit.css';

const Kit = ({kit, url}) => {
  console.log(kit);
  return (
    <div className="Kit">
      <button>BACK</button>
      <div className="kit-content">
        <KitCarousel slides={kit.photos} url={url}/>
        <KitInfo kit={kit} url={url}/>
      </div>
    </div>
  )
};

export default Kit;
