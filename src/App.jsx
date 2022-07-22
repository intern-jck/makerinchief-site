import React, {useState, useEffect} from "react";
import Home from './pages/Home/Home.jsx';
import Kits from './pages/Kits/Kits.jsx';
import Resources from './pages/Resources/Resources.jsx';
import './App.css';

const App = () => {

  const [page, setPage] = useState('Kits');

  const pageHandler = (page) => {
    console.log('viewing ', page)
    setPage(page);
  }

  const clickHandler = (event) => {
    event.preventDefault();
    const name = event.target.getAttribute('data-name');
    pageHandler(name);
  }

  let currentPage = <div></div>;

  switch(page) {
    case 'Home':
      console.log('viewing home')
      currentPage = <Home updatePage={pageHandler}/>;
      break;
    case 'Kits':
      console.log('viewing kits')
      currentPage = <Kits />;
      break;
    case 'Resources':
      console.log('viewing resources')
      currentPage = <Resources />;
      break;
  }

  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="nav-menu">
          <div className="nav-menu-item" onClick={clickHandler} data-name="Home">Home</div>
          <div className="nav-menu-item" onClick={clickHandler} data-name="Kits">Kits</div>
          <div className="nav-menu-item" onClick={clickHandler} data-name="Resources">Resources</div>
        </div>
      </nav>
      {currentPage}
    </div>
  )
};

export default App;
