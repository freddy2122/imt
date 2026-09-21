import "./Footer.css";

const footerLinks = [
  { label: "IMT Online", href: "/imt-online", newTab: true },
  { label: "Manuais IMT Online", href: "https://www.imt-ip.pt/manuais-imt-online/" },
  { label: "FAQ", href: "/faq" },
  { label: "Contactos", href: "/contactos" },
  { label: "Links Úteis", href: "https://www.imt-ip.pt/links-uteis/" },
];

const legalLinks = [
  { label: "Termos e Condições", href: "https://www.imt-ip.pt/termos-de-utilizacao-e-responsabilidade/" },
  { label: "Política de Privacidade e de Proteção de Dados", href: "https://www.imt-ip.pt/politica-de-privacidade-e-de-protecao-de-dados/" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <a href="/" className="site-footer__logo">
            <img src="https://www.imt-ip.pt/wp-content/uploads/2024/12/logo-negativo.svg" alt="Logo IMT" />
          </a>
          <nav className="site-footer__menu">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.newTab || !link.href.startsWith("/") ? "_blank" : undefined}
                rel={link.newTab || !link.href.startsWith("/") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <hr />

        <div className="site-footer__bottom">
          <nav className="site-footer__legal">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <p>Todos os direitos reservados © 2026 Instituto da Mobilidade e dos Transportes</p>
        </div>
      </div>
    </footer>
  );
}
