import React from "react";
import ReactDOM from "react-dom";

// import App from "./Apps/App_useHistory";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
