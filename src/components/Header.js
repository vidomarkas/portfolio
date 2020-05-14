import React from "react";

import "../sass/Header.scss";
import photo from "../assets/img/photo.png";
import HeaderTabs from "./HeaderTabs";
import headerImg from "../assets/img/violet.jpg";

function Header() {
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
    </header>
  );
}

export default Header;
