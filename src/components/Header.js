import React, { useState, useContext, useEffect } from "react";

import "../sass/Header.scss";
import photo from "../assets/img/photo.png";
import bg from "../assets/img/main-bg.jpg";
import HeaderTabs from "./HeaderTabs";

function Header() {
  return (
    <header className="header">
      <div
        className="header-background"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
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
