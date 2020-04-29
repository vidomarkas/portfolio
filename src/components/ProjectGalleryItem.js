import React from "react";
import { Link } from "react-router-dom";

const ProjectGalleryItem = ({ project, index }) => {
  return (
    <div className="project-gallery-item">
      <Link to={{ pathname: `/project/${project.slug}` }}>
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${project.acf.main_image})`,
          }}
        ></div>
      </Link>
      <div className="project-content">
        <h2 className="project-title">{project.title.rendered}</h2>
        {project.acf.short_description}
        <ul className="project-list">
          {project.acf.technologies.map((tech, index) => {
            return (
              <li className="project-list-item" key={index}>
                {tech}
              </li>
            );
          })}
        </ul>

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

export default ProjectGalleryItem;
