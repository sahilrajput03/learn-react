import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch
} from "react-router-dom";
import "../styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>App_useHistory</h1>
      <Router>
        <HomeButton />
        <Switch>
          <Route path="/specialPage">
            <h2>Welcome to special page</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/specialPage");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go to specialPage.
    </button>
  );
}
