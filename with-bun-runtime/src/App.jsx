import * as React from "react";
import "./App.css";

function App() {
  let name = 'sahil'
  return (
		<div className='App'>
			<Car {...{name}} />
			<Car {name} />
		</div>
	)
}

const Car = ({ name = 'world' }) => {
  return <div>Hello, {name}.</div>
}

export default App;
