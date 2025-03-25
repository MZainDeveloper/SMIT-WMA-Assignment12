import React from "react";
import searchIcon from "../images/search.png";
import priceIcon from "../images/price.png";
import timeIcon from "../images/time.png";

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="container">
        <div className="row py-lg-5">
          <h2 className="text-capitalize text-center m-0 py-lg-5">
            Why to choose us
          </h2>

          <div className="text-center col-lg-4">
            <img
              src={searchIcon}
              className="bd-placeholder-img rounded-circle"
              alt="Easy to find"
              width="140"
              height="140"
            />
            <h4 className="fw-normal mt-5">Easy to find</h4>
            <p>
              Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae,
              nec mattis lectus quam pretium amet facilisis.
            </p>
          </div>

          <div className="text-center col-lg-4">
            <img
              src={priceIcon}
              className="bd-placeholder-img rounded-circle"
              alt="Affordable Prices"
              width="140"
              height="140"
            />
            <h4 className="fw-normal mt-5">Affordable Prices</h4>
            <p>
              Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae,
              nec mattis lectus quam pretium amet facilisis.
            </p>
          </div>

          <div className="text-center col-lg-4">
            <img
              src={timeIcon}
              className="bd-placeholder-img rounded-circle"
              alt="Quickly Process"
              width="140"
              height="140"
            />
            <h4 className="fw-normal mt-5">Quickly Process</h4>
            <p>
              Ac, gravida in diam vitae, nec mattis lectus quam pretium amet
              facilisis. Urna, massa aliqua dui pellentesque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
