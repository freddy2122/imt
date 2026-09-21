import PageHero from "../components/PageHero";
import "./ArticlePage.css";

const cards = [
  { title: "Licença de Condução de Ciclomotores", href: "https://www.imt-ip.pt/condutores/informacoes-gerais/licenca-de-conducao-de-ciclomotores/", opacity: 0.3 },
  { title: "Motociclos", href: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/cartas-de-conducao-de-motociclos/", opacity: 0.2 },
  { title: "Veículos Ligeiros", href: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/cartas-de-conducao-de-automoveis-ligeiros-e-quadriciclos/", opacity: 0.1 },
  { title: "Veículos Ligeiros com Reboque", href: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/cartas-de-conducao-de-automoveis-ligeiros-com-reboque/", opacity: 0.2 },
  { title: "Veículos Pesados de Mercadorias com e sem Reboque", href: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/cartas-de-conducao-para-automoveis-pesados-de-mercadorias-com-e-sem-reboque/", opacity: 0.3 },
  { title: "Veículos Pesados de Passageiros com e sem Reboque", href: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/cartas-de-conducao-para-automoveis-pesados-de-passageiros-com-e-sem-reboque/", opacity: 0.2 },
  { title: "Veículos Agrícolas", href: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/carta-de-conducao-veiculos-agricolas/", opacity: 0.1 },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 25 17" width="25" height="17" fill="none">
      <path d="M15.6 16L24 8.5M24 8.5L15.6 1M24 8.5L0 8.5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function QueroSerCondutorPage() {
  return (
    <>
      <PageHero title="Quero Ser Condutor" />

      <section className="article">
        <div className="article__inner">
          <p>O IMT é a entidade competente para a emissão das cartas de condução.</p>
          <p>
            Se é candidato a condutor, conheça os requisitos e documentos necessários à obtenção dos títulos de condução para as diferentes
            categorias de veículos.
          </p>
          <p>
            <strong>NOTA:</strong> Na sequência da implementação da medida SIMPLEX "Carta sobre Rodas", e no sentido de facilitar a sua
            operacionalização, são atualizados os modelos e os conteúdos do relatório de avaliação física e mental dos condutores e candidatos a
            condutores, do atestado médico a emitir após aquela avaliação, do relatório de avaliação psicológica e respetivo certificado da
            avaliação.
          </p>
          <p>
            Quanto ao atestado médico, necessário para a emissão e revalidação do título de condução, é emitido e transmitido eletronicamente
            entre a DGS e o IMT, a partir de 1 de abril de 2017, quer para os estabelecimentos prestadores de cuidados de saúde integrados no
            Serviço Nacional de Saúde, quer para os estabelecimentos prestadores de cuidados de saúde do setor privado e social.
          </p>
          <p>Consulte aqui os Modelos (atualizados em 14/02/2017):</p>
          <ul>
            <li>Anexo I – Relatório de Avaliação Física e Mental</li>
            <li>Atestado Médico Eletrónico (Modelo não disponível)</li>
            <li>Anexo III – Relatório da Avaliação Psicológica</li>
            <li>Anexo IV – Certificado de Avaliação Psicológica</li>
          </ul>
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
