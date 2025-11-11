import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <>
      {/* Stats Section */}
      <section className="stats-section ">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Live Broadcasting</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">180+</div>
              <div className="stat-label">Countries Reached</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Healthcare Professionals</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">1000+</div>
              <div className="stat-label">Medical Events Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-modern" id="about">
        <div className="about-container-modern">
          <div className="section-header-center">
            <div className="section-badge">About Medi Biz TV</div>
            <h2 className="section-title-modern">
              Pioneering Medical Broadcasting Excellence
            </h2>
            <p className="section-subtitle-modern">
              The world's first global healthcare television channel, connecting
              medical professionals worldwide with cutting-edge content and
              insights.
            </p>
          </div>

          <div className="about-grid-modern">
            <div className="about-card">
              <div className="card-icon red-icon">🎓</div>
              <h3>Continuous Medical Education</h3>
              <p>
                Accredited CME programs and educational content designed
                specifically for medical professionals worldwide.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon blue-icon">🔬</div>
              <h3>Research & Innovation</h3>
              <p>
                Comprehensive coverage of the latest medical research, clinical
                trials, and technological breakthroughs.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon red-icon">🌍</div>
              <h3>Global Network</h3>
              <p>
                Connecting healthcare communities across continents with
                real-time coverage and instant access.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon blue-icon">✅</div>
              <h3>Certified Excellence</h3>
              <p>
                ISO 9001:2015 certified with rigorous quality standards and
                HIPAA-compliant security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="services-section-modern">
        <div className="services-container-modern">
          <div className="section-header-center">
            <div className="section-badge">Our Services</div>
            <h2 className="section-title-modern">
              Comprehensive Medical Media Solutions
            </h2>
            <p className="section-subtitle-modern">
              Everything healthcare professionals need to stay informed and
              connected
            </p>
          </div>

          <div className="services-grid-modern">
            <div className="service-card-modern">
              <div className="service-icon-modern glass-icon-bg">
                <span>📺</span>
              </div>
              <h3>Live Medical Events</h3>
              <p>
                Stream medical conferences, seminars, and symposiums in
                real-time with interactive Q&A sessions and expert commentary.
              </p>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern glass-icon-bg">
                <span>🎬</span>
              </div>
              <h3>On-Demand Library</h3>
              <p>
                Access extensive archives of medical lectures, surgical
                demonstrations, and expert interviews available anytime.
              </p>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern glass-icon-bg">
                <span>📰</span>
              </div>
              <h3>Medical News Hub</h3>
              <p>
                Stay current with breaking medical news, research publications,
                and regulatory updates from trusted sources.
              </p>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern glass-icon-bg">
                <span>👥</span>
              </div>
              <h3>Expert Interviews</h3>
              <p>
                Exclusive conversations with leading physicians, researchers,
                and healthcare innovators sharing their insights.
              </p>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern glass-icon-bg">
                <span>🏆</span>
              </div>
              <h3>Award Coverage</h3>
              <p>
                Complete coverage of medical awards, recognitions, and milestone
                achievements in the healthcare industry.
              </p>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern glass-icon-bg">
                <span>🔐</span>
              </div>
              <h3>Secure Platform</h3>
              <p>
                HIPAA-compliant streaming with encrypted connections ensuring
                confidentiality and data security.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutSection;
