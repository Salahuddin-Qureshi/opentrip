export default function ArticleCard({ article, onSelect }) {
  return (
    <article className="article-card">
      <button onClick={() => onSelect(article)}>
        <div className="article-image">
          <img src={article.image} alt="" loading="lazy" />
          <span>{article.category}</span>
        </div>
        <div className="article-copy">
          <h3>{article.title}</h3>
          <p>
            OpenTrip journal <span>·</span> {article.time}
          </p>
        </div>
      </button>
    </article>
  );
}
