import React, { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import ProjectGalleryItem from "./ProjectGalleryItem";
import "../sass/ProjectGallery.scss";
import Spinner from "./Spinner";

const ProjectGallery = () => {
  const { filteredProjects, loading } = useContext(ProjectContext);
  const galleryItems = filteredProjects.map((project, index) => {
    return <ProjectGalleryItem project={project} key={index} index={index} />;
  });

  return (
    <div className="project-gallery-container">
      {!loading && galleryItems ? (
        galleryItems
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
};

export default ProjectGallery;
