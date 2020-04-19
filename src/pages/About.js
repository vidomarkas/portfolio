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

export default function About() {
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
            {" "}
            I don’t believe in the traditional education system, I think
            learning is a mindset - if I stop, I’ll be out of business in a few
            months... ok years maybe.
          </p>
          <p className="about-paragraph">
            {" "}
            I am based in Gravesend, Kent (22 miles and 40min away from London)
            and have been living here for the past 10 years. I love building
            websites using React(this portfolio was made with React) and I'm
            also very passionate about designing mobile apps. So much more to
            come!{" "}
          </p>
          <p className="about-paragraph">
            I aim to create a beautiful websites, user interfaces. corner of the
            web free of ads, sponsored posts, newsletter pop-ups, affiliate
            links, and the rest of the annoying noise we're so accustomed to
            seeing on the internet these days.
          </p>
          <p className="about-paragraph">
            {" "}
            My skills include mobile interface design, prototyping, wireframing,
            branding, product design, front-end development, and back-end
            development.
          </p>
          {/* <p>
          {" "}
          I love building digital products and creating enjoyable user
          experiences. I have a passion for minimalism in design and believe
          great design should be invisible.
        </p> */}
          {/* <p className="about-paragraph">
          {" "}
          Over the last 2 years, I've worked on a range of web and mobile
          products. I'm always looking to work on fun projects.
        </p>
        <p className="about-paragraph">
          {" "}
          Feel free to reach out with work inquiries, side projects, or just to
          say hello! Currently I am looking to become a member of a great web
          developer team.
        </p> */}
          {/* <div>
          My Toolbox JavaScript is my language of choice. I’ve been creating
          full-stack JavaScript software for nearly five years. The most life
          changing event in my life was getting introduced to Node.js, and of
          course reading “Eloquent JavaScript” from cover to cover. This can
          only outweigh the moment I started exploring serverless architectures.
          Now, people keep calling me an influencer in the field of serverless.
          I still don’t know how to feel about this. Core tools JavaScript
          Nodejs Express MongoDB AWS Linux DevOps Serverless MySQL AngularJS
          Gulp HTML CSS Sass Hugo Learning PHP Laravel, React FACTS:
          1)kdmsfjnjdn
        </div> */}
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
            style={{ backgroundImage: `url(${image2})` }}
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
      </div>
    </div>
  );
}
