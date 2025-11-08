import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    e.preventDefault();

    // Check if it's a route (starts with /) or an anchor link (starts with #)
    if (href.startsWith("/")) {
      // Navigate to the route
      navigate(href);
    } else {
      // Scroll to anchor on current page
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="grid-bg"></div>
      <div className="float-elements">
        <div className="float-icon">🏥</div>
        <div className="float-icon">⚕️</div>
        <div className="float-icon">🩺</div>
        <div className="float-icon">💊</div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <div className="status-dot"></div>
          <span>Broadcasting Live 24/7</span>
        </div>
        <h1>
          Leading Healthcare
          <br />
          <span className="text-gradient">Media Network</span>
        </h1>
        <p className="hero-desc">
          Connecting healthcare professionals worldwide through innovative
          medical broadcasting, expert insights, and comprehensive coverage of
          medical innovations and breakthroughs.
        </p>
        <div className="hero-buttons">
          <a
            href="/live"
            className="btn btn-primary"
            onClick={(e) => handleNavClick(e, "/live")}
          >
            ▶ Watch Live
          </a>
          <a
            href="#about"
            className="btn btn-secondary"
            onClick={(e) => handleNavClick(e, "#about")}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
