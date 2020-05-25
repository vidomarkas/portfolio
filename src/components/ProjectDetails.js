import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../Context/ProjectContext";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

import NotFound from "./NotFound";

import "../sass/ProjectDetails.scss";

export default function ProjectDetails({ location }) {
  // State
  const [project, setProject] = useState();
  const [projectImages, setProjectImages] = useState([]);

  // Context

  const { projects } = useContext(ProjectContext);

  // Awesome Slider settings

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  // ---------------------------------------------

  const [currentProject] = projects.filter(
    // example pathname = "/project/tasklist". Remove first 9 symbols "/project/"
    (project) => project.slug === location.pathname.slice(9)
  );

  useEffect(() => {
    setProject(currentProject);
    // eslint-disable-next-line
  }, []);

  const getProjectImages = () => {
    let imgList = [];
    for (let i = 2; i < 10; i++) {
      if (project.acf["image" + i]) {
        imgList.push(project.acf["image" + i].sizes.medium_large);
      }
    }
    setProjectImages([...imgList]);
  };

  useEffect(() => {
    if (project) {
      getProjectImages();
    }
    // eslint-disable-next-line
  }, [project]);

  const showImageSlider = () => {
    if (projectImages.length > 0) {
      return (
        <div className="slider-container">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={5000}
            animation="cubeAnimation"
            cssModule={AwesomeSliderStyles}
            bullets={false}
            mobileTouch={true}
          >
            {projectImages.map((img, index) => {
              return (
                <div key={index} className="aws-btn">
                  <img src={img} alt="screenshot" className="slide" />
                </div>
              );
            })}
          </AutoplaySlider>
        </div>
      );
    }
  };

  if (project) {
    return (
      <>
        <div className="project-details">
          <div className="project-details-container">
            <div className="story">
              <h2 className="story-title">{project.title.rendered}</h2>

              {project.acf.short_description ? (
                <h3 className="story-title-secondary">
                  {project.acf.short_description}
                </h3>
              ) : null}
              <div className="story-links">
                {project.acf.code_link ? (
                  <a
                    className="btn btn-secondary  project-details-link"
                    href={project.acf.code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code on GitHub
                  </a>
                ) : null}

                {project.acf.live_link ? (
                  <a
                    className="btn btn-secondary project-details-link"
                    href={project.acf.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit website
                  </a>
                ) : null}
                <header className="project-details-header">
                  {showImageSlider()}
                </header>
              </div>
              {project.acf.date ? (
                <section className="story-section">
                  <h3 className="story-section-label">Date</h3>
                  <p className="story-section-paragraph">{project.acf.date}</p>
                </section>
              ) : null}

              {project.acf.technologies ? (
                <section className="story-section">
                  <h3 className="story-section-label">Technologies</h3>
                  <ul className="story-section-list">
                    {project.acf.technologies.map((tech, index) => {
                      return (
                        <li className="story-section-list-item" key={index}>
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ) : null}

              {project.acf.tools.length > 0 ? (
                <section className="story-section">
                  <h3 className="story-section-label">Tools</h3>
                  <ul className="story-section-list">
                    {project.acf.tools.map((tool, index) => {
                      return (
                        <li className="story-section-list-item" key={index}>
                          {tool}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ) : null}

              {project.acf.services_provided.length > 0 ? (
                <section className="story-section">
                  <h3 className="story-section-label">Services provided</h3>
                  <ul className="story-section-paragraph">
                    {project.acf.services_provided.map((service, index) => {
                      return <li key={index}>{service}</li>;
                    })}
                  </ul>
                </section>
              ) : null}

              {project.acf.website_type.length > 0 ? (
                <section className="story-section">
                  <h3 className="story-section-label">Website type</h3>
                  <ul className="story-section-paragraph">
                    {project.acf.website_type.map((type, index) => {
                      return <li key={index}>{type}</li>;
                    })}
                  </ul>
                </section>
              ) : null}

              {project.acf.video ? (
                <section className="story-section">
                  <h3 className="story-section-label">Video</h3>
                  <div className="story-section-description">
                    <div className="video-wrapper">
                      <iframe
                        // className="story-section-video"
                        title="yt_video"
                        src={project.acf.video}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </section>
              ) : null}

              {project.content ? (
                <section className="story-section">
                  <h3 className="story-section-label">Description</h3>
                  <div
                    className="story-section-description"
                    dangerouslySetInnerHTML={{
                      __html: project.content.rendered,
                    }}
                  ></div>
                </section>
              ) : null}

              <Link className="btn btn-secondary" to="/projects/">
                ‹ Back
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <NotFound />;
  }
}
