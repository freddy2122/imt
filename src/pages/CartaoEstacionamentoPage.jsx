import PageHero from "../components/PageHero";
import "./ArticlePage.css";

export default function CartaoEstacionamentoPage() {
  return (
    <>
      <PageHero title="Cartão de Estacionamento para Pessoas com Deficiência Condicionada na sua Mobilidade" />
      <section className="article">
        <div className="article__inner">
          <p>Faça o seu pedido de forma rápida e simples em IMT Online.</p>
          <p>
            O pedido pode ser efetuado através dos serviços IMT Online, presencialmente num balcão de atendimento do IMT (Direções Regionais e
            Delegações Distritais), ou por e-mail com requerimento assinado eletronicamente. A taxa é gratuita.
          </p>

          <h3>Condições de atribuição</h3>
          <p>
            O cartão (modelo aprovado pelo Decreto-Lei n.º 307/2003, de 10 de dezembro, na redação do Decreto-Lei n.º 128/2017, de 9 de outubro)
            pode ser atribuído a:
          </p>
          <ul>
            <li>
              Pessoas com deficiência motora, física ou orgânica com incapacidade permanente igual ou superior a 60%, que dificulte a locomoção na
              via pública ou o acesso aos transportes públicos;
            </li>
            <li>Pessoas com deficiência intelectual ou Perturbação do Espetro do Autismo (PEA) com grau de incapacidade igual ou superior a 60%;</li>
            <li>Pessoas com deficiência visual, com alteração permanente da visão igual ou superior a 95%;</li>
            <li>Doentes oncológicos com incapacidade atribuída igual ou superior a 60%, mediante atestado médico de incapacidade multiuso (AMIM).</li>
          </ul>

          <h3>Validade do cartão</h3>
          <p>
            Regra geral, a validade é de 10 anos, salvo determinação de reavaliação em período inferior. Nos casos de atestado emitido ao abrigo
            da Lei n.º 14/2021 com incapacidade global igual ou superior a 60%, a validade máxima é de 5 anos.
          </p>
        </div>
      </section>
    </>
  );
}
