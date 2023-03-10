import React from 'react';
import logo from './logo.svg';
import './App.css';
import { generate } from './generator';

function App() {
  return (
    <div className="App">
     {
      generate(3,"{126")
     }
    </div>
  );
}

export default App;
