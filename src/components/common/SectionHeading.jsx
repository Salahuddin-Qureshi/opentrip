export default function SectionHeading({
  eyebrow,
  title,
  children,
  centered = false,
}) {
  return (
    <div
      className={`section-heading${centered ? " section-heading--centered" : ""}`}
    >
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-heading-aside">{children}</div>}
    </div>
  );
}
