import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import "../sass/Main.scss";
import bg from "../assets/img/main-bg.jpg";

import Hello from "../pages/Hello";
import About from "../pages/About";
import Contact from "../pages/Contact";

import ProjectDetails from "./ProjectDetails";

function Main() {
  return (
    <>
      <Router>
        <div className="app-item app-item--Main ">
          <div
            className="main-background"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div className="main-overlay"></div>
          <Nav />
          <div className="main-container">
            <Header />
            <Switch>
              <Route exact path="/" component={Hello} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route path="/project" component={ProjectDetails} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Main;
