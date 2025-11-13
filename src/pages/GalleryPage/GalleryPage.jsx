import React, { useState } from "react";
import {
  FaPlay,
  FaImage,
  FaNewspaper,
  FaCalendarAlt,
  FaDownload,
} from "react-icons/fa";
import "./GalleryPage.css";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("image");

  const tabs = [
    { id: "image", label: "Image Gallery" },
    { id: "newsletter", label: "Newsletters" },
    { id: "video", label: "Event Videos" },
  ];

  const imageGallery = [
    {
      id: 1,
      title: "Global Health Summit 2024",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      category: "Events",
      date: "Nov 12, 2024",
    },
    {
      id: 2,
      title: "Medical Conference Keynote",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      category: "Conferences",
      date: "Nov 10, 2024",
    },
    {
      id: 3,
      title: "Healthcare Innovation Workshop",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      category: "Workshops",
      date: "Nov 8, 2024",
    },
    {
      id: 4,
      title: "Community Health Camp",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      category: "Community",
      date: "Nov 6, 2024",
    },
    {
      id: 5,
      title: "Medical Equipment Launch",
      image:
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=600&fit=crop",
      category: "Product Launch",
      date: "Nov 4, 2024",
    },
    {
      id: 6,
      title: "Panel Discussion - Future of Healthcare",
      image:
        "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=800&h=600&fit=crop",
      category: "Panel Discussion",
      date: "Nov 2, 2024",
    },
    {
      id: 7,
      title: "Medical Research Presentation",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      category: "Research",
      date: "Oct 30, 2024",
    },
    {
      id: 8,
      title: "Health Awareness Campaign",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
      category: "Campaigns",
      date: "Oct 28, 2024",
    },
  ];

  const newsletters = [
    {
      id: 1,
      title: "Med BizTV Monthly - November 2024",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=800&fit=crop",
      date: "Nov 2024",
      pages: "12 pages",
    },
    {
      id: 2,
      title: "Healthcare Insights - October 2024",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=800&fit=crop",
      date: "Oct 2024",
      pages: "16 pages",
    },
    {
      id: 3,
      title: "Medical Innovation Report - Q3 2024",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=800&fit=crop",
      date: "Sep 2024",
      pages: "20 pages",
    },
    {
      id: 4,
      title: "Global Health Update - August 2024",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop",
      date: "Aug 2024",
      pages: "14 pages",
    },
    {
      id: 5,
      title: "Med BizTV Quarterly - Q2 2024",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=800&fit=crop",
      date: "Jul 2024",
      pages: "24 pages",
    },
    {
      id: 6,
      title: "Healthcare Technology Special Edition",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=800&fit=crop",
      date: "Jun 2024",
      pages: "18 pages",
    },
  ];

  const eventVideos = [
    {
      id: 1,
      title: "Global Medical Conference 2024 - Full Coverage",
      thumbnail:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=675&fit=crop",
      duration: "45:30",
      views: "12.5K",
      date: "Nov 10, 2024",
    },
    {
      id: 2,
      title: "Healthcare Innovation Summit Highlights",
      thumbnail:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=675&fit=crop",
      duration: "28:15",
      views: "8.2K",
      date: "Nov 5, 2024",
    },
    {
      id: 3,
      title: "Expert Panel: Future of Telemedicine",
      thumbnail:
        "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=1200&h=675&fit=crop",
      duration: "52:40",
      views: "15.3K",
      date: "Oct 28, 2024",
    },
    {
      id: 4,
      title: "Community Health Initiative Launch",
      thumbnail:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=675&fit=crop",
      duration: "22:50",
      views: "6.8K",
      date: "Oct 20, 2024",
    },
    {
      id: 5,
      title: "Medical Technology Expo 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&h=675&fit=crop",
      duration: "38:20",
      views: "10.4K",
      date: "Oct 15, 2024",
    },
    {
      id: 6,
      title: "Annual Healthcare Awards Ceremony",
      thumbnail:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=675&fit=crop",
      duration: "1:15:45",
      views: "18.7K",
      date: "Oct 8, 2024",
    },
  ];

  return (
    <div className="gallery-page-wrapper section-dark">
      {/* Hero Section */}
      <section className="gallery-hero ">
        <div className="__bg-noise"></div>
        <span className="hero-label">Media Archive</span>
        <h1 className="hero-title">Gallery</h1>
        <p className="hero-description">
          Explore our collection of event photos, newsletters, and video
          coverage from medical conferences and healthcare initiatives worldwide
        </p>
      </section>

      {/* Gallery Content Section */}
      <section className="gallery-content-section ">
        <div className="__bg-noise"></div>
        <div className="gallery-container">
          {/* Tabs */}
          <div className="gallery-tabs-wrapper">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`gallery-tab-button ${
                  activeTab === tab.id ? "gallery-tab-active" : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Image Gallery Content */}
          {activeTab === "image" && (
            <div className="image-gallery-grid">
              {imageGallery.map((item) => (
                <article key={item.id} className="image-gallery-card">
                  <div className="image-gallery-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-image"
                    />
                    <div className="image-overlay">
                      <FaImage className="overlay-icon" />
                    </div>
                    <span className="gallery-badge">{item.category}</span>
                  </div>
                  <div className="image-gallery-info">
                    <h3 className="gallery-card-title">{item.title}</h3>
                    <div className="gallery-meta">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Newsletter Content */}
          {activeTab === "newsletter" && (
            <div className="newsletter-gallery-grid">
              {newsletters.map((newsletter) => (
                <article key={newsletter.id} className="newsletter-card">
                  <div className="newsletter-cover">
                    <img
                      src={newsletter.image}
                      alt={newsletter.title}
                      className="newsletter-image"
                    />
                    <div className="newsletter-overlay">
                      <button className="newsletter-download-btn">
                        <FaDownload /> Download
                      </button>
                    </div>
                  </div>
                  <div className="newsletter-info">
                    <h3 className="newsletter-title">{newsletter.title}</h3>
                    <div className="newsletter-meta">
                      <span className="newsletter-date">{newsletter.date}</span>
                      <span className="newsletter-pages">
                        {newsletter.pages}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Event Videos Content */}
          {activeTab === "video" && (
            <div className="video-gallery-grid">
              {eventVideos.map((video) => (
                <article key={video.id} className="video-gallery-card">
                  <div className="video-thumbnail-wrapper">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="video-thumbnail"
                    />
                    <div className="video-overlay">
                      <div className="video-play-button">
                        <FaPlay />
                      </div>
                    </div>
                    <div className="video-duration">{video.duration}</div>
                  </div>
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <div className="video-meta">
                      <span className="video-views">{video.views} views</span>
                      <span className="video-date">{video.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          <div className="gallery-load-more-wrapper">
            <button className="gallery-load-more-btn">
              Load More {tabs.find((t) => t.id === activeTab)?.label}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
