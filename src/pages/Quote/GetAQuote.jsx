import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import { useNavigation } from "../../context/NavigationContext";
import "./GetAQuote.css";

const SERVICES = [
  { id: "flight", label: "Flight Booking", icon: "plane", desc: "Domestic & international flights" },
  { id: "hotel", label: "Hotel Reservations", icon: "home", desc: "Curated worldwide hotels" },
  { id: "visa", label: "Visa Assistance", icon: "shield", desc: "Embassy file prep & guidance" },
  { id: "umrah", label: "Umrah Packages", icon: "star", desc: "Sacred pilgrimage with guidance" },
  { id: "tour", label: "Customized Tour Packages", icon: "compass", desc: "Bespoke itineraries & leisure" },
];

export default function GetAQuotePage() {
  const [selectedService, setSelectedService] = useState("flight");
  
  // General Fields
  const [generalData, setGeneralData] = useState({
    fullName: "",
    phone: "",
    email: "",
    destination: "",
    departureCity: "Karachi",
    travelDates: "",
    adults: 2,
    children: 0,
    childrenAges: "",
    budgetRange: "",
    additionalRequirements: "",
    privacyConsent: false,
  });

  // Flight Specific
  const [flightData, setFlightData] = useState({
    origin: "Karachi (KHI)",
    destination: "",
    tripType: "Return", // Return, One-Way, Multi-City
    departureDate: "",
    returnDate: "",
    passengerAges: "Adults (12+)",
    cabinPreference: "Economy", // Economy, Premium Economy, Business, First
  });

  // Hotel Specific
  const [hotelData, setHotelData] = useState({
    city: "",
    checkInDate: "",
    checkOutDate: "",
    rooms: 1,
    hotelCategory: "4-Star Deluxe",
  });

  // Visa Specific
  const [visaData, setVisaData] = useState({
    destinationCountry: "",
    travelPurpose: "Tourism", // Tourism, Business, Family Visit, Study
    intendedMonth: "",
  });

  // Umrah Specific
  const [umrahData, setUmrahData] = useState({
    departureCity: "Karachi",
    dates: "",
    duration: "14 Days / 13 Nights",
    roomOccupancy: "Quad Sharing", // Quad, Triple, Double, Private
    transportPreference: "Private GMC / Luxury Bus",
    hotelProximity: "Walking Distance to Haram (Under 400m)",
  });

  // Tour Specific
  const [tourData, setTourData] = useState({
    destination: "",
    durationDays: "7 Days",
    groupSize: "Family (3-4 Persons)",
    interests: ["Sightseeing", "Cultural Heritage"],
    budget: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const nav = useNavigation();

  const handleGeneralChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGeneralData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleTourInterest = (interest) => {
    setTourData((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!generalData.privacyConsent) {
      alert("Please agree to the Privacy Policy to proceed.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setConfirmed(true);
    }, 700);
  };

  const resetAll = () => {
    setConfirmed(false);
    setGeneralData({
      fullName: "",
      phone: "",
      email: "",
      destination: "",
      departureCity: "Karachi",
      travelDates: "",
      adults: 2,
      children: 0,
      childrenAges: "",
      budgetRange: "",
      additionalRequirements: "",
      privacyConsent: false,
    });
  };

  return (
    <div className="quote-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero hero--service quote-hero-section" aria-labelledby="quote-page-heading">
        <img
          className="hero-image"
          src="/images/packages-hero-wide.jpg"
          alt="Request a Travel Quotation with OPEN TRIP"
          fetchPriority="high"
          style={{ objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div className="hero-shade" />
        <Header />

        <div className="hero-body container">
          <div className="hero-copy quote-hero-copy">
            <p className="eyebrow">
              Bespoke Quotations <span>·</span> OPEN TRIP (PVT.) LTD.
            </p>
            <h1 id="quote-page-heading" className="quote-main-title">
              Request a Travel Quotation
            </h1>
            <p className="quote-hero-tagline">
              Tell Us About Your Travel Plans
            </p>
            <p className="hero-description quote-hero-desc">
              Share a few details about the journey you are planning. Select the service you need and provide the relevant information so our team can prepare suitable options for your inquiry.
            </p>

            <div className="quote-badges-row">
              <span className="quote-feature-badge">✓ Free Detailed Quotation</span>
              <span className="quote-feature-badge">✓ IATA Accredited Desk</span>
              <span className="quote-feature-badge">✓ No Booking Obligation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN QUOTE FORM CONTAINER */}
      <main className="quote-main-content">
        <div className="container quote-content-container">
          
          {confirmed ? (
            /* Confirmation Card */
            <div className="quote-confirmation-card">
              <div className="confirm-icon-circle">✓</div>
              <h2>Inquiry Received Successfully</h2>
              <div className="confirm-official-text">
                <p className="confirm-primary-msg">
                  <strong>Thank you for contacting OPEN TRIP. Your inquiry has been received.</strong>
                </p>
                <p className="confirm-secondary-msg">
                  Our team will review the details and contact you using the information provided.
                </p>
              </div>

              <div className="confirm-summary-box">
                <div className="confirm-summary-row">
                  <span>Traveler Name:</span>
                  <strong>{generalData.fullName}</strong>
                </div>
                <div className="confirm-summary-row">
                  <span>Contact Phone / WhatsApp:</span>
                  <strong>{generalData.phone}</strong>
                </div>
                <div className="confirm-summary-row">
                  <span>Service Selected:</span>
                  <strong>{SERVICES.find((s) => s.id === selectedService)?.label}</strong>
                </div>
                <div className="confirm-summary-row">
                  <span>Departure City:</span>
                  <strong>{generalData.departureCity}</strong>
                </div>
                {generalData.destination && (
                  <div className="confirm-summary-row">
                    <span>Destination:</span>
                    <strong>{generalData.destination}</strong>
                  </div>
                )}
              </div>

              <div className="confirm-actions">
                <button type="button" className="button button--primary" onClick={resetAll}>
                  Submit Another Quotation Request
                </button>
                <a
                  href={`https://wa.me/923101816191?text=${encodeURIComponent(
                    `Assalam-o-Alaikum Open Trip, I just requested a quotation on your website for ${
                      SERVICES.find((s) => s.id === selectedService)?.label
                    } (${generalData.fullName}). Please share suitable packages.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--outline confirm-wa-btn"
                >
                  <Icon name="whatsapp" size={16} /> <span>Connect via WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="quote-form-card">
              {/* STEP 1: SERVICE SELECTOR */}
              <div className="quote-step-section">
                <div className="step-indicator">
                  <span className="step-num">Step 1</span>
                  <h3>Select Service Required</h3>
                </div>
                <p className="step-desc">
                  Choose the travel service you want a quotation for to unlock customized options.
                </p>

                <div className="service-selector-grid">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      className={`service-select-btn ${selectedService === srv.id ? "active" : ""}`}
                      onClick={() => setSelectedService(srv.id)}
                    >
                      <div className="select-btn-top">
                        <span className="srv-btn-icon">
                          <Icon name={srv.icon} size={18} />
                        </span>
                        <span className="srv-check-indicator">
                          {selectedService === srv.id ? "●" : "○"}
                        </span>
                      </div>
                      <strong>{srv.label}</strong>
                      <small>{srv.desc}</small>
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="quote-active-form">
                
                {/* STEP 2: SERVICE-SPECIFIC FOLLOW-UP */}
                <div className="quote-step-section">
                  <div className="step-indicator">
                    <span className="step-num">Step 2</span>
                    <h3>
                      {SERVICES.find((s) => s.id === selectedService)?.label} Details
                    </h3>
                  </div>
                  <p className="step-desc">
                    Provide relevant details for this service so our consultants can check exact pricing.
                  </p>

                  {/* 2A. FLIGHT INQUIRIES */}
                  {selectedService === "flight" && (
                    <div className="service-dynamic-box">
                      <div className="form-row-3">
                        <div className="q-field">
                          <label>Trip Type</label>
                          <select
                            value={flightData.tripType}
                            onChange={(e) => setFlightData({ ...flightData, tripType: e.target.value })}
                          >
                            <option value="Return">Return (Round Trip)</option>
                            <option value="One-Way">One-Way</option>
                            <option value="Multi-City">Multi-City</option>
                          </select>
                        </div>
                        <div className="q-field">
                          <label>Origin Airport / City</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Karachi (KHI) or Lahore (LHE)"
                            value={flightData.origin}
                            onChange={(e) => setFlightData({ ...flightData, origin: e.target.value })}
                          />
                        </div>
                        <div className="q-field">
                          <label>Destination Airport / City</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Dubai (DXB) or London (LHR)"
                            value={flightData.destination}
                            onChange={(e) => setFlightData({ ...flightData, destination: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-row-3">
                        <div className="q-field">
                          <label>Departure Date</label>
                          <input
                            type="text"
                            required
                            placeholder="DD/MM/YYYY or preferred month"
                            value={flightData.departureDate}
                            onChange={(e) => setFlightData({ ...flightData, departureDate: e.target.value })}
                          />
                        </div>
                        {flightData.tripType !== "One-Way" && (
                          <div className="q-field">
                            <label>Return Date</label>
                            <input
                              type="text"
                              placeholder="DD/MM/YYYY"
                              value={flightData.returnDate}
                              onChange={(e) => setFlightData({ ...flightData, returnDate: e.target.value })}
                            />
                          </div>
                        )}
                        <div className="q-field">
                          <label>Cabin Preference</label>
                          <select
                            value={flightData.cabinPreference}
                            onChange={(e) => setFlightData({ ...flightData, cabinPreference: e.target.value })}
                          >
                            <option value="Economy">Economy Class</option>
                            <option value="Premium Economy">Premium Economy</option>
                            <option value="Business">Business Class</option>
                            <option value="First">First Class</option>
                          </select>
                        </div>
                      </div>

                      <div className="q-field">
                        <label>Passenger Ages &amp; Breakdown</label>
                        <input
                          type="text"
                          placeholder="e.g. 2 Adults (35, 32), 1 Child (8), 1 Infant (1)"
                          value={flightData.passengerAges}
                          onChange={(e) => setFlightData({ ...flightData, passengerAges: e.target.value })}
                        />
                      </div>
                    </div>
                  )}

                  {/* 2B. HOTEL INQUIRIES */}
                  {selectedService === "hotel" && (
                    <div className="service-dynamic-box">
                      <div className="form-row-2">
                        <div className="q-field">
                          <label>Destination City / Area</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Makkah (Near Haram), Dubai Downtown, Zurich"
                            value={hotelData.city}
                            onChange={(e) => setHotelData({ ...hotelData, city: e.target.value })}
                          />
                        </div>
                        <div className="q-field">
                          <label>Hotel Category Preference</label>
                          <select
                            value={hotelData.hotelCategory}
                            onChange={(e) => setHotelData({ ...hotelData, hotelCategory: e.target.value })}
                          >
                            <option value="5-Star Luxury VIP">5-Star Luxury VIP</option>
                            <option value="4-Star Deluxe">4-Star Deluxe</option>
                            <option value="3-Star Standard">3-Star Standard</option>
                            <option value="Boutique / Resort Stay">Boutique / Resort Stay</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row-3">
                        <div className="q-field">
                          <label>Check-in Date</label>
                          <input
                            type="text"
                            required
                            placeholder="DD/MM/YYYY"
                            value={hotelData.checkInDate}
                            onChange={(e) => setHotelData({ ...hotelData, checkInDate: e.target.value })}
                          />
                        </div>
                        <div className="q-field">
                          <label>Check-out Date</label>
                          <input
                            type="text"
                            required
                            placeholder="DD/MM/YYYY"
                            value={hotelData.checkOutDate}
                            onChange={(e) => setHotelData({ ...hotelData, checkOutDate: e.target.value })}
                          />
                        </div>
                        <div className="q-field">
                          <label>Number of Rooms</label>
                          <input
                            type="number"
                            min="1"
                            max="20"
                            value={hotelData.rooms}
                            onChange={(e) => setHotelData({ ...hotelData, rooms: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2C. VISA INQUIRIES */}
                  {selectedService === "visa" && (
                    <div className="service-dynamic-box">
                      <div className="form-row-3">
                        <div className="q-field">
                          <label>Destination Country</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Saudi Arabia, UAE, UK, Schengen, USA"
                            value={visaData.destinationCountry}
                            onChange={(e) => setVisaData({ ...visaData, destinationCountry: e.target.value })}
                          />
                        </div>
                        <div className="q-field">
                          <label>Travel Purpose</label>
                          <select
                            value={visaData.travelPurpose}
                            onChange={(e) => setVisaData({ ...visaData, travelPurpose: e.target.value })}
                          >
                            <option value="Tourism">Tourism / Holiday</option>
                            <option value="Business">Business Meeting / Conference</option>
                            <option value="Family Visit">Family / Relative Visit</option>
                            <option value="Study">Study / Student Visa Guidance</option>
                          </select>
                        </div>
                        <div className="q-field">
                          <label>Intended Travel Month</label>
                          <input
                            type="text"
                            placeholder="e.g. November 2026 or Spring 2027"
                            value={visaData.intendedMonth}
                            onChange={(e) => setVisaData({ ...visaData, intendedMonth: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Official Publishing / Security Note */}
                      <div className="visa-security-notice">
                        <div className="notice-icon">
                          <Icon name="shield" size={18} />
                        </div>
                        <p>
                          <strong>Data Protection Notice:</strong> Do not submit sensitive identity numbers, bank statements, or financial records through this public quotation form. Our senior visa consultant will guide you on secure, confidential document submission through verified official channels after your initial assessment.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 2D. UMRAH INQUIRIES */}
                  {selectedService === "umrah" && (
                    <div className="service-dynamic-box">
                      <div className="form-row-3">
                        <div className="q-field">
                          <label>Departure City</label>
                          <select
                            value={umrahData.departureCity}
                            onChange={(e) => setUmrahData({ ...umrahData, departureCity: e.target.value })}
                          >
                            <option value="Karachi">Karachi (KHI)</option>
                            <option value="Lahore">Lahore (LHE)</option>
                            <option value="Islamabad">Islamabad (ISB)</option>
                            <option value="Other / Overseas">Other / Overseas Hub</option>
                          </select>
                        </div>
                        <div className="q-field">
                          <label>Intended Travel Dates</label>
                          <input
                            type="text"
                            placeholder="e.g. Ramadan 2027 or Mid-November 2026"
                            value={umrahData.dates}
                            onChange={(e) => setUmrahData({ ...umrahData, dates: e.target.value })}
                          />
                        </div>
                        <div className="q-field">
                          <label>Package Duration</label>
                          <select
                            value={umrahData.duration}
                            onChange={(e) => setUmrahData({ ...umrahData, duration: e.target.value })}
                          >
                            <option value="10 Days / 9 Nights">10 Days / 9 Nights</option>
                            <option value="14 Days / 13 Nights">14 Days / 13 Nights</option>
                            <option value="20 Days / 19 Nights">20 Days / 19 Nights (Recommended)</option>
                            <option value="Custom Duration">Custom Duration</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row-2">
                        <div className="q-field">
                          <label>Room Occupancy</label>
                          <select
                            value={umrahData.roomOccupancy}
                            onChange={(e) => setUmrahData({ ...umrahData, roomOccupancy: e.target.value })}
                          >
                            <option value="Double Sharing">Double Room (2 Persons)</option>
                            <option value="Triple Sharing">Triple Room (3 Persons)</option>
                            <option value="Quad Sharing">Quad Room (4 Persons - Economical)</option>
                            <option value="Private Executive Suite">Private Executive Suite</option>
                          </select>
                        </div>
                        <div className="q-field">
                          <label>Hotel &amp; Transport Preferences</label>
                          <input
                            type="text"
                            placeholder="e.g. Clock Tower hotel, Private GMC transfer, Haramain train"
                            value={umrahData.transportPreference}
                            onChange={(e) => setUmrahData({ ...umrahData, transportPreference: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2E. TOUR INQUIRIES */}
                  {selectedService === "tour" && (
                    <div className="service-dynamic-box">
                      <div className="form-row-3">
                        <div className="q-field">
                          <label>Destination Country / City</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Turkey, Malaysia, Switzerland, Baku"
                            value={tourData.destination}
                            onChange={(e) => setTourData({ ...tourData, destination: e.target.value })}
                          />
                        </div>
                        <div className="q-field">
                          <label>Trip Duration</label>
                          <select
                            value={tourData.durationDays}
                            onChange={(e) => setTourData({ ...tourData, durationDays: e.target.value })}
                          >
                            <option value="5 Days / 4 Nights">5 Days / 4 Nights</option>
                            <option value="7 Days / 6 Nights">7 Days / 6 Nights</option>
                            <option value="10 Days / 9 Nights">10 Days / 9 Nights</option>
                            <option value="14+ Days Tailored">14+ Days Tailored</option>
                          </select>
                        </div>
                        <div className="q-field">
                          <label>Group Size / Style</label>
                          <select
                            value={tourData.groupSize}
                            onChange={(e) => setTourData({ ...tourData, groupSize: e.target.value })}
                          >
                            <option value="Couple (2 Persons)">Couple (2 Persons)</option>
                            <option value="Family (3-4 Persons)">Family (3-4 Persons)</option>
                            <option value="Group of Friends (5+) ">Group of Friends (5+)</option>
                            <option value="Corporate / Incentive">Corporate / Incentive Group</option>
                          </select>
                        </div>
                      </div>

                      <div className="q-field">
                        <label>Travel Interests (Select all that apply):</label>
                        <div className="interests-chips-row">
                          {[
                            "Sightseeing",
                            "Cultural Heritage",
                            "Nature & Mountains",
                            "Theme Parks & Adventure",
                            "Shopping & City Breaks",
                            "Relaxation & Beaches",
                          ].map((interest) => (
                            <button
                              key={interest}
                              type="button"
                              className={`interest-chip ${
                                tourData.interests.includes(interest) ? "active" : ""
                              }`}
                              onClick={() => toggleTourInterest(interest)}
                            >
                              {tourData.interests.includes(interest) ? "✓ " : "+ "}
                              {interest}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* STEP 3: GENERAL TRIP DETAILS & TRAVELERS */}
                <div className="quote-step-section">
                  <div className="step-indicator">
                    <span className="step-num">Step 3</span>
                    <h3>Travelers &amp; Itinerary Logistics</h3>
                  </div>

                  <div className="form-row-3">
                    <div className="q-field">
                      <label>Departure City</label>
                      <input
                        type="text"
                        name="departureCity"
                        required
                        placeholder="e.g. Karachi, Lahore, Islamabad"
                        value={generalData.departureCity}
                        onChange={handleGeneralChange}
                      />
                    </div>
                    <div className="q-field">
                      <label>Preferred Travel Dates / Month</label>
                      <input
                        type="text"
                        name="travelDates"
                        required
                        placeholder="e.g. 15 Nov – 25 Nov 2026"
                        value={generalData.travelDates}
                        onChange={handleGeneralChange}
                      />
                    </div>
                    <div className="q-field">
                      <label>Estimated Budget Range (Optional)</label>
                      <input
                        type="text"
                        name="budgetRange"
                        placeholder="e.g. PKR 300,000 – 450,000 per person"
                        value={generalData.budgetRange}
                        onChange={handleGeneralChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-3">
                    <div className="q-field">
                      <label>Number of Adults (12+ yrs)</label>
                      <input
                        type="number"
                        name="adults"
                        min="1"
                        max="50"
                        value={generalData.adults}
                        onChange={handleGeneralChange}
                      />
                    </div>
                    <div className="q-field">
                      <label>Number of Children (&lt;12 yrs)</label>
                      <input
                        type="number"
                        name="children"
                        min="0"
                        max="20"
                        value={generalData.children}
                        onChange={handleGeneralChange}
                      />
                    </div>
                    <div className="q-field">
                      <label>Children Ages (if applicable)</label>
                      <input
                        type="text"
                        name="childrenAges"
                        placeholder="e.g. 4, 7, 10 years old"
                        value={generalData.childrenAges}
                        onChange={handleGeneralChange}
                      />
                    </div>
                  </div>

                  <div className="q-field">
                    <label>Additional Requirements / Special Notes</label>
                    <textarea
                      name="additionalRequirements"
                      rows={3}
                      placeholder="Share any special preferences: direct flights preferred, wheelchair assistance, wheelchair room, vegetarian breakfast, private tour pacing..."
                      value={generalData.additionalRequirements}
                      onChange={handleGeneralChange}
                    />
                  </div>
                </div>

                {/* STEP 4: CONTACT INFORMATION & CONSENT */}
                <div className="quote-step-section">
                  <div className="step-indicator">
                    <span className="step-num">Step 4</span>
                    <h3>Where Should We Send Your Quotation?</h3>
                  </div>

                  <div className="form-row-3">
                    <div className="q-field">
                      <label>
                        Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Your full name"
                        value={generalData.fullName}
                        onChange={handleGeneralChange}
                      />
                    </div>
                    <div className="q-field">
                      <label>
                        Phone / WhatsApp <span className="req-star">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 0300 1234567"
                        value={generalData.phone}
                        onChange={handleGeneralChange}
                      />
                    </div>
                    <div className="q-field">
                      <label>
                        Email Address <span className="req-star">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. name@example.com"
                        value={generalData.email}
                        onChange={handleGeneralChange}
                      />
                    </div>
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="quote-consent-row">
                    <input
                      id="quote-consent"
                      name="privacyConsent"
                      type="checkbox"
                      required
                      checked={generalData.privacyConsent}
                      onChange={handleGeneralChange}
                    />
                    <label htmlFor="quote-consent">
                      I agree to the{" "}
                      <a
                        href="#privacy"
                        onClick={(e) => {
                          e.preventDefault();
                          nav?.navigate("legal", "privacy");
                        }}
                      >
                        Privacy Policy
                      </a>{" "}
                      and authorize OPEN TRIP (PVT.) LTD. to contact me with customized travel rates and package itineraries.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="button button--primary quote-submit-btn"
                    disabled={submitting}
                  >
                    {submitting ? "Preparing Inquiry..." : "Submit Travel Quotation Request →"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

