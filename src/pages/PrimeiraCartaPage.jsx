import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import "./ArticlePage.css";

const accordionItems = [
  {
    q: "O que é?",
    a: "Autorizar o uso de dados biométricos (fotografia e assinatura) que constam no cartão de cidadão para uso na carta de condução.",
  },
  { q: "Quem pode requerer?", a: "Qualquer candidato, ou condutor, portador de cartão de cidadão válido e ativado." },
  { q: "Como posso requerer?", a: "Aceda ao IMTOnline, autentique-se e registe o pedido." },
  { q: "Quanto custa?", a: "É isento de taxa." },
  { q: "Dúvidas?", a: "Consulte o Manual de Apoio online, ou envie e-mail para imtonline@imt-ip.pt." },
];

export default function PrimeiraCartaPage() {
  return (
    <>
      <PageHero title="Primeira Carta de Condução" />

      <section className="article">
        <div className="article__inner">
          <p>
            O pedido de 1ª emissão de carta de condução é feito pela escola de condução/centro de exames; o condutor apenas necessita atualizar os
            dados biométricos necessários para a impressão da carta, bastando registar-se nos serviços online e realizar o pedido de atualização
            de dados biométricos no separador "Os meus dados IMT", devendo para o efeito ter cartão de cidadão válido e ativado. A carta será
            enviada para a morada que consta na licença de aprendizagem.
          </p>
          <p>
            A carta será emitida com os dados que confirmar. Na eventualidade dos dados estarem incorretos ou fotografia desatualizada,
            especialmente na 1.ª emissão de carta de condução, dirija-se a um balcão do IMT para efetuar a atualização dos dados biométricos.
          </p>

          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
}
