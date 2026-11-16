import Icon from "../common/Icon";

export default function ExperienceCard({ experience, onSelect }) {
  return (
    <article
      className="experience-card experience-card--rounded"
      onClick={() => onSelect(experience.category)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(experience.category);
        }
      }}
      aria-label={`Explore ${experience.name} packages`}
    >
      <div className="experience-top-badge-row">
        <span className="experience-tag-pill">
          {experience.tag || experience.category}
        </span>
      </div>

      {/* Rounded Circular Photo with Floating Action Circle */}
      <div className="experience-thumb-wrap">
        <img
          src={experience.image}
          alt={experience.name}
          className="experience-round-img"
          loading="lazy"
        />
        <div className="experience-action-circle">
          <Icon name="arrow" size={15} />
        </div>
      </div>

      {/* Card Body */}
      <div className="experience-card-body">
        <h3 className="experience-card-title">{experience.name}</h3>
        {experience.subtitle && (
          <p className="experience-card-subtitle">{experience.subtitle}</p>
        )}
        <div className="experience-card-footer">
          <span className="experience-cta-text">View Packages</span>
          <span className="experience-cta-arrow">→</span>
        </div>
      </div>
    </article>
  );
}
