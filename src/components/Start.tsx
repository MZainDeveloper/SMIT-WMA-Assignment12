import React from "react";

const Start = () => {
  return (
    <section id="start">
      <div className="container my-5 py-5">
        <div className="row featurette py-lg-5">
          <div className="col-md-5 order-md-1 d-flex">
            <h1 className="text-capitalize lh-1 mb-3">
              Let’s simply begin with rentiz.
            </h1>
          </div>
          <div className="col-md-7 order-md-2">
            <div className="text-content ps-md-5 mt-4 mt-md-0">
              <p className="py-lg-2">
                Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi
                augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam
                donec sed morbi congue eget lorem viverra porta id lobortis.
              </p>
              <a
                href="contact.html"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
