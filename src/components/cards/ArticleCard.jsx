import Icon from "../common/Icon";

export default function ArticleCard({ article, onSelect }) {
  const preview = article.paragraphs?.[0] || "";

  return (
    <article className="article-card">
      <div className="article-image-wrap">
        <button
          type="button"
          className="article-image"
          onClick={() => onSelect(article)}
          aria-label={`Read ${article.title}`}
        >
          <img src={article.image} alt="" loading="lazy" />
          <span className="article-category-badge">{article.category}</span>
        </button>
      </div>

      <div className="article-copy">
        <div className="article-meta-row">
          <span>OpenTrip Journal</span>
          <span>·</span>
          <span>{article.time}</span>
        </div>

        <h3 className="article-title" onClick={() => onSelect(article)}>
          {article.title}
        </h3>

        <p className="article-preview">{preview}</p>

        <button
          type="button"
          className="article-read-btn"
          onClick={() => onSelect(article)}
        >
          <span>Read Article</span>
          <Icon name="arrow" size={15} />
        </button>
      </div>
    </article>
  );
}
