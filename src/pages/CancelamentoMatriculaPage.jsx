import PageHero from "../components/PageHero";
import "./ArticlePage.css";

export default function CancelamentoMatriculaPage() {
  return (
    <>
      <PageHero title="Cancelamento Matrícula" />
      <section className="article">
        <div className="article__inner">
          <p>
            O cancelamento de matrícula é o ato administrativo pelo qual se retira a autorização para o veículo circular na via pública. Pode ser
            efetuado a requerimento do proprietário ou oficiosamente pela Administração. Não impede a reposição da matrícula a pedido do
            proprietário, exceto no caso de Veículos em Fim de Vida (VFV).
          </p>
          <p>
            O cancelamento deve ser requerido nos Balcões de atendimento do IMT, nas situações previstas nos artigos 119.º e 119.º-A do Código da
            Estrada:
          </p>

          <h3>1. Falta de transferência da propriedade</h3>
          <p>
            Quando o proprietário transferiu o veículo há mais de um ano sem atualização do registo, mediante pedido de apreensão apresentado há
            mais de seis meses. Taxa: 10 €.
          </p>

          <h3>2. Veículo deixa de circular na via pública</h3>
          <p>
            Quando o veículo passa a uso exclusivo em provas desportivas ou recintos privados. Cancelamento temporário, duração máxima de 5 anos.
            Taxa: 10 €.
          </p>

          <h3>3. Veículo desaparecido</h3>
          <p>Quando a localização é desconhecida há mais de seis meses, mediante auto de participação às autoridades policiais. Taxa: 10 €.</p>

          <h3>4. Exportação do veículo</h3>
          <p>
            Obrigatório ao exportar o veículo para outro país. Isento de taxa se apresentado o certificado de matrícula emitido pelo país de
            destino na UE; caso contrário, 10 €.
          </p>

          <h3>5. Pesados de mercadorias afetos ao transporte público</h3>
          <p>Cancelamento temporário (máx. 24 meses) em caso de candidatura a incentivo ao abate ou imobilização por falta de serviço. Isento de taxa.</p>

          <h3>6. Veículo inutilizado / Veículo em Fim de Vida (VFV)</h3>
          <p>
            Aplica-se quando o veículo sofreu danos que impossibilitam definitivamente a circulação ou afetam gravemente a segurança. O
            cancelamento de um VFV só é efetuado pelo IMT mediante certificado de destruição emitido por um operador de desmantelamento
            autorizado — o veículo deve ser entregue num centro de receção ou operador autorizado, que encaminha o pedido ao IMT. Isento de taxa.
            Informação sobre operadores autorizados: APA – Agência Portuguesa do Ambiente ou CCDR.
          </p>

          <p>
            Pagamento das taxas: ao balcão (numerário, multibanco ou cheque à ordem de IGCP, E.P.E.) ou por correio (cheque ou referência
            multibanco).
          </p>
        </div>
      </section>
    </>
  );
}
