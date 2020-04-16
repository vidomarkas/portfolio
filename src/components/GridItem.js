import React from "react";

import { Link } from "react-router-dom";

const GridItem = ({ project, index }) => {
  // console.log("project", project);

  return (
    <div
      className={`grid-item grid-item--${index + 1}`}
      style={{
        backgroundImage: `url(${project.acf.main_image})`,
      }}
    >
      <div className="project-content">
        <h2 className="project-title">{project.title.rendered}</h2>
        <div className="project-links">
          <Link
            className="project-link"
            to={{ pathname: `/project/${project.slug}` }}
          >
            See details
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            href={project.acf.live_link}
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
