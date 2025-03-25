import React from "react";
import groupImage from "../images/group.png";

const ContactUs = () => {
  return (
    <section
      id="help"
      className="py-5"
      style={{
        background:
          "linear-gradient(270deg, #1A242F 0.01%, rgba(26, 36, 47, 0.00) 100%)",
      }}
    >
      <div className="container-lg my-5">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6">
            <div className="image-holder d-flex">
              <img
                src={groupImage}
                className="img-fluid"
                alt="Bootstrap Themes"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-content ps-md-5 mt-4 mt-md-0">
              <h2 className="text-capitalize">We help people to find homes</h2>
              <p>
                Mauris orci donec blandit maecenas. Orci lorem purus porttitor
                massa consectetur. Neque, vestibulum sed varius magna et at. Eu,
                adipiscing morbi augue justo. Nibh laoreet volutpat quis velit.
                Blandit aliquam donec sed morbi congue eget lorem viverra porta
                id lobortis.
              </p>
              <a href="contact.html" className="btn btn-primary btn-lg">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
