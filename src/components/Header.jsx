import { Link } from "react-router-dom";
import logo from "../assets/logo-imt.svg";
import MegaMenu from "./MegaMenu";
import "./Header.css";

const navLinks = [
  { label: "COMUNICAÇÃO", to: "/comunicacao" },
  { label: "ESTATÍSTICAS", to: "/estatisticas" },
  { label: "FAQ", to: "/faq" },
];

const announcements = [
  { text: "O IMT mais próximo de si", href: null },
  {
    text: "Lisboa: atendimento mais próximo e simples",
    href: "https://www.imt-ip.pt/noticias/o-imt-reforca-o-atendimento-em-lisboa-o-imt-mais-proximo-de-si/",
  },
  {
    text: "Aveiro: novo local, mais tempo para o atender",
    href: "https://www.imt-ip.pt/noticias/o-imt-aproxima-o-atendimento-dos-cidadaos-e-alarga-o-horario-de-funcionamento-em-aveiro/",
  },
];

function AlertIcon() {
  return (
    <svg viewBox="0 0 22 22" width="20" height="20" fill="none">
      <path
        d="M11 6.55556V11M11 15.4444H11.0111M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dot() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
      <circle cx="10" cy="10" r="10" fill="#2DE8C0" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="20" y1="20" x2="15.3" y2="15.3" strokeLinecap="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.98 1.83-2 3.77-2 4.03 0 4.78 2.5 4.78 5.76V21H18v-5.9c0-1.4-.02-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1V21H10V9Z" />
    </svg>
  );
}

function AnnounceGroup({ ariaHidden }) {
  return (
    <div className="frases" aria-hidden={ariaHidden || undefined}>
      {announcements.map(({ text, href }) => {
        const content = (
          <>
            <Dot />
            <span>{text}</span>
          </>
        );
        return href ? (
          <a key={text} href={href} target="_blank" rel="noreferrer" className="frases__item">
            {content}
          </a>
        ) : (
          <span key={text} className="frases__item">
            {content}
          </span>
        );
      })}
    </div>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="announce-bar">
        <div className="announce-bar__icon">
          <AlertIcon />
        </div>
        <div className="announce-bar__track">
          <AnnounceGroup />
          <AnnounceGroup ariaHidden />
        </div>
      </div>

      <div className="main-row">
        <Link to="/" className="imt-logo">
          <img src={logo} alt="Instituto da Mobilidade e dos Transportes" />
        </Link>

        <nav className="top-links">
          {navLinks.map((link) =>
            link.to ? (
              <Link key={link.label} to={link.to} className="top-links__link">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="top-links__link">
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="search-box">
          <input type="text" placeholder="Pesquisar" />
          <button type="button" aria-label="Pesquisar" className="search-box__btn">
            <SearchIcon />
          </button>
        </div>

        <a href="#" className="linkedin-btn" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
      </div>

      <div className="sub-nav-border">
        <div className="sub-nav">
          <MegaMenu />
          <a href="/imt-online" className="imt-online-btn" target="_blank" rel="noreferrer">
            IMT ONLINE
          </a>
        </div>
      </div>
    </header>
  );
}
