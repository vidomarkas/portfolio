import React from "react";
import { Link } from "react-router-dom";
import "../sass/Footer.scss";
import logo from "../assets/img/logo.png";
//import twitter from "../assets/img/twitter.svg";
import github from "../assets/img/github.svg";
import email from "../assets/img/email.svg";
import linkedin from "../assets/img/linkedin.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__contact-box">
        <div className="footer__item">
          {" "}
          <h3>Start a project</h3>
        </div>
        <div className="footer__item">
          <p>
            Interested in working together? We should queue up a chat. I’ll buy
            the coffee.
          </p>
        </div>
        <div className="footer__item">
          <a
            className="button-link contact-button"
            href="mailto:vidomarkas@gmail.com"
          >
            Let's do this
          </a>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-copyright">&copy;2020 Viktoras Domarkas</div>
        <ul className="footer__social-media">
          <li className="footer__icon">
            <a href="https://github.com/vidomarkas">
              <img src={github} alt="Visit github profile" />
            </a>
          </li>
          <li className="footer__icon">
            <a href="https://www.linkedin.com/in/viktoras-domarkas/">
              <img src={linkedin} alt="Visit linkedin profile" />
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
