import React from "react";
import KitCard from './KitCard.jsx';
import './KitList.css';

const KitList = ({kitsData}) => {
  console.log('kit list', kitsData)
  return (
    <div className="KitList">
    <h1 className="kit-list-header">Kit List</h1>
      <div className="kit-list-content">
        {kitsData.map((kit, i) => {
          return <KitCard key={i} kit={kit} />
        })}
        {/* <KitCard kit={kitsData[0]}/> */}
      </div>
    </div>
  )
};

export default KitList;
