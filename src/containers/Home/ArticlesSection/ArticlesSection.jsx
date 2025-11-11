import { useState } from "react";
import { FaPlay, FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import "./ArticlesSection.css";

const ArticlesSection = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    { id: "featured", label: "Featured Articles" },
    { id: "health", label: "Health Updates" },
    { id: "videos", label: "Top Videos" },
    { id: "news", label: "Latest News" },
  ];

  // --- data (unchanged)
  const featuredArticles = [
    {
      id: 1,
      title: "Knowledge of HIV/s",
      image:
        "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=1200&h=800&fit=crop",
      excerpt:
        "We are a team of experts in HIV research and treatment, providing the latest...",
      date: "Nov 8, 2024",
      category: "Research",
    },
    {
      id: 2,
      title: "Lymphadentis",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&h=800&fit=crop",
      excerpt:
        "Understanding the causes and treatment options for lymph node inflammation...",
      date: "Nov 7, 2024",
      category: "Medical",
    },
    {
      id: 3,
      title: "Under Nourishment and Aging of Infants",
      image:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&h=800&fit=crop",
      excerpt:
        "Critical insights into infant nutrition and development during early years...",
      date: "Nov 6, 2024",
      category: "Pediatrics",
    },
    {
      id: 4,
      title: "Hematocrit Caths",
      image:
        "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1200&h=800&fit=crop",
      excerpt:
        "Latest advances in catheter technology for blood testing and treatment...",
      date: "Nov 5, 2024",
      category: "Technology",
    },
  ];

  const healthUpdates = [
    {
      id: 1,
      title: "Things to tell Critical about prior to initiation",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
      excerpt:
        "There are many things that should and you to are of the types of condition that may...",
      date: "Nov 10, 2024",
      author: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      title: "Stay in beautiful Goa",
      image:
        "https://images.unsplash.com/photo-1542652694-40abf526446e?w=1200&h=800&fit=crop",
      excerpt:
        "Discover the perfect blend of relaxation and wellness in tropical paradise...",
      date: "Nov 9, 2024",
      author: "Med Bio Team",
    },
    {
      id: 3,
      title: "3 Steps you can work",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop",
      excerpt:
        "Simple yet effective strategies to improve your daily health routine...",
      date: "Nov 8, 2024",
      author: "Dr. Michael Chen",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Not Ignore If You Have Cancer",
      duration: "12:45",
      views: "2.3K",
      thumbnail:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
    },
    {
      id: 2,
      title: "Getting Started In Plastic",
      duration: "8:30",
      views: "1.8K",
      thumbnail:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop",
    },
    {
      id: 3,
      title: "Can Success In The Operating Room",
      duration: "15:20",
      views: "3.1K",
      thumbnail:
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&h=800&fit=crop",
    },
  ];

  const latestNews = [
    {
      id: 1,
      title: "Getting married risk of Cancer",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
      excerpt:
        "Life is so much fun and we just want to do as much of it as we possibly can. There is no right time...",
      date: "Nov 11, 2024",
      category: "Research",
    },
    {
      id: 2,
      title: "Vitamin have Higher risk of early Death",
      image:
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1200&h=800&fit=crop",
      excerpt:
        "While over seven vitamins were shown not to be associated with any increased...",
      date: "Nov 10, 2024",
      category: "Nutrition",
    },
    {
      id: 3,
      title: "Zolgam 3: Amazon Lung disease fears",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=1200&h=800&fit=crop",
      excerpt:
        "A growing group health condition have rocked the surrounding of northern Indiana...",
      date: "Nov 9, 2024",
      category: "Breaking News",
    },
    {
      id: 4,
      title: "Quick survey but not unexpected",
      image:
        "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&h=800&fit=crop",
      excerpt:
        "The search can make a complete treatment in less they had to create each topic...",
      date: "Nov 8, 2024",
      category: "Healthcare",
    },
    {
      id: 5,
      title: "Tweets can trigger more bad healthcare",
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1200&h=800&fit=crop",
      excerpt:
        "There are many ways social media can impact your health and wellbeing...",
      date: "Nov 7, 2024",
      category: "Digital Health",
    },
    {
      id: 6,
      title: "Guidance when Patient is incorrect",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
      excerpt:
        "How to handle situations when patients disagree with medical advice...",
      date: "Nov 6, 2024",
      category: "Medical Ethics",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "featured":
        return (
          <div className="articles-grid">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                className="article-card"
                aria-labelledby={`title-${article.id}`}
              >
                <div className="article-media">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-image"
                  />
                  <span className="article-badge">{article.category}</span>
                </div>

                <div className="article-body">
                  <div className="article-meta">
                    <time className="meta-item">
                      <FaCalendarAlt /> <span>{article.date}</span>
                    </time>
                  </div>

                  <h3 id={`title-${article.id}`} className="article-title">
                    {article.title}
                  </h3>

                  <p className="article-excerpt line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="card-cta">
                    <button
                      className="article-link"
                      aria-label={`Read more about ${article.title}`}
                    >
                      Read More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        );

      case "health":
        return (
          <div className="articles-grid">
            {healthUpdates.map((update) => (
              <article key={update.id} className="article-card">
                <div className="article-media">
                  <img
                    src={update.image}
                    alt={update.title}
                    className="article-image"
                  />
                </div>

                <div className="article-body">
                  <div className="article-meta-row">
                    <div className="meta-item">
                      <FaCalendarAlt /> <span>{update.date}</span>
                    </div>
                    <div className="meta-item">
                      <FaUser /> <span>{update.author}</span>
                    </div>
                  </div>

                  <h3 className="article-title article-title-lg">
                    {update.title}
                  </h3>
                  <p className="article-excerpt line-clamp-3">
                    {update.excerpt}
                  </p>

                  <div className="card-cta">
                    <button className="article-link">
                      Continue Reading <FaArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        );

      case "videos":
        return (
          <div className="articles-grid">
            {videos.map((video) => (
              <article key={video.id} className="article-card video-card">
                <div className="article-media">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="article-image"
                  />
                  <div className="video-overlay">
                    <div className="video-play-btn">
                      <FaPlay />
                    </div>
                  </div>
                  <div className="video-duration">{video.duration}</div>
                </div>

                <div className="article-body">
                  <h3 className="article-title">{video.title}</h3>
                  <p className="video-views">{video.views} views</p>

                  <div className="card-cta">
                    <button className="article-link">
                      Watch <FaArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        );

      case "news":
        return (
          <div className="articles-grid">
            {latestNews.map((news) => (
              <article key={news.id} className="article-card">
                <div className="article-media">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="article-image"
                  />
                  <span className="article-badge badge-alt">
                    {news.category}
                  </span>
                </div>

                <div className="article-body">
                  <div className="article-meta">
                    <FaCalendarAlt /> <span>{news.date}</span>
                  </div>

                  <h3 className="article-title">{news.title}</h3>
                  <p className="article-excerpt line-clamp-3">{news.excerpt}</p>

                  <div className="card-cta">
                    <button className="article-link">
                      Continue Reading <FaArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="articles-section">
      <div className="articles-container">
        {/* Header */}
        <div className="articles-header">
          <span className="section-label">Media & Resources</span>
          <h2 className="section-title">Explore Our Content</h2>
          <p className="section-description">
            Access comprehensive medical content, expert insights, and the
            latest healthcare updates
          </p>
        </div>

        {/* Tabs */}
        <div
          className="tabs-wrapper"
          role="tablist"
          aria-label="Article categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button ${
                activeTab === tab.id ? "tab-active" : ""
              }`}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="content-wrapper">{renderContent()}</div>

        {/* View All Button */}
        <div className="view-all-wrapper">
          <button className="view-all-btn">
            View All {tabs.find((t) => t.id === activeTab)?.label}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
