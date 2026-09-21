import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import "./ArticlePage.css";

const accordionItems = [
  {
    q: "O que é?",
    a: "Perdeu a sua carta de condução ou foi vítima de roubo? Pode pedir a 2.ª via da carta de condução através do portal IMT Online. Ao fazer o pedido online, declara, sob compromisso de honra, que a carta não está apreendida por decisão judicial, administrativa ou por autoridade fiscalizadora, e que será entregue de imediato ao IMT caso venha a ser recuperada.",
  },
  {
    q: "Quem pode pedir?",
    a: "Condutores com carta de condução válida, residentes em território nacional com Cartão de Cidadão ou outro documento de identificação válido; condutores de nacionalidade portuguesa titulares de carta obtida em Portugal residentes fora da UE/EEE; e estudantes com carta portuguesa válida residentes em Portugal há pelo menos 185 dias. A nova carta é enviada por correio para a morada indicada em território nacional.",
  },
  {
    q: "Como posso pedir?",
    a: "Online, através do IMT Online (autenticação e registo do pedido). Presencialmente, com Cartão de Cidadão (ou Bilhete de Identidade/Autorização de Residência + NIF) e o Modelo 10 do IMT devidamente preenchido e assinado.",
  },
  {
    q: "Quanto custa?",
    a: "15 € para condutores com 70 ou mais anos; 30 € para os restantes. Desconto de 10% ao efetuar o pedido através do IMT Online.",
  },
  {
    q: "Dúvidas?",
    a: "Consulte o Manual de apoio do IMT Online ou envie um e-mail através do Formulário de Contactos. Enquadramento legal: Regulamento da Habilitação Legal para Conduzir (Decreto-Lei n.º 138/2012 e alterações posteriores), em conformidade com a Diretiva 2006/126/CE.",
  },
];

export default function Emissao2ViaPage() {
  return (
    <>
      <PageHero title="Emissão de 2ª Via" />

      <section className="article">
        <div className="article__inner">
          <p>Faça o seu pedido de forma rápida e simples em IMT Online.</p>
          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
}
