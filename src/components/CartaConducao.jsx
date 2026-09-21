import "./CartaConducao.css";

const cards = [
  {
    title: "Primeira Carta de Condução",
    href: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/primeira-carta-de-conducao/",
    opacity: 0.3,
  },
  {
    title: "Já tenho Carta de Condução",
    href: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/revalidacao-da-carta-de-conducao/",
    opacity: 0.2,
  },
  {
    title: "Tenho Carta de Condução Estrangeira",
    href: "https://www.imt-ip.pt/condutores/reconhecimento/troca-de-titulo-de-conducao-estrangeiro/",
    opacity: 0.1,
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 25 17" width="25" height="17" fill="none">
      <path d="M15.6 16L24 8.5M24 8.5L15.6 1M24 8.5L0 8.5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function CartaConducao() {
  return (
    <section className="carta">
      <div className="carta__inner">
        <h2 className="carta__heading">Carta de Condução</h2>
        <div className="carta__grid">
          {cards.map((card) => (
            <a key={card.title} href={card.href} className="carta__card" style={{ background: `rgba(0,83,204,${card.opacity})` }}>
              <h3>{card.title}</h3>
              <span className="carta__arrow">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
