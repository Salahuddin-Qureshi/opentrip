import { useState } from "react";
import { Logo } from "./Header";
import Icon from "../common/Icon";
import { useNavigation } from "../../context/NavigationContext";
import "./Footer.css";

export default function Footer({ onPlan, onPolicy }) {
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const nav = useNavigation();

  const handleNav = (e, targetPage, targetHash = "") => {
    e.preventDefault();
    if (nav) {
      nav.navigate(targetPage, targetHash);
    } else if (targetHash) {
      document.querySelector(targetHash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        {/* Column 1: Company Intro & Socials */}
        <div className="footer-col footer-col--brand">
          <Logo />
          <p className="footer-brand-desc">
            <strong>OPEN TRIP (PVT.) LTD.</strong> Your Travel Partner. Your point of contact for flight bookings, hotel reservations, visa assistance, Umrah packages, and customized tour packages.
          </p>
          <div className="footer-social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OPEN TRIP Facebook"
              className="social-btn"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OPEN TRIP Instagram"
              className="social-btn"
            >
              in
            </a>
            <a
              href="https://wa.me/923101816191"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OPEN TRIP WhatsApp VIP Desk"
              className="social-btn social-btn--wa"
            >
              <Icon name="whatsapp" size={15} />
            </a>
          </div>

          <div className="footer-newsletter-wrap">
            <span className="footer-newsletter-label">Subscribe for Travel Updates</span>
            {subscribed ? (
              <p className="footer-newsletter-success">✓ Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletter} className="footer-newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" aria-label="Subscribe">
                  <Icon name="arrow" size={13} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links-list">
            <li>
              <a href="#home" onClick={(e) => handleNav(e, "home", "#home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNav(e, "about")}>
                About Us
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNav(e, "services")}>
                Our Services
              </a>
            </li>
            <li>
              <a href="#packages" onClick={(e) => handleNav(e, "packages")}>
                Packages
              </a>
            </li>
            <li>
              <a href="#destinations" onClick={(e) => handleNav(e, "destinations")}>
                Destinations
              </a>
            </li>
            <li>
              <a href="#guides" onClick={(e) => handleNav(e, "guides")}>
                Travel Guides
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNav(e, "contact")}>
                Contact Us
              </a>
            </li>
            <li>
              <a href="#quote" className="footer-highlight-link" onClick={(e) => handleNav(e, "quote")}>
                Get a Quote →
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul className="footer-links-list">
            <li>
              <a href="#flights" onClick={(e) => handleNav(e, "flights")}>
                Flight Booking
              </a>
            </li>
            <li>
              <a href="#hotels" onClick={(e) => handleNav(e, "hotels")}>
                Hotel Reservations
              </a>
            </li>
            <li>
              <a href="#visa" onClick={(e) => handleNav(e, "visa")}>
                Visa Assistance
              </a>
            </li>
            <li>
              <a href="#umrah" onClick={(e) => handleNav(e, "umrah")}>
                Umrah Packages
              </a>
            </li>
            <li>
              <a href="#custom-tour" onClick={(e) => handleNav(e, "custom-tour")}>
                Customized Tour Packages
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Customer Support */}
        <div className="footer-col">
          <h3>Customer Support</h3>
          <ul className="footer-links-list">
            <li>
              <a href="#faqs" onClick={(e) => handleNav(e, "faq")}>
                FAQs
              </a>
            </li>
            <li>
              <a href="#privacy" onClick={(e) => handleNav(e, "legal", "privacy")}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" onClick={(e) => handleNav(e, "legal", "terms")}>
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#cancellation" onClick={(e) => handleNav(e, "legal", "cancellation")}>
                Cancellation &amp; Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Official Contact Information */}
        <div className="footer-col footer-col--contact">
          <h3>Official Contact</h3>
          <div className="footer-contact-items">
            {/* Phone Numbers */}
            <div className="footer-contact-row">
              <Icon name="phone" size={15} />
              <div className="footer-phones-block">
                <a href="tel:03178224101">0317 8224101</a>
                <span>·</span>
                <a href="tel:03178224102">0317 8224102</a>
                <br />
                <a href="tel:03178224103">0317 8224103</a>
                <span>·</span>
                <a href="tel:03178224104">0317 8224104</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="footer-contact-row footer-contact-row--wa">
              <Icon name="whatsapp" size={15} />
              <div>
                <a href="https://wa.me/923101816191" target="_blank" rel="noopener noreferrer">
                  +92 310 1816191
                </a>
                <span> · </span>
                <a href="https://wa.me/923010089009" target="_blank" rel="noopener noreferrer">
                  +92 301 0089009
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="footer-contact-row">
              <Icon name="mail" size={15} />
              <a href="mailto:Info@opentrip.pk">Info@opentrip.pk</a>
            </div>

            {/* Business Hours */}
            <div className="footer-contact-row">
              <Icon name="clock" size={15} />
              <span>10 AM - 07 PM (Six Days a Week)</span>
            </div>

            {/* Office Address */}
            <div className="footer-contact-row">
              <Icon name="pin" size={15} />
              <address className="footer-address">
                Suite no. 104 First Floor, 34-C Lane 06, Bukhari Commercial Phase 06, DHA 75500, Karachi
              </address>
            </div>
          </div>

          <div className="footer-plan-cta-box">
            <button
              type="button"
              className="footer-plan"
              onClick={(e) => handleNav(e, "quote")}
            >
              <span>Request a Quotation</span>
              <Icon name="arrow" size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="container footer-bottom">
        <span className="copyright-text">
          Copyright © 2026 OPEN TRIP (PVT.) LTD. All Rights Reserved.
        </span>
        <div className="footer-legal-links">
          <a href="#faqs" onClick={(e) => handleNav(e, "faq")}>
            FAQs
          </a>
          <span>·</span>
          <a href="#privacy" onClick={(e) => handleNav(e, "legal", "privacy")}>
            Privacy Policy
          </a>
          <span>·</span>
          <a href="#terms" onClick={(e) => handleNav(e, "legal", "terms")}>
            Terms &amp; Conditions
          </a>
          <span>·</span>
          <a href="#cancellation" onClick={(e) => handleNav(e, "legal", "cancellation")}>
            Cancellation &amp; Refund Policy
          </a>
        </div>
        <a
          className="back-to-top"
          href="#home"
          aria-label="Back to top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Icon name="chevronLeft" size={16} />
        </a>
      </div>
    </footer>
  );
}
