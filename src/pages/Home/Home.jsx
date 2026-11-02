import { useRef, useState } from "react";
import HeroSection from "../../components/home/HeroSection";
import TripSearch from "../../components/home/TripSearch";
import DestinationsSection from "../../components/home/DestinationsSection";
import ExperiencesSection from "../../components/home/ExperiencesSection";
import PackagesSection from "../../components/home/PackagesSection";
import TrustAssuranceSection from "../../components/home/TrustAssuranceSection";
import UmrahSection from "../../components/home/UmrahSection";
import VisaSection from "../../components/home/VisaSection";
import FlightsSection from "../../components/home/FlightsSection";
import BenefitsSection from "../../components/home/BenefitsSection";
import HowItWorksSection from "../../components/home/HowItWorksSection";
import StorySection from "../../components/home/StorySection";
import JournalSection from "../../components/home/JournalSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import NewsletterSection from "../../components/home/NewsletterSection";
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
        {/* 1. Hero with Header inside (Preserved exactly) */}
        <HeroSection onPlan={() => plan()} />

        {/* 2. Premium Trip Search Panel */}
        <TripSearch destinationRef={destinationRef} onSearch={searchTrips} />

        {/* 3. Popular Destinations (8 curated global & domestic hubs) */}
        <DestinationsSection onSelect={selectDestination} />

        {/* 4. Popular Tour Packages (Filterable cards with details & inquiry) */}
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

        {/* 5. Trust & Assurance Pillars (Zero Photos - High Trust & Peace of Mind) */}
        <TrustAssuranceSection />

        {/* 6. Umrah Packages (Dedicated Holy Pilgrimage Showcase) */}
        <UmrahSection onPlan={plan} />

        {/* 6. Visa Assistance (UAE, Saudi, Turkey, Malaysia, Thailand, Azerbaijan) */}
        <VisaSection onPlan={plan} />

        {/* 7. Flight Ticketing Banner (Domestic & International Routes) */}
        <FlightsSection onPlan={plan} />

        {/* 8. Travel Experiences (Interactive Category Filter) */}
        <ExperiencesSection onSelect={selectExperience} />

        {/* 9. Why Choose OpenTrip (4 Core Agency Value Cards) */}
        <BenefitsSection />

        {/* 10. How It Works (3-Step Seamless Process) */}
        <HowItWorksSection onPlan={() => plan()} />

        {/* 11. About OpenTrip (Split Story Layout) */}
        <StorySection onReadStory={() => setDialog({ type: "story" })} />

        {/* 12. Customer Testimonials Slider */}
        <TestimonialsSection />

        {/* 13. Travel Journal (Editorial Articles) */}
        <JournalSection
          onSelect={(article) => setDialog({ type: "article", article })}
        />

        {/* 14. Newsletter (Get Inspired for Your Next Adventure) */}
        <NewsletterSection />
      </main>

      {/* 15. Comprehensive Footer */}
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
          title="A world of places. A lifetime of stories."
          onClose={close}
        >
          <img
            className="dialog-image"
            src="/images/mountains.jpg"
            alt="Mountain landscape"
          />
          <p>
            OpenTrip began with a simple vision: the most meaningful journeys are
            the ones tailored personally to you.
          </p>
          <p>
            From the tranquil shores of the Maldives and the sacred courtyards of Makkah
            to the jagged peaks of the Karakoram and alpine valleys of Switzerland, we create
            memories that last a lifetime. Our dedicated curators in Karachi take care of every detail,
            ensuring your travel is smooth, safe, and truly unforgettable.
          </p>
          <p>
            Explore our curated itineraries, talk to our senior advisors, and begin your next chapter with confidence.
          </p>
        </Dialog>
      )}

      {dialog?.type === "policy" && (
        <Dialog title={dialog.title} onClose={close}>
          <p>
            {dialog.title === "Privacy"
              ? "OpenTrip prioritizes your personal privacy. Inquiries and travel preferences submitted on this platform are processed securely by our senior travel desk in Karachi. We do not sell or share your personal contact details with unauthorized third parties."
              : "All packages, indicative flight rates, and visa processing timelines shown are subject to embassy regulations, airline inventory, and hotel room availability at the time of final confirmation. Official quotes and payment vouchers are issued before departure."}
          </p>
        </Dialog>
      )}
    </>
  );
}
