import Icon from "./Icon";
export default function ArrowLink({ children, href, onClick }) {
  const content = (
    <>
      {children}
      <Icon size={16} />
    </>
  );
  return href ? (
    <a className="arrow-link" href={href}>
      {content}
    </a>
  ) : (
    <button className="arrow-link" onClick={onClick}>
      {content}
    </button>
  );
}
