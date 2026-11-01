import { useState } from "react";
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
  const nav = useNavigation();
  const currentPage = nav?.page || "home";

  const explore = () => {
    setOpen(false);
    if (nav) {
      nav.navigate("destinations");
    } else if (onExplore) {
      onExplore();
    }
  };

  const handleHomeClick = (event) => {
    setOpen(false);
    if (nav && nav.page !== "home") {
      event.preventDefault();
      nav.navigate("home");
    }
  };

  const handleSectionLink = (event, label) => {
    setOpen(false);
    if (nav) {
      event.preventDefault();
      nav.navigate(label.toLowerCase());
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
          <a
            className={currentPage === "packages" ? "active" : ""}
            href="#packages"
            aria-current={currentPage === "packages" ? "page" : undefined}
            onClick={(event) => {
              setOpen(false);
              if (nav) {
                event.preventDefault();
                nav.navigate("packages");
              }
            }}
          >
            Packages
          </a>
          {["About", "Contact"].map((label) => {
            const pageKey = label.toLowerCase();
            return (
              <a
                key={label}
                className={currentPage === pageKey ? "active" : ""}
                href={`#${pageKey}`}
                aria-current={currentPage === pageKey ? "page" : undefined}
                onClick={(event) => handleSectionLink(event, label)}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button header-search"
            aria-label="Search destinations"
            onClick={onPlan}
          >
            <Icon name="search" size={19} />
          </button>
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
