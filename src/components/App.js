import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "./Footer";

import "../sass/App.scss";
import ProjectDetails from "./ProjectDetails";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/project" component={ProjectDetails} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
