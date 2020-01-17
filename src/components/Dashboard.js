import React from "react";
import Display from "./Display";

const Dashboard = ({
  strike,
  ball,
  atbat,
  setAtBat,
  foul,
  setStrike,
  setBall,
  setFoul,
  hit,
  setHit
}) => {
  if (ball >= 4 || strike >= 3) {
    setBall(0);
    setStrike(0);
    setFoul(0);
    setAtBat(atbat + 1);
  }

  const addHit = () => {
    setStrike(0);
    setBall(0);
    setFoul(0);
    setAtBat(atbat + 1);
  };

  const addFoul = () => {
    setFoul(foul + 1);
    setStrike(strike + 1);

    if (strike === 2) {
      setStrike(strike);
    }
  };

  return (
    <div className="dash-board">
      <Display atbat={atbat} ball={ball} strike={strike} foul={foul} hit= {hit} setAtBat={setAtBat} setBall={setBall} setHit={setHit} setFoul={setFoul} setStrike={setStrike}/>
      <button className="ball" onClick={() => setBall(ball + 1)}>
        Ball
      </button>
      <button className="strike" onClick={() => setStrike(strike + 1)}>
        Strike
      </button>
      <button className="foul" onClick={() => addFoul()}>
        Foul
      </button>
      <button className="hit" onClick={() => addHit()}>
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
