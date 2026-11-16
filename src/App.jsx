import { useState } from "react";
import Home from "./pages/Home/Home";
import DestinationsPage from "./pages/Destinations/Destinations";
import DestinationsOverviewPage from "./pages/Destinations/DestinationsOverview";
import PackagesPage from "./pages/Packages/Packages";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import ServicesPage from "./pages/Services/Services";
import FlightBookingPage from "./pages/Services/FlightBooking";
import HotelReservationsPage from "./pages/Services/HotelReservations";
import VisaAssistancePage from "./pages/Services/VisaAssistance";
import UmrahPackagesPage from "./pages/Services/UmrahPackages";
import CustomizedTourPackagesPage from "./pages/Services/CustomizedTourPackages";
import TravelGuidesPage from "./pages/Guides/TravelGuides";
import GetAQuotePage from "./pages/Quote/GetAQuote";
import FaqPage from "./pages/Faq/FaqPage";
import LegalPage from "./pages/Legal/LegalPage";
import { NavigationContext } from "./context/NavigationContext";

export default function App() {
  const [page, setPage] = useState("home");
  const [legalTab, setLegalTab] = useState("privacy");

  const navigate = (nextPage, targetParam = "") => {
    if (nextPage === "legal" || nextPage === "privacy" || nextPage === "terms" || nextPage === "cancellation" || nextPage === "refund") {
      setPage("legal");
      if (nextPage === "terms") setLegalTab("terms");
      else if (nextPage === "cancellation" || nextPage === "refund") setLegalTab("cancellation");
      else if (targetParam === "terms") setLegalTab("terms");
      else if (targetParam === "cancellation" || targetParam === "refund") setLegalTab("cancellation");
      else setLegalTab("privacy");
    } else {
      setPage(nextPage);
    }

    if (typeof window !== "undefined") {
      if (targetParam && targetParam.startsWith("#")) {
        setTimeout(() => {
          const id = targetParam.replace(/^#/, "");
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
      ) : page === "destinations-overview" ? (
        <DestinationsOverviewPage />
      ) : page === "guides" || page === "journal" ? (
        <TravelGuidesPage />
      ) : page === "packages" ? (
        <PackagesPage />
      ) : page === "quote" || page === "get-a-quote" ? (
        <GetAQuotePage />
      ) : page === "faq" || page === "faqs" ? (
        <FaqPage />
      ) : page === "legal" ? (
        <LegalPage initialTab={legalTab} />
      ) : page === "about" ? (
        <AboutPage />
      ) : page === "contact" ? (
        <ContactPage />
      ) : page === "services" ? (
        <ServicesPage />
      ) : page === "flights" ? (
        <FlightBookingPage />
      ) : page === "hotels" ? (
        <HotelReservationsPage />
      ) : page === "visa" ? (
        <VisaAssistancePage />
      ) : page === "umrah" ? (
        <UmrahPackagesPage />
      ) : page === "custom-tour" || page === "tour-packages" ? (
        <CustomizedTourPackagesPage />
      ) : (
        <Home />
      )}
    </NavigationContext.Provider>
  );
}
