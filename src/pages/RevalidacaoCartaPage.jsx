import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import "./ArticlePage.css";

const accordionItems = [
  {
    q: "Quem pode revalidar?",
    a: "Os condutores residentes em território nacional, portadores de cartão de cidadão ou outro documento de identificação válido com dados e imagem atualizados no IMT. Também podem revalidar condutores de nacionalidade portuguesa titulares de carta obtida em Portugal e residentes fora da UE/EEE, e titulares com estatuto de estudante em Portugal há pelo menos 185 dias.",
  },
  {
    q: "Como posso revalidar?",
    a: "Presencialmente, com carta atual, documento de identificação, NIF e, consoante a idade/categoria, atestado médico eletrónico e/ou certificado de avaliação psicológica. Online, através do IMT Online (registo com número de contribuinte e senha do Portal das Finanças). Através da App ID.GOV, condutores da categoria B até aos 50 anos com Chave Móvel Digital ativa podem renovar em poucos passos pelo smartphone, recebendo notificação cerca de cinco meses antes do fim da validade.",
  },
  {
    q: "Quando tenho de revalidar a minha carta de condução?",
    a: "O prazo depende do grupo de categorias: AM, A1, A2, A, B1, B, BE, ciclomotores e tratores agrícolas têm um regime; categorias C1, C1E, C, CE, D1, D1E, D, DE e determinados usos profissionais das categorias B/BE (ambulâncias, bombeiros, transporte escolar, etc.) têm outro.",
  },
  {
    q: "O que acontece se não revalidar a minha carta de condução nos prazos legais?",
    a: "A revalidação deve ser pedida nos 6 meses anteriores à caducidade. Conduzir com a carta caducada é uma infração rodoviária. Passados mais de 2 anos (até 5) é necessário exame especial com prova prática; passados mais de 5 anos (até 10) é necessário completar um curso de formação específico e realizar exame especial com prova prática.",
  },
  { q: "Quanto custa?", a: "30 €, ou 15 € a partir dos 70 anos. Desconto de 10% ao efetuar o pedido através do IMT Online." },
  { q: "Dúvidas?", a: "Consulte o Manual de Apoio do IMT Online ou envie um e-mail através do Formulário de Contactos." },
  {
    q: "Restrição 997 (averbamento do Grupo II)",
    a: "A revalidação da restrição 997 não está disponível online. Aplica-se a condutores das categorias B e/ou BE que conduzam ambulâncias, veículos de bombeiros, transporte de doentes, transporte escolar, transporte coletivo de crianças ou automóveis ligeiros de aluguer de passageiros.",
  },
  {
    q: "Qual o enquadramento legal da revalidação da carta?",
    a: "Decreto-Lei n.º 63/2023, de 31 de julho, e o Regulamento da Habilitação Legal para Conduzir (Decreto-Lei n.º 138/2012 e alterações posteriores), em conformidade com a Diretiva 2006/126/CE relativa à carta de condução.",
  },
];

export default function RevalidacaoCartaPage() {
  return (
    <>
      <PageHero title="Revalidação da Carta de Condução" />

      <section className="article">
        <div className="article__inner">
          <p>Faça o seu pedido de forma rápida e simples em IMT Online.</p>
          <p>Aceda a "A Minha Carta de Condução". Consulte a última carta emitida e saiba quando tem de revalidar a sua carta de condução.</p>

          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
}
