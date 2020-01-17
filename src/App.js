import React, { useState } from 'react';
import Dashboard  from "./components/Dashboard"
import './App.css';

function App() {
  const [ball, setBall] = useState(0);
    console.log("this is ball", ball)
    const [strike, setStrike] = useState(0);
    console.log("this is strike", strike)
    const [foul, setFoul] = useState(0);
    console.log("this is foul", foul)
    const [atbat, setAtBat] = useState(0);
    console.log("this is atbat", atbat)
    const [hit, setHit] = useState(0);
    console.log("this is hit", hit)
  
  
  return (
    <div className="App">
      <Dashboard atbat={atbat} ball={ball} strike={strike} foul={foul} hit= {hit} setAtBat={setAtBat} setBall={setBall} setHit={setHit} setFoul={setFoul} setStrike={setStrike}/>
    </div>
  );
}

export default App;
