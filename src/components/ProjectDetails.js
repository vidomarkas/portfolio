import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../ProjectContext";
import NotFound from "./NotFound";
import "../sass/ProjectDetails.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function ProjectDetails({ location }) {
  const [project, setProject] = useState(null);
  const [projectImages, setProjectImages] = useState([]);

  const { projects } = useContext(ProjectContext);

  const [filteredProject] = projects.filter(
    // example pathname = "/project/tasklist". Remove first 9 symbols "/project/"
    (project) => project.slug === location.pathname.slice(9)
  );

  const getProjectImages = () => {
    if (project !== null) {
      let imgList = [];
      for (let i = 2; i < 10; i++) {
        if (project.acf.image[i]) {
          imgList.push(project.acf.image[i]);
        }
      }

      setProjectImages(...imgList);
    }
  };

  useEffect(() => {
    setProject(filteredProject);
  }, [filteredProject]);

  useEffect(() => {
    getProjectImages();
  }, []);

  console.log("project", project);
  console.log("filteredProject", filteredProject);
  //console.log("location.pathname", location.pathname);

  if (project) {
    return (
      <>
        <header className="projectDetails__header">
          <div className="slider-container">
            <AwesomeSlider>
              {projectImages.map((img) => {
                console.log("img", img);
                return (
                  <div>
                    <img src={img} alt="screenshot" />
                  </div>
                );
              })}

              {/* {project.acf.image2 ? (
                <div>
                  <img
                    className="slide-image"
                    src={project.acf.image2}
                    alt="screenshot"
                  />
                </div>
              ) : null}

              {project.acf.image3 ? (
                <div>
                  {" "}
                  <img
                    className="slide-image"
                    src={project.acf.image3}
                    alt="screenshot"
                  />
                </div>
              ) : null}

              {project.acf.image4 ? (
                <img
                  className="slide-image"
                  src={project.acf.image4}
                  alt="screenshot"
                />
              ) : null}

              {project.acf.image5 ? (
                <img
                  className="slide-image"
                  src={project.acf.image5}
                  alt="screenshot"
                />
              ) : null}

              {project.acf.image6 ? (
                <img
                  className="slide-image"
                  src={project.acf.image6}
                  alt="screenshot"
                />
              ) : null}

              {project.acf.image7 ? (
                <img
                  className="slide-image"
                  src={project.acf.image7}
                  alt="screenshot"
                />
              ) : null} */}
            </AwesomeSlider>
          </div>
        </header>

        <div className="projectDetails__body">
          <div className="story">
            <h2>{project.title.rendered}</h2>
            {project.acf.code_link ? (
              <a className="projectDetails-link" href={project.acf.code_link}>
                Code
              </a>
            ) : null}

            {project.acf.live_link ? (
              <a className="projectDetails-link" href={project.acf.live_link}>
                Live
              </a>
            ) : null}
            {project.acf.date ? (
              <section className="story-section">
                <h3 className="story-section-label">Date</h3>
                <p className="story-section-paragraph">{project.acf.date}</p>
              </section>
            ) : null}

            {project.acf.short_description ? (
              <section className="story-section">
                <h3 className="story-section-label">Short description</h3>
                <p className="story-section-paragraph">
                  {project.acf.short_description}
                </p>
              </section>
            ) : null}

            <section className="story-section">
              <h3 className="story-section-label">Technologies</h3>
              <ul className="story-section-paragraph">
                {project.acf.technologies.map((tech, index) => {
                  return <li key={index}>{tech}</li>;
                })}
              </ul>
            </section>
            <section className="story-section">
              <h3 className="story-section-label">Tools</h3>
              <ul className="story-section-paragraph">
                {project.acf.tools.map((tool, index) => {
                  return <li key={index}>{tool}</li>;
                })}
              </ul>
            </section>

            {project.acf.services_provided.length > 0 ? (
              <section className="story-section">
                <h3 className="story-section-label">Services</h3>
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

            {project.acf.category ? (
              <section className="story-section">
                <h3 className="story-section-label">Category</h3>
                <p className="story-section-paragraph">
                  {project.acf.category}
                </p>
              </section>
            ) : null}
            {project.content ? (
              <section className="story-section">
                <h3 className="story-section-label">Content</h3>
                <div
                  className="story-section-content"
                  dangerouslySetInnerHTML={{ __html: project.content.rendered }}
                ></div>
              </section>
            ) : null}

            <Link to="/">Back</Link>
          </div>
        </div>
      </>
    );
  } else {
    return <NotFound />;
  }
}
