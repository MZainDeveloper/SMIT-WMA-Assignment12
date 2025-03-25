import React from "react";
import billboardImage from "../images/billboard.png";

const Hero = () => {
  return (
    <section id="billboard" className="pt-20">
      <div className="container">
        <div className="row flex-lg-row-reverse items-center">
          <div className="col-lg-6">
            <img
              src={billboardImage}
              className="d-block mx-lg-auto img-fluid"
              alt="Modern home"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="text-4xl font-bold mb-4">
              Perfect way to buy and sell a home
            </h1>
            <p className="lead mb-4">
              Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna,
              massa aliqua dui pellentesque.
            </p>
            <div className="search-form bg-white p-4 rounded-lg shadow">
              <div className="row billboard-row">
                <div className="col-lg-3 billboard-select">
                  <select
                    className="form-select mb-2 mb-lg-0"
                    aria-label="Purpose"
                  >
                    <option>Purpose</option>
                    <option>Buy</option>
                    <option>Rent</option>
                    <option>Sell</option>
                  </select>
                </div>
                <div className="col-lg-3 billboard-select">
                  <select
                    className="form-select mb-2 mb-lg-0"
                    aria-label="Location"
                  >
                    <option>Location</option>
                    <option>Texas</option>
                    <option>Miami</option>
                    <option>Chicago</option>
                    <option>New York</option>
                  </select>
                </div>
                <div className="col-lg-3 billboard-select">
                  <select
                    className="form-select mb-2 mb-lg-0"
                    aria-label="Type"
                  >
                    <option>Type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Loft</option>
                  </select>
                </div>
                <div className="col-lg-3 billboard-btn">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-full"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
