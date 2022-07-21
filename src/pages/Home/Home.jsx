import React from "react";
import homeImg from './intern-bot.jpg';
import kitsImg from './kits-img.jpg';
import resourcesImg from './resources-img.png';
import './Home.css';

const Home = ({updatePage}) => {

  console.log('home')
  const clickHandler = (event) => {
    event.preventDefault();
    console.log(event.target)
    const name = event.target.getAttribute('data-name');
    console.log(name)
    updatePage(name);
  }

  return (
    <div className="Home">
      <h1 className="home-header">Home</h1>
      <div className="home-content">
        <div className="home-item" onClick={clickHandler}>
          <h2>KITS</h2>
          <div className="home-img">
            <img src={kitsImg} data-name="Kits"/>
          </div>
        </div>
        <div className="home-item" onClick={clickHandler}>
          <h2>RESOURCES</h2>
          <div className="home-img">
            <img src={resourcesImg} data-name="Resources"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
