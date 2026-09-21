import "./ImtMais.css";

const logos = [
  { href: "https://www.imt-ip.pt/ansf/", image: "https://www.imt-ip.pt/wp-content/uploads/2025/04/IMT_ANSF.png", alt: "Autoridade Nacional de Segurança Ferroviária" },
  {
    href: "https://www.imt-ip.pt/fundo-mobilidade-e-transportes/",
    image: "https://www.imt-ip.pt/wp-content/uploads/2026/04/Logo_Fundo-Mobilidade-e-Transportes.png",
    alt: "Fundo para a Mobilidade e Transportes",
  },
  { href: "https://www.imt-ip.pt/infraestruturas-aeroportuarias-2/", image: "https://www.imt-ip.pt/wp-content/uploads/2025/12/IMT_egapa-768x576-1.jpg", alt: "EGAPA" },
];

export default function ImtMais() {
  return (
    <section id="imt-mais" className="imt-mais">
      <div className="imt-mais__inner">
        <h2 className="imt-mais__heading">IMT +</h2>
        <div className="imt-mais__grid">
          {logos.map((logo) => (
            <a key={logo.href} href={logo.href} target="_blank" rel="noreferrer" className="imt-mais__logo">
              <img src={logo.image} alt={logo.alt} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
