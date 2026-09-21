import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import "./ArticlePage.css";

const accordionItems = [
  {
    q: "Nos Transportes Rodoviários e na Segurança Rodoviária",
    a: "Regulamos e fiscalizamos os serviços de transporte público, garantimos a certificação dos profissionais, asseguramos a qualidade dos veículos e contribuímos para a segurança rodoviária.",
  },
  {
    q: "Nas Infraestruturas Rodoviárias",
    a: "Planeamos, gerimos e participamos na melhoria contínua da rede rodoviária nacional, incluindo a regulamentação e a supervisão das portagens.",
  },
  {
    q: "Nos Transportes Marítimos e Portuários",
    a: "Regulamos as atividades dos portos comerciais, fiscalizamos o setor marítimo e promovemos o planeamento integrado com outros sistemas de gestão territorial.",
  },
  {
    q: "Nos Transportes Ferroviários e na Segurança Ferroviária",
    a: "Emitimos as licenças de transporte ferroviário, as autorizações de entrada ao serviço de material circulante e infraestruturas, certificamos os sistemas de gestão da segurança das empresas e regulamos e fiscalizamos a segurança ferroviária.",
  },
  {
    q: "Nas Concessões e Transportes Aéreos",
    a: "Gerimos os contratos de concessão em áreas como o transporte ferroviário, aéreo e infraestruturas aeroportuárias.",
  },
];

export default function MissaoValoresPage() {
  return (
    <>
      <PageHero title="Missão e Valores" />

      <section className="article">
        <div className="article__inner">
          <h2>O IMT</h2>
          <p>
            Sabia que o IMT está presente de forma discreta no seu dia a dia, desde o momento em que se senta ao volante, entra num transporte
            público ou confia numa empresa para entregar as suas mercadorias?
          </p>
          <p>
            As múltiplas interações que tem ao longo do dia, das compras ao seu emprego, do acesso a uma consulta médica, à aula de ginástica do
            fim do dia, passando pela escola dos seus filhos ou à tão esperada saída com os amigos, dependem, em boa medida, de fazer parte de uma
            sociedade dinâmica e equilibrada, na qual a mobilidade é um agente central. O ideal é mesmo que consiga estar sempre presente sem ser
            notado. Que permita a todos, conseguirem chegar onde precisam ou gostariam de ir. Que possibilite acederem aos bens ou serviços que
            desejam. Que disponibilize um conjunto de soluções diversas, para que se chegue ao destino com confiança, sem preocupações com a
            deslocação e com a satisfação de o fazer de forma sustentável e sem prejudicar o ambiente.
          </p>

          <h3>O que nos é pedido pelas pessoas</h3>
          <p>
            Que trabalhemos para que a mobilidade em Portugal seja cada vez mais acessível, sustentável e eficiente.
            <br />
            Que consigamos coordenar e regular os transportes terrestres, fluviais e o setor marítimo-portuário, promovendo uma maior eficiência e
            fiabilidade na mobilidade das pessoas e dos bens.
          </p>
          <p>
            Que cuidemos das infraestruturas e serviços de transporte, acompanhando os contratos de concessão e promovendo soluções inovadoras que
            não só respondam às necessidades do presente, mas que permitam construir o futuro da mobilidade.
          </p>

          <h3>O nosso compromisso</h3>
          <p>
            No IMT, acreditamos que a mobilidade transforma vidas. Estamos aqui para garantir soluções práticas e inovadoras que aproximem
            pessoas, impulsionem o desenvolvimento e promovam uma mobilidade sustentável para todos.
          </p>

          <h3>Como cumprimos o que nos pedem</h3>
          <p>
            O IMT é a entidade nacional com a responsabilidade de implementar políticas públicas que melhorem a mobilidade, os transportes e as
            infraestruturas em Portugal. É por isso que estamos presentes em quase todos os modos de transportes:
          </p>

          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
}
