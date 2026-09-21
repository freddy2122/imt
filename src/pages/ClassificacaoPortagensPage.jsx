import PageHero from "../components/PageHero";
import "./ArticlePage.css";

export default function ClassificacaoPortagensPage() {
  return (
    <>
      <PageHero title="Classificação em Portagens" />
      <section className="article">
        <div className="article__inner">
          <p>
            O Decreto-Lei n.º 71/2018, de 5 de setembro (alterado pelo Decreto-Lei n.º 120/2021, de 24 de dezembro), estabelece as condições em
            que certos veículos ligeiros de dois eixos — consoante peso bruto, altura e ausência de tração às quatro rodas permanente — pagam a
            tarifa de portagem da classe 1 ao utilizar o sistema de pagamento automático, desde que cumpram a Norma EURO 6.
          </p>
          <p>
            Compete ao IMT elaborar as listagens de marcas e modelos de veículos cujas características cumprem os requisitos técnicos relevantes.
            A Deliberação n.º 1406-A/2018 regulamenta os procedimentos de verificação de conformidade.
          </p>
          <p>
            Com base na informação dos fabricantes, o IMT elabora periodicamente uma lista de modelos conformes e não conformes, enviada à
            entidade gestora dos sistemas eletrónicos de cobrança de portagens. Quando essa informação não estiver disponível, o utilizador pode
            requerer uma inspeção extraordinária de identificação num centro de inspeção técnica de veículos da categoria B; o certificado emitido
            deve ser apresentado à concessionária das autoestradas.
          </p>

          <h3>Consulte a lista de veículos (atualizada a 18-09-2026)</h3>
          <ul>
            <li>
              <a href="https://www.imt-ip.pt/wp-content/uploads/2026/09/LISTA-DE-MONOVOLUMES-399-1.pdf" target="_blank" rel="noreferrer">
                Lista 1
              </a>
            </li>
            <li>
              <a href="https://www.imt-ip.pt/wp-content/uploads/2026/09/LISTA-DE-MONOVOLUMES-399-2.pdf" target="_blank" rel="noreferrer">
                Lista 2
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
