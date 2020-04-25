import React from "react";
import { Link } from "react-router-dom";
import "../sass/Header.scss";
import photo from "../assets/img/photo.png";
import bg from "../assets/img/main-bg.jpg";

function Header() {
  return (
    <header className="header">
      {/* <h1 className="header-heading ">
        Hi, I'm Viktoras. <br />A Front-end Web Developer
      </h1>

      <p className="header-text">
        Explore the purpose and possibilities of interactive design systems
        through expert talks, guides and inspirational soundbites. Sign up to
        receive curated emails focused on highlighting the next evolution of
        design systems.
      </p> */}
      <div
        className="header-background"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="header-menu">
        <div className="header-links">
          <Link className="header-link header-link--active" to="/">
            Hello
          </Link>

          <Link className="header-link" to="/about">
            About
          </Link>

          <Link className="header-link" to="/">
            Projects
          </Link>

          <Link className="header-link" to="/">
            Friends
          </Link>

          <Link className="header-link" to="/">
            Photos
          </Link>

          <Link className="header-link" to="/">
            More
          </Link>
        </div>
      </div>
      <div className="header-profile">
        <img className="header-photo" src={photo} alt="" />
        <h1 className="header-name">Viktoras Domarkas</h1>
      </div>
    </header>
  );
}

export default Header;
