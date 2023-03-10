import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { generate } from './generator';

function App() {
  const [password, setPassword] = useState('');
  const [offset, setOffset] = useState(1);
  return (
    <div className="App">
      <div className="container">
        <label className="input">
          <b>Enter your password: </b>
          <input value={password} onChange={event => setPassword(event.target.value)}></input>
          <b className="numberinput">Offset: </b>
          <input type="number" min={1} value={offset} onChange={event => setOffset(Number(event.target.value))}></input>
          <p className="checkbox">option1</p>
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <button className="button">Enter</button>
        <div className="resultContainer">
          <b className="result">Result: </b>
          
          <p>{generate(offset, password)}</p>
        </div>
      </div>
    </div>
  );
}
export default App;