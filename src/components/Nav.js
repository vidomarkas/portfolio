import React from "react";
import { Link } from "react-router-dom";

import "../sass/Nav.scss";
import logo from "../assets/img/logo.png";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              <img className="nav-logo" src={logo} alt="V. logo" />
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-line"></div>
    </nav>
  );
}
