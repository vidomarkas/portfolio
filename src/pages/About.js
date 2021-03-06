import React from "react";
import "../sass/About.scss";
import img from "../assets/img/dev1.svg";

export default function About() {
  return (
    <div className="about-background">
      <div className="about-container">
        <div className="about-header">
          <p className="about-paragraph">
            I’m a self-taught developer obsessed with self-improvement and
            raising the bar for my work with every project.
          </p>

          <p className="about-paragraph">
            Based in Gravesend, Kent (22 miles and 40min away from London) and
            have been living here for the past 10 years.
          </p>
          <p className="about-paragraph">
            I'm passionate about looking for new ways to create and trying out
            latest web technologies.
          </p>
          <img src={img} alt="" style={{ width: "100%" }} />
          <p className="about-paragraph">
            My skills include front-end development (HTML, CSS, JavaScript,
            React, Redux). I use tools such as Git, Figma, Adobe XD.
          </p>
          <p className="about-paragraph">
            Currently, I am looking to become a member of a professional
            developer team to level up my skills and collaborate with like
            minded people.
          </p>
        </div>
      </div>
    </div>
  );
}
