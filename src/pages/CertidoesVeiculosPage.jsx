import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import "./ArticlePage.css";

const accordionItems = [
  {
    q: "Certidão de homologação",
    a: "Requerimento dirigido ao Presidente do IMT, enviado por correio para a sede do Instituto ou entregue nos serviços do IMT, com identificação do requerente, indicando a pretensão, o número da homologação e o motivo do pedido. Taxa: 6 € por página.",
  },
  {
    q: "Certidão de características do veículo",
    a: "Requerimento dirigido ao Presidente do IMT, enviado ou entregue no serviço regional do IMT da área de residência, com identificação do requerente, a matrícula do veículo e o motivo do pedido. Taxa: 6 € por página.",
  },
  {
    q: "Certidão de inspeção",
    a: "Requerimento dirigido ao Presidente do IMT, enviado por correio para a sede do Instituto ou entregue nos serviços do IMT, com identificação do requerente, matrícula do veículo e motivo do pedido. Taxa: 30 €. Nota: lista apenas as inspeções realizadas nos centros do Continente; as das Regiões Autónomas devem ser pedidas às respetivas Direções Regionais dos Transportes.",
  },
];

export default function CertidoesVeiculosPage() {
  return (
    <>
      <PageHero title="Certidões de Veículos" />
      <section className="article">
        <div className="article__inner">
          <p>Faça o seu pedido de forma rápida e simples em IMT Online.</p>
          <p>
            As certidões de homologação, de características do veículo e de inspeção podem ser solicitadas através dos Serviços On-Line do IMT,
            beneficiando de um desconto de 10% relativamente à taxa aplicada nos balcões de atendimento presencial.
          </p>
          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
}
