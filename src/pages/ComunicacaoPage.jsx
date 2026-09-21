import CtaGridPage from "../components/CtaGridPage";
import "./ComunicacaoPage.css";

const cards = [
  { title: "Sala de Imprensa", href: "https://www.imt-ip.pt/comunicacao/sala-de-imprensa/", opacity: 0.5 },
  { title: "Notícias", href: "https://www.imt-ip.pt/category/noticias/", opacity: 0.4 },
  { title: "Eventos e Parcerias", href: "https://www.imt-ip.pt/eventos-e-parcerias/", opacity: 0.3 },
  {
    title: "Números",
    href: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/indicadores-imt-cartas-de-conducao-e-atendimento-ao-publico/",
    opacity: 0.2,
  },
  { title: "Agenda", href: "https://www.imt-ip.pt/agenda/", opacity: 0.1 },
];

export default function ComunicacaoPage() {
  return (
    <>
      <CtaGridPage title="Comunicação" cards={cards} />
      <div className="comms-linkedin">
        <a href="https://www.linkedin.com/company/institutodamobilidadeedostransportes/?originalSubdomain=pt" target="_blank" rel="noreferrer">
          <img src="https://www.imt-ip.pt/wp-content/uploads/2025/04/LK_button.svg" alt="Acompanhe-nos no Linkedin" />
        </a>
      </div>
    </>
  );
}
