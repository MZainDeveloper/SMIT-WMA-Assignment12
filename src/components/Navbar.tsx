import React, { useState } from "react";
import { Menu } from "lucide-react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="nav" className="site-header fixed w-full text-white bg-dark">
      <nav id="navbar-example2" className="navbar navbar-expand-lg py-2">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="h-8" />
          </a>

          <button
            className="navbar-toggler text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>

          <div className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setIsOpen(false)}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav align-items-center justify-content-end flex-grow-1">
                <li className="nav-item">
                  <a className="nav-link active me-md-4" href="#billboard">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-md-4" href="#residence">
                    Properties
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-md-4" href="#about-us">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-md-4" href="#testimonial">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-md-4" href="#help">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary">Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
