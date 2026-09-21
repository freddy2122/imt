import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import "./ArticlePage.css";

const accordionItems = [
  { q: "O que é?", a: "Certidão para comprovar que a sua carta de condução é autêntica." },
  { q: "Quem pode pedir?", a: "Os condutores com carta de condução válida. Caso não esteja válida, deve dirigir-se a um balcão do IMT." },
  { q: "Como posso pedir?", a: "Aceda a \"A minha Carta de Condução\", autentique-se e registe o pedido." },
  { q: "Quanto custa?", a: "6 €, com desconto de 10% através do portal \"A Minha Carta de Condução\"." },
  {
    q: "Dúvidas?",
    a: "Envie e-mail através do Formulário de Contactos. Enquadramento legal: Regulamento da Habilitação Legal para Conduzir (Decreto-Lei n.º 138/2012 e alterações posteriores), em conformidade com a Diretiva 2006/126/CE.",
  },
];

export default function CertidaoAutenticidadePage() {
  return (
    <>
      <PageHero title="Certidão de Autenticidade de Carta de Condução" />
      <section className="article">
        <div className="article__inner">
          <p>Faça o seu pedido em "A minha Carta de Condução".</p>
          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
}
