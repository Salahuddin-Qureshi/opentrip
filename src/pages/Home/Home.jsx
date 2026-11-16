import { useRef, useState } from "react";
import HeroSection from "../../components/home/HeroSection";
import TripSearch from "../../components/home/TripSearch";
import WelcomeSection from "../../components/home/WelcomeSection";
import ServicesSection from "../../components/home/ServicesSection";
import DestinationsSection from "../../components/home/DestinationsSection";
import PackagesSection from "../../components/home/PackagesSection";
import TrustAssuranceSection from "../../components/home/TrustAssuranceSection";
import UmrahSection from "../../components/home/UmrahSection";
import VisaSection from "../../components/home/VisaSection";
import FlightsSection from "../../components/home/FlightsSection";
import ExperiencesSection from "../../components/home/ExperiencesSection";
import BenefitsSection from "../../components/home/BenefitsSection";
import HowItWorksSection from "../../components/home/HowItWorksSection";
import StorySection from "../../components/home/StorySection";
import JournalSection from "../../components/home/JournalSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import FaqSection from "../../components/home/FaqSection";
import FinalCtaSection from "../../components/home/FinalCtaSection";
import Footer from "../../components/layout/Footer";
import TripDialog from "../../features/trips/TripDialog";
import Dialog from "../../components/common/Dialog";
import "./Home.css";

export default function Home() {
  const destinationRef = useRef(null);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState(null);
  const [dialog, setDialog] = useState(null);

  const scrollToPackages = () =>
    document
      .getElementById("packages")
      ?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });

  const plan = (trip = null) => setDialog({ type: "trip", trip });

  const selectDestination = (item) =>
    plan({ ...item, destination: item.name });

  const selectExperience = (value) => {
    setCategory(value);
    setSearch(null);
    scrollToPackages();
  };

  const searchTrips = (values) => {
    setSearch(values);
    setCategory(values.type === "Any type" ? "All" : values.type);
    scrollToPackages();
  };

  const close = () => setDialog(null);

  return (
    <>
      <a className="skip-link" href="#trip-search">
        Skip to trip search
      </a>

      <main>
        {/* 1. Hero with Header inside */}
        <HeroSection onPlan={() => plan()} />

        {/* 2. Premium Trip Search Panel */}
        <TripSearch destinationRef={destinationRef} onSearch={searchTrips} />

        {/* 3. Welcome Section (Making Every Journey Memorable) */}
        <WelcomeSection onPlan={() => plan()} />

        {/* 4. Our Services (Everything You Need for Your Journey) */}
        <ServicesSection onPlan={plan} />

        {/* 5. Popular Destinations (Discover Your Next Destination) */}
        <DestinationsSection onSelect={selectDestination} />

        {/* 6. Featured Packages (Find the Right Package for Your Journey) */}
        <PackagesSection
          category={category}
          onCategoryChange={setCategory}
          search={search}
          onClearSearch={() => {
            setSearch(null);
            setCategory("All");
          }}
          onSelect={plan}
        />

        {/* 7. Trust & Assurance Pillars */}
        <TrustAssuranceSection />

        {/* 8. Umrah Packages */}
        <UmrahSection onPlan={plan} />

        {/* 9. Visa Assistance */}
        <VisaSection onPlan={plan} />

        {/* 10. Flight Ticketing Banner */}
        <FlightsSection onPlan={plan} />

        {/* 11. Travel Experiences */}
        <ExperiencesSection onSelect={selectExperience} />

        {/* 12. Why Choose Us (Your Journey Deserves the Right Travel Partner) */}
        <BenefitsSection />

        {/* 13. How It Works (Your Journey in Four Simple Steps) */}
        <HowItWorksSection onPlan={() => plan()} />

        {/* 14. Customer Reviews (Real Experiences. Meaningful Journeys.) */}
        <TestimonialsSection />

        {/* 15. Home FAQ */}
        <FaqSection onPlan={() => plan()} />

        {/* 16. About OPEN TRIP (Story) */}
        <StorySection onReadStory={() => setDialog({ type: "story" })} />

        {/* 17. Travel Journal */}
        <JournalSection
          onSelect={(article) => setDialog({ type: "article", article })}
        />

        {/* 18. Final CTA (Let's Plan Your Next Journey!) */}
        <FinalCtaSection onPlan={() => plan()} />
      </main>

      {/* 19. Comprehensive Footer */}
      <Footer
        onPlan={() => plan()}
        onDestination={selectDestination}
        onPolicy={(title) => setDialog({ type: "policy", title })}
      />

      {/* Interactive Modals */}
      {dialog?.type === "trip" && (
        <TripDialog trip={dialog.trip} onClose={close} />
      )}

      {dialog?.type === "article" && (
        <Dialog title={dialog.article.title} onClose={close}>
          <img className="dialog-image" src={dialog.article.image} alt="" />
          <p className="section-eyebrow">
            {dialog.article.category} · {dialog.article.time}
          </p>
          {dialog.article.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Dialog>
      )}

      {dialog?.type === "story" && (
        <Dialog
          title="Making Every Journey Memorable · OPEN TRIP (PVT.) LTD."
          onClose={close}
        >
          <img
            className="dialog-image"
            src="/images/destinations/switzerland.jpeg"
            alt="OPEN TRIP Journey"
          />
          <p>
            At OPEN TRIP (PVT.) LTD., we believe every journey begins with the right travel partner.
            We offer a comprehensive range of travel-related services designed to make planning easier and more convenient.
          </p>
          <p>
            From flight bookings and hotel reservations to visa assistance, Umrah packages, and customized tour packages,
            our team helps travellers explore suitable options based on their needs.
          </p>
        </Dialog>
      )}

      {dialog?.type === "policy" && (
        <Dialog title={dialog.title} onClose={close}>
          <p>
            OPEN TRIP (PVT.) LTD. is committed to absolute clarity, legally compliant travel facilitation,
            and complete pricing transparency for all international holidays, Umrah pilgrimages, and flight bookings.
          </p>
          <p>
            All quotations, inclusions, and booking conditions are formally communicated before reservation confirmation.
          </p>
        </Dialog>
      )}
    </>
  );
}
