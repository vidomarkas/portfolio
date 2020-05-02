import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../sass/LatestProject.scss";
import { ProjectContext } from "../Context/ProjectContext";

function LatestProject() {
  const { projects } = useContext(ProjectContext);
  const project = projects[0];

  return (
    <div className="card latest">
      <h2 className="card-heading latest-heading">Latest project</h2>

      {project.acf.main_image ? (
        <img
          className="card-img"
          src={project.acf.main_image}
          alt={project.title.rendered}
          className="latest-project-left-image"
        />
      ) : (
        <div className="latest-project-image-placeholder">
          <h3 className="latest-project-image-placeholder-text">
            {project.title.rendered}
          </h3>
        </div>
      )}
      <div className="latest-body">
        <h3 className="latest-title">{project.title.rendered}</h3>
        <div className="latest-content">
          <p>{project.acf.short_description}</p>
        </div>
        <div className="latest-details">
          <Link className="btn btn-secondary" to="/projects">
            See all projects
          </Link>

          <Link className="btn" to={{ pathname: `/project/${project.slug}` }}>
            More details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LatestProject;
