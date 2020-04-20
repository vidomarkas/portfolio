import React from "react";
import "../sass/About.scss";
import image1 from "../assets/img/photos/1.jpg";
import image2 from "../assets/img/photos/2.jpg";
import image3 from "../assets/img/photos/3.jpg";
import image4 from "../assets/img/photos/4.jpg";
import image5 from "../assets/img/photos/5.jpg";
import image6 from "../assets/img/photos/6.jpg";
import image7 from "../assets/img/photos/7.jpg";
import image8 from "../assets/img/photos/8.jpg";
import image9 from "../assets/img/photos/9.jpg";
import image10 from "../assets/img/photos/10.jpg";
import image11 from "../assets/img/photos/11.jpg";
import image12 from "../assets/img/photos/12.jpg";
import image13 from "../assets/img/photos/13.jpg";
import image14 from "../assets/img/photos/14.jpg";
import image15 from "../assets/img/photos/15.jpg";
import image16 from "../assets/img/photos/16.jpg";
import image17 from "../assets/img/photos/17.jpg";
import image18 from "../assets/img/photos/18.jpg";

import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

export default function About() {
  const defaultTheme = {
    background: "transparent",
    text: "#fa1e4e",
    grade4: "#fa1e4e",
    grade3: "#c8183e",
    grade2: "#96122e",
    grade1: "#640c1f",
    grade0: "#32060f",
  };
  return (
    <div className="about-background">
      <div className="about-container">
        <div className="about-line"></div>

        <div className="about-header">
          <h1 className="about-heading">Hello,</h1>
          <p className="about-paragraph">
            I’m a self-thought developer obsessed with self-improvement and
            raising the bar for my work with every project.
          </p>

          <p className="about-paragraph">
            I am based in Gravesend, Kent (22 miles and 40min away from London)
            and have been living here for the past 10 years.
          </p>
          <p className="about-paragraph">
            I love building websites using React (this portfolio was made with
            React) and I'm also very passionate about looking new ways to create
            and trying out latest web technologies.
          </p>

          <p className="about-paragraph">
            My skills include front-end development (HTML, CSS, JavaScript,
            React). I am also learning PHP to MySQL to be able to add more
            functionality to my work.
          </p>
        </div>
        <div className="about-grid">
          <div
            style={{ backgroundImage: `url(${image1})` }}
            className=" about-grid-item about-grid-item--1"
          ></div>
          <div
            style={{ backgroundImage: `url(${image2})` }}
            className=" about-grid-item about-grid-item--2"
          ></div>
          <div
            style={{ backgroundImage: `url(${image2})` }}
            className=" about-grid-item about-grid-item--3"
          ></div>
          <div
            style={{ backgroundImage: `url(${image3})` }}
            className=" about-grid-item about-grid-item--4"
          ></div>
          <div
            style={{ backgroundImage: `url(${image18})` }}
            className=" about-grid-item about-grid-item--5"
          ></div>
          <div
            style={{ backgroundImage: `url(${image5})` }}
            className=" about-grid-item about-grid-item--6"
          ></div>
          <div
            style={{ backgroundImage: `url(${image12})` }}
            className=" about-grid-item about-grid-item--7"
          ></div>
          <div
            style={{ backgroundImage: `url(${image6})` }}
            className=" about-grid-item about-grid-item--8"
          ></div>
          <div
            style={{ backgroundImage: `url(${image7})` }}
            className=" about-grid-item about-grid-item--9"
          ></div>
          <div
            style={{ backgroundImage: `url(${image8})` }}
            className=" about-grid-item about-grid-item--10"
          ></div>
          <div
            style={{ backgroundImage: `url(${image8})` }}
            className=" about-grid-item about-grid-item--11"
          ></div>
          <div
            style={{ backgroundImage: `url(${image9})` }}
            className=" about-grid-item about-grid-item--12"
          ></div>
          <div
            style={{ backgroundImage: `url(${image10})` }}
            className=" about-grid-item about-grid-item--13"
          ></div>
          <div
            style={{ backgroundImage: `url(${image4})` }}
            className=" about-grid-item about-grid-item--14"
          ></div>
          <div
            style={{ backgroundImage: `url(${image11})` }}
            className=" about-grid-item about-grid-item--15"
          ></div>
          <div
            style={{ backgroundImage: `url(${image13})` }}
            className=" about-grid-item about-grid-item--16"
          ></div>
          <div
            style={{ backgroundImage: `url(${image14})` }}
            className=" about-grid-item about-grid-item--17"
          ></div>
          <div
            style={{ backgroundImage: `url(${image15})` }}
            className=" about-grid-item about-grid-item--18"
          ></div>
          <div
            style={{ backgroundImage: `url(${image16})` }}
            className=" about-grid-item about-grid-item--19"
          ></div>
          <div
            style={{ backgroundImage: `url(${image17})` }}
            className=" about-grid-item about-grid-item--20"
          ></div>
        </div>
        <GitHubCalendar
          className="github-container"
          username="vidomarkas"
          theme={defaultTheme}
          blockSize={14}
        >
          {" "}
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </div>
    </div>
  );
}
