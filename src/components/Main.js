import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
// import Nav from "./Nav";
import "../sass/Main.scss";

import Hello from "../pages/Hello";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Video from "../assets/video/vid.mp4";

import ProjectDetails from "./ProjectDetails";

function Main() {
  return (
    <>
      <Router>
        <div className="app-item app-item--Main ">
          <div
            className="main-background"
            // style={{ backgroundImage: `url(${bg})` }}
          >
            <video autoPlay muted loop className="header-video">
              <source src={Video} type="video/mp4" />
            </video>
            <div className="main-overlay"></div>
          </div>
          {/* <Nav /> */}
          <div className="main-container">
            <Header />
            <Switch>
              <Route exact path="/" component={Hello} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
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
