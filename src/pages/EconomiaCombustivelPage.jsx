import PageHero from "../components/PageHero";
import "./ArticlePage.css";

export default function EconomiaCombustivelPage() {
  return (
    <>
      <PageHero title="Economia de Combustível" />
      <section className="article">
        <div className="article__inner">
          <p>
            Sendo os veículos automóveis uma das principais fontes de emissão de dióxido de carbono (CO2), foi acordado ao nível da União Europeia
            proceder a uma redução das emissões de gases com efeito de estufa, no âmbito do esforço mundial de estabilização das suas
            concentrações, com o objetivo de reduzir os efeitos das alterações climáticas.
          </p>
          <p>
            O Guia de Economia de Combustível faz parte de um sistema de informação aos consumidores, em especial aos compradores de novos
            veículos ligeiros de passageiros, permitindo uma escolha informada sobre o consumo de combustível e as emissões de CO2.
          </p>
          <p>
            Pretende-se ainda sensibilizar o condutor para a utilização correta e manutenção regular do veículo, bem como para os benefícios de
            uma condução Eficiente, Ecológica e Sustentável (Eco-Driving).
          </p>
        </div>
      </section>
    </>
  );
}
