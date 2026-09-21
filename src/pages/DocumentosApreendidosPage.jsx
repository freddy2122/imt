import PageHero from "../components/PageHero";
import "./ArticlePage.css";

export default function DocumentosApreendidosPage() {
  return (
    <>
      <PageHero title="Documentos Apreendidos" />
      <section className="article">
        <div className="article__inner">
          <p>Os documentos de identificação de um veículo podem ser apreendidos pelas autoridades fiscalizadoras do trânsito por diversos motivos.</p>
          <p>
            O interessado pode proceder ao levantamento dos documentos junto dos Serviços Regionais e Distritais do IMT da área onde se verificou
            a apreensão. Os documentos a apresentar variam conforme o motivo:
          </p>
          <ul>
            <li>Falta de seguro de responsabilidade civil, sem ocorrência de acidente — taxa: 15 €;</li>
            <li>Acidente com seguro de responsabilidade civil válido — taxa: 15 €;</li>
            <li>Acidente sem seguro de responsabilidade civil válido — taxa: 15 €;</li>
            <li>Propriedade não regularizada — taxa: 15 €.</li>
          </ul>
          <p>Pagamento ao balcão (numerário, multibanco ou cheque à ordem de IGCP, E.P.E.) ou por correio (cheque ou referência multibanco).</p>

          <h3>Perda total do veículo</h3>
          <p>
            Quando exista perda total do veículo, ou para posterior venda como salvado, o IMT, a requerimento do interessado, emite certidão dos
            documentos do veículo para entrega nas seguradoras.
          </p>

          <h3>Registo de propriedade de veículos</h3>
          <p>
            Para assuntos relativos ao registo de propriedade de veículos sujeitos a matrícula, ou seus ónus e encargos (hipoteca, penhora,
            herança, etc.), deve dirigir-se à Conservatória do Registo de Propriedade Automóvel respetiva.
          </p>
        </div>
      </section>
    </>
  );
}
