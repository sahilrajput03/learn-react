const Component = () => (
  <div className='common myComponent'>
    <h4>
      Hello, I'm component.
    </h4>
    <h5>
      Components are rendered by wrapping around angle brackets.
    </h5>
    <ChildComponent />
  </div>
);
ReactDOM.render(<Component />, document.getElementById('apex'));
