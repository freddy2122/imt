import CtaGridPage from "../components/CtaGridPage";

const cards = [
  {
    title: "Relatórios dos Programas de Financiamento do Sistema de Transportes Públicos, (PART, ProTransp e Incentiva + TP)",
    href: "https://www.imt-ip.pt/biblioteca/reportorio-geral/estatisticas-repertorio-geral/relatorios-setoriais-imt/#relatorios-dos-programas-de-financiamento-do-sistema-de-transportes-publicos-part-protransp-e-incentiva-tp",
    opacity: 0.7,
  },
  {
    title: "Anuários Estatísticos e Relatórios OTEP",
    href: "https://www.imt-ip.pt/biblioteca/colecao-documental/estatisticas-repertorio-geral/relatorios-setoriais-imt/#anuarios-estatisticos-e-boletim-estatistico",
    opacity: 0.6,
  },
  {
    title: "Veículos",
    href: "https://www.imt-ip.pt/biblioteca/colecao-documental/estatisticas-repertorio-geral/relatorios-setoriais-imt/#veiculos",
    opacity: 0.5,
  },
  {
    title: "Transporte Ferroviário",
    href: "https://www.imt-ip.pt/transportes/ferroviario/caminho-de-ferro/relatorios-anuais-de-seguranca/",
    opacity: 0.4,
  },
  {
    title: "Rede Nacional de Autoestradas",
    href: "https://www.imt-ip.pt/biblioteca/colecao-documental/estatisticas-repertorio-geral/relatorios-setoriais-imt/#estatisticas-de-trafego",
    opacity: 0.3,
  },
  {
    title: "Condutores e Profissionais",
    href: "https://www.imt-ip.pt/rodoviario/maritimo-portuario/estatisticas/condutores-e-profissionais/",
    opacity: 0.3,
  },
  {
    title: "Marítimo-Portuárias",
    href: "https://www.imt-ip.pt/biblioteca/reportorio-geral/estatisticas-repertorio-geral/estatisticas-maritimo-portuarias/",
    opacity: 0.1,
  },
];

const extraCta = {
  title: "Números",
  href: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/indicadores-imt-cartas-de-conducao-e-atendimento-ao-publico/",
};

export default function EstatisticasPage() {
  return <CtaGridPage title="Estatísticas" cards={cards} extraCta={extraCta} />;
}
