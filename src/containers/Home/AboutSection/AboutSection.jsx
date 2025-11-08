import React, { useEffect, useRef } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const statCards = statsRef.current?.querySelectorAll(".stat-card");
    const featureItems = featuresRef.current?.querySelectorAll(".feature-item");
    const highlightItems =
      aboutRef.current?.querySelectorAll(".highlight-item");

    statCards?.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });

    featureItems?.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });

    highlightItems?.forEach((el, idx) => {
      el.style.opacity = "0";
      el.style.transform = "translateX(-30px)";
      el.style.transition = `all 0.6s ease ${idx * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="stats" ref={statsRef}>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Live Broadcasting</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">180+</div>
            <div className="stat-label">Countries Reached</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Healthcare Professionals</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Medical Events Covered</div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about" ref={aboutRef}>
        <div className="about-container">
          <div className="section-header">
            <div className="section-tag">About Medi Biz TV</div>
            <h2 className="section-title">Pioneering Medical Broadcasting</h2>
            <p className="section-subtitle">
              Trusted by healthcare professionals worldwide for accurate, timely
              medical content
            </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Transforming Healthcare Communication</h3>
              <p>
                Medi Biz TV is a premier healthcare media platform dedicated to
                bringing the latest medical news, research, and innovations
                directly to healthcare professionals around the globe.
              </p>
              <p>
                With our state-of-the-art broadcasting technology and expert
                medical team, we provide unparalleled access to medical
                conferences, expert interviews, and breakthrough research
                presentations.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-text">
                  <h4>Continuous Medical Education</h4>
                  <p>
                    Accredited CME programs and educational content for medical
                    professionals
                  </p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔬</div>
                <div className="highlight-text">
                  <h4>Research & Innovation</h4>
                  <p>
                    Coverage of latest medical research, clinical trials, and
                    technological breakthroughs
                  </p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🌍</div>
                <div className="highlight-text">
                  <h4>Global Network</h4>
                  <p>
                    Connecting healthcare communities across continents with
                    real-time coverage
                  </p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">✅</div>
                <div className="highlight-text">
                  <h4>Certified Excellence</h4>
                  <p>ISO 9001:2015 certified with rigorous quality standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" ref={featuresRef}>
        <div className="section-header">
          <div className="section-tag">Our Services</div>
          <h2 className="section-title">
            Comprehensive Medical Media Solutions
          </h2>
          <p className="section-subtitle">
            Everything healthcare professionals need to stay informed and
            connected
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon-wrap">📺</div>
            <h3>Live Medical Events</h3>
            <p>
              Stream medical conferences, seminars, and symposiums in real-time
              with interactive Q&A sessions and expert commentary.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrap">🎬</div>
            <h3>On-Demand Library</h3>
            <p>
              Access extensive archives of medical lectures, surgical
              demonstrations, and expert interviews available anytime.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrap">📰</div>
            <h3>Medical News Hub</h3>
            <p>
              Stay current with breaking medical news, research publications,
              and regulatory updates from trusted sources.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrap">👥</div>
            <h3>Expert Interviews</h3>
            <p>
              Exclusive conversations with leading physicians, researchers, and
              healthcare innovators sharing their insights.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrap">🏆</div>
            <h3>Award Coverage</h3>
            <p>
              Complete coverage of medical awards, recognitions, and milestone
              achievements in the healthcare industry.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrap">🔐</div>
            <h3>Secure Platform</h3>
            <p>
              HIPAA-compliant streaming with encrypted connections ensuring
              confidentiality and data security.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
