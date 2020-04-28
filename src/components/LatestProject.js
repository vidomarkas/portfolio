import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectImg from "../assets/img/example.jpg";
import "../sass/LatestProject.scss";
import { ProjectContext } from "../Context/ProjectContext";

function LatestProject() {
  const { filteredProjects } = useContext(ProjectContext);
  const project = filteredProjects[0];

  return (
    <div className="card card-padding">
      <div className="latest-project-container">
        <div className="latest-project-left-container">
          {project.acf.main_image ? (
            <img
              src={project.acf.main_image}
              alt="project image"
              className="latest-project-left-image"
            />
          ) : (
            <div className="latest-project-image-placeholder">
              {" "}
              <h3 className="latest-project-image-placeholder-text">
                {project.title.rendered}
              </h3>
            </div>
          )}

          <div className="latest-project-left-tech"></div>
        </div>
        <div className="latest-project-right-container">
          <div className="latest-project-content">
            <h2 className="card-heading">Latest project</h2>
            <h3 className="latest-project-title">{project.title.rendered}</h3>
            <p className="latest-project-body">
              {project.acf.short_description}
            </p>
          </div>
          <div className="latest-project-controls">
            <Link className="btn btn-secondary" to="/projects">
              See all projects
            </Link>

            <Link className="btn" to={{ pathname: `/project/${project.slug}` }}>
              More details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProject;
