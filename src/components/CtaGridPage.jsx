import PageHero from "./PageHero";
import "./CtaGridPage.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 25 17" width="25" height="17" fill="none">
      <path d="M15.6 16L24 8.5M24 8.5L15.6 1M24 8.5L0 8.5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
      <rect width="80" height="80" fill="#0053CC" />
      <path d="M40 24V56" stroke="white" strokeWidth="4" />
      <path d="M56 40L24 40" stroke="white" strokeWidth="4" />
    </svg>
  );
}

/**
 * Generic "title-desdobramento + call-to-actions" landing page, matching the
 * pattern used across the real site's hub pages (Comunicação, Estatísticas,
 * Rodoviário, ...): a navy hero with a title, then a grid of tinted cards
 * linking to sub-sections, optionally followed by a single highlighted CTA.
 */
export default function CtaGridPage({ title, cards, tint = "white", extraCta }) {
  const tintBase = tint === "white" ? "255,255,255" : "0,83,204";

  return (
    <>
      <PageHero title={title} />

      <section className="cta-grid">
        <div className="cta-grid__inner">
          {cards.map((card) => (
            <a key={card.title} href={card.href} className="cta-grid__card" style={{ background: `rgba(${tintBase},${card.opacity})` }}>
              <h3>{card.title}</h3>
              <span className="cta-grid__arrow">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </section>

      {extraCta && (
        <section className="cta-grid__extra">
          <a className="cta-grid__extra-card" href={extraCta.href}>
            <h3>{extraCta.title}</h3>
            <PlusIcon />
          </a>
        </section>
      )}
    </>
  );
}
