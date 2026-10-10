import { useRef } from 'react';
import HeroSection from '../../components/home/HeroSection';
import TripSearch from '../../components/home/TripSearch';
export default function Home() {
  const destinationRef = useRef(null);
  const planTrip = () => {
    destinationRef.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
    destinationRef.current?.focus({ preventScroll: true });
  };
  return <><a className="skip-link" href="#trip-search">Skip to trip search</a><main><HeroSection onPlan={planTrip} /><TripSearch destinationRef={destinationRef} /></main></>;
}
