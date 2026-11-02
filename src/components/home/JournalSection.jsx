import SectionHeading from "../common/SectionHeading";
import ArticleCard from "../cards/ArticleCard";
import { articles } from "../../data/home";

export default function JournalSection({ onSelect }) {
  return (
    <section className="page-section container" id="journal">
      <SectionHeading
        eyebrow="Travel Journal & Insights"
        title="Stories from Around the World."
      >
        <p>
          Expert travel guides, seasonal packing advice, cultural etiquettes,
          <br />
          and inspiration to fuel your next global journey.
        </p>
      </SectionHeading>
      <div className="journal-grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
