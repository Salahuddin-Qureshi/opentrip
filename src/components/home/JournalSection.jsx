import SectionHeading from "../common/SectionHeading";
import ArticleCard from "../cards/ArticleCard";
import { articles } from "../../data/home";
export default function JournalSection({ onSelect }) {
  return (
    <section className="page-section container" id="journal">
      <SectionHeading
        eyebrow="Travel inspiration"
        title="Stories from around the world."
      />
      <div className="journal-grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
