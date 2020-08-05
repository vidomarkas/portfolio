import React, { useContext } from "react";

import "../sass/Header.scss";
import photo from "../assets/img/photo.jpg";
import HeaderTabs from "./HeaderTabs";
import headerImg from "../assets/img/violet.jpg";
import { GithubFeedContext } from "../Context/GithubFeedContext";

function Header() {
  const { closed, toggleGithubFeed } = useContext(GithubFeedContext);
  return (
    <header className="header">
      <div className="header-background">
        <img className="header-image" src={headerImg} alt="" />
      </div>
      <div className="header-menu">
        <HeaderTabs />
      </div>
      <div className="header-profile">
        <img className="header-photo" src={photo} alt="" />
        <h1 className="header-name">Viktoras Domarkas</h1>
      </div>
      <div className="header-github-button" onClick={() => toggleGithubFeed()}>
        {closed ? <p>Hide Github Feed</p> : <p>Show Github Feed</p>}
      </div>
    </header>
  );
}

export default Header;
