import { useState } from "react";
import { Logo } from "./Header";
import Icon from "../common/Icon";
import { allDestinations } from "../../data/home";
import { useNavigation } from "../../context/NavigationContext";

export default function Footer({ onPlan, onDestination, onPolicy }) {
  const [subscribed, setSubscribed] = useState(false);
  const nav = useNavigation();

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            The world is open.
            <br />
            Your next story starts here.
          </p>
          <a
            className="footer-compass"
            href="#home"
            aria-label="Back to the top"
            onClick={(e) => {
              if (nav) {
                e.preventDefault();
                nav.navigate("home");
              }
            }}
          >
            <Icon name="compass" size={26} />
          </a>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a
            href="#home"
            onClick={(e) => {
              if (nav) {
                e.preventDefault();
                nav.navigate("home");
              }
            }}
          >
            Home
          </a>
          <a
            href="#destinations"
            onClick={(e) => {
              if (nav) {
                e.preventDefault();
                nav.navigate("destinations");
              }
            }}
          >
            Destinations
          </a>
          <a
            href="#packages"
            onClick={(e) => {
              if (nav) {
                e.preventDefault();
                nav.navigate("packages");
              }
            }}
          >
            Packages
          </a>
          <a
            href="#about"
            onClick={(e) => {
              if (nav) {
                e.preventDefault();
                nav.navigate("about");
              }
            }}
          >
            About Us
          </a>
          <a
            href="#journal"
            onClick={(e) => {
              if (nav && nav.page !== "home") {
                e.preventDefault();
                nav.navigate("home", "#journal");
              }
            }}
          >
            Travel Journal
          </a>
        </div>
        <div>
          <h3>Popular Destinations</h3>
          {allDestinations.map((item) => (
            <button key={item.name} onClick={() => onDestination(item)}>
              {item.name}
            </button>
          ))}
        </div>
        <div>
          <h3>Let’s Plan Your Trip</h3>
          <p>
            A mountain escape, an island pause,
            <br />
            or somewhere entirely new.
          </p>
          <button className="footer-plan" onClick={onPlan}>
            Create your trip idea <Icon size={15} />
          </button>
        </div>
        <div className="newsletter">
          <h3>A little inspiration for your inbox</h3>
          <p>
            Travel stories and ideas for your
            <br />
            next great adventure.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubscribed(true);
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
            />
            <button aria-label="Preview newsletter signup">
              <Icon size={20} />
            </button>
          </form>
          {subscribed && (
            <p role="status">
              Thanks for your interest! Newsletter signup will be available
              soon; your email has not been saved.
            </p>
          )}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} OpenTrip. All rights reserved.</span>
        <div>
          <button onClick={() => onPolicy("Privacy")}>Privacy</button>
          <button onClick={() => onPolicy("Booking information")}>
            Booking information
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
