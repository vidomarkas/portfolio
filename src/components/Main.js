import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import "../sass/Main.scss";
import Hello from "../pages/Hello";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import backgroundImg from "../assets/img/grad.jpg";
import ProjectDetails from "./ProjectDetails";
import ScrollToTop from "./ScrollToTop";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

function Main() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="app-item app-item--Main ">
          <div className="main-background">
            <img
              className="main-background__image"
              src={backgroundImg}
              alt=""
            />
            <div className="main-overlay"></div>
          </div>

          <div className="main-container">
            <Header />
            <Switch>
              <Route exact path="/" component={Hello} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route path="/project/:id" component={ProjectDetails} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default Main;
