import React from 'react';

import './App.css';
import LandingPage from './components/LandingPage';
import DsAlgo from './components/DsAlgo';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">

        <LandingPage />
        <br />
        <br />
        <DsAlgo />
      </div>
    </React.Fragment>
  );
}

export default App;
