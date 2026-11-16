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
      aria-label="OPEN TRIP home"
      onClick={(event) => {
        if (nav && nav.page !== "home") {
          event.preventDefault();
          nav.navigate("home");
        }
      }}
    >
      <img
        src="/images/logo.png"
        alt="OpenTrip - Your Travel Partner"
        className="logo-img"
      />
    </a>
  );
}

export default function Header({ onPlan, onExplore }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const servicesRef = useRef(null);
  const packagesRef = useRef(null);
  const nav = useNavigation();
  const currentPage = nav?.page || "home";

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (packagesRef.current && !packagesRef.current.contains(event.target)) {
        setPackagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) closeAll();
    };
    const handleKey = (e) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
    setPackagesOpen(false);
  };

  const handleHomeClick = (event) => {
    closeAll();
    if (nav && nav.page !== "home") {
      event.preventDefault();
      nav.navigate("home");
    }
  };

  const handlePageNavigate = (pageName, hash = "") => {
    closeAll();
    if (nav) {
      nav.navigate(pageName, hash);
    } else if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHashLink = (event, targetId) => {
    closeAll();
    if (nav && nav.page !== "home") {
      event.preventDefault();
      nav.navigate("home", `#${targetId}`);
      return;
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      event.preventDefault();
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuoteClick = () => {
    closeAll();
    if (nav) {
      nav.navigate("quote");
    } else if (onPlan) {
      onPlan();
    }
  };

  return (
    <header className={`site-header ${open ? "is-menu-open" : ""}`}>
      {/* Optional Top Utility Links Bar */}
      <div className="header-utility-bar">
        <div className="container utility-bar-inner">
          <div className="utility-badge">
            <span className="utility-pulse" />
            <span>Govt. Approved &amp; IATA Accredited · DTS Reg. #3941</span>
          </div>
          <div className="utility-links">
            <a
              href="tel:+922135248191"
              className="utility-link"
              title="Call OPEN TRIP Desk"
            >
              <Icon name="phone" size={13} />
              <span>Call Us: +92 21 3524 8191</span>
            </a>
            <span className="utility-divider">|</span>
            <a
              href="https://wa.me/923101816191"
              target="_blank"
              rel="noopener noreferrer"
              className="utility-link utility-link--wa"
              title="WhatsApp VIP Concierge"
            >
              <Icon name="whatsapp" size={13} />
              <span>WhatsApp Us</span>
            </a>
            <span className="utility-divider">|</span>
            <a
              href="mailto:info@opentrip.pk"
              className="utility-link"
              title="Email OPEN TRIP"
            >
              <Icon name="mail" size={13} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container header-inner">
        <Logo />

        <nav
          id="main-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {/* 1. Home */}
          <a
            className={currentPage === "home" ? "active" : ""}
            href="#home"
            aria-current={currentPage === "home" ? "page" : undefined}
            onClick={handleHomeClick}
          >
            Home
          </a>

          {/* 2. About Us */}
          <a
            className={currentPage === "about" ? "active" : ""}
            href="#about"
            aria-current={currentPage === "about" ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              handlePageNavigate("about", "#about");
            }}
          >
            About Us
          </a>

          {/* 3. Services Dropdown */}
          <div
            className={`nav-dropdown-wrapper ${servicesOpen ? "is-active" : ""}`}
            ref={servicesRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              className={`nav-dropdown-toggle ${
                ["services", "flights", "hotels", "visa", "umrah", "custom-tour", "tour-packages"].includes(currentPage)
                  ? "active"
                  : ""
              }`}
              href="#services"
              onClick={(e) => {
                if (window.innerWidth <= 992) {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                } else if (nav) {
                  e.preventDefault();
                  handlePageNavigate("services");
                } else {
                  handleHashLink(e, "services");
                }
              }}
            >
              Services
              <svg className="dropdown-caret" viewBox="0 0 24 24" width="14" height="14">
                <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>

            <div className={`nav-dropdown-menu ${servicesOpen ? "show" : ""}`}>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageNavigate("services");
                }}
              >
                <strong>All Services Overview</strong>
                <small>Explore all 5 travel &amp; pilgrimage services</small>
              </a>
              <a
                href="#flights"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageNavigate("flights");
                }}
              >
                <strong>Flight Booking</strong>
                <small>Domestic &amp; international airline ticketing</small>
              </a>
              <a
                href="#hotels"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageNavigate("hotels");
                }}
              >
                <strong>Hotel Reservations</strong>
                <small>Curated stays for destination &amp; budget</small>
              </a>
              <a
                href="#visa"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageNavigate("visa");
                }}
              >
                <strong>Visa Assistance</strong>
                <small>Documentation &amp; embassy filing guidance</small>
              </a>
              <a
                href="#umrah"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageNavigate("umrah");
                }}
              >
                <strong>Umrah Packages</strong>
                <small>Sacred pilgrimage with guidance &amp; comfort</small>
              </a>
              <a
                href="#custom-tour"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageNavigate("custom-tour");
                }}
              >
                <strong>Customized Tour Packages</strong>
                <small>Tailored to schedule, budget &amp; style</small>
              </a>
            </div>
          </div>

          {/* 4. Packages Dropdown */}
          <div
            className={`nav-dropdown-wrapper ${packagesOpen ? "is-active" : ""}`}
            ref={packagesRef}
            onMouseEnter={() => setPackagesOpen(true)}
            onMouseLeave={() => setPackagesOpen(false)}
          >
            <a
              className={`nav-dropdown-toggle ${currentPage === "packages" ? "active" : ""}`}
              href="#packages"
              aria-current={currentPage === "packages" ? "page" : undefined}
              onClick={(e) => {
                if (window.innerWidth <= 992) {
                  e.preventDefault();
                  setPackagesOpen(!packagesOpen);
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

            <div className={`nav-dropdown-menu ${packagesOpen ? "show" : ""}`}>
              <a
                href="#packages"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageNavigate("packages");
                }}
              >
                <strong>Explore All Travel Packages</strong>
                <small>Find a package that fits your plans</small>
              </a>
              <a
                href="#custom-tour"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageNavigate("custom-tour");
                }}
              >
                <strong>Customized Tour Packages</strong>
                <small>A trip designed around you</small>
              </a>
            </div>
          </div>

          {/* 5. Destinations */}
          <a
            className={currentPage === "destinations" ? "active" : ""}
            href="#destinations"
            aria-current={currentPage === "destinations" ? "page" : undefined}
            onClick={(e) => {
              if (nav) {
                e.preventDefault();
                nav.navigate("destinations");
              } else if (onExplore) {
                e.preventDefault();
                onExplore();
              }
            }}
          >
            Destinations
          </a>

          {/* 6. Travel Guides */}
          <a
            className={currentPage === "guides" || currentPage === "journal" ? "active" : ""}
            href="#journal"
            aria-current={currentPage === "guides" ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              handlePageNavigate("guides");
            }}
          >
            Travel Guides
          </a>

          {/* 7. Contact Us */}
          <a
            className={currentPage === "contact" ? "active" : ""}
            href="#contact"
            aria-current={currentPage === "contact" ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              handlePageNavigate("contact", "#contact");
            }}
          >
            Contact Us
          </a>

          {/* Mobile Utility & Action Buttons */}
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
              <span>WhatsApp: +92 310 1816191</span>
            </a>
            <Button onClick={handleQuoteClick}>
              Get a Quote <Icon size={16} />
            </Button>
          </div>
        </nav>

        {/* Desktop Header Actions */}
        <div className="header-actions">
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

          {/* Header CTA: Get a Quote */}
          <Button onClick={handleQuoteClick}>
            Get a Quote <Icon size={16} />
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
