import React from "react";
import "../sass/Footer.scss";
import github from "../assets/img/github.svg";
import email from "../assets/img/email.svg";
import linkedin from "../assets/img/linkedin.svg";

export default function Footer() {
  return (
    <div className="footer card">
      <div className="footer__contact-box">
        <div className="footer__item">
          <h3>Interested in working together?</h3>
        </div>
        <div className="footer__item">
          <p>Let's chat.</p>
        </div>
        <div className="footer__item">
          <a className="contact-button btn" href="mailto:vidomarkas@gmail.com">
            Email me
          </a>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Viktoras Domarkas
        </div>
        <ul className="footer__social-media">
          <li className="footer__icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/viktoras-domarkas/"
            >
              <img src={linkedin} alt="Visit linkedin profile" />
            </a>
          </li>
          <li className="footer__icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vidomarkas"
            >
              <img src={github} alt="Visit github profile" />
            </a>
          </li>
          <li className="footer__icon">
            <a href="mailto:vidomarkas@gmail.com">
              <img src={email} alt="Send an email" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
