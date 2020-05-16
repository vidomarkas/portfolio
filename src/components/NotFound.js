import React from "react";
import { Link } from "react-router-dom";
import "../sass/NotFound.scss";
import img from "../assets/img/notfound.svg";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found-title">Nothing found</h2>
      <img src={img} alt="" />
      <p>
        Please go{" "}
        <Link className="not-found-link" to="/">
          back
        </Link>
      </p>
    </div>
  );
}
