import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { generate } from './generator';

function App() {
  const [password, setPassword] = useState('');
  const [offset, setOffset] = useState(1);
  const [withSalt, setWithSalt] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <div>
          <b>Enter your password: </b>
          <input className="password" value={password} onChange={event => setPassword(event.target.value)}></input>
        </div>
        <div className="options">
          <div>
            <b>Offset: </b>
            <input type="number" className="numberinput" min={1} value={offset} onChange={event => setOffset(Number(event.target.value))}></input>
          </div>
          <div className="checkbox">
            <input type="checkbox" onChange={() => setWithSalt(!withSalt)}></input>
            <b>with salt</b>
          </div>
        </div>
        <div className="resultContainer">
          <b className="result">Result: </b>
          <p>{generate(offset, password, withSalt,3)}</p>
        </div>
      </div>
    </div>
  );
}
export default App;