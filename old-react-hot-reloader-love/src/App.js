import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root'
// import logo from './logo.svg';
import './App.css';

console.log('amsss sfsfsasdfasdfaing things!!!')

function App() {
  let [myValue, setMyvalue] = useState(400)
  let some = 60+10;
    useEffect(() => {
    // alert("Amazing tually or so??..")
  }, [])

  console.log('Is it goodD?...')
  return (
    <div className="App">
      What do you think abou tlife this time??<br></br>
      <b>hot</b>
      <div onClick={() => {
        setMyvalue(myValue + 29 + some)
      }} style={{ color: "blue" }}>This is redd!!   and ..!!.</div>
        <h2>
        {myValue+162}
        </h2>
        <h1>
          {some}
        </h1>
    </div>
  );
}


// export default App; // Old stle of reloading with react.
export default process.env.NODE_ENV === "development" ? hot(App) : App
// New style of reloading with no refresh instant update capability.

// console.log('process.env.NODE_ENV=>', process.env.NODE_ENV) // This log doesn't print anything to console, idk why.