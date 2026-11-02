import Icon from "../common/Icon";
import Button from "../common/Button";

export default function StorySection({ onReadStory }) {
  return (
    <section className="story-section" id="about">
      <div className="container story-container">
        <div className="story-split-grid">
          <div className="story-image-side">
            <div className="story-image-wrap">
              <img
                src="/images/mountains.jpg"
                alt="Sweeping alpine mountain landscape"
                loading="lazy"
              />
              <div className="story-experience-badge">
                <strong>10+</strong>
                <span>Years of Bespoke Travel Curation</span>
              </div>
            </div>
          </div>

          <div className="story-text-side">
            <p className="section-eyebrow">About OpenTrip</p>
            <h2>More Than a Trip, It&apos;s a Story.</h2>
            <p className="story-lead">
              At OpenTrip, we believe travel is never just a destination or a checklist of sights.
              It is a collection of deeply personal moments that inspire, transform, and stay with you for a lifetime.
            </p>
            <p className="story-body">
              Based in Karachi with direct partnerships across 4 continents, our team of passionate
              travel designers crafts seamless journeys—from peaceful Umrah pilgrimages and alpine
              rail odysseys to tropical private islands and northern Pakistan adventures.
            </p>

            <div className="story-stats-inline">
              <div className="story-stat-item">
                <strong>15,000+</strong>
                <span>Happy Travelers</span>
              </div>
              <div className="story-stat-item">
                <strong>98.4%</strong>
                <span>Visa Success</span>
              </div>
              <div className="story-stat-item">
                <strong>25+</strong>
                <span>Global Hubs</span>
              </div>
            </div>

            <div className="story-actions-row">
              <Button onClick={onReadStory}>
                Read Our Story <Icon name="play" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
