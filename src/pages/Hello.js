import React from "react";
import bag from "../assets/img/bag.svg";
import pin from "../assets/img/pin.svg";
import gear from "../assets/img/gear.svg";
import "../sass/Hello.scss";
import Reviews from "../components/Reviews";
import LatestProject from "../components/LatestProject";
// import HelloMessage from "../components/HelloMessage";

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
              <p>Front-end web developer</p>
            </div>
            <div className="hello-intro--item">
              <span>
                <img src={gear} alt="heart" />
              </span>
              <p>
                <span>JavaScript, React, SASS</span>
              </p>
            </div>
            <div className="hello-intro--item">
              <span>
                <img src={pin} alt="location" />
              </span>
              <p>
                Lives in{" "}
                <span>
                  {" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/Gravesend/data=!4m2!3m1!1s0x47d8b412568e0b3f:0x4acb4760cd850e75?sa=X&ved=2ahUKEwiF0eavwYnpAhUnREEAHXEeB4kQ8gEwMXoECBwQBA"
                  >
                    Gravesend, Kent
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <LatestProject />
      </div>
      <div className="hello-right">
        <Reviews />
      </div>
    </div>
  );
}

export default Hello;
