import { useState } from "react";
import Icon from "../common/Icon";
import Button from "../common/Button";
import "./Header.css";
export function Logo() {
  return (
    <a className="logo" href="#home" aria-label="OpenTrip home">
      OpenTrip
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 10 18-7-7 18-3-8-8-3Zm8 3L21 3" />
      </svg>
    </a>
  );
}
export default function Header({ onPlan, onExplore }) {
  const [open, setOpen] = useState(false);
  const explore = () => {
    setOpen(false);
    onExplore();
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
            className="active"
            href="#home"
            aria-current="page"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <button onClick={explore}>Destinations</button>
          {["Packages", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
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
