import "./PageHero.css";

export default function PageHero({ title, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__container">
        <h1 className="page-hero__title">{title}</h1>
      </div>

      <svg className="page-hero__deco" viewBox="0 0 266 198" preserveAspectRatio="xMaxYMin meet" aria-hidden="true">
        <rect x="0" y="0" width="266" height="198" fill="#0053CC" />
        <rect x="0" y="34.6" width="206.5" height="128.4" rx="64.2" ry="64.2" fill="#00D5A7" />
        <path d="M0 0H266V0C266 109.3 154.5 198 17 198H0V0Z" fill="#0C2B59" />
      </svg>

      {children}
    </section>
  );
}
