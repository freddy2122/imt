import PageHero from "../components/PageHero";
import "./ArticlePage.css";

const cards = [
  {
    title: "Avaliações psicológicas da competência de psicólogos no exercício da sua profissão",
    href: "https://www.imt-ip.pt/condutores/obtencao/avaliacao-psicologica/avaliacoes-psicologicas-da-competencia-de-psicologos-no-exercicio-da-sua-profissao/",
    opacity: 0.3,
  },
  {
    title: "Avaliações psicológicas da competência do IMT",
    href: "https://www.imt-ip.pt/condutores/obtencao/avaliacao-psicologica/avaliacoes-psicologicas-da-competencia-do-imt/",
    opacity: 0.2,
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 25 17" width="25" height="17" fill="none">
      <path d="M15.6 16L24 8.5M24 8.5L15.6 1M24 8.5L0 8.5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function AvaliacaoPsicologicaPage() {
  return (
    <>
      <PageHero title="Avaliação Psicológica" />

      <section className="article">
        <div className="article__inner">
          <p>
            Relativamente à avaliação da aptidão psicológica, o novo RHLC introduziu novas regras, nomeadamente em matéria de competências para
            realização da avaliação psicológica dos candidatos a condutor e condutores dos Grupos 1 e 2, estabelecendo que a mesma é realizada por
            psicólogos no exercício da sua profissão e pelo IMT, ou por entidade por este designada.
          </p>
        </div>
      </section>

      <section className="cta-grid">
        <div className="cta-grid__inner" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
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
