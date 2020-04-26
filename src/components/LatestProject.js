import React from "react";
import { Link } from "react-router-dom";
import ProjectImg from "../assets/img/example.jpg";
import "../sass/LatestProject.scss";

function LatestProject() {
  return (
    <div className="card card-padding">
      <div className="latest-project-container">
        <div className="latest-project-left-container">
          <img
            src={ProjectImg}
            alt="project image"
            className="latest-project-left-image"
          />
          <div className="latest-project-left-tech"></div>
        </div>
        <div className="latest-project-right-container">
          <div className="latest-project-content">
            <h2 className="card-heading">Latest project</h2>
            <h3 className="latest-project-title">The latest project title</h3>
            <p className="latest-project-body">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="latest-project-controls">
            <Link className="btn btn-secondary" to="/projects">
              See all projects
            </Link>
            <input type="button" className="btn" value="More details" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProject;
