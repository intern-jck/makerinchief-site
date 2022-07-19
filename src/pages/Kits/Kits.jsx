import React, {useState, useffect} from "react";
import './Kits.css';
import './Kit.jsx';

import kitsData from '../../data/kitsInfo.json';

const Kits = () => {
  console.log(`Kits`);
  const [currentKit, setCurrentKit] = useState('');
  const [kits, setKits] = useState(kitsData.kits);
  console.log(kits);

  return (
    <div className="Kits">
      <h1 className="kits-header">Kits</h1>
      <div className="kits-content">
        {kits.map((kit, i) => {
          return <KitList />;
        })}
      </div>
    </div>
  )
};

export default Kits;
