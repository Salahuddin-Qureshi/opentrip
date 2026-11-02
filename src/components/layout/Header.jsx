import { useState, useRef, useEffect } from "react";
import Icon from "../common/Icon";
import Button from "../common/Button";
import { useNavigation } from "../../context/NavigationContext";
import "./Header.css";

export function Logo() {
  const nav = useNavigation();
  return (
    <a
      className="logo"
      href="#home"
      aria-label="OpenTrip home"
      onClick={(event) => {
        if (nav && nav.page !== "home") {
          event.preventDefault();
          nav.navigate("home");
        }
      }}
    >
      OpenTrip
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 10 18-7-7 18-3-8-8-3Zm8 3L21 3" />
      </svg>
    </a>
  );
}

export default function Header({ onPlan, onExplore }) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const nav = useNavigation();
  const currentPage = nav?.page || "home";

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const explore = () => {
    setOpen(false);
    setDropdownOpen(false);
    if (nav) {
      nav.navigate("destinations");
    } else if (onExplore) {
      onExplore();
    }
  };

  const handleHomeClick = (event) => {
    setOpen(false);
    setDropdownOpen(false);
    if (nav && nav.page !== "home") {
      event.preventDefault();
      nav.navigate("home");
    }
  };

  const handleHashLink = (event, targetId, pageFallback = null) => {
    setOpen(false);
    setDropdownOpen(false);
    if (nav && pageFallback && nav.page !== pageFallback) {
      event.preventDefault();
      nav.navigate(pageFallback);
      return;
    }
    if (nav && nav.page !== "home") {
      event.preventDefault();
      nav.navigate("home", `#${targetId}`);
      return;
    }
    // On home page, let anchor do its work or scroll smoothly
    const elem = document.getElementById(targetId);
    if (elem) {
      event.preventDefault();
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <nav
          id="main-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a
            className={currentPage === "home" ? "active" : ""}
            href="#home"
            aria-current={currentPage === "home" ? "page" : undefined}
            onClick={handleHomeClick}
          >
            Home
          </a>

          <button
            className={currentPage === "destinations" ? "active" : ""}
            onClick={explore}
          >
            Destinations
          </button>

          {/* Packages with Dropdown */}
          <div
            className={`nav-dropdown-wrapper ${dropdownOpen ? "is-active" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              className={`nav-dropdown-toggle ${currentPage === "packages" ? "active" : ""}`}
              href="#packages"
              aria-current={currentPage === "packages" ? "page" : undefined}
              onClick={(e) => {
                if (window.innerWidth <= 992) {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                } else if (nav) {
                  e.preventDefault();
                  nav.navigate("packages");
                }
              }}
            >
              Packages
              <svg className="dropdown-caret" viewBox="0 0 24 24" width="14" height="14">
                <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>

            <div className={`nav-dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <a
                href="#packages"
                onClick={(e) => {
                  setDropdownOpen(false);
                  setOpen(false);
                  if (nav) {
                    e.preventDefault();
                    nav.navigate("packages");
                  }
                }}
              >
                <strong>All Tour Packages</strong>
                <small>Browse all domestic & international</small>
              </a>
              <a
                href="#packages"
                onClick={(e) => {
                  setDropdownOpen(false);
                  setOpen(false);
                  handleHashLink(e, "packages");
                }}
              >
                <strong>Featured Packages</strong>
                <small>Handpicked seasonal bestsellers</small>
              </a>
              <a
                href="#experiences"
                onClick={(e) => {
                  setDropdownOpen(false);
                  setOpen(false);
                  handleHashLink(e, "experiences");
                }}
              >
                <strong>Travel Experiences</strong>
                <small>Honeymoon, luxury & family escapes</small>
              </a>
            </div>
          </div>

          <a
            href="#umrah"
            onClick={(e) => handleHashLink(e, "umrah")}
          >
            Umrah
          </a>

          <a
            href="#visa"
            onClick={(e) => handleHashLink(e, "visa")}
          >
            Visa Services
          </a>

          <a
            href="#flights"
            onClick={(e) => handleHashLink(e, "flights")}
          >
            Flight Tickets
          </a>

          <a
            className={currentPage === "about" ? "active" : ""}
            href="#about"
            onClick={(e) => handleHashLink(e, "about", "about")}
          >
            About Us
          </a>

          <a
            href="#journal"
            onClick={(e) => handleHashLink(e, "journal")}
          >
            Blog
          </a>

          <a
            className={currentPage === "contact" ? "active" : ""}
            href="#contact"
            onClick={(e) => handleHashLink(e, "contact", "contact")}
          >
            Contact
          </a>

          <div className="mobile-only-header-actions">
            <a
              className="whatsapp-pill"
              href="https://wa.me/923101816191"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp VIP Concierge"
            >
              <span className="online-pulse" />
              <Icon name="whatsapp" size={16} />
              <span>+92 310 1816191</span>
            </a>
            <Button onClick={() => { setOpen(false); onPlan(); }}>
              Plan a Trip <Icon size={16} />
            </Button>
          </div>
        </nav>

        <div className="header-actions">
          {/* WhatsApp Direct Pill */}
          <a
            className="header-whatsapp-pill"
            href="https://wa.me/923101816191"
            target="_blank"
            rel="noopener noreferrer"
            title="Instant WhatsApp Support"
          >
            <span className="online-indicator" />
            <Icon name="whatsapp" size={16} />
            <span className="whatsapp-text">WhatsApp</span>
          </a>

          <Button onClick={onPlan}>
            Plan a Trip <Icon size={16} />
          </Button>

          <button
            className="icon-button menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
