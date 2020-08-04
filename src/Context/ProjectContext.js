import React, { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext({});

export const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  const fetchProjects = () => {
    fetch("https://vdomarkas.com/wp/wp-json/wp/v2/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects([...data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching the project data. ", err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchProjects();
    // eslint-disable-next-line
  }, []);

  const filterProjects = (category) => {
    setActiveTab(category);
    if (category === "all") {
      setFilteredProjects([...projects]);
    } else {
      setFilteredProjects([
        ...projects.filter((project) => project.acf.category === category),
      ]);
    }
  };

  useEffect(() => {
    if (!loading) {
      setFilteredProjects(projects);
    }
    // eslint-disable-next-line
  }, [loading]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        filteredProjects,
        filterProjects,
        loading,
        activeTab,
        setActiveTab,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
