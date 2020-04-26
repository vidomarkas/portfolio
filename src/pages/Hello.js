import React from "react";
import bag from "../assets/img/bag.svg";
import pin from "../assets/img/pin.svg";
import heart from "../assets/img/heart.svg";
import "../sass/Hello.scss";
import LatestPost from "../components/LatestPost";
import LatestProject from "../components/LatestProject";

function Hello() {
  return (
    <div className="hello-container">
      <div className="hello-left">
        <div className="hello-intro card card-padding">
          <h2 className="card-heading">Introduction</h2>
          <div className="hello-intro--body">
            <div className="hello-intro--item">
              <span>
                <img src={bag} alt="bag" />
              </span>
              <p>
                Front-end web developer at <span>your company?</span>
              </p>
            </div>
            <div className="hello-intro--item">
              <span>
                <img src={pin} alt="location" />
              </span>
              <p>
                Lives in <span>Gravesend, Kent</span>
              </p>
            </div>
            <div className="hello-intro--item">
              <span>
                <img src={heart} alt="heart" />
              </span>
              <p>
                In relationship with <span>Web Development</span>
              </p>
            </div>
          </div>
        </div>
        <LatestPost />
      </div>
      <div className="hello-right">
        <div className="card card-padding">
          <h2 className="card-heading">Message</h2>
          <form action="" className="hello-message">
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Write something to Viktoras..."
            ></textarea>
            <div className="hello-message-wrapper">
              <input
                className="hello-message-email"
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />

              <input
                type="submit"
                value="Send"
                className="btn hello-message-btn"
              />
            </div>
          </form>
        </div>
        <LatestProject />
      </div>
    </div>
  );
}

export default Hello;
