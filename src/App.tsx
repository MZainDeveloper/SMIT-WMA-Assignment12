import React from "react";
import Navbar from "./components/Navbar";
import FeaturedInSection from "./components/FeaturedInSection";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/ContactUs";
import Start from "./components/Start";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css";
import "./index.css";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <FeaturedInSection />
      <FeaturedProperties />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
