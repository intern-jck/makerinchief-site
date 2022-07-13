import React from "react";
import './Home.css';
import homeImg from './intern-bot.jpg'

const Home = ({updatePage}) => {
  console.log('home')
  const clickHandler = (event) => {
    event.preventDefault();
    const name = event.target.getAttribute('data-name');
    updatePage(name);
  }

  return (
    <div className="home-div">
      <h1 className="home-header">Home</h1>
      <div className="home-content">
        <div>

        </div>
      </div>
    </div>
  )
};

export default Home;
