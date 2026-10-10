import Icon from "../common/Icon";
export default function ExperienceCard({ experience, onSelect }) {
  return (
    <button
      className="experience-card"
      onClick={() => onSelect(experience.category)}
    >
      <img src={experience.image} alt="" loading="lazy" />
      <strong>{experience.name}</strong>
      <Icon size={17} />
    </button>
  );
}
