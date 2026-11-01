import { useState } from "react";
import Home from "./pages/Home/Home";
import DestinationsPage from "./pages/Destinations/Destinations";
import PackagesPage from "./pages/Packages/Packages";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import { NavigationContext } from "./context/NavigationContext";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (nextPage, targetHash = "") => {
    setPage(nextPage);
    if (typeof window !== "undefined") {
      if (targetHash) {
        setTimeout(() => {
          const id = targetHash.replace(/^#/, "");
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <NavigationContext.Provider value={{ page, navigate }}>
      {page === "destinations" ? (
        <DestinationsPage />
      ) : page === "packages" ? (
        <PackagesPage />
      ) : page === "about" ? (
        <AboutPage />
      ) : page === "contact" ? (
        <ContactPage />
      ) : (
        <Home />
      )}
    </NavigationContext.Provider>
  );
}
