import React, {useState, useEffect} from "react";
import Kit from './Kit.jsx';
import KitCard from './KitCard.jsx';
import './Kits.css';

const LOCAL_URL = 'http://127.0.0.1:8080/assets/media/';
import kitsData from '../../data/kitsInfo.json';

const Kits = () => {
  console.log(kitsData);
  const [view, setView] = useState('Kit');
  const [kitNames, setKitNames] = useState([]);
  const [kits, setKits] = useState(kitsData);
  const [currentKit, setCurrentKit] = useState('tank-bot');

  // Add useEffect to send GET request for data
  useEffect(() => {
    const keys = Object.keys(kitsData);
    setKitNames(keys);
  }, []);

  const viewHandler = (event) => {
    event.preventDefault();
    const name = event.target.getAttribute('data-name');
    console.log(name);
    setView('Kit');
    setCurrentKit(name);
  };

  let currentDiv = <div></div>;

  switch(view) {
    case 'List':
      // need this as a seperate div?
      // currentDiv = <KitList kits={kits} updateView={viewHandler} url={LOCAL_URL}/>;
      currentDiv = kitNames.map((name, i) => {
        return <KitCard key={i} kit={kits[name]} clickHandler={viewHandler} url={LOCAL_URL}/>
      });
      break;
    case 'Kit':
      currentDiv = <Kit kit={kits[currentKit]} clickHandler={viewHandler} url={LOCAL_URL}/>;
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
