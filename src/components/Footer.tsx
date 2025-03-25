import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer-container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
          <div className="col-md-4">
            <h3>
              <img src={logo} alt="Logo" />
            </h3>
            <p>
              Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi
              augue.
            </p>
            <i className="bi-facebook pe-4"></i>
            <i className="bi-instagram pe-4"></i>
            <i className="bi-twitter pe-4"></i>
            <i className="bi-youtube pe-4"></i>
          </div>

          <div className="col-md-2">
            <h5>Project</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Houses
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Rooms
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Flats
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Appartments
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  How we work ?
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Capital
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5>Movement</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Movement
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Support us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5>Help</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Privacy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Condition
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>

      <footer className="d-flex flex-wrap justify-content-between align-items-center border-top"></footer>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-2">
          <div className="col-md-8 d-flex align-items-center">
            <p>© 2025 Rentiz All rights reserved.</p>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <p>
              Rentiz by:{" "}
              <a
                href="https://muhammadzaintariq.vercel.app"
                className="link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Muhammad Zain Tariq
              </a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
