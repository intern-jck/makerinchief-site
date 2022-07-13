import React, {useState, useEffect, useRef} from "react";
import './Card.css';

const Card = ({cardData}) => {
  const [flip, setFlip] = useState(false);

  const frontElement = useRef();
  const backElement = useRef();

  const flipCard = (event) => {
    event.preventDefault();
    setFlip(!flip);
    const target = event.target;
    console.log(flip, target.classList)

  }

  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={flipCard}>
      <div className="front" ref={frontElement}>
        <div className="card-img">
          <img src={`../assets/media/projects/${cardData.photos[0]}`}/>
        </div>
        <div className="card-body">
          <h2>{cardData.name}</h2>
          <p>{cardData.short}</p>
        </div>
      </div>

      <div className="back" ref={backElement}>
        <h4>NAME: {cardData.name}</h4>
        <h4>FOR: {cardData.group}</h4>
        <h4>DATE: {cardData.date}</h4>
        <h4>TECH: {cardData.tech.map((tech) =>(<h4>{tech[0]}</h4>))}</h4>
      </div>
    </div>
  )
};

export default Card;
