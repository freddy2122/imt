import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import "./ArticlePage.css";

const accordionItems = [
  {
    q: "O que é?",
    a: "Deve solicitar a substituição da sua carta de condução sempre que haja alteração do nome que nela consta, ou o documento se encontre em mau estado de conservação.",
  },
  {
    q: "Quem pode pedir?",
    a: "Condutores com carta de condução válida e cartão de cidadão ativado, no caso de alteração de nome. Condutores com carta válida e cartão de cidadão ativado (ou outro documento de identificação), no caso de mau estado da carta, desde que os dados coincidam com o registo no IMT e haja imagem válida — caso contrário, o pedido deve ser feito num Espaço Cidadão ou balcão do IMT. A nova carta é enviada por correio para a morada indicada em território nacional.",
  },
  {
    q: "Como pode pedir?",
    a: "Online, através do IMT Online. Se a substituição estiver relacionada com restrições médicas, o pedido deve ser feito presencialmente (balcão do IMT, Espaço Cidadão ou Parceiro do IMT), com carta original, documento de identificação atualizado, NIF e, se aplicável, Atestado Médico Eletrónico emitido por um médico ou pela entidade que impôs a restrição.",
  },
  { q: "Quanto custa?", a: "30 €, com desconto de 10% ao efetuar o pedido através do IMT Online." },
  { q: "Dúvidas?", a: "Consulte o Manual de apoio do IMT Online ou envie um e-mail através do Formulário de Contactos." },
];

export default function SubstituicaoCartaPage() {
  return (
    <>
      <PageHero title="Substituição da Carta de Condução" />

      <section className="article">
        <div className="article__inner">
          <p>Faça o seu pedido de forma rápida e simples em IMT Online.</p>
          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
}
