import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import "./ArticlePage.css";

const accordionItems = [
  {
    q: "Emissão do Certificado de Matrícula",
    a: "É emitido no primeiro registo de veículo importado, admitido, montado, construído ou reconstruído em Portugal, e sempre que sejam alteradas as características nele constantes. A emissão exige a junção da informação sobre as características do veículo com a informação do respetivo proprietário.",
  },
  {
    q: "2ªs Vias / Duplicado do Certificado de Matrícula",
    a: "Emitido sempre que requerido, mediante entrega obrigatória do anterior (extraviado ou em mau estado). Pode ser pedido online, com 10% de desconto, ou presencialmente com Formulários Modelo 9 e Modelo 10 IMT, documento de identificação do veículo, documento de identificação do requerente e NIF. Taxa: 30 €.",
  },
  {
    q: "Alteração dos Elementos do Certificado de Matrícula",
    a: "Qualquer alteração das características implica emissão de novo certificado, com entrega do anterior. Inclui: averbamento de peso bruto rebocável (Modelo 9 IMT + documentos do veículo/requerente + declaração da marca), averbamento de nova medida de pneumáticos/jantes (pode ser feito online com 10% de desconto), e alteração de cor do veículo (Modelo 9 IMT + documentos). Taxa: 30 € em cada caso.",
  },
];

export default function CertificadoMatriculaPage() {
  return (
    <>
      <PageHero title="Certificado Matrícula" />
      <section className="article">
        <div className="article__inner">
          <p>
            Antes de qualquer pedido, certifique-se de que o veículo está devidamente registado na Conservatória do Registo Automóvel, com os
            dados do proprietário atualizados e sem pendências legais.
          </p>
          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
}
