const BASE = "https://www.imt-ip.pt";

export const megaMenu = [
  {
    label: "INSTITUCIONAL",
    light: true,
    columns: [
      {
        width: 3,
        groups: [
          {
            heading: "O IMT",
            href: "#",
            links: [
              { label: "Missão, Atribuições, Visão, Valores", href: "/quem-somos/missao-e-valores" },
              { label: "Quem Somos", href: "/texto/quem-somos" },
              { label: "Organograma", href: `${BASE}/wp-content/uploads/2025/03/Organogramas-IMT.pdf` },
            ],
          },
          {
            heading: "IMT +",
            href: "/#imt-mais",
            links: [
              { label: "Autoridade Nacional de Segurança Ferroviária", href: "/hub/ansf" },
              { label: "O Fundo de Transportes", href: "/hub/fundo-mobilidade-e-transportes" },
              { label: "EGAPA", href: "/nal-novo-aeroporto-de-lisboa" },
            ],
          },
          {
            heading: "Centro de Documentação",
            href: "#",
            links: [
              { label: "Arquivo Histórico", href: "/texto/arquivo-historico" },
              { label: "Biblioteca", href: "/texto/biblioteca" },
            ],
          },
        ],
      },
      {
        width: 3,
        groups: [
          {
            heading: "Transparência e Privacidade",
            href: "#",
            subgroups: [
              {
                heading: "Transparência",
                href: "#",
                links: [
                  { label: "Código de Conduta do IMT", href: "/texto/codigo-de-conduta-do-imt" },
                  { label: "Norma de Controlo Interno", href: "/texto/norma-de-controlo-interno" },
                  { label: "Canal de Denúncia", href: "/texto/canal-de-denuncia" },
                  { label: "Código de Boa Conduta para a Prevenção e Combate ao Assédio no Trabalho", href: "/texto/codigo-de-boa-conduta-para-a-prevencao-e-combate-ao-assedio-no-trabalho" },
                  { label: "Sistema de Gestão Anticorrupção", href: "/texto/sistema-de-gestao-anticorrupcao" },
                  { label: "Plano de Prevenção de Riscos de Corrupção e Infrações Conexas", href: "/texto/plano-de-prevencao-de-riscos-de-corrupcao-e-infracoes-conexas" },
                  { label: "Transparência Administrativa", href: "/texto/transparencia-administrativa" },
                ],
              },
              {
                heading: "Política de Privacidade e de Proteção de Dados",
                href: "#",
                links: [
                  { label: "Política de Privacidade", href: "/texto/politica-de-privacidade" },
                  { label: "Código de Conduta para o Tratamento de Dados Pessoais", href: "/texto/codigo-de-conduta-para-o-tratamento-de-dados-pessoais" },
                  { label: "Política de Utilização de Sistemas de Videovigilância", href: "/texto/politica-de-utilizacao-de-sistemas-de-videovigilancia" },
                ],
              },
            ],
          },
        ],
      },
      {
        width: 3,
        groups: [
          {
            heading: "Recursos Humanos",
            href: "#",
            links: [
              { label: "Organização", href: "/recursos-humanos/organizacao" },
              { label: "Recrutamento", href: "/recursos-humanos/recrutamento" },
              { label: "Formação Atividades Transporte", href: "/texto/formacao-atividades-transporte" },
              { label: "SIADAP", href: "/texto/siadap" },
              { label: "Outros Documentos", href: "/texto/outros-documentos" },
            ],
          },
          {
            heading: "Instrumentos de Gestão",
            href: "/hub/instrumentos-de-gestao",
            links: [
              { label: "QUAR", href: "/texto/quar" },
              { label: "Plano de Atividades", href: "/texto/plano-de-atividades" },
              { label: "Relatório de Atividades", href: "/texto/relatorio-de-atividades" },
              { label: "Balanço Social", href: "/texto/balanco-social" },
              { label: "Documentos de Gestão Financeira", href: "/texto/documentos-de-gestao-financeira" },
            ],
          },
        ],
      },
      {
        width: 3,
        groups: [
          {
            heading: "Contratação Pública",
            href: "#",
            links: [{ label: "Procedimentos em Aberto", href: "https://www.acingov.pt/acingovprod/2/zonaPublica/zona_publica_c/indexProcedimentosActivos/1283" }],
          },
          {
            heading: "Assuntos Europeus e Relações Internacionais",
            href: "/hub/assuntos-europeus-e-relacoes-internacionais",
            links: [
              { label: "União Europeia", href: "/texto/uniao-europeia" },
              { label: "Relações Bilaterais", href: "/texto/relacoes-bilaterais" },
              { label: "Organizações e Associações Internacionais", href: "/texto/organizacoes-e-associacoes-internacionais" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "SERVIÇOS AO CIDADÃO",
    light: false,
    columns: [
      {
        width: 4,
        groups: [
          {
            heading: "Tudo para Conduzir",
            href: "#",
            links: [
              { label: "Quero Ser Condutor", href: "/condutores/quero-ser-condutor" },
              { label: "Categorias de Cartas de Condução", href: "/hub/categorias-de-cartas-de-conducao" },
              { label: "Primeira Carta de Condução", href: "/condutores/primeira-carta-de-conducao" },
              { label: "Exames de Condução", href: "/hub/exames-de-conducao" },
              { label: "Exame de Condução Especial", href: "/hub/exame-de-conducao-especial" },
              { label: "Provas de Exame", href: "/texto/provas-de-exame" },
              { label: "Avaliação Psicológica", href: "/condutores/avaliacao-psicologica" },
              { label: "Perguntas de Exame", href: "/texto/perguntas-de-exame" },
              { label: "Centros de Exame", href: "/texto/centros-de-exame" },
            ],
          },
        ],
      },
      {
        width: 4,
        groups: [
          {
            heading: "Sou Condutor",
            href: "#",
            links: [
              { label: "Revalidação da Carta de Condução", href: "/condutores/revalidacao-da-carta-de-conducao" },
              { label: "Emissão de 2ª Via", href: "/condutores/emissao-de-2-a-via" },
              { label: "Substituição da Carta de Condução", href: "/condutores/substituicao-da-carta-de-conducao" },
              { label: "Certidão de Autenticidade de Carta de Condução", href: "/condutores/certidao-de-autenticidade" },
              { label: "Troca de Título de Condução Estrangeiro", href: "/hub/troca-de-titulo-de-conducao-estrangeiro" },
              { label: "Licença Internacional de Condução", href: "/condutores/licenca-internacional-de-conducao" },
              { label: "Cartão de Estacionamento para Pessoas com Deficiência Condicionada na sua Mobilidade", href: "/condutores/cartao-de-estacionamento" },
            ],
          },
        ],
      },
      {
        width: 4,
        groups: [
          {
            heading: "Veículos",
            href: "#",
            links: [
              { label: "Homologação e Aprovação", href: "/hub/homologacao-e-aprovacao" },
              { label: "Cancelamento Matrícula", href: "/veiculos/cancelamento-matricula" },
              { label: "Cancelamento Temporário Matrícula", href: "/veiculos/cancelamento-temporario-matricula" },
              { label: "Certidões de Veículos", href: "/veiculos/certidoes-de-veiculos" },
              { label: "Certificado Matrícula", href: "/veiculos/certificado-matricula" },
              { label: "Classificação em Portagens", href: "/veiculos/classificacao-em-portagens" },
              { label: "Documentos Apreendidos", href: "/veiculos/documentos-apreendidos" },
              { label: "Economia de Combustível", href: "/veiculos/economia-de-combustivel" },
              { label: "Identificação Veículos", href: "/veiculos/identificacao-veiculos" },
              { label: "Inspeção de Veículos", href: "/hub/inspecao-de-veiculos" },
              { label: "Pesquisa Centros Inspeção", href: "/texto/pesquisa-centros-inspecao" },
              { label: "Matrícula", href: "/hub/matricula" },
              { label: "Registo de Propriedade – Pedidos Apreensão", href: "/veiculos/registo-de-propriedade-pedidos-apreensao" },
              { label: "Veículos Elétricos", href: "/veiculos/veiculos-eletricos" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "SERVIÇOS ÀS EMPRESAS",
    light: false,
    columns: [
      {
        width: 4,
        groups: [
          {
            heading: "Escolas de Condução e Entidades Formadoras",
            href: "/hub/escolas-de-conducao-e-entidades-formadoras",
            links: [
              { label: "Dispositivos de Monitorização do Ensino Prático Certificados", href: "/texto/dispositivos-de-monitorizacao-do-ensino-pratico-certificados" },
              { label: "Partilha de Veículos", href: "/texto/partilha-de-veiculos" },
              { label: "Transferência de Candidato a Condutor", href: "/texto/transferencia-de-candidato-a-condutor" },
              { label: "Alteração do Pacto Social", href: "/texto/alteracao-do-pacto-social" },
              { label: "Transmissão de Propriedade", href: "/texto/transmissao-de-propriedade" },
              { label: "Mudança/Alteração de Instalações", href: "/texto/mudanca-alteracao-de-instalacoes" },
              { label: "Alteração dos Elementos da EEEC", href: "/texto/alteracao-dos-elementos-da-eeec" },
              { label: "Ampliação do Âmbito de Ensino", href: "/texto/ampliacao-do-ambito-de-ensino" },
              { label: "Certificação Profissional", href: "/texto/certificacao-profissional-escolas-conducao" },
              { label: "Entidades Formadoras", href: "/texto/entidades-formadoras" },
              { label: "Localização Escolas Condução", href: "/texto/localizacao-escolas-conducao" },
              { label: "Manuais Ensino Condução", href: "/texto/manuais-ensino-conducao" },
              { label: "Deliberações e Despachos", href: "/texto/deliberacoes-despachos" },
              { label: "Softwares do tipo sala Virtual", href: "/texto/softwares-do-tipo-sala-virtual" },
            ],
          },
        ],
      },
      {
        width: 4,
        groups: [
          {
            heading: "Veículos",
            href: "#",
            links: [
              { label: "Homologação", href: "/hub/homologacao-e-aprovacao" },
              { label: "Cancelamento Matrícula", href: "/veiculos/cancelamento-matricula" },
              { label: "Cancelamento Temporário Matrícula", href: "/veiculos/cancelamento-temporario-matricula" },
              { label: "Certidões de Veículos", href: "/veiculos/certidoes-de-veiculos" },
              { label: "Certificado Matrícula", href: "/veiculos/certificado-matricula" },
              { label: "Classificação em Portagens", href: "/veiculos/classificacao-em-portagens" },
              { label: "Documentos Apreendidos", href: "/veiculos/documentos-apreendidos" },
              { label: "Economia de Combustível", href: "/veiculos/economia-de-combustivel" },
              { label: "Identificação Veículos", href: "/veiculos/identificacao-veiculos" },
              { label: "Inspeção de Veículos", href: "/hub/inspecao-de-veiculos" },
              { label: "Centros de Inspeção – Abertura", href: "/hub/centros-de-inspecao-abertura" },
              { label: "Pesquisa Centros Inspeção", href: "/texto/pesquisa-centros-inspecao" },
              { label: "Matrícula", href: "/hub/matricula" },
              { label: "Registo de Propriedade – Pedidos Apreensão", href: "/veiculos/registo-de-propriedade-pedidos-apreensao" },
              { label: "Veículos Elétricos", href: "/veiculos/veiculos-eletricos" },
              { label: "Homologação de Ambulâncias e Transformação de Veículos Especiais para Bombeiros", href: "/texto/homologacao-de-ambulancias-e-transformacao-de-veiculos-especiais-para-bombeiros" },
            ],
          },
        ],
      },
      {
        width: 4,
        groups: [
          {
            heading: "Acesso à Atividade",
            href: "#",
            links: [
              { label: "Licenciamento Empresa Exploradora – Escola Condução", href: "/texto/licenciamento-empresa-exploradora-escola-conducao" },
              { label: "Aberturas de Escolas de Condução Pendentes", href: "/texto/licenciamentos-pendentes" },
              { label: "Licenciamento de Empresas – Transporte Rodoviário", href: "/hub/licenciamento-de-empresas-transporte-rodoviario" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "TRANSPORTES E INFRAESTRUTURAS",
    light: true,
    columns: [
      {
        width: 3,
        groups: [
          {
            heading: "Transportes Rodoviários",
            href: "/hub/rodoviario",
            links: [
              { label: "RJSPTP", href: "/texto/rjsptp" },
              { label: "Transporte em Táxi", href: "/texto/transporte-em-taxi" },
              { label: "TVDE", href: "/hub/tvde" },
              { label: "Transporte Mercadorias", href: "/texto/transporte-mercadorias" },
              { label: "Transporte Passageiros Autocarro", href: "/texto/transporte-passageiros-autocarro" },
              { label: "Transporte Coletivo Crianças", href: "/texto/transporte-coletivo-criancas" },
              { label: "Transporte Passageiros Flexível", href: "/texto/transporte-passageiros-flexivel" },
              { label: "Produtos Alimentares Perecíveis", href: "/texto/produtos-alimentares-pereciveis" },
              { label: "Veículos Pronto-Socorro", href: "/texto/veiculos-pronto-socorro" },
              { label: "Aluguer Veículos Sem Condutor", href: "/texto/aluguer-veiculos-sem-condutor" },
              { label: "Atividade Transitária", href: "/texto/atividade-transitaria" },
              { label: "Entidades Formadoras", href: "/texto/entidades-formadoras" },
              { label: "Empresas Licenciadas", href: "/texto/empresas-licenciadas" },
              { label: "Títulos Habilitantes das Atividades", href: "/texto/titulos-habilitantes-das-atividades" },
              { label: "Regulamentação em Matéria Social", href: "/texto/regulamentacao-em-materia-social" },
              { label: "Registo Eletrónico Nacional", href: "/texto/registo-eletronico-nacional" },
              { label: "Tacógrafo Digital", href: "/texto/tacografo-digital" },
            ],
          },
        ],
      },
      {
        width: 3,
        groups: [
          {
            heading: "Infraestruturas Rodoviárias",
            href: "/hub/infraestruturas-rodoviarias",
            links: [
              { label: "Rede Rodoviária", href: "/hub/rede-rodoviaria" },
              { label: "Direitos dos Utentes", href: "/texto/direitos-dos-utentes" },
              { label: "Inovação e Normalização", href: "/texto/inovacao-e-normalizacao" },
              { label: "Serviços Eletrónicos de Portagem", href: "/texto/servicos-eletronicos-de-portagem" },
              { label: "Auditores de Segurança Rodoviária", href: "/texto/auditores-de-seguranca-rodoviaria" },
            ],
          },
          {
            heading: "Ferroviário",
            href: "/hub/ferroviario",
            links: [
              { label: "Caminho de Ferro", href: "/texto/caminho-de-ferro" },
              { label: "Metropolitanos", href: "/texto/metropolitanos" },
              { label: "Direitos dos Passageiros", href: "/texto/direitos-dos-passageiros" },
              { label: "Autoridade Nacional de Segurança Ferroviária", href: "/hub/ansf" },
            ],
          },
          {
            heading: "Mercadorias Perigosas",
            href: "/hub/transporte-de-mercadorias-perigosas",
            links: [],
          },
        ],
      },
      {
        width: 3,
        groups: [
          {
            heading: "Marítimo-Portuário",
            href: "/hub/maritimo-portuario",
            links: [
              { label: "Armador Nacional", href: "/texto/armador-nacional" },
              { label: "Armador de Tráfego Local", href: "/texto/armador-de-trafego-local" },
              { label: "Gestor de Navios", href: "/texto/gestor-de-navios" },
              { label: "Agente de Navegação", href: "/texto/agente-de-navegacao" },
              { label: "Empresa de Trabalho Portuário", href: "/texto/empresas-de-trabalho-portuario" },
              { label: "Pesagem de Contentores", href: "/texto/pesagem-de-contentores" },
              { label: "Portos (em atualização)", href: "#" },
              { label: "Transportes Marítimos", href: "/texto/transportes-maritimos" },
              { label: "Espaço Marítimo Europeu (em atualização)", href: "#" },
              { label: "Convenção HNS", href: "/texto/convencao-hns" },
            ],
          },
          {
            heading: "Infraestruturas Aeroportuárias",
            href: "/hub/infraestruturas-aeroportuarias",
            links: [
              { label: "NAL – Novo Aeroporto de Lisboa", href: "/nal-novo-aeroporto-de-lisboa" },
              { label: "Aeroportos", href: "/texto/aeroportos" },
            ],
          },
        ],
      },
      {
        width: 3,
        groups: [
          {
            heading: "Planeamento",
            href: "#",
            links: [
              { label: "Documentos de Referência", href: "/texto/documentos-de-referencia" },
              { label: "Mobilidade Sustentável", href: "/hub/mobilidade-sustentavel" },
              { label: "Mobilidade Ativa", href: "/hub/mobilidade-ativa" },
              { label: "Mobilidade Digital", href: "/hub/mobilidade-digital" },
              { label: "Plano Ferroviário Nacional", href: "/texto/plano-ferroviario-nacional" },
              { label: "Projetos Financiados", href: "/texto/projetos-financiados" },
            ],
          },
          {
            heading: "Fiscalização e Tarifários",
            href: "#",
            links: [
              { label: "Títulos de Transporte e Tarifas", href: "/texto/titulos-de-transporte-e-tarifas" },
              { label: "Agentes de Fiscalização", href: "/texto/agentes-de-fiscalizacao" },
            ],
          },
          {
            heading: "Digitalização e Inovação no Transporte de Mercadorias",
            href: "#",
            links: [{ label: "Regulamento eFTI", href: "/texto/digitalizacao-e-inovacao-no-transporte-de-mercadorias" }],
          },
        ],
      },
    ],
  },
];
