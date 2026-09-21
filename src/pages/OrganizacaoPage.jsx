import PageHero from "../components/PageHero";
import "./OrganizacaoPage.css";

const effectivesData = [
  { label: "Dirigentes Superiores", v2018: 2, v2024: 3 },
  { label: "Dirigentes Intermédios", v2018: 50, v2024: 53 },
  { label: "Técnicos Superiores", v2018: 274, v2024: 441 },
  { label: "Especialista de Sistemas e Tecnologias de Informação", v2018: 15, v2024: 21 },
  { label: "Assistentes Técnicos", v2018: 323, v2024: 306 },
  { label: "Técnico de Sistemas e Tecnologias de Informação", v2018: 22, v2024: 21 },
  { label: "Assistentes Operacionais", v2018: 16, v2024: 7 },
];

const MAX = 441;

export default function OrganizacaoPage() {
  return (
    <>
      <PageHero title="Organização" />

      <section className="organizacao">
        <div className="organizacao__inner">
          <h2>Evolução de Efetivos</h2>
          <div className="organizacao__legend">
            <span>
              <i className="organizacao__swatch organizacao__swatch--2018" /> 2018
            </span>
            <span>
              <i className="organizacao__swatch organizacao__swatch--2024" /> 2024
            </span>
          </div>

          <div className="organizacao__chart">
            {effectivesData.map((row) => (
              <div key={row.label} className="organizacao__group">
                <div className="organizacao__bars">
                  <div className="organizacao__bar organizacao__bar--2018" style={{ height: `${(row.v2018 / MAX) * 220}px` }}>
                    <span>{row.v2018}</span>
                  </div>
                  <div className="organizacao__bar organizacao__bar--2024" style={{ height: `${(row.v2024 / MAX) * 220}px` }}>
                    <span>{row.v2024}</span>
                  </div>
                </div>
                <p className="organizacao__label">{row.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
