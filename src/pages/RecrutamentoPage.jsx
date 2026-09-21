import PageHero from "../components/PageHero";
import "./ArticlePage.css";

const cards = [
  { title: "Procedimentos Concursais para Cargos Dirigentes", href: "https://www.imt-ip.pt/recursos-humanos/procedimentos-concursais-para-cargos-dirigentes/", opacity: 0.3 },
  { title: "Procedimentos Concursais", href: "https://www.imt-ip.pt/recursos-humanos/procedimentos-concursais/", opacity: 0.2 },
  { title: "Ofertas de Mobilidade", href: "https://www.imt-ip.pt/recursos-humanos/ofertas-de-mobilidade/", opacity: 0.1 },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 25 17" width="25" height="17" fill="none">
      <path d="M15.6 16L24 8.5M24 8.5L15.6 1M24 8.5L0 8.5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function RecrutamentoPage() {
  return (
    <>
      <PageHero title="Recrutamento" />

      <section className="article">
        <div className="article__inner">
          <p>
            O IMT é um Instituto que promove o acesso de forma simples e transparente nos processos de recrutamento, procura envolver os
            trabalhadores/as, através de uma estratégia de recrutamento clara, formação e acompanhamento, investindo no bem-estar de todos/as, nas
            condições de trabalho e na sua segurança.
          </p>
          <p>Promove a flexibilidade e a adoção de práticas inovadoras no setor público.</p>
          <p>Trabalhamos para um instituto, responsável, inovador e seguro.</p>
          <p>Explore as oportunidades profissionais em Aberto:</p>
        </div>
      </section>

      <section className="cta-grid">
        <div className="cta-grid__inner" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {cards.map((card) => (
            <a key={card.title} href={card.href} className="cta-grid__card" style={{ background: `rgba(255,255,255,${card.opacity})` }}>
              <h3>{card.title}</h3>
              <span className="cta-grid__arrow">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
