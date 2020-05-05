import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import "../sass/Main.scss";

import Hello from "../pages/Hello";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import Video from "../assets/video/vid.mp4";

import ProjectDetails from "./ProjectDetails";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import ScrollToTop from "./ScrollToTop";

function Main() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="app-item app-item--Main ">
          <div className="main-background">
            <video autoPlay muted loop className="header-video">
              <source src={Video} type="video/mp4" />
            </video>
            <div className="main-overlay"></div>
          </div>

          <div className="main-container">
            <Header />
            <Switch>
              <Route exact path="/" component={Hello} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/blog" component={Blog} />
              <Route path="/project" component={ProjectDetails} />
              <Route path="/post" component={BlogDetails} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Main;
