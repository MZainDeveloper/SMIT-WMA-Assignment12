import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import quoteImage from "../images/quote.png";

const testimonials = [
  {
    id: 1,
    quote:
      "Massa semper non rutrum orci facilisi sit. Lectus porta quam a fringilla eget viverra sem. Vulputate massa hendrerit turpis gravida tempor, porttitor.",
    author: "Elena Pravo",
    position: "CEO, Upstate",
  },
  {
    id: 2,
    quote:
      "Massa semper non rutrum orci facilisi sit. Lectus porta quam a fringilla eget viverra sem. Vulputate massa hendrerit turpis gravida tempor, porttitor.",
    author: "Elena Pravo",
    position: "CEO, Upstate",
  },
  {
    id: 3,
    quote:
      "Massa semper non rutrum orci facilisi sit. Lectus porta quam a fringilla eget viverra sem. Vulputate massa hendrerit turpis gravida tempor, porttitor.",
    author: "Elena Pravo",
    position: "CEO, Upstate",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="container my-5">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={50}
          slidesPerView={1}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="row my-5 py-lg-5">
                <div className="col-md-8 mx-auto">
                  <img
                    src={quoteImage}
                    className="rounded mx-auto d-inline"
                    alt="quote"
                  />
                  <p className="testimonial-p mt-4">{testimonial.quote}</p>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="pt-5 mb-1">{testimonial.author}</p>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-swiper-button col-md-3 position-absolute">
          <div className="swiper-button-prev testimonial-arrow"></div>
          <div className="arrow-divider">|</div>
          <div className="swiper-button-next testimonial-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
