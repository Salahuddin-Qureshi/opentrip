import Icon from "../common/Icon";
export default function StorySection({ onReadStory }) {
  return (
    <section className="story-section" id="about">
      <img
        src="/images/mountains.jpg"
        alt="A sweeping mountain landscape"
        loading="lazy"
      />
      <div className="container story-inner">
        <div>
          <p className="section-eyebrow">Our story</p>
          <h2>
            Don’t just visit.
            <br />
            Feel the world.
          </h2>
          <p>
            At OpenTrip, we believe travel is more than a destination. It’s a
            collection of moments that change you. We craft journeys that
            inspire, connect and create memories for a lifetime.
          </p>
          <button className="story-link" onClick={onReadStory}>
            <span>
              <Icon name="play" size={18} />
            </span>
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
}
