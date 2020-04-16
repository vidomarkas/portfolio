import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Footer from "./Footer";

import "../sass/App.scss";
import ProjectDetails from "./ProjectDetails";
import bg from "../assets/img/bg.png";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <div className="background" style={{ backgroundImage: `url(${bg})` }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/work" component={Work} />
              <Route path="/project" component={ProjectDetails} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
