import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Search from "./Search";

const App = () => {
  <div>
    <Router>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  </div>;
};

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
