import PageHero from "../components/PageHero";
import "./ArticlePage.css";

export default function RegistoPropriedadePage() {
  return (
    <>
      <PageHero title="Registo de Propriedade – Pedidos Apreensão" />
      <section className="article">
        <div className="article__inner">
          <h3>Regularização do Registo de Propriedade</h3>
          <p>
            O registo de propriedade de veículos, adquirida por contrato verbal de compra e venda, pode ser efetuado pelo vendedor nos termos do
            Decreto-Lei n.º 177/2014, de 15 de dezembro, através de procedimento especial que permite registar a propriedade a favor do atual
            proprietário. Os pedidos devem ser apresentados junto dos serviços do IRN – Instituto dos Registos e do Notariado.
          </p>

          <h3>Apreensão de veículos</h3>
          <p>
            O Código da Estrada permite requerer a apreensão de um veículo, com o objetivo de retirar de circulação os veículos sem registo de
            propriedade regularizado. O pedido deve ser feito no Balcão de Atendimento do IMT da área de residência. Taxa: 10 €, paga ao balcão
            ou por correio.
          </p>
          <p>
            O IMT não é responsável pela não apreensão do veículo, limitando-se a encaminhar o pedido às entidades policiais competentes. Decorridos
            mais de 6 meses após o pedido de apreensão de um veículo cuja propriedade tenha sido transferida há mais de um ano sem atualização do
            registo, o titular do registo pode requerer o cancelamento da matrícula, nos termos do n.º 12 do artigo 119.º do Código da Estrada.
          </p>
        </div>
      </section>
    </>
  );
}
