import { useState } from "react";
import { Logo } from "./Header";
import Icon from "../common/Icon";
import { allDestinations } from "../../data/home";
import { useNavigation } from "../../context/NavigationContext";
import "./Footer.css";

export default function Footer({ onPlan, onDestination, onPolicy }) {
  const [subscribed, setSubscribed] = useState(false);
  const nav = useNavigation();

  const handleNav = (e, page, targetHash = "") => {
    e.preventDefault();
    if (nav) {
      nav.navigate(page, targetHash);
    } else if (targetHash) {
      document.querySelector(targetHash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        {/* Column 1: Brand & About */}
        <div className="footer-col footer-col--brand">
          <Logo />
          <p className="footer-brand-desc">
            OpenTrip is a premier travel management company and accredited agency based in Karachi.
            We curate extraordinary international escapes, bespoke family vacations, sacred Umrah
            pilgrimages, and hassle-free visa processing.
          </p>
          <div className="footer-social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OpenTrip Facebook"
              className="social-btn"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OpenTrip Instagram"
              className="social-btn"
            >
              in
            </a>
            <a
              href="https://wa.me/923101816191"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OpenTrip WhatsApp"
              className="social-btn social-btn--wa"
            >
              <Icon name="whatsapp" size={15} />
            </a>
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
              <a href="#destinations" onClick={(e) => handleNav(e, "destinations")}>
                Destinations
              </a>
            </li>
            <li>
              <a href="#packages" onClick={(e) => handleNav(e, "packages")}>
                Tour Packages
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNav(e, "about")}>
                About Us
              </a>
            </li>
            <li>
              <a href="#journal" onClick={(e) => handleNav(e, "home", "#journal")}>
                Travel Journal
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNav(e, "contact")}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Travel Services */}
        <div className="footer-col">
          <h3>Travel Services</h3>
          <ul className="footer-links-list">
            <li>
              <a href="#umrah" onClick={(e) => handleNav(e, "home", "#umrah")}>
                Umrah Packages
              </a>
            </li>
            <li>
              <a href="#visa" onClick={(e) => handleNav(e, "home", "#visa")}>
                Visa Assistance & Filing
              </a>
            </li>
            <li>
              <a href="#flights" onClick={(e) => handleNav(e, "home", "#flights")}>
                Air Ticketing Desk
              </a>
            </li>
            <li>
              <a href="#experiences" onClick={(e) => handleNav(e, "home", "#experiences")}>
                Honeymoon & Luxury Escapes
              </a>
            </li>
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={onPlan}
              >
                Custom Itinerary Planning
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Popular Destinations */}
        <div className="footer-col">
          <h3>Top Destinations</h3>
          <ul className="footer-links-list">
            {allDestinations.slice(0, 6).map((dest) => (
              <li key={dest.name}>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onDestination(dest)}
                >
                  {dest.name} ({dest.country || "Explore"})
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Contact Desk */}
        <div className="footer-col footer-col--contact">
          <h3>Karachi Agency HQ</h3>
          <div className="footer-contact-items">
            <div className="footer-contact-row">
              <Icon name="pin" size={16} />
              <span>Building 34-C, Lane 5, Bukhari Commercial, DHA Phase 6, Karachi</span>
            </div>
            <div className="footer-contact-row">
              <Icon name="users" size={16} />
              <span>Desk: +92 21 3524 8191</span>
            </div>
            <div className="footer-contact-row">
              <Icon name="whatsapp" size={16} />
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +92 310 1816191
              </a>
            </div>
            <div className="footer-contact-row">
              <Icon name="heart" size={16} />
              <span>bookings@opentrip.pk</span>
            </div>
          </div>

          <div className="footer-plan-cta-box">
            <button className="footer-plan" onClick={onPlan}>
              <span>Plan Your Trip With Us</span>
              <Icon size={15} />
            </button>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} OpenTrip. All rights reserved. Registered Travel Agency in Pakistan.</span>
        <div className="footer-legal-links">
          <button onClick={() => onPolicy("Privacy")}>Privacy Policy</button>
          <span>·</span>
          <button onClick={() => onPolicy("Terms & Conditions")}>
            Terms &amp; Conditions
          </button>
          <span>·</span>
          <button onClick={() => onPolicy("Booking Information")}>
            Booking Information
          </button>
        </div>
        <a
          className="back-to-top"
          href="#home"
          aria-label="Back to top"
          onClick={(e) => {
            if (nav) {
              e.preventDefault();
              nav.navigate("home");
            }
          }}
        >
          <Icon name="chevronLeft" size={18} />
        </a>
      </div>
    </footer>
  );
}
