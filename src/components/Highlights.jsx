import { highlights } from "../data/highlights";
import "./Highlights.css";

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights__inner">
        <h2 className="highlights__heading">Destaques</h2>

        <div className="highlights__grid">
          {highlights.map((item) => (
            <article key={item.href} className="highlight-card">
              <div className="highlight-card__tag">{item.tag}</div>
              <a href={item.href} className="highlight-card__image-link">
                <img src={item.image} alt={item.title} loading="lazy" />
              </a>
              <h3 className="highlight-card__title">
                <a href={item.href}>{item.title}</a>
              </h3>
              <p className="highlight-card__date">{item.date}</p>
            </article>
          ))}
        </div>

        <div className="highlights__cta">
          <a href="https://www.imt-ip.pt/category/noticias/" className="highlights__btn">
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
}
