import PageHero from "../components/PageHero";
import "./ArticlePage.css";

export default function CancelamentoTemporarioPage() {
  return (
    <>
      <PageHero title="Cancelamento Temporário Matrícula" />
      <section className="article">
        <div className="article__inner">
          <p>
            Para proceder ao cancelamento temporário de matrículas de veículos de transporte público rodoviário de mercadorias, no âmbito do
            Decreto-Lei n.º 82/2011, de 20 de junho, o interessado deverá dirigir-se aos serviços desconcentrados do IMT e apresentar os seguintes
            documentos:
          </p>

          <h3>1) Para cancelamento temporário</h3>
          <ul>
            <li>Requerimento em Modelo 9 IMT, pedindo o cancelamento temporário da matrícula do veículo;</li>
            <li>Documentos do veículo (Certificado de Matrícula ou livrete e título de registo de propriedade);</li>
            <li>
              Declaração do proprietário ou do legítimo possuidor do veículo, identificando a razão do pedido e referindo que o veículo não será
              submetido a circulação na via pública sem que seja reposta a matrícula.
            </li>
          </ul>

          <h3>2) Para a reposição da matrícula</h3>
          <ul>
            <li>Requerimento em Modelo 9 IMT, pedindo a reposição da matrícula;</li>
            <li>
              Se não for o proprietário ou o legítimo possuidor a apresentar o pedido: declaração assinada por este autorizando outra pessoa a
              fazer o levantamento dos documentos do veículo;
            </li>
            <li>
              Se o cancelamento foi feito no âmbito de uma candidatura a incentivo ao abate rejeitada: certificado de inspeção técnica (Modelo 113
              IMTT) e pagamento da taxa de reposição de matrícula (45 €), ao balcão ou por correio.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
