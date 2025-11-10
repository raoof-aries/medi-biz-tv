import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section-modern" id="contact">
      <div className="contact-container-modern">
        <div className="section-header-center">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title-modern">Connect With Us</h2>
          <p className="section-subtitle-modern">
            Have questions or want to learn more? We're here to help healthcare
            professionals worldwide.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left - Contact Info */}
          <div className="contact-info-modern">
            <div className="contact-card">
              <div className="contact-icon-modern red-bg">
                <span>📧</span>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@medibiztv.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-modern blue-bg">
                <span>📞</span>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-modern red-bg">
                <span>📍</span>
              </div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>
                  123 Medical Plaza
                  <br />
                  Healthcare District, NY 10001
                </p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="contact-form-modern">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group-modern">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Dr. John Doe"
                  />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john.doe@hospital.com"
                  />
                </div>
              </div>

              <div className="form-group-modern">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                />
              </div>

              <div className="form-group-modern">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn-modern">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
