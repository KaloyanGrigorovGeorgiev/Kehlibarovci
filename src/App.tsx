import React from 'react';
import logo from './logo.svg';
import './App.css';
import { generate } from './generator';

function App() {
  return (


    <div className="App">
      <div className="container">
        <label className="input">
          <b>Enter your password: </b>
          <input></input>
          <b className="numberinput">Offset: </b>
          <input type="number" min={1}></input>
          <p className="checkbox">option1</p>
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <button className="button">Enter</button>
        {generate(5, "AZsumAZ")}
      </div>
    </div>


  );
}
export default App;

