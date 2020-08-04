import React, { useState, useContext, useEffect } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import "../sass/Tabs.scss";
import Tab from "./Tab";

function Tabs() {
  const {
    projects,
    filterProjects,
    activeTab,
    setActiveTab,
    loading,
  } = useContext(ProjectContext);

  const [categories, setCategories] = useState(["all"]);

  const getTabLabels = () => {
    const list = [...categories];
    projects.map((project) => {
      if (!list.includes(project.acf.category)) {
        list.push(project.acf.category);
      }
      return null;
    });
    setCategories([...list]);
  };

  // runs when mounted
  useEffect(() => {
    getTabLabels();
  }, [loading]);

  const onClickTabItem = (category) => {
    setActiveTab(category);
    filterProjects(category);
  };

  const singleCategory = categories.map((category, index) => {
    return (
      <Tab
        category={category}
        key={index}
        onClickTabItem={onClickTabItem}
        activeTab={activeTab}
      />
    );
  });

  if (!loading && categories) {
    return (
      <div className="tabs-container">
        <ul className="tabs-list">{singleCategory}</ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Tabs;
