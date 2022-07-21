import React from "react";
import KitCard from './KitCard.jsx';
import './KitList.css';

const KitList = ({kits, updateView, url}) => {
  console.log('kit list', kitsData)
  return (
    <div className="KitList">
      {/* <h1 className="kit-list-header">Kit List</h1> */}
      {kitsData.map((kit, i) => {
        // return <KitCard key={i} kit={kit} clickHandler={updateView}/>
      })}
    </div>
  )
};

export default KitList;
