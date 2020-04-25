import React from "react";
import exampleImg from "../assets/img/example.jpg";
import Calendar from "../assets/img/calendar.svg";
import Eye from "../assets/img/eye.svg";
import { Link } from "react-router-dom";

function LatestPost() {
  return (
    <div className="card latest-post">
      {/* <h2 className="card-heading">Latest post</h2> */}
      <img className="card-img" src={exampleImg} alt="" />
      <div className="latest-post-body">
        <h2 className="card-heading">Latest post</h2>
        <h3 className="card-title">How to eat sleep code repeat</h3>

        <div className="latest-post-content">
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="latest-post-details">
          <div className="latest-post-details">
            <img src={Calendar} alt="date" />
            <span>01/04/2020</span>
          </div>
          <Link className="btn latest-post-btn">Read</Link>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;
