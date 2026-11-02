import Icon from "../common/Icon";

export default function ExperienceCard({ experience, onSelect }) {
  return (
    <button
      className="experience-card"
      onClick={() => onSelect(experience.category)}
      aria-label={`Explore ${experience.name}`}
    >
      <div className="experience-thumb-wrap">
        <img src={experience.image} alt="" loading="lazy" />
        <span className="experience-hover-icon">
          <Icon size={16} />
        </span>
      </div>
      <strong>{experience.name}</strong>
      {experience.subtitle && <small>{experience.subtitle}</small>}
    </button>
  );
}
