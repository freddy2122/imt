import PageHero from "../components/PageHero";
import "./ArticlePage.css";

export default function VeiculosEletricosPage() {
  return (
    <>
      <PageHero title="Veículos Elétricos" />
      <section className="article">
        <div className="article__inner">
          <p>
            Com a entrada em vigor da Lei n.º 19/2024, de 5 de fevereiro, foi eliminada a obrigatoriedade de dístico identificativo para a
            circulação na via pública de veículos elétricos, alterando o Decreto-Lei n.º 39/2010, de 26 de abril.
          </p>
          <p>
            No âmbito da sua política de Mobilidade Elétrica, o Governo definiu, através do Decreto-Lei n.º 39/2010, incentivos à aquisição de
            veículos elétricos: os particulares que adquirissem um dos primeiros cinco mil carros elétricos a partir de 2010 tinham direito a um
            incentivo de 5 000 €, deduzido diretamente pelos comerciantes. Este incentivo vigorou até 31 de dezembro de 2011 e aplicava-se apenas
            aos veículos que cumpriam os requisitos técnicos da Portaria n.º 468/2010, de 7 de julho.
          </p>
        </div>
      </section>
    </>
  );
}
