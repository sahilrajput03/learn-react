import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./styles.css";
import { useFetch } from "./hooks/useFetch";
// eslint-disable-next-line no-unused-vars
const lg = (...arg) => console.log(...arg);

export default function App() {
  //--
  const url_ = "gists.json";/* This works too, for fetching from locally saved copy from the below url. */
  const url = "https://api.github.com/gists"
  const { data: gists, loading } = useFetch(url);
  // const url = "https://api.github.com/gists";
  // const url = "https://loveapi.ml/fso/diagnoses.json";
  // lg(typeof gists);
  // lg(loading);
  // lg(gists?.map((gist) => gist.id));
  return (
    <div className="App">
      <Root>
        <Router basename="/GistsFetchingFromGithubRandom_react-router-dom">
          <Sidebar>
            {!loading
              ? gists.map((gist) => (
                  <SidebarItem key={gist.id}>
                    <Link to={`/g/${gist.id}`}>
                      {gist.description || "[No description.]"}
                    </Link>
                  </SidebarItem>
                ))
              : "Loading..."}
          </Sidebar>
          {/* <GoToSpecialPageButoon /> */}
          {/* Switcher below!! */}
          <Switch>
            <MainPinked>
              <Route
                path="/"
                exact
                render={() => (
                  <>
                    <h1>Welcome to Fetch Gists app</h1> User setttings for st3
                    has three files.
                  </>
                )}
              />
              {/* Above thing is also called implicity return of component. */}
              {gists && (
                <Route
                  path="/g/:gistId"
                  exact
                  render={({ match }) => (
                    <Gist
                      gist={gists.find((g) => g.id === match.params.gistId)}
                    />
                  )}
                />
              )}
            </MainPinked>
          </Switch>
        </Router>
      </Root>
    </div>
  );
}

const Gist = ({ gist }) => (
  <div>
    <Link to="/">Go to Home page</Link>
    <br />
    <br />
    <h2>{(gist && gist.description) || "[No description.]"}</h2>
    <div> User: {gist?.owner.login}</div>
    <b>
      Gist Url:
      <a href={gist?.html_url} target="_blank" rel="noreferrer">
        {gist?.html_url}
      </a>
    </b>
    <br />
    {Object.keys(gist?.files).map((key) => (
      <li>
        <b>{key}</b>
        <br />
        <a href={gist.files[key].raw_url} target="_blank" rel="noreferrer">
          {gist.files[key].raw_url}
        </a>
        <FileLoader fileUrl={gist.files[key].raw_url} />
      </li>
    ))}
  </div>
);

const FileLoader = ({ fileUrl }) => {
  const { data: fileData, loading } = useFetch(fileUrl, "text");
  if (loading) return <h2>Loading file contents</h2>;
  return <pre>{fileData}</pre>;
};

const Sidebar = (props) => (
  <div
    style={{
      position: "relative",
      width: "20vw",
      height: "90vh",
      // margin: "50px 20px",/* this doesn't work */
      padding: "30px 30px",
      // border: "solid 20px pink",/* my own hackaround for inner border padding */
      background: "lightpink",
      float: "left" /* This is something magical line. */,
      overflow: "auto" /* This line would allow us  */,
      borderRadius: "20px"
    }}
  >
    <div
      className="innerDivver"
      style={{
        position: "relative",
        overflowY: "auto",
        width: "20vw",
        height: "80vh",
        // margin: "50px 10px",
        background: "pink",
        borderRadius: "40px"
        // overflow: "auto" /* This line would allow us  */
      }}
      {...props}
    />
  </div>
);

const SidebarItem = (props) => (
  <div
    style={{
      padding: "5px 10px"
    }}
    {...props}
  />
);

const MainPinked = (props) => (
  <div
    style={{
      position: "relative",
      background: "pink",
      height: "90vh",
      overflow: "auto",
      padding: "30px 30px"
    }}
  >
    <div style={{ padding: "20px" }} {...props} />
  </div>
);

const Root = (props) => <div class="myRootComponent" {...props} />;

// src: for aligning  two divs side by side - with css is ->
//<div id="main">
//  <div id="sidebar"></div>
//  <div id="page-wrap"></div>
//</div>
//You could use this styling:
//
//#main {
//    width: 800px;
//    margin: 0 auto;
//}
//#sidebar    {
//    width: 200px;
//    height: 400px;
//    background: red;
//    float: left;
//}
//
//#page-wrap  {
//    width: 600px;
//    background: #ffffff;
//    height: 400px;
//    margin-left: 200px;
//}
