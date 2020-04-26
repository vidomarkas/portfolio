import React, { useContext, useState } from "react";
import HeaderTab from "./HeaderTab";
import { PagesContext } from "../Context/PagesContext";

function HeaderTabs() {
  const { pages } = useContext(PagesContext);
  const [activeTab, setActiveTab] = useState(
    window.location.pathname.substring(1)
  );

  const onClickTabItem = (slug) => {
    setActiveTab(slug);
  };

  const pagesList = pages.map((page, index) => {
    return (
      <HeaderTab
        key={index}
        title={page.title.rendered}
        onClickTabItem={onClickTabItem}
        slug={page.slug}
        active={activeTab}
      />
    );
  });

  return (
    <div className="header-links">
      <HeaderTab
        title="hello"
        slug=""
        onClickTabItem={onClickTabItem}
        active={activeTab}
      />
      {pagesList}
    </div>
  );
}

export default HeaderTabs;
