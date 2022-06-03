// import cars from './cars.js'
const Element = (
  <div className='common myElement'>
    <h4 >Hello, I'm Element!!</h4>
    <h2>
      Elements are rendered as it is.
  </h2>
    <ChildComponent />
  </div>
);

function ChildComponent() {
  const [state, setState] = React.useState(5);

  return (
    <div className='common'>
      <h2>ChildComponent</h2>
      <button onClick={() => setState(state + 1)}>
        Click me!
      </button>
      <strong>{state}</strong><br />
      <SubChildComponent state={state} />
    </div>
  );
};

const SubChildComponent = (props) => (
  <div className='common SubChildComponent'>
    <h4>SubChildComponent</h4>
    <strong>{props.state}</strong>
  </div>
);

ReactDOM.render(Element, document.getElementById('root'));