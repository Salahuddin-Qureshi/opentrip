import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./Contact.css";

/* Official Contact Data from Section 13 & 16 */
const CONTACT_PHONES = [
  { label: "Phone Line 1", number: "0317 8224101", tel: "03178224101" },
  { label: "Phone Line 2", number: "0317 8224102", tel: "03178224102" },
  { label: "Phone Line 3", number: "0317 8224103", tel: "03178224103" },
  { label: "Phone Line 4", number: "0317 8224104", tel: "03178224104" },
  { label: "Karachi Desk", number: "+92 21 3524 8191", tel: "+922135248191" },
];

const WHATSAPP_CONTACTS = [
  { label: "WhatsApp Concierge 1", number: "+92 310 1816191", link: "https://wa.me/923101816191" },
  { label: "WhatsApp Concierge 2", number: "+92 301 0089009", link: "https://wa.me/923010089009" },
];

const SERVICES_LIST = [
  "Flight Booking",
  "Hotel Reservations",
  "Visa Assistance",
  "Umrah Packages",
  "Customized Tour Packages",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceRequired: "Flight Booking",
    destination: "",
    travelDate: "",
    message: "",
    privacyConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dialog, setDialog] = useState(null);
  const [mapMode, setMapMode] = useState("google"); // "google" or "radar"
  const nav = useNavigation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      alert("Please consent to the Privacy Policy to proceed with your inquiry.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      serviceRequired: "Flight Booking",
      destination: "",
      travelDate: "",
      message: "",
      privacyConsent: false,
    });
    setSubmitted(false);
  };

  return (
    <div className="contact-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero hero--service contact-hero-section" aria-labelledby="contact-hero-heading">
        <img
          className="hero-image"
          src="/images/destinations-hero-wide.jpg"
          alt="Contact OPEN TRIP Official Travel Desk"
          fetchPriority="high"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div className="hero-shade" />
        <Header onPlan={() => nav?.navigate("quote")} />

        <div className="hero-body container">
          <div className="hero-copy contact-hero-copy">
            <p className="eyebrow">
              Official Travel Desk <span>·</span> OPEN TRIP (PVT.) LTD.
            </p>
            <h1 id="contact-hero-heading" className="contact-page-title">
              Contact OPEN TRIP
            </h1>
            <p className="contact-hero-tagline">
              We're Here to Help Plan Your Journey
            </p>
            <p className="hero-description contact-hero-desc">
              Have a question about flights, hotels, visa assistance, Umrah, or a customized tour? Contact our team and share your requirements. We will get back to you using the contact details you provide.
            </p>

            <div className="hero-actions contact-hero-actions">
              <a
                href="#contact-form-anchor"
                className="button button--primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-form-anchor")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Send Inquiry <Icon name="arrow" size={16} />
              </a>
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--outline contact-hero-wa-btn"
              >
                <Icon name="whatsapp" size={17} /> <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <main className="contact-main-content">
        <div className="container contact-content-grid" id="contact-form-anchor">

          {/* LEFT COLUMN: VERIFIED CONTACT CARDS */}
          <div className="contact-details-col">
            <div className="contact-card-header">
              <span className="contact-pill-tag">OFFICIAL DETAILS</span>
              <h2>Get in Touch Directly</h2>
              <p>
                Reach out through our verified agency channels. Our team is available 6 days a week to guide your journey.
              </p>
            </div>

            {/* Direct Phone Lines Card */}
            <div className="contact-info-card">
              <div className="info-card-icon">
                <Icon name="phone" size={20} />
              </div>
              <div className="info-card-body">
                <h3>Phone Assistance</h3>
                <p className="info-card-desc">Call any of our official agency helpline numbers:</p>
                <div className="phones-grid">
                  {CONTACT_PHONES.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="phone-chip">
                      <strong>{p.number}</strong>
                      <small>{p.label}</small>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp VIP Desk Card */}
            <div className="contact-info-card contact-info-card--wa">
              <div className="info-card-icon wa-icon-badge">
                <Icon name="whatsapp" size={20} />
              </div>
              <div className="info-card-body">
                <h3>WhatsApp VIP Support</h3>
                <p className="info-card-desc">Instant replies for itineraries, quotations &amp; visa guidance:</p>
                <div className="wa-chips-row">
                  {WHATSAPP_CONTACTS.map((wa) => (
                    <a
                      key={wa.link}
                      href={wa.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-action-chip"
                    >
                      <Icon name="whatsapp" size={15} />
                      <div>
                        <strong>{wa.number}</strong>
                        <small>{wa.label}</small>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email & Business Hours */}
            <div className="contact-info-card-row">
              <div className="contact-mini-card">
                <div className="mini-icon">
                  <Icon name="mail" size={18} />
                </div>
                <div>
                  <h4>Official Email</h4>
                  <a href="mailto:Info@opentrip.pk" className="email-link">
                    Info@opentrip.pk
                  </a>
                  <small>General inquiries &amp; feedback</small>
                </div>
              </div>

              <div className="contact-mini-card">
                <div className="mini-icon">
                  <Icon name="clock" size={18} />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <strong>10 AM - 07 PM</strong>
                  <small>Six Days a Week (Mon – Sat)</small>
                </div>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="contact-info-card contact-info-card--address">
              <div className="info-card-icon">
                <Icon name="pin" size={20} />
              </div>
              <div className="info-card-body">
                <h3>Office Address</h3>
                <address className="verified-address">
                  Suite no. 104 First Floor, 34-C Lane 06, Bukhari Commercial Phase 06, DHA 75500, Karachi
                </address>
                <div className="address-meta-row">
                  <span className="address-tag">DHA Phase 6</span>
                  <span className="address-tag">Bukhari Commercial</span>
                  <span className="address-tag">DTS Reg. #3941</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: OFFICIAL CONTACT FORM */}
          <div className="contact-form-col">
            <div className="form-card-wrapper">
              <div className="form-card-badge">
                <span className="pulse-dot" />
                <span>INQUIRY DESK</span>
              </div>
              <h2>Send Us an Inquiry</h2>
              <p className="form-lead-desc">
                Please complete the form below with your travel plans or questions. Our trip curators will review your details and respond promptly.
              </p>

              {submitted ? (
                <div className="form-success-panel">
                  <div className="success-icon-box">✓</div>
                  <h3>Thank You for Considering OPEN TRIP</h3>
                  <p className="success-main-msg">
                    We appreciate your inquiry and look forward to assisting with your travel plans.
                  </p>
                  <p className="success-sub-msg">
                    Our team has received your message and will get back to you using the contact details you provided ({formData.phone || formData.email}).
                  </p>
                  <div className="success-meta-card">
                    <div>
                      <span>Requested Service:</span>
                      <strong>{formData.serviceRequired}</strong>
                    </div>
                    {formData.destination && (
                      <div>
                        <span>Destination:</span>
                        <strong>{formData.destination}</strong>
                      </div>
                    )}
                  </div>
                  <div className="success-actions">
                    <button type="button" className="button button--primary" onClick={resetForm}>
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`https://wa.me/923101816191?text=${encodeURIComponent(
                        `Assalam-o-Alaikum Open Trip, I just submitted an inquiry on your website for ${formData.serviceRequired} (${formData.fullName}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--outline success-wa-btn"
                    >
                      <Icon name="whatsapp" size={16} /> <span>Open WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="official-contact-form">
                  {/* Full Name */}
                  <div className="form-field-group">
                    <label htmlFor="contact-name">
                      Full Name <span className="req-star">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ahmed"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="form-grid-2">
                    <div className="form-field-group">
                      <label htmlFor="contact-phone">
                        Phone / WhatsApp Number <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. 0300 1234567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="contact-email">
                        Email Address <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. ahmed@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div className="form-field-group">
                    <label htmlFor="contact-service">
                      Service Required <span className="req-star">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Destination & Travel Date */}
                  <div className="form-grid-2">
                    <div className="form-field-group">
                      <label htmlFor="contact-destination">
                        Destination <span className="field-hint">(e.g. Dubai, Makkah, Baku)</span>
                      </label>
                      <input
                        id="contact-destination"
                        name="destination"
                        type="text"
                        placeholder="Preferred Country / City"
                        value={formData.destination}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="contact-date">
                        Travel Date (if known)
                      </label>
                      <input
                        id="contact-date"
                        name="travelDate"
                        type="text"
                        placeholder="e.g. November 2026 or DD/MM"
                        value={formData.travelDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Message / Requirements */}
                  <div className="form-field-group">
                    <label htmlFor="contact-message">
                      Message / Requirements <span className="req-star">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Please describe your travel plans: number of travelers, hotel preferences, flight routes, or any specific requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Consent to Privacy Policy */}
                  <div className="form-checkbox-row">
                    <input
                      id="contact-consent"
                      name="privacyConsent"
                      type="checkbox"
                      required
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                    />
                    <label htmlFor="contact-consent">
                      I have read and agree to the{" "}
                      <a
                        href="#privacy"
                        onClick={(e) => {
                          e.preventDefault();
                          nav?.navigate("legal", "privacy");
                        }}
                      >
                        Privacy Policy
                      </a>
                      . I consent to OPEN TRIP contacting me regarding this travel inquiry.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="button button--primary form-submit-btn" disabled={submitting}>
                    {submitting ? "Sending Inquiry..." : "Send Inquiry →"}
                  </button>
                </form>
              )}
            </div>

            {/* Closing Thank You Box */}
            <div className="contact-closing-card">
              <div className="closing-icon-badge">
                <Icon name="heart" size={18} />
              </div>
              <div>
                <h3>Thank You for Considering OPEN TRIP</h3>
                <p>
                  We appreciate your inquiry and look forward to assisting with your travel plans. Whether you are preparing for spiritual pilgrimage or global holiday, our team is committed to delivering a seamless experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. FULL-WIDTH & STYLISH MAP SHOWCASE */}
        <section className="contact-map-showcase-section container">
          <div className="map-showcase-card">

            {/* Header with Title, Address & Mode Switcher */}
            <div className="map-showcase-header">
              <div className="map-showcase-titles">
                <div className="map-showcase-badge">
                  <span className="pulse-beacon" />
                  <span>OFFICIAL HEADQUARTERS · DHA PHASE 6</span>
                </div>
                <h2>Visit Our Karachi Office</h2>
                <p className="map-showcase-address">
                  <Icon name="pin" size={14} />
                  <span>Suite no. 104 First Floor, 34-C Lane 06, Bukhari Commercial Phase 06, DHA 75500, Karachi</span>
                </p>
              </div>

              <div className="map-showcase-actions">
                <div className="map-toggle-group">
                  <button
                    type="button"
                    className={`map-toggle-btn ${mapMode === "google" ? "active" : ""}`}
                    onClick={() => setMapMode("google")}
                  >
                    <Icon name="compass" size={14} />
                    <span>Google Map</span>
                  </button>
                  <button
                    type="button"
                    className={`map-toggle-btn ${mapMode === "radar" ? "active" : ""}`}
                    onClick={() => setMapMode("radar")}
                  >
                    <Icon name="sparkles" size={14} />
                    <span>Architectural Layout</span>
                  </button>
                </div>

                <a
                  href="https://maps.google.com/?q=34-C+Lane+06+Bukhari+Commercial+Phase+06+DHA+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-open-app-btn"
                >
                  <span>Open in Google Maps</span>
                  <Icon name="diagonal" size={13} />
                </a>
              </div>
            </div>

            {/* Map Frame with Stylish Glass Overlay Card */}
            <div className="map-showcase-body">
              {mapMode === "google" ? (
                <iframe
                  title="OPEN TRIP Karachi HQ Google Map"
                  src="https://maps.google.com/maps?q=34-C+Lane+06+Bukhari+Commercial+Phase+06+DHA+Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="map-fullwidth-frame"
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                <div className="radar-view-box radar-view-box--full">
                  <div className="radar-grid-bg" />
                  <div className="radar-sweep-wave" />

                  <div className="radar-center-hub">
                    <div className="radar-pulse-ring" />
                    <div className="radar-pulse-ring radar-pulse-ring--delay" />
                    <div className="radar-pin-marker">
                      <Icon name="pin" size={24} />
                      <div className="marker-tooltip">
                        <strong>OPEN TRIP (PVT.) LTD.</strong>
                        <span>Suite 104 · 1st Floor · 34-C</span>
                      </div>
                    </div>
                  </div>

                  <div className="radar-telemetry-panel">
                    <div className="telemetry-item">
                      <span className="telemetry-label">Coordinates:</span>
                      <strong>24.8145° N, 67.0673° E</strong>
                    </div>
                    <div className="telemetry-item">
                      <span className="telemetry-label">Commercial Zone:</span>
                      <strong>Bukhari Commercial (DHA Ph 6)</strong>
                    </div>
                    <div className="telemetry-item">
                      <span className="telemetry-label">Govt. License:</span>
                      <strong>DTS Reg. #3941 · IATA Accredited</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Floating Glassmorphism Quick Info Card (Desktop Overlay) */}
              <div className="map-floating-glass-card">
                <div className="glass-card-header">
                  <div className="glass-logo-badge">
                    <Icon name="shield" size={16} />
                  </div>
                  <div>
                    <h4>OPEN TRIP Travel Desk</h4>
                    <span className="glass-status-pill">
                      <span className="green-live-dot" /> Open Today (10 AM - 7 PM)
                    </span>
                  </div>
                </div>

                <div className="glass-details-list">
                  <div className="glass-item">
                    <Icon name="pin" size={14} />
                    <div>
                      <strong>34-C Lane 06, Bukhari Commercial</strong>
                      <small>DHA Phase 6, Karachi 75500</small>
                    </div>
                  </div>

                  <div className="glass-item">
                    <Icon name="clock" size={14} />
                    <div>
                      <strong>Business Hours</strong>
                      <small>Mon - Sat: 10:00 AM – 07:00 PM</small>
                    </div>
                  </div>

                  <div className="glass-item">
                    <Icon name="phone" size={14} />
                    <div>
                      <strong>Official Landline &amp; Desk</strong>
                      <small>+92 21 3524 8191 · 0317 8224101</small>
                    </div>
                  </div>
                </div>

                <div className="glass-action-btns">
                  <a
                    href="https://maps.google.com/maps/dir//34-C+Lane+06+Bukhari+Commercial+Phase+06+DHA+Karachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-directions"
                  >
                    <span>Get Directions</span>
                    <Icon name="arrow" size={13} />
                  </a>
                  <a
                    href="https://wa.me/923101816191?text=Hello%20OPEN%20TRIP%20team,%20I%20am%20visiting%20your%20Bukhari%20Commercial%20office."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-wa"
                  >
                    <Icon name="whatsapp" size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Landmarks & Directions Bar */}
            <div className="map-showcase-footer">
              <div className="landmark-tag-row">
                <span className="landmark-label">Key Landmarks Nearby:</span>
                <span className="landmark-pill">Springs Store DHA</span>
                <span className="landmark-pill">Wonder Whirl</span>
                <span className="landmark-pill">Khayaban-e-Shujaat</span>
                <span className="landmark-pill">Khayaban-e-Ittehad</span>
                <span className="landmark-pill">Bukhari Commercial Center</span>
              </div>
              <div className="map-parking-notice">
                <Icon name="check" size={13} />
                <span>Dedicated client street parking available along Lane 6</span>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />

  {
    dialog?.type === "trip" && (
      <TripDialog trip={dialog.trip} onClose={() => setDialog(null)} />
    )
  }
    </div >
  );
}
