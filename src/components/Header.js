import React from "react";

import "../sass/Header.scss";
import photo from "../assets/img/photo.png";
import HeaderTabs from "./HeaderTabs";
import Video from "../assets/video/vid.webm";

function Header() {
  return (
    <header className="header">
      <div className="header-background">
        <video
          autoPlay
          muted
          loop
          className="header-video"
          playsInline="true"
          disablePictureInPicture="true"
        >
          <source src={Video} type="video/mp4" />
        </video>
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
