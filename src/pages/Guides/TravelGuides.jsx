import { useMemo, useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import { GUIDES, GUIDE_CATEGORIES, EDITORIAL_TEAM } from "../../data/guides";
import "../Services/Services.css";
import "./TravelGuides.css";

const categoryLabel = (id) =>
  GUIDE_CATEGORIES.find((c) => c.id === id)?.label || id;

const categoryIcon = (id) =>
  GUIDE_CATEGORIES.find((c) => c.id === id)?.icon || "book";

function EditorialNote() {
  return (
    <div className="service-disclaimer-box">
      <div className="box-icon" style={{ color: "var(--deep-blue, #022f82)" }}>
        <Icon name="info" size={22} />
      </div>
      <div>
        <h4 className="box-title">Editorial Note</h4>
        <p className="box-text">
          Visa and entry information can change. Our guides are dated, linked to
          official sources where relevant, and reviewed regularly. The information
          shared here is general in nature and is not legal or immigration advice.
          Please verify current requirements with the relevant official authority
          before you travel.
        </p>
      </div>
    </div>
  );
}

export default function TravelGuidesPage() {
  const [category, setCategory] = useState("All");
  const [activeId, setActiveId] = useState(null);
  const [mobileIdx, setMobileIdx] = useState(0);
  const [dialog, setDialog] = useState(null);
  const nav = useNavigation();

  const plan = (trip = null) => setDialog({ type: "trip", trip });
  const close = () => setDialog(null);

  const goTo = (page) => {
    if (nav) nav.navigate(page);
    else window.location.hash = page;
  };

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const openArticle = (id) => {
    setActiveId(id);
    scrollTop();
  };

  const backToList = () => {
    setActiveId(null);
    scrollTop();
  };

  const changeCategory = (id) => {
    setCategory(id);
    setMobileIdx(0);
    setActiveId(null);
  };

  const filtered = useMemo(
    () => (category === "All" ? GUIDES : GUIDES.filter((g) => g.category === category)),
    [category]
  );

  const article = activeId ? GUIDES.find((g) => g.id === activeId) : null;

  // On "All": first guide is featured, rest go into the grid
  const featured = category === "All" ? filtered[0] : null;
  const gridItems = category === "All" ? filtered.slice(1) : filtered;
  const slotsToFill = (3 - (gridItems.length % 3)) % 3;

  const count = filtered.length;
  const safeIdx = count > 0 ? Math.min(mobileIdx, count - 1) : 0;

  /* ---------------- Cards ---------------- */
  const renderCard = (g) => (
    <article key={g.id} className="guide-card" onClick={() => openArticle(g.id)}>
      <div className="guide-card-media">
        <img src={g.image} alt={g.title} loading="lazy" />
        <div className="guide-card-shade" />
        <span className="guide-card-cat">
          <Icon name={categoryIcon(g.category)} size={11} /> {categoryLabel(g.category)}
        </span>
      </div>
      <div className="guide-card-body">
        <div className="guide-meta">
          <span><Icon name="calendar" size={12} /> Updated {g.updated}</span>
          <span><Icon name="clock" size={12} /> {g.readTime}</span>
        </div>
        <h3>{g.title}</h3>
        <p>{g.excerpt}</p>
        <div className="guide-card-foot">
          <span className="guide-author">
            <Icon name="user" size={12} /> {EDITORIAL_TEAM}
          </span>
          <span className="guide-read-link">
            Read Guide <Icon name="arrow" size={13} />
          </span>
        </div>
      </div>
    </article>
  );

  const renderFiller = (variant, key) =>
    variant === "ask" ? (
      <article key={key} className="guide-card guide-card--filler">
        <div className="guide-filler-icon"><Icon name="sparkles" size={24} /></div>
        <span className="guide-filler-eyebrow">Have a travel question?</span>
        <h3>Ask Our Travel Team</h3>
        <p>
          Can't find the information you need? Share your destination and travel
          dates and our team will guide you to the relevant service.
        </p>
        <button
          type="button"
          className="guide-filler-btn"
          onClick={() => plan({ type: "Travel Guide Question" })}
        >
          <span>Talk to Us</span>
          <Icon name="arrow" size={13} />
        </button>
      </article>
    ) : (
      <article key={key} className="guide-card guide-card--filler guide-card--filler-dark">
        <div className="guide-filler-icon"><Icon name="book" size={24} /></div>
        <span className="guide-filler-eyebrow">More guides coming soon</span>
        <h3>Explore Other Topics</h3>
        <p>
          Browse checklists, Umrah planning tips, hotel and flight advice, and
          destination guides from our editorial team.
        </p>
        <button
          type="button"
          className="guide-filler-btn"
          onClick={() => changeCategory("All")}
        >
          <span>View All Guides</span>
          <Icon name="arrow" size={13} />
        </button>
      </article>
    );

  /* ---------------- Article detail view ---------------- */
  if (article) {
    const related = GUIDES.filter((g) => g.id !== article.id)
      .sort((a, b) => (a.category === article.category ? -1 : b.category === article.category ? 1 : 0))
      .slice(0, 3);

    return (
      <div className="services-page travel-guides-page">
        <section className="hero hero--service" aria-labelledby="guide-title">
          <img
            className="hero-image"
            src={article.image}
            alt={article.title}
            fetchPriority="high"
            style={{ objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div className="hero-shade" />
          <Header onPlan={() => plan({ type: "Travel Guide Question" })} />
          <div className="hero-body container">
            <div className="hero-copy">
              <p className="eyebrow">
                Travel Guides <span>·</span> {categoryLabel(article.category)}
              </p>
              <h1 id="guide-title" className="guide-article-h1">{article.title}</h1>
              <div className="guide-hero-meta">
                <span><Icon name="user" size={14} /> {EDITORIAL_TEAM}</span>
                <span><Icon name="calendar" size={14} /> Published {article.published}</span>
                <span><Icon name="check" size={14} /> Updated {article.updated}</span>
                <span><Icon name="clock" size={14} /> {article.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="services-nav-searchwrap container">
          <div className="services-floating-navbar">
            <button type="button" className="services-nav-pill" onClick={backToList}>
              <Icon name="chevronLeft" size={14} /> <span>All Guides</span>
            </button>
            {GUIDE_CATEGORIES.filter((c) => c.id !== "All").map((c) => (
              <button
                key={c.id}
                type="button"
                className={`services-nav-pill ${article.category === c.id ? "active" : ""}`}
                onClick={() => { changeCategory(c.id); scrollTop(); }}
              >
                <Icon name={c.icon} size={14} /> <span>{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        <main className="service-content-section">
          <div className="container guide-article-layout">
            <article className="guide-article">
              <p className="guide-article-intro">{article.intro}</p>

              {article.sections.map((s) => (
                <section key={s.heading} className="guide-article-section">
                  <h2>{s.heading}</h2>
                  {s.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                  {s.bullets && (
                    <ul className="service-checklist guide-article-list">
                      {s.bullets.map((b) => (
                        <li key={b}>
                          <span className="checklist-bullet">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {article.references.length > 0 && (
                <div className="guide-references">
                  <h3><Icon name="file" size={18} /> Official References</h3>
                  <ul>
                    {article.references.map((r) => (
                      <li key={r.url}>
                        <a href={r.url} target="_blank" rel="noopener noreferrer">
                          {r.label} <Icon name="diagonal" size={12} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <EditorialNote />
            </article>

            <aside className="guide-sidebar">
              <div className="guide-side-card guide-side-card--cta">
                <span className="guide-filler-eyebrow">Need help with this?</span>
                <h4>Speak with Our Team</h4>
                <p>Share your travel details and we will guide you through the next steps.</p>
                <button type="button" className="cta-btn-main" onClick={() => goTo(article.cta.page)}>
                  <span>{article.cta.label}</span>
                  <Icon name="arrow" size={14} />
                </button>
                <a
                  href="https://wa.me/923101816191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn-whatsapp"
                >
                  <Icon name="whatsapp" size={16} /> <span>WhatsApp Us</span>
                </a>
              </div>

              <div className="guide-side-card">
                <h4 className="guide-side-title">About This Guide</h4>
                <ul className="guide-side-facts">
                  <li><Icon name="user" size={14} /> <span>Written by <strong>{EDITORIAL_TEAM}</strong></span></li>
                  <li><Icon name="calendar" size={14} /> <span>Published <strong>{article.published}</strong></span></li>
                  <li><Icon name="check" size={14} /> <span>Last reviewed <strong>{article.updated}</strong></span></li>
                  <li><Icon name="book" size={14} /> <span>Category <strong>{categoryLabel(article.category)}</strong></span></li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="container">
            <div className="guide-related">
              <div className="guide-section-head">
                <span className="guide-eyebrow">Keep Reading</span>
                <h2>Related Articles</h2>
              </div>
              <div className="guide-grid">{related.map(renderCard)}</div>
            </div>

            <div className="service-cta-banner">
              <div className="cta-banner-text">
                <h3>Ready to Plan Your Journey?</h3>
                <p>Tell us about your travel plans and our team will guide you to the right service.</p>
              </div>
              <div className="cta-banner-buttons">
                <button type="button" className="cta-btn-main" onClick={() => goTo(article.cta.page)}>
                  <span>{article.cta.label}</span>
                  <Icon name="arrow" size={15} />
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />

        {dialog?.type === "trip" && (
          <TripDialog trip={dialog.trip} onClose={close} />
        )}
      </div>
    );
  }

  /* ---------------- Listing view ---------------- */
  return (
    <div className="services-page travel-guides-page">
      <section className="hero hero--service" aria-labelledby="guides-hero-title">
        <img
          className="hero-image"
          src="/images/hero-airplane-right.jpg"
          alt="OPEN TRIP Travel Guides & Flight Intelligence"
          fetchPriority="high"
          style={{ objectFit: "cover", objectPosition: "right 15%" }}
        />
        <div className="hero-shade" />
        <Header onPlan={() => plan({ type: "Travel Guide Question" })} />

        <div className="hero-body container">
          <div className="hero-copy">
            <p className="eyebrow">
              Travel Better <span>·</span> Helpful Information
            </p>
            <h1 id="guides-hero-title">
              Travel Guides
              <br />
              &amp; Updates
            </h1>
            <p className="hero-description">
              <strong>Travel Better with Helpful Information.</strong> Explore travel
              tips, destination guides, planning checklists, and general visa
              information to help you prepare for your next journey.
            </p>
            <div className="hero-actions">
              <Button
                onClick={() =>
                  document.getElementById("guides-catalog")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Browse Guides <Icon size={17} />
              </Button>
              <Button variant="outline" onClick={() => plan({ type: "Travel Guide Question" })}>
                Ask a Question{" "}
                <span className="play-icon">
                  <Icon name="play" size={17} />
                </span>
              </Button>
            </div>
          </div>

          <div className="hero-flight-card" aria-hidden="true">
            <div className="flight-card-route">
              <span className="flight-code">TIPS</span>
              <span className="flight-icon">✦</span>
              <span className="flight-code">GUIDES</span>
            </div>
            <span className="flight-card-sub">Reviewed Regularly</span>
          </div>
        </div>
      </section>

      <div className="services-nav-searchwrap container" id="guides-catalog">
        <div className="services-floating-navbar">
          {GUIDE_CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`services-nav-pill ${category === c.id ? "active" : ""}`}
              onClick={() => changeCategory(c.id)}
            >
              <Icon name={c.icon} size={14} /> <span>{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="service-content-section">
        <div className="container">
          <div className="guide-section-head">
            <span className="guide-eyebrow">Suggested Articles</span>
            <h2>
              {category === "All" ? "Latest Travel Guides" : categoryLabel(category)}
            </h2>
            <p>Practical, dated, and regularly reviewed information from our editorial team.</p>
          </div>

          {/* Featured guide (desktop / tablet) */}
          {featured && (
            <article className="guide-featured" onClick={() => openArticle(featured.id)}>
              <div className="guide-featured-media">
                <img src={featured.image} alt={featured.title} loading="lazy" />
                <span className="guide-featured-badge">Featured Guide</span>
              </div>
              <div className="guide-featured-body">
                <span className="guide-card-cat guide-card-cat--inline">
                  <Icon name={categoryIcon(featured.category)} size={11} /> {categoryLabel(featured.category)}
                </span>
                <h3>{featured.title}</h3>
                <p>{featured.intro}</p>
                <div className="guide-meta">
                  <span><Icon name="user" size={12} /> {EDITORIAL_TEAM}</span>
                  <span><Icon name="calendar" size={12} /> Updated {featured.updated}</span>
                  <span><Icon name="clock" size={12} /> {featured.readTime}</span>
                </div>
                <span className="guide-featured-btn">
                  Read Full Guide <Icon name="arrow" size={14} />
                </span>
              </div>
            </article>
          )}

          {/* Grid (desktop / tablet) */}
          <div className="guide-grid guide-grid--desktop">
            {gridItems.map(renderCard)}
            {slotsToFill >= 1 && renderFiller("ask", "filler-ask")}
            {slotsToFill >= 2 && renderFiller("topics", "filler-topics")}
          </div>

          {/* Mobile: one guide at a time */}
          <div className="guide-mobile">
            <div className="guide-mobile-controls">
              <button
                type="button"
                className="guide-mobile-btn"
                onClick={() => setMobileIdx((p) => (p - 1 + count) % count)}
                aria-label="Previous guide"
              >
                <Icon name="chevronLeft" size={18} />
              </button>
              <div className="guide-mobile-indicators">
                <span className="guide-mobile-counter">
                  {String(safeIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                <div className="guide-mobile-dots">
                  {filtered.map((g, i) => (
                    <button
                      key={g.id}
                      type="button"
                      className={`guide-dot ${i === safeIdx ? "active" : ""}`}
                      onClick={() => setMobileIdx(i)}
                      aria-label={`Go to guide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="guide-mobile-btn"
                onClick={() => setMobileIdx((p) => (p + 1) % count)}
                aria-label="Next guide"
              >
                <Icon name="chevronRight" size={18} />
              </button>
            </div>
            <div className="guide-mobile-stage">
              {filtered[safeIdx] && renderCard(filtered[safeIdx])}
            </div>
          </div>

          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <h3>Planning a Trip Soon?</h3>
              <p>
                Share your destination, dates, and requirements — our team will guide
                you to the relevant service.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <button type="button" className="cta-btn-main" onClick={() => goTo("services")}>
                <span>Explore Our Services</span>
                <Icon name="arrow" size={15} />
              </button>
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-whatsapp"
              >
                <Icon name="whatsapp" size={16} /> <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <EditorialNote />
        </div>
      </main>

      <Footer />

      {dialog?.type === "trip" && (
        <TripDialog trip={dialog.trip} onClose={close} />
      )}
    </div>
  );
}

