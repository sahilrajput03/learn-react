import React, { useState, Suspense } from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import { fetch1, fetch2 } from "./requests";
let l = console.log;
// l(":info::my-suspense", Suspense);
// l(":info::react-version", React.version);

// The simple idea behind using suspense for data fetching is to exclude data fetching outside of react components.
let loading = true;

let fetchPromise = fetch1().then(() => {
  loading = false;
  l("#4 Fetching completed!");
});

function Cat({ subject }) {
  l("#2 Rendering 'Cat' component...");

  if (loading) {
    l("#3 loading:true, throwing a promise as exception. ");
    throw fetchPromise;
  }
  l("#FINALLY: Rendering successful!");

  return <div>God loves all!</div>;
}

function App() {
  return (
    <div>
      <Suspense fallback={"Loading cat component..."}>
        <Cat />
      </Suspense>
    </div>
  );
}

export default App;
