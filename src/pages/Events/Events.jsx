import React from "react";
import "./Events.css";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Advanced Cardiovascular Surgery Symposium",
      date: "December 15, 2025",
      time: "09:00 AM - 05:00 PM EST",
      location: "New York Medical Center",
      category: "Surgery",
      description:
        "Join leading cardiovascular surgeons as they demonstrate cutting-edge techniques in minimally invasive heart procedures.",
      speakers: "Dr. Sarah Johnson, Dr. Michael Chen",
      attendees: "500+",
    },
    {
      id: 2,
      title: "Global Healthcare Innovation Summit",
      date: "January 20, 2026",
      time: "10:00 AM - 06:00 PM GMT",
      location: "Virtual Event",
      category: "Innovation",
      description:
        "Explore the latest innovations in healthcare technology, AI diagnostics, and telemedicine solutions shaping the future of medicine.",
      speakers: "Dr. Emily Rodriguez, Prof. James Wilson",
      attendees: "2000+",
    },
    {
      id: 3,
      title: "Pediatric Emergency Care Workshop",
      date: "January 28, 2026",
      time: "08:00 AM - 04:00 PM PST",
      location: "Los Angeles Children's Hospital",
      category: "Workshop",
      description:
        "Hands-on training for pediatric emergency protocols, trauma management, and critical care decision-making.",
      speakers: "Dr. Amanda Foster, Dr. Robert Kim",
      attendees: "150+",
    },
    {
      id: 4,
      title: "Neuroscience Research Conference",
      date: "February 10, 2026",
      time: "09:00 AM - 07:00 PM CET",
      location: "Berlin Medical Institute",
      category: "Research",
      description:
        "Breakthrough research presentations on neuroplasticity, brain imaging techniques, and novel treatments for neurological disorders.",
      speakers: "Dr. Klaus Mueller, Dr. Maria Santos",
      attendees: "800+",
    },
    {
      id: 5,
      title: "Women's Health Awareness Live",
      date: "February 22, 2026",
      time: "11:00 AM - 03:00 PM EST",
      location: "Boston Medical Plaza",
      category: "Awareness",
      description:
        "Interactive sessions covering preventive care, reproductive health, and wellness strategies for women of all ages.",
      speakers: "Dr. Jennifer Lee, Dr. Patricia Brown",
      attendees: "400+",
    },
    {
      id: 6,
      title: "Trauma & Critical Care Masterclass",
      date: "March 05, 2026",
      time: "08:00 AM - 06:00 PM AEDT",
      location: "Sydney Emergency Training Center",
      category: "Training",
      description:
        "Intensive masterclass focusing on trauma management, ICU protocols, and life-saving interventions in critical situations.",
      speakers: "Dr. Andrew Mitchell, Dr. Lisa Thompson",
      attendees: "200+",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Surgery: "category-surgery",
      Innovation: "category-innovation",
      Workshop: "category-workshop",
      Research: "category-research",
      Awareness: "category-awareness",
      Training: "category-training",
    };
    return colors[category] || "category-default";
  };

  return (
    <div className="events-page section-dark">
      <div className="__bg-noise"></div>

      <div className="events-container">
        <div className="events-header">
          <span className="events-subtitle">JOIN US LIVE</span>
          <h1 className="events-title">Upcoming Medical Events</h1>
          <p className="events-description">
            Connect with healthcare professionals worldwide through our live
            broadcasts, workshops, and conferences covering the latest in
            medical science and innovation.
          </p>
        </div>

        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-card-inner">
                <div className="event-header">
                  <span
                    className={`event-category ${getCategoryColor(
                      event.category
                    )}`}
                  >
                    {event.category}
                  </span>
                  <span className="event-attendees">
                    {event.attendees} Expected
                  </span>
                </div>

                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-details">
                  <div className="event-detail-item">
                    <svg
                      className="event-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                        strokeWidth="2"
                      />
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                    </svg>
                    <span>{event.date}</span>
                  </div>

                  <div className="event-detail-item">
                    <svg
                      className="event-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                    </svg>
                    <span>{event.time}</span>
                  </div>

                  <div className="event-detail-item">
                    <svg
                      className="event-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="10" r="3" strokeWidth="2" />
                    </svg>
                    <span>{event.location}</span>
                  </div>

                  <div className="event-detail-item">
                    <svg
                      className="event-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                        strokeWidth="2"
                      />
                      <circle cx="9" cy="7" r="4" strokeWidth="2" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
                    </svg>
                    <span>{event.speakers}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
