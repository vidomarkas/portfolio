import React from "react";

import "../sass/Header.scss";
import photo from "../assets/img/photo.png";
import HeaderTabs from "./HeaderTabs";
import VideoWebm from "../assets/video/header-vid.webm";
import VideoMp4small from "../assets/video/header-vid-small.mp4";
import HeaderCover from "../assets/img/header/1.png";

function Header() {
  return (
    <header className="header">
      <div className="header-background">
        <video
          autoPlay
          muted
          loop
          className="header-video"
          playsInline={true}
          disablePictureInPicture
          cover={HeaderCover}
        >
          <source src={VideoWebm} type="video/webm" />
          <source src={VideoMp4small} type="video/mp4" />
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
