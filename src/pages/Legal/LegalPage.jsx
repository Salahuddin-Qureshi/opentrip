import { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import { useNavigation } from "../../context/NavigationContext";
import "./LegalPage.css";

export default function LegalPage({ initialTab = "privacy" }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const nav = useNavigation();

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  return (
    <div className="legal-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero hero--service legal-hero-section" aria-labelledby="legal-hero-title">
        <img
          className="hero-image"
          src="/images/destinations-hero-wide.jpg"
          alt="OPEN TRIP Legal & Compliance Center"
          fetchPriority="high"
          style={{ objectFit: "cover", objectPosition: "center 42%" }}
        />
        <div className="hero-shade" />
        <Header />

        <div className="hero-body container">
          <div className="hero-copy legal-hero-copy">
            <p className="eyebrow">
              Transparency &amp; Governance <span>·</span> OPEN TRIP (PVT.) LTD.
            </p>
            <h1 id="legal-hero-title" className="legal-page-title">
              Legal &amp; Policy Center
            </h1>
            <p className="legal-hero-tagline">
              Official Consumer Safeguards, Booking Terms &amp; Privacy Policies
            </p>
            <p className="hero-description legal-hero-desc">
              Review our verified regulatory standards, data protection framework, booking terms, and complete cancellation &amp; refund guidelines.
            </p>

            <div className="legal-hero-pills">
              <span className="legal-pill">Govt. Approved &amp; IATA Accredited</span>
              <span className="legal-pill">DTS Reg. #3941</span>
              <span className="legal-pill">Registered Travel Agency in Pakistan</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN POLICY VIEWER */}
      <main className="legal-main-content">
        <div className="container legal-container">
          
          {/* Policy Navigation Tabs */}
          <div className="legal-tabs-nav">
            <button
              type="button"
              className={`legal-tab-btn ${activeTab === "privacy" ? "active" : ""}`}
              onClick={() => setActiveTab("privacy")}
            >
              <Icon name="shield" size={17} />
              <span>Privacy Policy</span>
            </button>
            <button
              type="button"
              className={`legal-tab-btn ${activeTab === "terms" ? "active" : ""}`}
              onClick={() => setActiveTab("terms")}
            >
              <Icon name="file" size={17} />
              <span>Terms &amp; Conditions</span>
            </button>
            <button
              type="button"
              className={`legal-tab-btn ${
                activeTab === "cancellation" || activeTab === "refund" ? "active" : ""
              }`}
              onClick={() => setActiveTab("cancellation")}
            >
              <Icon name="clock" size={17} />
              <span>Cancellation &amp; Refund Policy</span>
            </button>
          </div>

          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === "privacy" && (
            <article className="legal-document-card">
              <div className="doc-header">
                <span className="doc-meta-tag">OFFICIAL POLICY</span>
                <h2>Privacy Policy</h2>
                <p className="doc-subtitle">
                  OPEN TRIP (PVT.) LTD. · Effective 2026
                </p>
              </div>

              <div className="doc-body">
                {/* Official Starter Copy */}
                <div className="doc-intro-callout">
                  <p>
                    <strong>OPEN TRIP (PVT.) LTD. respects your privacy.</strong> This policy explains what personal information the website collects through inquiry forms, why it is collected, how it is used, who it may be shared with to fulfil a requested travel service, how it is protected, how long it is retained, and how users can contact the company about their information. The final policy is reviewed and monitored in accordance with applicable laws in Pakistan.
                  </p>
                </div>

                <h3>1. Information We Collect Through Inquiry Forms</h3>
                <p>
                  When you submit a travel inquiry, quotation request, or contact form on our website, we may collect the following personal details:
                </p>
                <ul>
                  <li><strong>Contact Details:</strong> Full name, telephone / WhatsApp number, and email address.</li>
                  <li><strong>Travel Preferences:</strong> Requested service, destination, departure city, tentative travel dates, duration, hotel tier preferences, and flight route specifications.</li>
                  <li><strong>Party Composition:</strong> Number of adult travelers, children, and infants, including approximate ages for suitable lodging and ticketing tariffs.</li>
                  <li><strong>Special Notes:</strong> Dietary preferences, accessibility requirements, or custom pacing requests you choose to share.</li>
                </ul>
                <p>
                  <em>Security Precaution:</em> We do NOT solicit sensitive identity documents (such as original CNIC scans, passport booklets, or financial bank records) through general unauthenticated website forms. Such documentation is requested strictly through official, encrypted corporate channels when finalizing visa filings or flight issuance.
                </p>

                <h3>2. Why Your Information is Collected &amp; How It is Used</h3>
                <p>
                  The personal information gathered through our website is used strictly for legitimate commercial and travel planning purposes:
                </p>
                <ul>
                  <li>Preparing customized price quotations, travel itineraries, and package comparisons.</li>
                  <li>Communicating with you via telephone, WhatsApp, or email regarding your inquiry.</li>
                  <li>Coordinating flight seat reservations, hotel room blocks, and visa assessment checks.</li>
                  <li>Providing emergency travel assistance and itinerary updates during active trips.</li>
                </ul>

                <h3>3. Who Your Information May Be Shared With (Service Fulfillment)</h3>
                <p>
                  OPEN TRIP (PVT.) LTD. does not sell, rent, or trade your personal information to third-party marketing companies. To fulfill requested travel bookings, relevant details are disclosed strictly to:
                </p>
                <ul>
                  <li><strong>Airlines &amp; Global Distribution Systems (GDS):</strong> For ticketing and seat confirmation.</li>
                  <li><strong>Hotels &amp; Ground Operators:</strong> For room reservation and airport transfer vouchers.</li>
                  <li><strong>Embassies &amp; Visa Authorities:</strong> For visa processing, appointment booking, and regulatory travel compliance (e.g., Saudi Nusuk / Ministry of Hajj &amp; Umrah).</li>
                </ul>

                <h3>4. Data Security &amp; Retention</h3>
                <p>
                  We implement robust technical and administrative security measures to protect your personal data against unauthorized access, alteration, or disclosure. Inquiry records are retained only for as long as necessary to complete your travel service, satisfy legal or taxation obligations, and handle customer service follow-ups.
                </p>

                <h3>5. Contacting Us About Your Data</h3>
                <p>
                  If you have questions about this Privacy Policy or wish to review, update, or request deletion of your inquiry details, please contact our data desk:
                </p>
                <div className="doc-contact-snippet">
                  <strong>OPEN TRIP (PVT.) LTD. — Data Protection Desk</strong>
                  <span>Email: <a href="mailto:Info@opentrip.pk">Info@opentrip.pk</a></span>
                  <span>WhatsApp: +92 310 1816191 | Phone: 0317 8224101</span>
                  <span>Office: Suite no. 104 First Floor, 34-C Lane 06, Bukhari Commercial Phase 06, DHA 75500, Karachi</span>
                </div>
              </div>
            </article>
          )}

          {/* TAB 2: TERMS & CONDITIONS */}
          {activeTab === "terms" && (
            <article className="legal-document-card">
              <div className="doc-header">
                <span className="doc-meta-tag">TERMS OF SERVICE</span>
                <h2>Terms &amp; Conditions</h2>
                <p className="doc-subtitle">
                  OPEN TRIP (PVT.) LTD. · Effective 2026
                </p>
              </div>

              <div className="doc-body">
                {/* Official Starter Copy */}
                <div className="doc-intro-callout">
                  <p>
                    <strong>By using this website or submitting an inquiry, you acknowledge that website information is provided for general information and inquiry purposes.</strong> Quotations, bookings, supplier conditions, payment terms, cancellations, refunds, and service scope will be governed by the specific written quotation and booking confirmation provided to the customer. The final terms are governed under the laws of the Islamic Republic of Pakistan.
                  </p>
                </div>

                <h3>1. Nature of Website Information &amp; Estimates</h3>
                <p>
                  All package itineraries, destination highlights, estimated airfares, and sample tariffs displayed on this website are illustrative and intended to help you explore travel possibilities. Final package rates, flight seat classes, hotel room categories, and seasonal surcharges are confirmed only upon formal written quotation and booking confirmation.
                </p>

                <h3>2. Quotations &amp; Booking Confirmation</h3>
                <p>
                  A quotation provided by OPEN TRIP constitutes an offer based on current supplier availability. No contract exists between OPEN TRIP (PVT.) LTD. and the customer until:
                </p>
                <ul>
                  <li>The customer accepts the specific written quotation;</li>
                  <li>Agreed advance payment or deposit is received by OPEN TRIP; and</li>
                  <li>A written booking confirmation or invoice is issued by our operations desk.</li>
                </ul>

                <h3>3. Traveler Responsibilities</h3>
                <p>
                  It is the client’s sole responsibility to ensure that:
                </p>
                <ul>
                  <li>Passports are valid for at least 6 months beyond the intended return date.</li>
                  <li>All travelers possess necessary travel visas, health certificates, and transit permissions.</li>
                  <li>Personal details supplied (names matching passport exactly, birth dates) are 100% accurate. Name correction charges imposed by airlines or suppliers are the client's responsibility.</li>
                </ul>

                <h3>4. Third-Party Supplier Terms</h3>
                <p>
                  OPEN TRIP acts as an accredited travel management agency. All flights, hotel stays, cruises, and vehicle hires are subject to the individual conditions of carriage and service terms of the respective airlines, hotels, and transport operators.
                </p>

                <h3>5. Governing Law</h3>
                <p>
                  These Terms &amp; Conditions and any contractual dispute arising from our travel services are governed exclusively by the laws of Pakistan, subject to the jurisdiction of the competent courts in Karachi.
                </p>
              </div>
            </article>
          )}

          {/* TAB 3: CANCELLATION & REFUND POLICY (FULL 11 SECTIONS) */}
          {activeTab === "cancellation" && (
            <article className="legal-document-card">
              <div className="doc-header">
                <span className="doc-meta-tag">OFFICIAL CANCELLATION FRAMEWORK</span>
                <h2>Cancellation &amp; Refund Policy</h2>
                <p className="doc-subtitle">
                  OPEN TRIP (PVT.) LTD. · Updated 2026
                </p>
              </div>

              <div className="doc-body">
                <div className="doc-intro-callout">
                  <p>
                    <strong>At OPEN TRIP (PVT.) LTD., we understand that travel plans may change due to personal, professional, or unforeseen circumstances.</strong> Our Cancellation &amp; Refund Policy explains the terms and conditions applicable to cancellations, amendments, and refunds for our travel services.
                  </p>
                </div>

                <h3>1. Booking Cancellation</h3>
                <ul>
                  <li>All cancellation requests must be submitted to OPEN TRIP (PVT.) LTD. in writing through our official email (<a href="mailto:Info@opentrip.pk">Info@opentrip.pk</a>) or WhatsApp (+92 310 1816191).</li>
                  <li>Cancellation charges may apply depending on the service booked, supplier policies, airline rules, hotel terms, and the time of cancellation.</li>
                  <li>Any applicable cancellation charges will be communicated to the customer before processing the cancellation, where possible.</li>
                  <li>A booking will not be considered cancelled until written confirmation has been provided by our team.</li>
                </ul>

                <h3>2. Flight Booking Cancellation &amp; Refunds</h3>
                <ul>
                  <li>Flight cancellations and refunds are subject to the airline's fare rules and applicable conditions.</li>
                  <li>Some tickets may be partially refundable, while others may be non-refundable.</li>
                  <li>Airline penalties, service charges, and applicable taxes may be deducted from the refundable amount.</li>
                  <li>Refund processing time depends on the airline and payment provider.</li>
                  <li>OPEN TRIP service charges, if applicable, may be non-refundable.</li>
                </ul>

                <h3>3. Hotel Reservation Cancellation</h3>
                <ul>
                  <li>Hotel cancellation and refund conditions depend on the hotel's individual booking policy.</li>
                  <li>Non-refundable hotel bookings cannot be cancelled for a refund.</li>
                  <li>For refundable bookings, cancellation charges may apply according to the hotel's terms.</li>
                  <li>Any additional charges imposed by the hotel or supplier will be the customer's responsibility.</li>
                </ul>

                <h3>4. Visa Assistance Cancellation</h3>
                <ul>
                  <li>Visa application fees, embassy fees, appointment fees, and other third-party charges are generally non-refundable once paid or submitted.</li>
                  <li>OPEN TRIP consultancy or service charges may be non-refundable once the agreed service or documentation work has commenced.</li>
                  <li>Visa approval is solely at the discretion of the relevant embassy, consulate, or immigration authority.</li>
                  <li>OPEN TRIP does not guarantee visa approval and is not responsible for decisions made by immigration authorities.</li>
                </ul>

                <h3>5. Umrah Packages &amp; Tour Packages</h3>
                <ul>
                  <li>Cancellation and refund requests for Umrah and tour packages are subject to the terms of airlines, hotels, transport providers, visa authorities, and other suppliers.</li>
                  <li>Advance payments or deposits may be non-refundable where suppliers have already received or committed the payment.</li>
                  <li>Any applicable cancellation penalties, administrative charges, or supplier deductions will be deducted from the refundable amount.</li>
                  <li>Customers are advised to review the package-specific cancellation terms before confirming their booking.</li>
                </ul>

                <h3>6. Refund Processing</h3>
                <ul>
                  <li>Approved refunds will be processed through the original payment method wherever possible.</li>
                  <li>Refund amounts will be calculated after deducting applicable supplier penalties, non-refundable charges, and service fees.</li>
                  <li>The refund timeline depends on the relevant airline, hotel, supplier, or payment provider.</li>
                  <li>OPEN TRIP will keep customers informed about the refund process.</li>
                </ul>

                <h3>7. Changes &amp; Amendments</h3>
                <ul>
                  <li>Changes to travel dates, passenger details, destinations, hotels, or other booking information are subject to availability and supplier approval.</li>
                  <li>Amendment fees and fare differences may apply.</li>
                  <li>Certain bookings may not permit changes or amendments.</li>
                </ul>

                <h3>8. No-Show Policy</h3>
                <p>
                  If a customer fails to arrive for a confirmed flight, hotel reservation, appointment, or scheduled travel service without prior cancellation, the booking may be treated as a no-show. Refunds or changes will be subject to the relevant supplier's rules.
                </p>

                <h3>9. Exceptional Circumstances</h3>
                <p>
                  In situations involving flight disruptions, government restrictions, natural disasters, or other unforeseen events, refunds and amendments will be handled according to the applicable supplier policies and relevant regulations.
                </p>

                <h3>10. Contact Us</h3>
                <p>
                  For cancellation requests, refund inquiries, or further assistance, please contact:
                </p>
                <div className="doc-contact-snippet">
                  <strong>OPEN TRIP (PVT.) LTD.</strong>
                  <span>● <strong>Email:</strong> <a href="mailto:Info@opentrip.pk">Info@opentrip.pk</a></span>
                  <span>● <strong>Phone:</strong> 0317 8224101 | 0317 8224102 | 0317 8224103 | 0317 8224104</span>
                  <span>● <strong>WhatsApp:</strong> +92 310 1816191 | +92 301 0089009</span>
                  <span>● <strong>Office Address:</strong> Suite no. 104 First Floor, 34-C Lane 06, Bukhari Commercial Phase 06, DHA 75500, Karachi</span>
                  <span>● <strong>Business Hours:</strong> 10 AM - 07 PM (Six Days a Week)</span>
                </div>

                <h3>11. Policy Updates</h3>
                <p>
                  OPEN TRIP (PVT.) LTD. reserves the right to update or modify this policy when necessary. Any updated version will be published on our official website.
                </p>
                <p>
                  <em>Last Updated: November 2026</em>
                </p>

                {/* Important Final Disclaimer Note */}
                <div className="doc-important-box">
                  <div className="important-badge">
                    <Icon name="info" size={18} />
                    <span>Important Note</span>
                  </div>
                  <p>
                    The cancellation and refund conditions of the airline, hotel, visa authority, or other service provider may take precedence over this general policy. Customers should review the specific terms of their booking before making payment.
                  </p>
                </div>
              </div>
            </article>
          )}

          {/* Quick Consultation CTA */}
          <div className="legal-bottom-cta">
            <div>
              <h3>Have a Question About Our Terms or a Booking?</h3>
              <p>Speak directly with our Karachi customer service and compliance team.</p>
            </div>
            <div className="legal-cta-btns">
              <button
                type="button"
                className="button button--primary"
                onClick={() => nav?.navigate("contact")}
              >
                Contact Legal Desk
              </button>
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--outline legal-wa-btn"
              >
                <Icon name="whatsapp" size={16} /> <span>WhatsApp Support</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

