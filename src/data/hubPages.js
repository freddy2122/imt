const BASE = "https://www.imt-ip.pt";

export const hubPages = {
  "transporte-de-mercadorias-perigosas": {
    title: "Transporte de Mercadorias Perigosas",
    tint: "white",
    cards: [
      { title: "Autorizações Especiais de Circulação", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/autorizacoes-especiais-de-circulacao/`, opacity: 0.3 },
      { title: "Certificação de Condutores", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/certificacao-de-condutores/`, opacity: 0.2 },
      { title: "Certificação de Conselheiros", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/certificacao-de-conselheiros/`, opacity: 0.1 },
      { title: "Comissão Nacional", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/comissao-nacional/`, opacity: 0.2 },
      { title: "Empresas e Veículos", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/empresas-e-veiculos/`, opacity: 0.3 },
      { title: "Equipamentos sob Pressão", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/equipamentos-sob-pressao/`, opacity: 0.1 },
      { title: "Esclarecimentos IMT", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/esclarecimentos-imt/`, opacity: 0.2 },
      { title: "Exames Multimédia", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/exames-multimedia/`, opacity: 0.3 },
      { title: "Organizações Internacionais", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/organizacoes-internacionais/`, opacity: 0.1 },
      { title: "Regulamentação Técnica", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/regulamentacao-tecnica/`, opacity: 0.2 },
    ],
  },

  tvde: {
    title: "TVDE",
    tint: "white",
    cards: [
      { title: "Licenciamento de Operadores de TVDE", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/tvde/licenciamento-de-operadores-de-tvde/`, opacity: 0.3 },
      { title: "Certificação de Motoristas TVDE", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/tvde/certificacao-de-motoristas-tvde/`, opacity: 0.2 },
      {
        title: "Licenciamento de Operador de Plataformas Eletrónicas",
        href: `${BASE}/rodoviario/infraestruturas-rodoviarias/tvde/licenciamento-de-operador-de-plataformas-eletronicas/`,
        opacity: 0.1,
      },
      { title: "Identificação de Veículos TVDE", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/tvde/identificacao-de-veiculos-tvde/`, opacity: 0.2 },
    ],
  },

  "rede-rodoviaria": {
    title: "Rede Rodoviária",
    tint: "white",
    cards: [
      {
        title: "Concessões Rodoviárias",
        href: `${BASE}/rodoviario/infraestruturas-rodoviarias/rede-rodoviaria/concessoes-rede-nacional-de-autoestradas-concessionada-mapa-de-concessoes/`,
        opacity: 0.3,
      },
      { title: "Taxas de Portagem", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/rede-rodoviaria/taxas-de-portagem/`, opacity: 0.2 },
      { title: "Inspeções e Vistorias", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/rede-rodoviaria/inspecoes-e-vistorias/`, opacity: 0.1 },
      { title: "Plano Rodoviário Nacional", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/rede-rodoviaria/plano-rodoviario-nacional/`, opacity: 0.2 },
      { title: "Estatuto das Estradas da Rede Rodoviária Nacional", href: `${BASE}/wp-content/uploads/2025/03/EERRN_L_34_2015.pdf`, opacity: 0.3 },
      {
        title: "Autorizações de Obras em Zonas Non Aedificandi da RRN",
        href: `${BASE}/wp-content/uploads/2025/03/IMT-Subvencoes_2020_SITE-1.pdf`,
        opacity: 0.1,
      },
      { title: "Tráfego", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/rede-rodoviaria/trafego/`, opacity: 0.2 },
    ],
  },

  ansf: {
    title: "Autoridade Nacional de Segurança Ferroviária",
    tint: "white",
    cards: [
      { title: "A ANSF", href: `${BASE}/ansf/a-ansf/`, opacity: 0.3 },
      { title: "Protocolos", href: `${BASE}/ansf/protocolos/`, opacity: 0.2 },
      { title: "IRSC 2026", href: "https://www.irsc2026.com/", opacity: 0.1 },
      { title: "Material Circulante", href: `${BASE}/ansf/material-circulante/`, opacity: 0.2 },
      { title: "Infraestruturas Ferroviárias", href: `${BASE}/ansf/infraestruturas-ferroviarias/`, opacity: 0.3 },
      { title: "Sistemas de Gestão da Segurança", href: `${BASE}/ansf/sistemas-de-gestao-da-seguranca/`, opacity: 0.1 },
      { title: "Supervisão da Atividade", href: `${BASE}/ansf/supervisao-da-atividade/`, opacity: 0.2 },
      { title: "Certificação de Maquinistas", href: `${BASE}/ferroviario/certificacao-profissional/certificacao-de-maquinistas/`, opacity: 0.3 },
      { title: "Transporte por Cabo", href: `${BASE}/ansf/transportes-por-cabo/`, opacity: 0.1 },
      { title: "Relatórios Anuais de Segurança", href: `${BASE}/ferroviario/caminho-de-ferro/relatorios-anuais-de-seguranca/`, opacity: 0.2 },
      { title: "Guias Nacionais", href: `${BASE}/ansf/guias-nacionais/`, opacity: 0.3 },
      { title: "Guias Europeus", href: `${BASE}/ansf/guias-europeus/`, opacity: 0.1 },
    ],
  },

  "mobilidade-sustentavel": {
    title: "Mobilidade Sustentável",
    tint: "white",
    cards: [
      { title: "PMUS – Planos de Mobilidade Urbana Sustentável", href: `${BASE}/veiculos/planeamento/mobilidade-sustentavel/pmus-planos-de-mobilidade-urbana-sustentavel/`, opacity: 0.3 },
      { title: "Registo de PMUS", href: "https://forms.office.com/Pages/ResponsePage.aspx?id=G8cJAyWtAUGYr0ZEZmYldZXRZFx4VW5CvKEVf-iYZJVURUtVTk5JVTlLNjI4QVNKSkFYNkYySDlTVy4u", opacity: 0.2 },
      { title: "Mobilidade Escolar", href: `${BASE}/mobilidade-sustentavel/mobilidade-escolar/`, opacity: 0.1 },
    ],
  },

  "mobilidade-ativa": {
    title: "Mobilidade Ativa",
    tint: "white",
    cards: [
      { title: "A Mobilidade Ativa", href: `${BASE}/ansf/a-mobildiade-ativa/`, opacity: 0.3 },
      { title: "Rede Colaborativa para a Mobilidade Ativa (RCMA)", href: `${BASE}/mobilidade-ativa/rede-colaborativa-para-a-mobilidade-ativa-rcma/`, opacity: 0.2 },
      { title: "Informação de Apoio", href: `${BASE}/mobilidade-ativa/informacao-tecnica/`, opacity: 0.1 },
    ],
  },

  "mobilidade-digital": {
    title: "Mobilidade Digital",
    tint: "white",
    cards: [
      { title: "STePP – SIGweb", href: "https://www.stepp.pt/sigweb/", opacity: 0.3 },
      { title: "Dados Multimodais", href: `${BASE}/quem-somos/planeamento/projetos-e-redes-internacionais/projetos-nacionais/nap/`, opacity: 0.2 },
      { title: "Registo de Interfaces e Terminais", href: `${BASE}/mobilidade-sustentavel/interfaces-de-transporte-publico-de-passageiros-e-terminais-rodoviarios/`, opacity: 0.1 },
      { title: "eFTI - Digitalização do Transporte de Mercadorias", href: "/texto/digitalizacao-e-inovacao-no-transporte-de-mercadorias", opacity: 0.2 },
      { title: "STePP – Modelo de Dados", href: `${BASE}/mobilidade-sustentavel/stepp-modelo-de-dados/`, opacity: 0.3 },
    ],
  },

  "licenciamento-de-empresas-transporte-rodoviario": {
    title: "Licenciamento de Empresas – Transporte Rodoviário",
    tint: "white",
    cards: [
      { title: "Licenciamento de Empresas de Táxi", href: "/texto/transporte-em-taxi", opacity: 0.3 },
      { title: "Licenciamento de Operadores de TVDE", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/tvde/licenciamento-de-operadores-de-tvde/`, opacity: 0.2 },
      { title: "Licenciamento de Plataformas Eletrónicas TVDE", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/tvde/licenciamento-de-operador-de-plataformas-eletronicas/`, opacity: 0.1 },
      { title: "Licenciamento de Transporte de Mercadorias", href: "/texto/transporte-mercadorias", opacity: 0.2 },
      { title: "Licenciamento de Passageiros em Autocarro", href: "/texto/transporte-passageiros-autocarro", opacity: 0.3 },
      { title: "Licenciamento de Transporte Coletivo de Crianças", href: "/texto/transporte-coletivo-criancas", opacity: 0.2 },
      { title: "Licenciamento de Aluguer de Veículos sem Condutor", href: "/texto/aluguer-veiculos-sem-condutor", opacity: 0.1 },
      { title: "Licenciamento de Atividade Transitária", href: "/texto/atividade-transitaria", opacity: 0.2 },
      { title: "Licenciamento de Pronto-Socorro", href: "/texto/veiculos-pronto-socorro", opacity: 0.3 },
    ],
  },

  "inspecao-de-veiculos": {
    title: "Inspeção de Veículos",
    tint: "white",
    cards: [
      { title: "Tipos de Inspeções", href: `${BASE}/veiculos/inspecao-de-veiculos/tipos-de-inspecoes/`, opacity: 0.3 },
      { title: "Tarifas das Inspeções", href: `${BASE}/veiculos/inspecao-de-veiculos/tarifas-das-inspecoes/`, opacity: 0.2 },
      { title: "Centros de Inspeção Técnica de Veículos (CITV)", href: `${BASE}/veiculos/inspecao-de-veiculos/centros-de-inspecao-tecnica-de-veiculos-citv/`, opacity: 0.1 },
      { title: "Licenciamento de Inspetores", href: `${BASE}/veiculos/inspecao-de-veiculos/licenciamento-de-inspetores/`, opacity: 0.2 },
      { title: "Entidades Formadoras e Cursos para Inspetores", href: `${BASE}/veiculos/inspecao-de-veiculos/entidades-formadoras-e-cursos-para-inspetores/`, opacity: 0.3 },
      { title: "Reclamações nos CITVs", href: `${BASE}/veiculos/inspecao-de-veiculos/reclamacoes-nos-citvs/`, opacity: 0.2 },
      { title: "Relatórios Anuais de Inspeções", href: `${BASE}/veiculos/inspecao-de-veiculos/relatorios-anuais-de-inspecoes/`, opacity: 0.1 },
      { title: "Prorrogação dos Contratos de Gestão", href: `${BASE}/veiculos/inspecao-de-veiculos/prorrogacao-dos-contratos-de-gestao/`, opacity: 0.2 },
    ],
  },
  "homologacao-e-aprovacao": {
    title: "Homologação e Aprovação",
    tint: "white",
    cards: [
      { title: "Homologação", href: "/hub/introducao-a-homologacao", opacity: 0.3 },
      { title: "Procedimentos e Documentação", href: "/texto/procedimentos-e-documentacao", opacity: 0.2 },
      { title: "Homologação de Veículos Especiais (Ambulâncias, Bombeiros)", href: "/texto/homologacao-de-ambulancias-e-transformacao-de-veiculos-especiais-para-bombeiros", opacity: 0.1 },
    ],
  },
  "introducao-a-homologacao": {
    title: "Homologação",
    tint: "white",
    cards: [
      { title: "Homologação de Veículos", href: `${BASE}/veiculos/introducao-a-homologacao/homologacao-de-veiculos/`, opacity: 0.3 },
      { title: "Homologação de Componentes", href: `${BASE}/veiculos/introducao-a-homologacao/homologacao-de-componentes/`, opacity: 0.2 },
      { title: "Transformação de Veículos", href: `${BASE}/veiculos/introducao-a-homologacao/transformacao-de-veiculos/`, opacity: 0.1 },
      { title: "Carroçamento de Veículos", href: `${BASE}/veiculos/introducao-a-homologacao/carrocamento-de-veiculos/`, opacity: 0.2 },
      { title: "Reconhecimento de Entidades", href: `${BASE}/veiculos/introducao-a-homologacao/reconhecimento-de-entidades/`, opacity: 0.3 },
      { title: "Consulta de Registos de Homologação", href: `${BASE}/veiculos/introducao-a-homologacao/consulta-de-registos-de-homologacao/`, opacity: 0.1 },
    ],
  },
  "centros-de-inspecao-abertura": {
    title: "Centros de Inspeção – Abertura",
    tint: "white",
    cards: [
      {
        title: "Informação aos Interessados na Abertura de Centros de Inspeção Técnica de Veículos (CITV)",
        href: `${BASE}/veiculos/centros-de-inspecao-abertura/informacao-aos-interessados-na-abertura-de-centros-de-inspecao-tecnica-de-veiculos-citv/`,
        opacity: 0.3,
      },
      {
        title: "Histórico de Deliberações e Candidaturas",
        href: `${BASE}/veiculos/centros-de-inspecao-abertura/historico-de-deliberacoes-e-candidaturas/`,
        opacity: 0.2,
      },
    ],
  },
  matricula: {
    title: "Matrícula",
    tint: "white",
    cards: [
      { title: "Matrícula de Veículos Novos", href: "/texto/matricula-de-veiculos-novos", opacity: 0.3 },
      { title: "Matrícula para Veículos Usados", href: "/texto/matricula-para-veiculos-usados", opacity: 0.2 },
      { title: "Adquiridos em Hasta Pública", href: "/texto/adquiridos-em-hasta-publica", opacity: 0.1 },
    ],
  },
  "troca-de-titulo-de-conducao-estrangeiro": {
    title: "Troca de Título de Condução Estrangeiro",
    tint: "blue",
    cards: [
      { title: "Países da União Europeia e do Espaço Económico Europeu", href: `${BASE}/condutores/reconhecimento/troca-de-titulo-de-conducao-estrangeiro/paises-da-uniao-europeia-e-do-espaco-economico-europeu/`, opacity: 0.3 },
      { title: "Cartas de Condução emitidas pelos países da OCDE e CPLP", href: `${BASE}/condutores/reconhecimento/troca-de-titulo-de-conducao-estrangeiro/cartas-de-conducao-emitidas-pelos-paises-da-ocde-e-cplp/`, opacity: 0.2 },
      { title: "Países aderentes às convenções e outras situações", href: `${BASE}/condutores/reconhecimento/troca-de-titulo-de-conducao-estrangeiro/paises-aderentes-as-convencoes-e-outras-situacoes/`, opacity: 0.1 },
      { title: "Países não aderentes às convenções", href: `${BASE}/condutores/reconhecimento/troca-de-titulo-de-conducao-estrangeiro/paises-nao-aderentes-as-convencoes/`, opacity: 0.2 },
      { title: "Restituição da carta portuguesa", href: `${BASE}/condutores/reconhecimento/troca-de-titulo-de-conducao-estrangeiro/ja-teve-carta-de-conducao-portuguesa/`, opacity: 0.3 },
      { title: "Regime de proteção temporária – Ucrânia", href: `${BASE}/condutores/reconhecimento/troca-de-titulo-de-conducao-estrangeiro/regime-de-protecao-temporaria-ucrania/`, opacity: 0.2 },
    ],
  },
  "exames-de-conducao": {
    title: "Exames de Condução",
    tint: "blue",
    cards: [
      {
        title: "Estatísticas provas pendentes",
        href: "https://app.powerbi.com/view?r=eyJrIjoiODk0YTUyOGYtNmQ2Ny00YTcwLWE0MjYtZTE4Y2EyMTNhYmQ0IiwidCI6IjAzMDljNzFiLWFkMjUtNDEwMS05OGFmLTQ2NDQ2NjY2MjU3NSIsImMiOjh9",
        opacity: 0.2,
      },
    ],
  },
  "exame-de-conducao-especial": {
    title: "Exame de Condução Especial",
    tint: "white",
    cards: [
      { title: "Títulos Caducados há mais de 2 anos", href: `${BASE}/condutores/obtencao/exame-de-conducao-especial/titulos-caducados-ha-mais-de-2-anos/`, opacity: 0.3 },
      {
        title: "Títulos Caducados há mais de 5 anos e há menos de 10 anos",
        href: `${BASE}/condutores/obtencao/exame-de-conducao-especial/titulos-caducados-ha-mais-de-5-anos-e-ha-menos-de-10-anos/`,
        opacity: 0.2,
      },
    ],
  },
  "categorias-de-cartas-de-conducao": {
    title: "Categorias de Cartas de Condução",
    tint: "white",
    cards: [
      { title: "Licença de Condução de Ciclomotores", href: `${BASE}/condutores/informacoes-gerais/licenca-de-conducao-de-ciclomotores/`, opacity: 0.3 },
      { title: "Motociclos", href: `${BASE}/condutores/informacoes-gerais/quero-ser-condutor/cartas-de-conducao-de-motociclos/`, opacity: 0.2 },
      { title: "Automóveis Ligeiros e Quadriciclos", href: `${BASE}/condutores/informacoes-gerais/quero-ser-condutor/cartas-de-conducao-de-automoveis-ligeiros-e-quadriciclos/`, opacity: 0.1 },
      { title: "Veículos Ligeiros com Reboque", href: `${BASE}/condutores/informacoes-gerais/quero-ser-condutor/cartas-de-conducao-de-automoveis-ligeiros-com-reboque/`, opacity: 0.2 },
      { title: "Veículos Pesados de Mercadorias com e sem Reboque", href: `${BASE}/condutores/informacoes-gerais/quero-ser-condutor/cartas-de-conducao-para-automoveis-pesados-de-mercadorias-com-e-sem-reboque/`, opacity: 0.3 },
      { title: "Veículos Pesados de Passageiros com e sem Reboque", href: `${BASE}/condutores/informacoes-gerais/quero-ser-condutor/cartas-de-conducao-para-automoveis-pesados-de-passageiros-com-e-sem-reboque/`, opacity: 0.2 },
      { title: "Carta de Condução Veículos Agrícolas", href: `${BASE}/condutores/informacoes-gerais/carta-de-conducao-veiculos-agricolas/`, opacity: 0.1 },
    ],
  },
  "fundo-mobilidade-e-transportes": {
    title: "Fundo para a Mobilidade e Transportes",
    tint: "blue",
    cards: [
      { title: "O Fundo para a Mobilidade e Transportes", href: `${BASE}/fundo-mobilidade-e-transportes/o-fundo-de-transportes/`, opacity: 0.3 },
      { title: "Avisos de Candidatura", href: `${BASE}/fundo-mobilidade-e-transportes/avisos-de-candidatura/`, opacity: 0.2 },
      { title: "Financiamento Regular das Autoridades de Transportes", href: `${BASE}/fundo-mobilidade-e-transportes/financiamento-regular-das-autoridades-de-transportes/`, opacity: 0.1 },
      { title: "Relatórios de Atividades", href: `${BASE}/fundo-mobilidade-e-transportes/relatorios-de-atividades/`, opacity: 0.2 },
      { title: "Projetos Apoiados", href: `${BASE}/fundo-mobilidade-e-transportes/projetos-apoiados/`, opacity: 0.3 },
      { title: "Planos de Atividades", href: `${BASE}/fundo-mobilidade-e-transportes/planos-de-atividades/`, opacity: 0.2 },
      { title: "Documentos de Gestão Financeira", href: `${BASE}/fundo-mobilidade-e-transportes/documentos-de-gestao-financeira-2/`, opacity: 0.1 },
    ],
  },
  rodoviario: {
    title: "Rodoviário",
    tint: "blue",
    cards: [
      { title: "RJSPTP", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/rjsptp/`, opacity: 0.3 },
      { title: "Transporte em Táxi", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/transporte-em-taxi/`, opacity: 0.2 },
      { title: "TVDE", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/tvde/`, opacity: 0.1 },
      { title: "Transporte Mercadorias", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/transporte-mercadorias/`, opacity: 0.2 },
      { title: "Transporte Passageiros Autocarro", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/transporte-passageiros-autocarro/`, opacity: 0.3 },
      { title: "Transporte Coletivo Crianças", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/transporte-coletivo-criancas/`, opacity: 0.2 },
      { title: "Transporte Passageiros Flexível", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/transporte-passageiros-flexivel/`, opacity: 0.1 },
      { title: "Transporte de Mercadorias Perigosas", href: `${BASE}/rodoviario/transporte-de-mercadorias-perigosas/`, opacity: 0.2 },
      { title: "Produtos Alimentares Perecíveis", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/produtos-alimentares-pereciveis/`, opacity: 0.3 },
      { title: "Veículos Pronto-Socorro", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/veiculos-pronto-socorro/`, opacity: 0.2 },
      { title: "Aluguer Veículos Sem Condutor", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/aluguer-veiculos-sem-condutor/`, opacity: 0.1 },
      { title: "Atividade Transitária", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/atividade-transitaria/`, opacity: 0.2 },
      { title: "Entidades Formadoras", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/entidades-formadoras/`, opacity: 0.3 },
      { title: "Empresas Licenciadas", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/empresas-licenciadas/`, opacity: 0.2 },
      { title: "Títulos Habilitantes das Atividades", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/titulos-habilitantes-das-atividades/`, opacity: 0.1 },
      { title: "Regulamentação em Matéria Social", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/regulamentacao-em-materia-social/`, opacity: 0.2 },
      { title: "Registo Eletrónico Nacional", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/registo-eletronico-nacional-2/`, opacity: 0.1 },
    ],
  },
  "infraestruturas-rodoviarias": {
    title: "Infraestruturas Rodoviárias",
    tint: "white",
    cards: [
      { title: "Rede Rodoviária", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/rede-rodoviaria/`, opacity: 0.3 },
      { title: "Direitos dos Utentes", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/direitos-dos-utentes/`, opacity: 0.2 },
      { title: "Inovação e Normalização", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/inovacao-e-normalizacao/`, opacity: 0.1 },
      {
        title: "Serviços Eletrónicos de Portagem",
        href: `${BASE}/rodoviario/infraestruturas-rodoviarias/servico-eletronico-nacional-de-portagem-e-servico-eletronico-europeu-de-portagens/`,
        opacity: 0.2,
      },
      { title: "Auditores de Segurança Rodoviária", href: `${BASE}/rodoviario/infraestruturas-rodoviarias/auditores-de-seguranca-rodoviaria/`, opacity: 0.3 },
    ],
  },
  ferroviario: {
    title: "Ferroviário",
    tint: "white",
    cards: [{ title: "Caminho de Ferro", href: `${BASE}/ferroviario/caminho-de-ferro/`, opacity: 0.3 }],
  },
  "maritimo-portuario": {
    title: "Marítimo-Portuário",
    tint: "white",
    cards: [
      { title: "Armador Nacional", href: `${BASE}/rodoviario/maritimo-portuario/armador-nacional/`, opacity: 0.3 },
      { title: "Armador de Tráfego Local", href: `${BASE}/rodoviario/maritimo-portuario/armador-de-trafego-local/`, opacity: 0.2 },
      { title: "Gestor de Navios", href: `${BASE}/rodoviario/maritimo-portuario/gestor-de-navios/`, opacity: 0.1 },
      { title: "Agente de Navegação", href: `${BASE}/rodoviario/maritimo-portuario/agente-de-navegacao/`, opacity: 0.2 },
      { title: "Empresa de Trabalho Portuário", href: `${BASE}/rodoviario/maritimo-portuario/empresas-de-trabalho-portuario/`, opacity: 0.3 },
      { title: "Pesagem de Contentores", href: `${BASE}/rodoviario/maritimo-portuario/pesagem-de-contentores/`, opacity: 0.2 },
      { title: "Convenção HNS", href: `${BASE}/rodoviario/maritimo-portuario/convencao-hns/`, opacity: 0.1 },
      { title: "Transportes Marítimos", href: `${BASE}/rodoviario/transportes-maritimos/`, opacity: 0.2 },
    ],
  },
  "infraestruturas-aeroportuarias": {
    title: "Infraestruturas Aeroportuárias",
    tint: "white",
    cards: [
      { title: "NAL – Novo Aeroporto de Lisboa", href: "/nal-novo-aeroporto-de-lisboa", opacity: 0.3 },
      { title: "Aeroportos", href: `${BASE}/aeroportos/`, opacity: 0.2 },
    ],
  },
  "instrumentos-de-gestao": {
    title: "Instrumentos de Gestão",
    tint: "white",
    cards: [
      { title: "Instrumentos Financeiros", href: `${BASE}/instrumentos-financeiros/`, opacity: 0.3 },
      { title: "Código de Conduta do IMT", href: `${BASE}/codigo-de-conduta-dos-dirigentes-e-trabalhadores-do-imt-i-p/`, opacity: 0.2 },
      {
        title: "Estatísticas e Relatórios Setoriais",
        href: `${BASE}/biblioteca/reportorio-geral/estatisticas-repertorio-geral/relatorios-setoriais-imt/`,
        opacity: 0.1,
      },
    ],
  },
  "assuntos-europeus-e-relacoes-internacionais": {
    title: "Assuntos Europeus e Relações Internacionais",
    tint: "white",
    cards: [
      { title: "União Europeia", href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/uniao-europeia/`, opacity: 0.3 },
      { title: "Relações bilaterais", href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/relacoes-bilaterais/`, opacity: 0.2 },
      {
        title: "Organizações e associações internacionais",
        href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/organizacoes-e-associacoes-internacionais/`,
        opacity: 0.1,
      },
    ],
  },
  "escolas-de-conducao-e-entidades-formadoras": {
    title: "Escolas de Condução e Entidades Formadoras",
    tint: "white",
    cards: [
      {
        title: "Dispositivos de Monitorização do Ensino Prático Certificados",
        href: "/texto/dispositivos-de-monitorizacao-do-ensino-pratico-certificados",
        opacity: 0.3,
      },
      {
        title: "Licenciamento Empresa Exploradora – Escola Condução",
        href: "/texto/licenciamento-empresa-exploradora-escola-conducao",
        opacity: 0.2,
      },
      { title: "Partilha de Veículos", href: "/texto/partilha-de-veiculos", opacity: 0.1 },
      {
        title: "Transferência de Candidato a Condutor",
        href: "/texto/transferencia-de-candidato-a-condutor",
        opacity: 0.2,
      },
      { title: "Alteração do Pacto Social", href: "/texto/alteracao-do-pacto-social", opacity: 0.3 },
      { title: "Transmissão de Propriedade", href: "/texto/transmissao-de-propriedade", opacity: 0.2 },
      {
        title: "Mudança/Alteração de Instalações",
        href: "/texto/mudanca-alteracao-de-instalacoes",
        opacity: 0.1,
      },
      {
        title: "Alteração dos Elementos da EEEC",
        href: "/texto/alteracao-dos-elementos-da-eeec",
        opacity: 0.2,
      },
      { title: "Ampliação do Âmbito de Ensino", href: "/texto/ampliacao-do-ambito-de-ensino", opacity: 0.3 },
      { title: "Certificação Profissional", href: "/texto/certificacao-profissional-escolas-conducao", opacity: 0.2 },
      { title: "Entidades Formadoras", href: "/texto/entidades-formadoras", opacity: 0.1 },
      {
        title: "Aberturas de escolas de condução pendentes",
        href: "/texto/licenciamentos-pendentes",
        opacity: 0.2,
      },
      { title: "Localização Escolas Condução", href: "/texto/localizacao-escolas-conducao", opacity: 0.3 },
      { title: "Manuais Ensino Condução", href: "/texto/manuais-ensino-conducao", opacity: 0.2 },
      { title: "Deliberações e Despachos", href: "/texto/deliberacoes-despachos", opacity: 0.1 },
      { title: "Softwares do tipo sala Virtual", href: "/texto/softwares-do-tipo-sala-virtual", opacity: 0.2 },
      {
        title: "Plataformas de E-Learning certificadas nos termos do Regime Jurídico do Ensino da Condução",
        href: `${BASE}/escolas-de-conducao-e-entidades-formadoras/plataformas-de-e-learning-certificadas-nos-termos-do-regime-juridico-do-ensino-da-conducao/`,
        opacity: 0.3,
      },
    ],
  },
};
