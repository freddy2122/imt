import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import "./ArticlePage.css";

const accordionItems = [
  {
    q: "Número do Quadro",
    a: "Atribuído pelo fabricante a cada veículo produzido, é o elemento básico de identificação, gravado na estrutura do veículo. Quando desconhecido, é necessário atribuir e gravar um novo número sem alterar a gravação original; em caso de erro na gravação original, o fabricante deve inutilizá-la com sobreposição de caracteres «X». Em reparações que removam a gravação original, as Direções Regionais do IMT podem autorizar a regravação do mesmo número, sempre efetuada pelo fabricante ou entidade delegada, com inspeção pelos Serviços Regionais e Distritais do IMT. Documentos: Formulário Modelo 9 IMT, documento de identificação do veículo, documento justificativo da pretensão e documento de identificação do requerente. Taxa: 50 €.",
  },
  {
    q: "Número de Matrícula",
    a: "Atribuído pela entidade nacional responsável (o IMT), identifica univocamente o veículo. Salvo reboques e semirreboques, é composto por três grupos de dois carateres, atribuídos sequencialmente; o formato mudou ao longo do tempo (AA-00-00 até 1992, 00-00-AA até 2005, 00-AA-00 até 2020, e AA 00 AA a partir de março de 2020). O veículo conserva sempre o seu número de matrícula original, mesmo após cancelamento. É possível atribuir matrículas de época a veículos de interesse histórico.",
  },
  {
    q: "Chapa de matrícula",
    a: "Permite a identificação externa do veículo através do número de matrícula nela inscrito. Deve estar em posição vertical, sem emblemas ou insígnias sobrepostos, e não pode ficar total ou parcialmente encoberta, em conformidade com o Regulamento de Matrícula dos Automóveis (Decreto-Lei n.º 54/2005 e alterações posteriores).",
  },
];

export default function IdentificacaoVeiculosPage() {
  return (
    <>
      <PageHero title="Identificação Veículos" />
      <section className="article">
        <div className="article__inner">
          <p>
            A identificação de um veículo a motor ou seu reboque é feita através de um número atribuído pelo fabricante (número do quadro) e de
            um número de matrícula atribuído pela administração de cada país. O número do quadro permanece constante ao longo da vida do veículo,
            identificando fabricante, marca, modelo e número de série; a matrícula pode variar consoante o país de registo.
          </p>
          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
}
