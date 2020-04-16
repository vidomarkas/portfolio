import React, { useContext } from "react";
import { ProjectContext } from "../ProjectContext";
import GridItem from "./GridItem";
import "../sass/Grid.scss";

const Grid = () => {
  const { filteredProjects } = useContext(ProjectContext);
  const gridItems = filteredProjects.map((project, index) => {
    return <GridItem project={project} key={index} index={index} />;
  });

  return <div className="grid-container">{gridItems}</div>;
};

export default Grid;
