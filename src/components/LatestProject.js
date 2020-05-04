import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../sass/LatestProject.scss";
import { ProjectContext } from "../Context/ProjectContext";

function LatestProject() {
  const { projects } = useContext(ProjectContext);
  const project = projects[0];

  return (
    <div className="card latest">
      <Link to={{ pathname: `/project/${project.slug}` }}>
        <div
          className="latest-background"
          style={{ backgroundImage: `url(${project.acf.main_image})` }}
        ></div>
        <div className="latest-background-overlay"></div>
        <h2 className="card-heading latest-heading">Latest project</h2>
        <div className="latest-body">
          <div className="latest-content">
            <h3 className="latest-title">{project.title.rendered}</h3>
            <p className="latest-description">
              {project.acf.short_description}
            </p>
          </div>
          <div className="latest-details"></div>
        </div>
      </Link>
    </div>
  );
}

export default LatestProject;
