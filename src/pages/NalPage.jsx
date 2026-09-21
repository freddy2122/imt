import PageHero from "../components/PageHero";
import "./NalPage.css";

const BASE = "https://www.imt-ip.pt";

const FASES = [
  { name: "Fase 1", title: "Decisão da Localização e Preparação", range: "2024–2025" },
  { name: "Fase 2", title: "Candidatura ao NAL, Estudos e Trabalhos Preparatórios", range: "2025–2028" },
  { name: "Fase 3", title: "Aprovação da Candidatura e Negociação", range: "2028–2029" },
  { name: "Fase 4", title: "Construção", range: "2029–2033" },
  { name: "Fase 5", title: "Trabalhos Preparatórios", range: "2034" },
];

const MARCOS = [
  { date: "11 MAR 2024", title: "Relatório Final da CTI", href: "https://www.aeroparticipa.pt/" },
  { date: "17 JAN 2025", title: "Início do Período de Exercício da Opção" },
  {
    date: "17 JUL 2025",
    title: "Relatório das Consultas (Stakeholder Consultation Report)",
    href: `${BASE}/wp-content/uploads/2025/10/250716_NAL_Stakeholders-Consultation-1.pdf`,
  },
  { date: "17 JAN 2026", title: "Relatório do Local Selecionado e Estudo de Impacte Ambiental – Fase 1" },
  { date: "30 JUN 2026", title: "Estudo de Reestruturação do Espaço Aéreo da NAV Portugal" },
  { date: "17 JUL 2026", title: "Relatório Técnico", href: `${BASE}/wp-content/uploads/2026/07/NAL-EP-ANA-ENG-GEN-Z-REL-0001-AA.pdf` },
  { date: "17 JAN 2027", title: "Relatório Financeiro" },
  { date: "17 JAN 2028", title: "Candidatura Completa ao NAL" },
  { date: "17 ABR 2028", title: "Decisão sobre Aprovação Provisória do Concedente" },
  { date: "17 ABR 2029", title: "Negociação dos Contratos do NAL (prazo-limite)" },
  { date: "2029", title: "Início da Construção" },
  { date: "2029", title: "Final da Desminagem do Campo de Tiro" },
  { date: "A partir de 2035", title: "Abertura do NAL" },
];

const ORAT = [
  {
    date: "17 JAN 2025",
    title: "Relatório Inicial (High Level Assumption Report)",
    href: `${BASE}/wp-content/uploads/2025/03/Relatorio-Inicial-HLAR.pdf`,
  },
  { date: "17 JUL 2025", title: "Estudos para a Localização do Novo Campo de Tiro" },
  { date: "9 DEZ 2025", title: "Relatório das Acessibilidades", href: `${BASE}/wp-content/uploads/2025/12/Sumario-Executivo.pdf` },
  { date: "20 FEV 2026", title: "Regime de Medidas Preventivas para o NAL" },
  { date: "31 JUL 2026", title: "Submissão do Estudo de Impacte Ambiental à APA" },
  { date: "2028", title: "Início da Desminagem do Campo de Tiro" },
];

