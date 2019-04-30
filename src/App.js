import React from 'react';
import './App.css';
import Bar from './Bar';
import Lamp from './Lamp';

function App() {
  return (
    <div className="App">
      <h1>Intro React state</h1>
      <h2>Bar</h2>
      <Bar color="red" />
      <Bar color="green" />
      <Bar color="blue" />

      <h2>Lamp</h2>
      <Lamp />
      <Lamp />
      <Lamp />
      <Lamp />
      <Lamp />
    </div>
  );
}

export default App;
