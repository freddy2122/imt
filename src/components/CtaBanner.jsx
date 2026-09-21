import "./CtaBanner.css";

const cards = [
  { title: "A minha Carta de Condução", href: "https://aminhacartadeconducao.imt-ip.pt" },
  { title: "Formulários", href: "https://www.imt-ip.pt/formularios/" },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
      <rect width="80" height="80" fill="#0053CC" />
      <path d="M40 24V56" stroke="white" strokeWidth="4" />
      <path d="M56 40L24 40" stroke="white" strokeWidth="4" />
    </svg>
  );
}

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__inner">
        {cards.map((card) => (
          <a key={card.title} href={card.href} className="cta-banner__card">
            <h3>{card.title}</h3>
            <PlusIcon />
          </a>
        ))}
      </div>
    </section>
  );
}
