import React from "react";
import "../sass/Header.scss";

function Header() {
  return (
    <header className="header">
      <h1
        data-title=" Hi, I'm Viktoras. A Front-end Web Developer"
        className="header-heading "
      >
        Hi, I'm Viktoras. <br />A Front-end Web Developer
      </h1>

      <p className="header-text">
        Explore the purpose and possibilities of interactive design systems
        through expert talks, guides and inspirational soundbites. Sign up to
        receive curated emails focused on highlighting the next evolution of
        design systems.
      </p>
    </header>
  );
}

export default Header;
