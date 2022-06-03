import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';


function App() {
  const [state, setState] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          onClick={() => setState(state + 1)}
          className="paragraphStyled"
        >
          Change State
        </p>
        <h1>{state}</h1><br></br><br></br>
      Tip: Start editing the increment value to see state changes being unchanged(preserved).
      </header>
    </div >
  );
}

export default App;
