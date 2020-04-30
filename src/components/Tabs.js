import React, { useState, useContext, useEffect } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import "../sass/Tabs.scss";
import Tab from "./Tab";

function Tabs() {
  const { projects, filterProjects } = useContext(ProjectContext);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  const getTabLabels = () => {
    const list = ["all", ...categories];
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
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (categories.length > 1) {
      setLoading(false);
    }
  }, [categories]);

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

  if (loading) {
    return <p>loading</p>;
  } else {
    return (
      <div className="tabs-container">
        <ul className="tabs-list">{singleCategory}</ul>
      </div>
    );
  }
}

export default Tabs;
