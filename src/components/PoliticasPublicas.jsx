import "./PoliticasPublicas.css";

const cards = [
  {
    title: "Estratégia “Portos 5+”",
    href: "https://www.imt-ip.pt/noticias/publicada-a-estrategia-portos-5-para-modernizar-e-reforcar-a-competitividade-do-setor/",
    image: "https://www.imt-ip.pt/wp-content/uploads/2025/08/Porto_Alcantara_Pol-Publicas.jpg",
  },
  {
    title: "Futuro da Mobilidade",
    href: "https://www.imt-ip.pt/veiculos/planeamento/futuro-da-mobilidade/",
    image: "https://www.imt-ip.pt/wp-content/uploads/2025/01/futuro.jpg",
  },
  {
    title: "Documentos de Referência",
    href: "https://www.imt-ip.pt/quem-somos/documentos-de-referencia/",
    image: "https://www.imt-ip.pt/wp-content/uploads/2025/03/Doc_Ref.jpg",
  },
];

export default function PoliticasPublicas() {
  return (
    <section className="politicas">
      <div className="politicas__inner">
        <h2 className="politicas__heading">Políticas Públicas</h2>
        <div className="politicas__grid">
          {cards.map((card) => (
            <div key={card.title} className="politicas__card">
              <a href={card.href} className="politicas__image">
                <img src={card.image} alt={card.title} loading="lazy" />
              </a>
              <div className="politicas__box">
                <h3>{card.title}</h3>
                <a href={card.href}>+ Saiba mais</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
