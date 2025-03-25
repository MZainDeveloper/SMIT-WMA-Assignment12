import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// Importing property images
import item15 from "../images/item15.png";
import item16 from "../images/item16.png";
import item17 from "../images/item17.png";
import item1 from "../images/item1.jpg";
import item2 from "../images/item2.jpg";
import item3 from "../images/item3.jpg";

// Importing icon images
import bedIcon from "../images/bed.png";
import bathIcon from "../images/bath.png";
import squareIcon from "../images/square.png";

const properties = [
  {
    id: 1,
    image: item15,
    title: "Aliva Priva Jalvin",
    location: "1087 Pin Oak Drive, Clinton, USA",
    beds: 4,
    baths: 2,
    sqft: 1203,
  },
  {
    id: 2,
    image: item16,
    title: "Aliva Priva Jalvin",
    location: "1087 Pin Oak Drive, Clinton, USA",
    beds: 4,
    baths: 2,
    sqft: 1203,
  },
  {
    id: 3,
    image: item17,
    title: "Aliva Priva Jalvin",
    location: "1087 Pin Oak Drive, Clinton, USA",
    beds: 4,
    baths: 2,
    sqft: 1203,
  },
  {
    id: 4,
    image: item1,
    title: "Aliva Priva Jalvin",
    location: "1087 Pin Oak Drive, Clinton, USA",
    beds: 4,
    baths: 2,
    sqft: 1203,
  },
  {
    id: 5,
    image: item2,
    title: "Aliva Priva Jalvin",
    location: "1087 Pin Oak Drive, Clinton, USA",
    beds: 4,
    baths: 2,
    sqft: 1203,
  },
  {
    id: 6,
    image: item3,
    title: "Aliva Priva Jalvin",
    location: "1087 Pin Oak Drive, Clinton, USA",
    beds: 4,
    baths: 2,
    sqft: 1203,
  },
];

const FeaturedProperties = () => {
  return (
    <section id="residence">
      <div className="container my-5 py-5">
        <h2 className="text-capitalize m-0 py-lg-5">Popular Residence</h2>

        <div className="swiper-button-next residence-swiper-next residence-arrow"></div>
        <div className="swiper-button-prev residence-swiper-prev residence-arrow"></div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".residence-swiper-next",
            prevEl: ".residence-swiper-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="residence-swiper"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="card">
                <a href="property-single.html">
                  <img
                    src={property.image}
                    className="card-img-top"
                    alt="property"
                  />
                </a>
                <div className="card-body p-0">
                  <a href="property-single.html">
                    <h5 className="card-title pt-4">{property.title}</h5>
                  </a>
                  <p className="card-text">{property.location}</p>
                  <div className="card-text">
                    <ul className="d-flex">
                      <li className="residence-list">
                        <img src={bedIcon} alt="bed" /> {property.beds} bed
                      </li>
                      <li className="residence-list">
                        <img src={bathIcon} alt="bath" /> {property.baths} bath
                      </li>
                      <li className="residence-list">
                        <img src={squareIcon} alt="square" /> {property.sqft}{" "}
                        Sqft.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="residence-btn">
          <a href="properties.html" className="btn btn-primary btn-lg my-5">
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
