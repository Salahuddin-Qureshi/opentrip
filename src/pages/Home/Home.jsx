import { useRef, useState } from "react";
import HeroSection from "../../components/home/HeroSection";
import TripSearch from "../../components/home/TripSearch";
import DestinationsSection from "../../components/home/DestinationsSection";
import ExperiencesSection from "../../components/home/ExperiencesSection";
import PackagesSection from "../../components/home/PackagesSection";
import StorySection from "../../components/home/StorySection";
import BenefitsSection from "../../components/home/BenefitsSection";
import JournalSection from "../../components/home/JournalSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import PlanningSection from "../../components/home/PlanningSection";
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
  const selectDestination = (item) => plan({ ...item, destination: item.name });
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
        <HeroSection onPlan={() => plan()} />
        <TripSearch destinationRef={destinationRef} onSearch={searchTrips} />
        <DestinationsSection onSelect={selectDestination} />
        <ExperiencesSection onSelect={selectExperience} />
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
        <StorySection onReadStory={() => setDialog({ type: "story" })} />
        <BenefitsSection />
        <JournalSection
          onSelect={(article) => setDialog({ type: "article", article })}
        />
        <TestimonialsSection />
        <PlanningSection onPlan={() => plan()} />
      </main>
      <Footer
        onPlan={() => plan()}
        onDestination={selectDestination}
        onPolicy={(title) => setDialog({ type: "policy", title })}
      />
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
            OpenTrip begins with a simple idea: the most meaningful journeys are
            the ones that feel like you.
          </p>
          <p>
            We’re creating a place for curious travellers to discover their next
            escape, from the quiet of an alpine lake to the energy of a new
            city. Our approach puts thoughtful planning, local discovery and
            room for the unexpected at the heart of every trip.
          </p>
          <p>
            Explore our collection, find what speaks to you, and start shaping
            your next chapter.
          </p>
        </Dialog>
      )}
      {dialog?.type === "policy" && (
        <Dialog title={dialog.title} onClose={close}>
          <p>
            {dialog.title === "Privacy"
              ? "This demonstration processes trip preferences and newsletter form entries only in the current browser session. Forms do not transmit or save your entries. Google Fonts is used to load the page typeface."
              : "Packages and prices shown are illustrative. This website does not accept payments or confirm reservations. Availability, final prices and booking terms must be confirmed before a trip is booked."}
          </p>
        </Dialog>
      )}
    </>
  );
}
