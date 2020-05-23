import React from "react";
import "../sass/Contact.scss";
import img from "../assets/img/contact.svg";
import github from "../assets/img/github.svg";
import email from "../assets/img/email.svg";
import linkedin from "../assets/img/linkedin.svg";

export default function Contact() {
  return (
    <div className="card contact">
      <h1 className="contact-title">Contact</h1>
      <ul className="contact-links">
        <li className="contact-link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/viktoras-domarkas/"
          >
            <img src={linkedin} alt="Visit linkedin profile" />{" "}
            linkedin.com/in/viktoras-domarkas
          </a>
        </li>
        <li className="contact-link">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/vidomarkas">
            <img src={github} alt="Visit github profile" />{" "}
            github.com/vidomarkas
          </a>
        </li>

        <li className="contact-link">
          <a  href="mailto:hi@vdomarkas.com">
            <img src={email} alt="Send an email" />
            hi@vdomarkas.com
          </a>
        </li>
      </ul>
      <p className="contact-subheading"> * Please email me for my resume</p>
      <img className="contact-illustration" src={img} alt="" />
    </div>
  );
}
