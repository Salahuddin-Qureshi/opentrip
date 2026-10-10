import SectionHeading from "../common/SectionHeading";
import ArrowLink from "../common/ArrowLink";
import ExperienceCard from "../cards/ExperienceCard";
import { experiences } from "../../data/home";
export default function ExperiencesSection({ onSelect }) {
  return (
    <section className="page-section container" id="experiences">
      <SectionHeading
        eyebrow="Travel experiences"
        title="Made for the way you wander."
      >
        <ArrowLink onClick={() => onSelect("All")}>
          Explore All Experiences
        </ArrowLink>
      </SectionHeading>
      <div className="experiences-grid">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.name}
            experience={experience}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
