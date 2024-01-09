import React from 'react';
import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  // 1st counter state
  const [counter1, setCounter1] = useState(0);

  // Sample Heavy Calculation Function
  const heavyCalculation = () => {
    let i = 0;
    for (let outer = 0; outer < 100; outer++) {
        for (let temp = 0; temp < 100; temp++) {
            while (i < 100) i++;
        }
    }
    return counter1 % 2 === 0 ? true : false;
};

  return (
    <div className="App">
      {heavyCalculation()
                ? `Counter is even with value ${counter1}`
                : `Counter is odd with value ${counter1}`}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