const LEGISLACAO = [
  { label: "RCM Nº 66/2024", date: "27 MAI 2024", href: `${BASE}/wp-content/uploads/2026/07/RCM-no-66-2024.pdf` },
  { label: "RCM Nº 68/2024", date: "27 MAI 2024", href: `${BASE}/wp-content/uploads/2026/07/RCM-no-68-2024.pdf` },
  { label: "Ofício Nº 1183/2024", date: "11 JUN 2024", href: `${BASE}/wp-content/uploads/2026/07/oficio-1183.2024.pdf` },
  { label: "Ofício Nº 288/2025", date: "16 JAN 2025", href: `${BASE}/wp-content/uploads/2025/03/Resposta-Concedente.pdf` },
  { label: "RCM Nº 1-D/2025", date: "17 JAN 2025", href: `${BASE}/wp-content/uploads/2026/07/RCM-no-1-D-2025.pdf` },
  { label: "RCM Nº 111/2025", date: "17 JUL 2025", href: `${BASE}/wp-content/uploads/2026/07/RCM-no-111-2025.pdf` },
  { label: "Ofício Nº 1143/2025", date: "16 SET 2025", href: `${BASE}/wp-content/uploads/2025/10/Ofc_1143_2025_MEF_MIH-1.pdf` },
  { label: "Despacho N.º 15178/2025", date: "22 DEZ 2025", href: "https://diariodarepublica.pt/dr/detalhe/despacho/15178-2025-991953832" },
  { label: "RCM Nº 30/2026", date: "20 FEV 2026", href: `${BASE}/wp-content/uploads/2026/07/RCM-no-30-2026.pdf` },
  {
    label: "Ofício Nº 2036/2026",
    date: "4 MAR 2026",
    href: `${BASE}/wp-content/uploads/2026/03/Of.-2036_2026-Candidatura-ao-NAL-Resposta-ao-Relatorio-do-Local-Selecionado-e-EIA.pdf`,
  },
  {
    label: "Ofício Nº 2722/2026",
    date: "25 MAR 2026",
    href: `${BASE}/wp-content/uploads/2026/04/Of.-2722_2026-Errata-Carta-n.o-2036_2026-Entrega-do-Relatorio-do-Local-Selecionado-e-Estudo-de-Impacte-Ambiental.pdf`,
  },
  { label: "RCM Nº 119/2026", date: "15 JUN 2026", href: `${BASE}/wp-content/uploads/2026/07/RCM-no-119-2026.pdf` },
  { label: "Despacho N.º 10018/2026", date: "11 AGO 2026", href: "https://diariodarepublica.pt/dr/detalhe/despacho/10018-2026-1155718875" },
];

const LINKS = [
  { title: "Aeroparticipa", href: `${BASE}/aeroparticipa/`, opacity: 0.3 },
  { title: "Candidatura ao NAL", href: `${BASE}/candidatura-ao-nal/`, opacity: 0.2 },
  { title: "Acessibilidades", href: `${BASE}/acessibilidades-2/`, opacity: 0.1 },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 25 17" width="25" height="17" fill="none">
      <path d="M15.6 16L24 8.5M24 8.5L15.6 1M24 8.5L0 8.5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function Timeline({ items }) {
  return (
    <ol className="nal-timeline">
      {items.map((item, i) => (
        <li key={i}>
          <span className="nal-timeline__date">{item.date}</span>
          <span className="nal-timeline__dot" />
          {item.href ? (
            <a className="nal-timeline__title" href={item.href} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          ) : (
            <span className="nal-timeline__title">{item.title}</span>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function NalPage() {
  return (
    <>
      <PageHero title="NAL – Novo Aeroporto de Lisboa" />

      <section className="nal-intro">
        <div className="nal-intro__inner">
          <div>
            <h1>Novo Aeroporto de Lisboa (NAL)</h1>
            <p className="nal-intro__sub">Timeline do Projeto</p>
          </div>
          <img
            className="nal-intro__logo"
            src="https://www.imt-ip.pt/wp-content/uploads/2026/06/EGAPA-cores-horizontal-1024x114.png"
            alt="EGAPA — Estrutura de Gestão e Acompanhamento dos Projetos de Aeroportos"
          />
        </div>
      </section>

      <section className="nal-fases">
        <div className="nal-fases__inner">
          {FASES.map((f) => (
            <div key={f.name} className="nal-fases__card">
              <span className="nal-fases__name">{f.name}</span>
              <h4>{f.title}</h4>
              <span className="nal-fases__range">{f.range}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="nal-section">
        <div className="nal-section__inner">
          <h3>Marcos do Projeto</h3>
          <Timeline items={MARCOS} />
        </div>
      </section>

      <section className="nal-section nal-section--alt">
        <div className="nal-section__inner">
          <h3>ORAT — Operational Readiness and Airport Transfer</h3>
          <Timeline items={ORAT} />
        </div>
      </section>

      <section className="nal-section">
        <div className="nal-section__inner">
          <h3>Iniciativas Legislativas e Ações do Governo</h3>
          <ul className="nal-legis">
            {LEGISLACAO.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
                <span>{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nal-grid">
        <div className="nal-grid__inner">
          {LINKS.map((card) => (
            <a key={card.title} href={card.href} className="nal-grid__card" style={{ background: `rgba(255,255,255,${card.opacity})` }}>
              <h3>{card.title}</h3>
              <span className="nal-grid__arrow">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
