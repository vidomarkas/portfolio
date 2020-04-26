import React, { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import ProjectGalleryItem from "./ProjectGalleryItem";
import "../sass/ProjectGallery.scss";

const ProjectGallery = () => {
  const { filteredProjects } = useContext(ProjectContext);
  const galleryItems = filteredProjects.map((project, index) => {
    return <ProjectGalleryItem project={project} key={index} index={index} />;
  });

  return <div className="project-gallery-container">{galleryItems}</div>;
};

export default ProjectGallery;
