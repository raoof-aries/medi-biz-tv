import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="hero-modern">
      <div className="hero-container">
        <div className="hero-content-wrapper">
          {/* Left Content */}
          <div className="hero-text">
            <div className="live-badge">
              <span className="live-dot"></span>
              LIVE BROADCASTING
            </div>

            <h1 className="hero-title">First Global Healthcare TV Channel</h1>

            <p className="hero-description">
              Broadcasting medical excellence 24/7 across 180+ countries.
              Connecting healthcare professionals with cutting-edge medical
              content, live events, and expert insights.
            </p>

            <div className="hero-buttons">
              <a
                href="/live"
                className="btn btn-red"
                onClick={(e) => handleNavClick(e, "/live")}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M3 2l10 6-10 6V2z" />
                </svg>
                Watch Live
              </a>
              <a
                href="#about"
                className="btn btn-outline"
                onClick={(e) => handleNavClick(e, "#about")}
              >
                Learn More
              </a>
            </div>

            {/* Quick Stats */}
            <div className="hero-stats-inline">
              <div className="stat-inline">
                <span className="stat-number">24/7</span>
                <span className="stat-text">Broadcasting</span>
              </div>
              <div className="stat-inline">
                <span className="stat-number">180+</span>
                <span className="stat-text">Countries</span>
              </div>
              <div className="stat-inline">
                <span className="stat-number">50K+</span>
                <span className="stat-text">Professionals</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual">
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="play-circle">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M10 6l16 10-16 10V6z" />
                  </svg>
                </div>
                <div className="video-overlay">
                  <span className="viewer-count">
                    <span className="pulse-indicator"></span>
                    12.5K watching now
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="floating-element el-1">
              <span className="icon">🏥</span>
            </div>
            <div className="floating-element el-2">
              <span className="icon">⚕️</span>
            </div>
            <div className="floating-element el-3">
              <span className="icon">🩺</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
