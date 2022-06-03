function Cars() {
  const [state, setState] = React.useState(5);
  return (
    <div className='myCars'>
      <h4>Coool Cars Components!!!</h4>
      {state}
      <button onClick={() => setState(state + 1)}>
        Click me!
      </button>
    </div>
  );
};
