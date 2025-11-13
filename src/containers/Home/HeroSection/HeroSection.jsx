import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSection.css";

import Banner1 from "../../../assets/images/homePage/banner1.webp";
import Banner2 from "../../../assets/images/homePage/banner2.webp";
import Banner3 from "../../../assets/images/homePage/banner3.webp";
import Banner4 from "../../../assets/images/homePage/banner4.webp";

const HeroSection = () => {
  const navigate = useNavigate();

  const bannerSlides = [
    {
      id: 1,
      image: Banner1,
    },
    {
      id: 2,
      image: Banner2,
    },
    {
      id: 3,
      image: Banner3,
    },
    {
      id: 4,
      image: Banner4,
    },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-modern">
      <div className="hero-container">
        <div className="hero-content-wrapper">
          {/* Left */}
          <div className="hero-text">
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
          </div>

          {/* Right - Slider */}
          <div className="hero-visual">
            <div className="video-card">
              {/* Custom nav buttons */}
              <button
                className="custom-swiper-button custom-swiper-button-prev"
                aria-label="Previous slide"
              >
                <FiChevronLeft />
              </button>
              <button
                className="custom-swiper-button custom-swiper-button-next"
                aria-label="Next slide"
              >
                <FiChevronRight />
              </button>

              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                effect="slide"
                speed={800}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet custom-bullet",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active custom-bullet-active",
                }}
                navigation={{
                  prevEl: ".custom-swiper-button-prev",
                  nextEl: ".custom-swiper-button-next",
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl =
                    ".custom-swiper-button-prev";
                  swiper.params.navigation.nextEl =
                    ".custom-swiper-button-next";
                }}
                loop={true}
                observer={true}
                observeParents={true}
                className="banner-slider"
              >
                {bannerSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="banner-slide">
                      <img
                        src={slide.image}
                        alt={`Banner ${slide.id}`}
                        className="banner-image"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
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
