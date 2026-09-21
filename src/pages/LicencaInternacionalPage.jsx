import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import "./ArticlePage.css";

const accordionItems = [
  {
    q: "Quem pode solicitar?",
    a: "Titulares de carta de condução válida a nível nacional ou emitida por outros Estados Membros da União Europeia ou do Espaço Económico Europeu. Permite conduzir legalmente em países não pertencentes à UE/EEE, signatários das Convenções de Genebra (1949) e Viena (1968), por um período máximo de um ano, sempre acompanhada da carta nacional que lhe deu origem.",
  },
  {
    q: "Quais os documentos necessários para requerer?",
    a: "Título de condução original e válido; documento de identificação; número de identificação fiscal; uma fotografia atual tipo passe, a cores, com fundo liso e claro.",
  },
  { q: "Instruções de preenchimento", a: "No formulário deve indicar a pretensão \"Outra\" e redigir \"Licença Internacional de Condução\"." },
  { q: "Onde se pode pedir?", a: "Num balcão do IMT, nos termos do Decreto-Lei n.º 26080, de 22 de novembro de 1935." },
  { q: "Quanto custa?", a: "30 €" },
  { q: "Qual a validade?", a: "Um ano a partir da data de emissão, salvo se a carta de condução de base tiver prazo inferior." },
  {
    q: "Dúvidas?",
    a: "Envie um e-mail através do Formulário de Contactos. A licença só tem validade em Portugal se apresentada com o título nacional que a suporta; confirme sempre as condições junto das autoridades do país estrangeiro.",
  },
  {
    q: "Qual o enquadramento legal?",
    a: "Artigo 8.º do Regulamento da Habilitação Legal para Conduzir (Decreto-Lei n.º 138/2012 e alterações posteriores) e Diretiva 2006/126/CE.",
  },
];

export default function LicencaInternacionalPage() {
  return (
    <>
      <PageHero title="Licença Internacional de Condução" />
      <section className="article">
        <div className="article__inner">
          <p>Esta licença é obrigatória em alguns países estrangeiros, sobretudo fora da Europa e quando pretende conduzir viaturas de aluguer.</p>
          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
}
