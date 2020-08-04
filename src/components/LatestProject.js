import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../sass/LatestProject.scss";
import { ProjectContext } from "../Context/ProjectContext";
import Spinner from "./Spinner";

function LatestProject() {
  const { projects, loading } = useContext(ProjectContext);
  const project = projects[0];

  return (
    <div className="card latest">
      {!loading && project ? (
        <Link to={{ pathname: `/project/${project.slug}` }}>
          <div
            className="latest-background"
            style={{
              backgroundImage: `url(${project.acf.main_image.sizes.medium_large})`,
            }}
          ></div>
          <div className="latest-background-overlay"></div>
          <h2 className="card-heading latest-heading">Featured project</h2>
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
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default LatestProject;
