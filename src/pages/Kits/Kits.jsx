import React, {useState, useffect} from "react";
import KitList from './KitList.jsx';
import Kit from './Kit.jsx';
import './Kits.css';

import kitsData from '../../data/kitsInfo.json';

const Kits = () => {

  const [view, setView] = useState('List');
  const [currentKit, setCurrentKit] = useState('');
  const [kits, setKits] = useState(kitsData.kits);

  console.log(`Kits`, kits);

  let currentDiv = <></>;
  switch(view) {
    case 'List':
      currentDiv = <KitList kitsData={kits}/>;
      break;

    case 'Kit':
      currentDiv = <Kit kitData={kits[currentKit]}/>;
      break;
  }

  return (
    <div className="Kits">
      <h1 className="kits-header">Kits</h1>
      <div className="kits-content">
        {currentDiv}
      </div>
    </div>
  )
};

export default Kits;
