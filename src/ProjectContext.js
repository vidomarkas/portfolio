import React, { createContext, useState, useEffect } from "react";
import Spinner from "./components/Spinner";

export const ProjectContext = createContext({});

export const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = () => {
    fetch("https://viktorasd2.sg-host.com/wp-json/wp/v2/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects((prevState) => [...data, ...prevState]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterProjects = (category) => {
    if (category === "all") {
      setFilteredProjects([...projects]);
    } else {
      setFilteredProjects([
        ...projects.filter((project) => project.acf.category === category),
      ]);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProjects();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!loading) {
      setFilteredProjects(projects);
    }
    // eslint-disable-next-line
  }, [loading]);

  if (!loading) {
    return (
      <ProjectContext.Provider
        value={{ projects, filteredProjects, filterProjects }}
      >
        {props.children}
      </ProjectContext.Provider>
    );
  } else {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Spinner />;
      </div>
    );
  }
};
