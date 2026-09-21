const BASE = "https://www.imt-ip.pt";

function questionGroups(prefix, count, ext = "pdf") {
  return Array.from({ length: count }, (_, i) => ({
    label: count === 1 ? "grupo de questões" : `grupo de questões ${i + 1}`,
    href: `${BASE}/wp-content/uploads/IMTT/Portugues/Condutores/PerguntasExames/Documents/${prefix}${i + 1}${ext}`,
  }));
}

export const textPages = {
  "caminho-de-ferro": {
    title: "Caminho de Ferro",
    blocks: [
      { type: "h", text: "Licenciamento de Empresas" },
      {
        type: "p",
        text: "Para aceder à atividade de transporte ferroviário, as empresas devem ser titulares de Licença adequada ao tipo de serviço a realizar, emitida por entidade competente. Sem Licença válida, ou fora do âmbito da mesma, a prestação de serviços de transporte ferroviário é proibida. As Licenças são autorizações genéricas de acesso à atividade, válidas em todo o espaço comunitário.",
      },
      {
        type: "p",
        text: "O IMT é a entidade competente para a emissão de Licenças, com validade máxima de 5 anos, renovável, podendo ser requeridas por empresas estabelecidas em Portugal. Existem Licenças de serviço de transporte ferroviário de passageiros e de mercadorias.",
      },
      { type: "h", text: "Requisitos" },
      {
        type: "ul",
        items: [
          "Idoneidade;",
          "Capacidade financeira;",
          "Capacidade técnica;",
          "Seguro de responsabilidade civil, nos termos do Decreto-Lei n.º 124-A/2018, de 31 de dezembro.",
        ],
      },
    ],
  },

  metropolitanos: {
    title: "Metropolitanos",
    blocks: [
      {
        type: "p",
        text: "Compete ao IMT exercer de forma continuada e direta as atribuições de regulação, supervisão e fiscalização dos sistemas de metropolitano, contribuindo para a racionalização e gestão das entidades que os exploram.",
      },
      { type: "h", text: "Metro de Lisboa" },
      {
        type: "p",
        text: "Compete ao IMT verificar a conformidade dos procedimentos que conduzem à entrada em serviço de novos troços e estações do Metropolitano de Lisboa, através de protocolo de entendimento que regula as relações entre as partes, analisando a conformidade das instalações, o pessoal com funções relevantes para a segurança, e a organização e gestão da atividade, qualidade, segurança, manutenção e responsabilidade civil.",
      },
      { type: "h", text: "Metro do Porto" },
      {
        type: "p",
        text: "Criada em 6 de agosto de 1993, a Metro do Porto, S.A. explora, como concessionária, um sistema de Metro Ligeiro na Área Metropolitana do Porto, em regime de serviço público. O IMT participa nos trabalhos da Comissão de Acompanhamento da Concessão do Metro do Porto (CAMP), que acompanha o reconhecimento da entidade operadora e as condições de operação do sistema.",
      },
    ],
  },

  "direitos-dos-passageiros": {
    title: "Direitos dos Passageiros",
    blocks: [
      { type: "h", text: "Direitos dos Passageiros Ferroviários — Regulamento (CE) n.º 1371/2007" },
      {
        type: "p",
        text: "O Regulamento (CE) n.º 1371/2007 estabelece um quadro harmonizado de regras mínimas, aplicáveis a todas as viagens e serviços ferroviários na Comunidade, garantindo aos passageiros os seguintes direitos:",
      },
      {
        type: "ul",
        items: [
          "Não discriminação no acesso ao transporte, independentemente da nacionalidade, local de residência ou deficiência;",
          "Mobilidade — acessibilidade e assistência sem custos adicionais para passageiros com deficiência ou mobilidade reduzida;",
          "Informação antes da compra e nas várias fases da viagem, nomeadamente em caso de perturbações;",
          "Reembolso da totalidade do preço do bilhete em caso de atraso considerável ou anulação;",
          "Reencaminhamento ou nova reserva em caso de perturbações da viagem;",
          "Assistência em caso de atraso considerável à partida ou em pontos de paragem intermédios.",
        ],
      },
    ],
  },

  "armador-nacional": {
    title: "Armador Nacional",
    blocks: [
      {
        type: "p",
        text: "Armador nacional é a pessoa singular ou coletiva, com domicílio ou sede em Portugal, que se dedica à atividade de transporte marítimo e que, para o efeito, se encontra inscrita no IMT.",
      },
      { type: "h", text: "Inscrição" },
      {
        type: "ul",
        items: [
          "Certidão permanente (sociedade) ou documento de identificação civil (empresário em nome individual);",
          "Certificado de registo criminal;",
          "Certidão de não dívida às Finanças e declaração de não dívida à Segurança Social;",
          "Documentação dos navios explorados (certificado de registo, ou contrato de afretamento se de terceiros);",
          "Informação dos tráfegos ou serviços a prestar.",
        ],
      },
      {
        type: "p",
        text: "A inscrição faz-se mediante requerimento Mod. 36B, enviado para maritimo-portuario@imt-ip.pt. Taxa: 285,20 €. O cancelamento da inscrição pode ser pedido pelo próprio ou determinado pelo IMT quando a atividade não é exercida há mais de um ano.",
      },
    ],
  },

  "armador-de-trafego-local": {
    title: "Armador de Tráfego Local",
    blocks: [
      {
        type: "p",
        text: "Armador de tráfego local é a pessoa singular ou coletiva, com domicílio ou sede em Portugal, que efetua transportes de passageiros ou mercadorias no âmbito da navegação local, com embarcações registadas no tráfego local e inscrita no IMT.",
      },
      { type: "h", text: "Inscrição" },
      {
        type: "ul",
        items: [
          "Certidão permanente (sociedade) ou documento de identificação civil (empresário em nome individual);",
          "Certificado de registo criminal;",
          "Certidão de não dívida às Finanças e declaração de não dívida à Segurança Social;",
          "Informação dos serviços a prestar e documentação das embarcações (certificado de registo/título de propriedade e certificado de navegabilidade, ou contrato de afretamento).",
        ],
      },
      {
        type: "p",
        text: "A inscrição faz-se mediante requerimento Mod. 36C, enviado para maritimo-portuario@imt-ip.pt. Taxa: 285,20 €.",
      },
    ],
  },

  "gestor-de-navios": {
    title: "Gestor de Navios",
    blocks: [
      {
        type: "p",
        text: "Gestor de navios é aquele que, contratualmente, é encarregue pelo armador da prática dos atos jurídicos e materiais necessários para que o navio fique em condições de empreender viagem, nomeadamente: selecionar, recrutar e promover a contratação de tripulações; executar diligências relacionadas com a gestão de armamento das embarcações; promover a celebração de contratos e a contratação de seguros marítimos; e praticar atos relacionados com o aprovisionamento e a manutenção do navio.",
      },
      { type: "h", text: "Inscrição" },
      {
        type: "ul",
        items: [
          "Certidão permanente (sociedade) ou documento de identificação civil (empresário em nome individual);",
          "Certificado de registo criminal;",
          "Certidão de não dívida às Finanças e declaração de não dívida à Segurança Social.",
        ],
      },
    ],
  },

  "agente-de-navegacao": {
    title: "Agente de Navegação",
    blocks: [
      {
        type: "p",
        text: "Agentes de navegação são as pessoas singulares e coletivas regularmente constituídas que, em representação do armador ou do transportador marítimo e por sua conta e ordem, praticam os atos previstos no artigo 3.º do Decreto-Lei n.º 264/2012.",
      },
      { type: "h", text: "Inscrição" },
      {
        type: "ul",
        items: [
          "Certidão permanente (sociedade) ou documento de identificação civil (empresário em nome individual);",
          "Certificado de registo criminal;",
          "Certidão de não dívida às Finanças e declaração de não dívida à Segurança Social.",
        ],
      },
    ],
  },

  "empresas-de-trabalho-portuario": {
    title: "Empresa de Trabalho Portuário",
    blocks: [
      {
        type: "p",
        text: "Empresa de trabalho portuário é a pessoa coletiva cuja atividade consiste exclusivamente na cedência de trabalhadores qualificados para o exercício das diferentes tarefas portuárias de movimentação de cargas.",
      },
      {
        type: "p",
        text: "O exercício desta atividade depende do preenchimento de requisitos de natureza técnica, económica e financeira, sendo o licenciamento da competência do IMT, nos termos da Portaria n.º 178/94, de 29 de março. Enquadramento legal: Decreto-Lei n.º 280/93, de 13 de agosto (Regime Jurídico do Trabalho Portuário), e Decreto Regulamentar n.º 2/94, de 28 de janeiro.",
      },
    ],
  },

  "pesagem-de-contentores": {
    title: "Pesagem de Contentores",
    blocks: [
      { type: "h", text: "Peso Bruto Verificado (VGM)" },
      {
        type: "p",
        text: "Desde 1 de julho de 2016, o embarque de contentores consolidados só é permitido mediante informação prévia do respetivo peso bruto verificado (VGM), por exigência do aditamento à Regra 2 do Capítulo VI da Convenção SOLAS, concretizado em novembro de 2014.",
      },
      {
        type: "p",
        text: "O Decreto-Lei n.º 51/2016, de 23 de agosto, regula as condições para obtenção do peso bruto verificado e fixa as condições para credenciação das entidades que utilizem o Método 2. A Portaria n.º 239/2016 admite discrepâncias entre o peso verificado pelo carregador e o obtido no terminal portuário; a Deliberação n.º 21/2017 aprova os requisitos mínimos para certificação do processo de pesagem.",
      },
    ],
  },

  "transportes-maritimos": {
    title: "Transportes Marítimos",
    blocks: [
      {
        type: "linkgroup",
        heading: "Consultar",
        links: [{ label: "Cabotagem Nacional", href: `${BASE}/rodoviario/maritimo-portuario/cabotagem-nacional/` }],
      },
    ],
  },

  "convencao-hns": {
    title: "Convenção HNS",
    blocks: [
      {
        type: "p",
        text: "O IMT desenvolve os trabalhos preparatórios para a adesão do Estado português à Convenção internacional sobre a responsabilidade e a indemnização por danos ligados ao transporte por mar de substâncias nocivas e potencialmente perigosas (Convenção HNS — hazardous and noxious substances).",
      },
      {
        type: "p",
        text: "A Convenção visa fornecer compensação adequada, rápida e pronta por danos a pessoas e bens, custos de limpeza e reposição, e perdas económicas resultantes de incidentes durante o transporte marítimo de cargas HNS. Assume particular importância para Portugal devido à densidade do tráfego de navios no mar territorial e na Zona Económica Exclusiva (ZEE), cobrindo danos no território português, na ZEE, e danos causados por navios registados ou autorizados a arvorar bandeira portuguesa, incluindo as medidas de salvaguarda aplicadas para prevenir ou minimizar danos.",
      },
    ],
  },

  aeroportos: {
    title: "Aeroportos",
    blocks: [
      {
        type: "docsection",
        heading: "Documentos",
        docs: [
          {
            name: "Relatório Expansão Aeroporto Humberto Delgado",
            href: `${BASE}/wp-content/uploads/2026/02/Relatorio-Expansao-Aeroporto-Humberto-Delgado_ANA-Aeroportos_20250731_compressed.pdf`,
          },
          { name: "Resposta do Concedente", href: `${BASE}/wp-content/uploads/2026/02/Oficio-ANA_Resposta-a-entrega-do-Masterplan_20251104.pdf` },
        ],
      },
    ],
  },

  rjsptp: {
    title: "RJSPTP",
    blocks: [
      {
        type: "p",
        text: "A Lei n.º 52/2015, de 9 de junho, aprovou o Regime Jurídico do Serviço Público do Transporte de Passageiros (RJSPTP), que representa uma profunda alteração do modelo institucional de planeamento e gestão do serviço público de transporte de passageiros e do quadro legal de organização do respetivo mercado em Portugal.",
      },
      {
        type: "p",
        text: "Compete ao IMT apoiar as autoridades de transporte — Câmaras Municipais, Comunidades Intermunicipais e Áreas Metropolitanas — bem como os operadores de transporte, na implementação do RJSPTP, disponibilizando os textos do diploma legal, as deliberações de execução e orientações práticas sobre esta matéria.",
      },
      {
        type: "linkgroup",
        heading: "Deliberações do Conselho Diretivo",
        links: [
          {
            label: "5 de agosto de 2020 — Registo de dados dos operadores de transporte fluvial no STePP/SIGGESC",
            href: `${BASE}/wp-content/uploads/2025/01/deliberacao_fluvial.pdf`,
          },
          {
            label: "5 de agosto de 2020 — Registo de dados dos operadores de transporte ferroviário no STePP/SIGGESC",
            href: `${BASE}/wp-content/uploads/2025/01/deliberacao_ferroviario.pdf`,
          },
          { label: "5 de agosto de 2020 — Alargamento dos prazos para submissão dos dados anuais", href: `${BASE}/wp-content/uploads/2025/01/deliberacao_alargamento_prazo.pdf` },
          {
            label: "30 de novembro de 2018 — SIGGESC: procedimentos para pedidos de registo/alteração de serviços",
            href: `${BASE}/wp-content/uploads/2025/01/SIGGESC-DeliberacaoIMT_nov2018.pdf`,
          },
        ],
        note: "Consulte o arquivo completo de deliberações no site do IMT.",
      },
    ],
  },

  "transporte-em-taxi": {
    title: "Transporte em Táxi",
    blocks: [
      { type: "h", text: "Licenciamento de Empresas — Operador de Táxi" },
      {
        type: "p",
        text: "O Decreto-Lei n.º 101/2023, de 31 de outubro, estabelece o regime jurídico do serviço público de transporte de passageiros em veículos ligeiros (táxi). A atividade de operador de táxi só pode ser exercida por empresas licenciadas pelo IMT, titulada por alvará intransmissível, válido por 5 anos e renovável.",
      },
      {
        type: "ul",
        items: ["Requisitos: situação fiscal e contributiva regularizada; idoneidade.", "Pedido de emissão ou renovação: exclusivamente através do Portal de Serviços."],
      },
      {
        type: "ul",
        items: ["Emissão de alvará: 90 €", "Renovação do alvará: 70 €", "2ªs vias: 30 €"],
      },
      { type: "h", text: "Certificação de Gerentes" },
      {
        type: "p",
        text: "A Lei n.º 5/2013, de 22 de janeiro, eliminou os requisitos de idoneidade e capacidade técnica/profissional dos responsáveis das empresas de táxi, passando a exigir-se apenas capacidade financeira.",
      },
      { type: "h", text: "Certificação Profissional — Certificado de Motorista de Táxi (CMT)" },
      {
        type: "p",
        text: "Para exercer a atividade de motorista de táxi é necessário obter o CMT, emitido pelo IMT, o que exige: carta de condução de categoria B com averbamento do Grupo 2, escolaridade obrigatória, domínio da língua portuguesa, registo criminal sem determinados crimes, conclusão de formação inicial (125 horas) e aprovação no exame final organizado pelo IMT.",
      },
    ],
  },

  "transporte-mercadorias": {
    title: "Transporte Mercadorias",
    blocks: [
      { type: "h", text: "Licenciamento de Empresas" },
      {
        type: "p",
        text: "A atividade de transportes rodoviários de mercadorias por conta de outrem, de âmbito nacional ou internacional, em veículos de peso bruto igual ou superior a 2.500 kg, só pode ser exercida por empresas licenciadas pelo IMT, titulada por alvará ou licença comunitária, válidos por 5 anos.",
      },
      {
        type: "ul",
        items: [
          "Idoneidade do gestor de transportes e administradores/gerentes;",
          "Capacidade profissional do gestor de transportes;",
          "Capacidade financeira: 9.000 € no primeiro veículo, 5.000 € (pesado) ou 900 € (ligeiro) por veículo adicional;",
          "Situação tributária e contributiva regularizada;",
          "Estabelecimento estável e efetivo em território nacional.",
        ],
      },
      {
        type: "ul",
        items: ["Alvará ou Licença Comunitária: 350 €", "Renovação: 250 €", "Averbamento: 10 €", "2ªs vias: 30 €"],
      },
      { type: "p", text: "Pedidos através do Portal de Serviços; pagamento por referência Multibanco ou MB Way." },
    ],
  },

  "transporte-passageiros-autocarro": {
    title: "Transporte Passageiros Autocarro",
    blocks: [
      { type: "h", text: "Licenciamento de Empresas" },
      {
        type: "p",
        text: "A atividade de transportes públicos em veículos pesados de passageiros (autocarro), de âmbito nacional ou internacional, só pode ser exercida por pessoas singulares ou coletivas licenciadas pelo IMT, titulada por alvará ou licença comunitária, válidos por 5 anos.",
      },
      {
        type: "ul",
        items: [
          "Idoneidade do gestor de transportes e administradores/gerentes;",
          "Capacidade profissional do gestor de transportes;",
          "Capacidade financeira: 9.000 € no primeiro veículo, 5.000 € por veículo adicional;",
          "Estabelecimento estável e efetivo em território nacional.",
        ],
      },
      {
        type: "ul",
        items: ["Alvará ou Licença Comunitária: 350 €", "Renovação: 250 €"],
      },
      { type: "p", text: "Pedidos de emissão/renovação através do Portal de Serviços; alterações por formulário eletrónico." },
    ],
  },

  "transporte-coletivo-criancas": {
    title: "Transporte Coletivo Crianças",
    blocks: [
      { type: "h", text: "Licenciamento de Empresas" },
      {
        type: "p",
        text: "A atividade de transporte coletivo de crianças e jovens até aos 16 anos, de e para estabelecimentos de educação, creches, jardins-de-infância e atividades educativas ou formativas, só pode ser exercida, como atividade principal, por pessoas singulares ou coletivas licenciadas pelo IMT, titulada por alvará válido por 5 anos.",
      },
      {
        type: "p",
        text: "Requisito de acesso: idoneidade (todos os administradores, gerentes ou diretores, ou a própria pessoa singular). É também permitido a entidades que efetuem este transporte como atividade acessória, mediante prova de que a atividade principal implica o transporte de crianças.",
      },
      {
        type: "ul",
        items: ["Alvará: 90 €", "Renovação: 70 €", "Alteração/averbamento: 10 €", "2ªs vias: 30 €"],
      },
      { type: "p", text: "Pedido inicial, renovação ou alteração exclusivamente por formulário eletrónico." },
    ],
  },

  "transporte-passageiros-flexivel": {
    title: "Transporte Passageiros Flexível",
    blocks: [
      { type: "h", text: "Acesso à Atividade" },
      {
        type: "p",
        text: "O transporte de passageiros flexível caracteriza-se pela adaptabilidade às necessidades dos utilizadores, permitindo flexibilidade nos itinerários, horários, paragens ou tipologia do veículo. Aplica-se a situações de baixa procura do transporte público regular, ou quando este (ou o táxi) não responde às necessidades dos cidadãos — regiões de baixa densidade, períodos noturnos ou de fim de semana.",
      },
      {
        type: "p",
        text: "O serviço pode ser prestado por meios próprios das autoridades de transportes, ou mediante contrato entre o operador e a autoridade de transportes competente, que fixa o tarifário e as condições de exploração. O início da prestação está sujeito a atribuição (iniciativa da autoridade) ou autorização (iniciativa do operador).",
      },
    ],
  },

  "produtos-alimentares-pereciveis": {
    title: "Produtos Alimentares Perecíveis",
    blocks: [
      { type: "h", text: "Empresas e Veículos" },
      {
        type: "p",
        text: "As empresas que realizam transporte rodoviário de produtos alimentares perecíveis não carecem de licenciamento específico do IMT. Quando esse transporte é realizado como atividade de transporte de mercadorias por conta de outrem, aplica-se o regime de Transporte de Mercadorias.",
      },
      {
        type: "p",
        text: "Os veículos também não carecem de licenciamento específico, mas as caixas/equipamentos especializados podem requerer aprovação prévia, evidenciada pelo Certificado ATP.",
      },
      { type: "h", text: "Regulamentação Técnica" },
      {
        type: "p",
        text: "O Certificado ATP é obrigatório para equipamentos montados em veículos que realizam transportes internacionais de produtos perecíveis sob temperatura dirigida. Para transportes exclusivamente nacionais, a certificação é obrigatória apenas se a largura do veículo exceder 2,55 m (podendo atingir 2,60 m com certificado ATP); abaixo desse limite, a certificação tem caráter voluntário.",
      },
    ],
  },

  "veiculos-pronto-socorro": {
    title: "Veículos Pronto-Socorro",
    blocks: [
      { type: "h", text: "Licenciamento de Empresas" },
      {
        type: "p",
        text: "A atividade de prestação de serviços em veículos pronto-socorro só pode ser exercida em território nacional mediante comunicação prévia ao IMT, identificando a empresa, os veículos utilizados, se a atividade é principal ou acessória, e comprovando a regularidade contributiva.",
      },
      {
        type: "p",
        text: "Os veículos utilizados devem ser homologados e matriculados para o efeito pelo IMT e ostentar um dístico de identificação.",
      },
      {
        type: "ul",
        items: [
          "Modelo 15 IMT;",
          "Fotocópia do cartão de pessoa coletiva ou de empresário em nome individual;",
          "Certidão da Conservatória do Registo Comercial;",
          "Documentos dos veículos a utilizar (cópia do DUA);",
          "Certidões da Administração Fiscal e da Segurança Social.",
        ],
      },
      { type: "p", text: "Atualmente não está prevista a cobrança de taxa por este acesso à atividade." },
    ],
  },

  "aluguer-veiculos-sem-condutor": {
    title: "Aluguer Veículos Sem Condutor",
    blocks: [
      { type: "h", text: "Rent-a-Car" },
      {
        type: "p",
        text: "A atividade de aluguer de veículos ligeiros de passageiros sem condutor (rent-a-car) está sujeita a comunicação prévia com prazo ao IMT, através do Portal Único de Serviços Digitais (Decreto-Lei n.º 181/2012, de 6 de agosto, e alterações posteriores).",
      },
      {
        type: "ul",
        items: [
          "Idoneidade dos gerentes, administradores ou diretores (ou da pessoa singular);",
          "Número mínimo de veículos: 7 automóveis ligeiros ou 3 motociclos/ciclomotores/triciclos/quadriciclos, com no máximo 5 anos de idade;",
          "Estabelecimento fixo em território nacional.",
        ],
      },
    ],
  },

  "atividade-transitaria": {
    title: "Atividade Transitária",
    blocks: [
      { type: "h", text: "Licenciamento de Empresas" },
      {
        type: "p",
        text: "A atividade transitária só pode ser exercida por sociedades comerciais licenciadas pelo IMT, titulada por alvará válido por 5 anos, renovável, mediante comprovação de capacidade financeira (50.000 €) e seguro de responsabilidade civil (não inferior a 100.000 €).",
      },
      {
        type: "ul",
        items: [
          "Certidão da Conservatória do Registo Comercial (CAE 52250, 52262, 52310 ou 52261);",
          "Certidão da apólice de seguro de responsabilidade civil, com cobertura mínima de 100.000 €.",
        ],
      },
      {
        type: "ul",
        items: ["Alvará: 350 €", "Renovação: 250 €", "Alteração/averbamento: 10 €"],
      },
    ],
  },

  "empresas-licenciadas": {
    title: "Empresas Licenciadas",
    blocks: [
      {
        type: "p",
        text: "O IMT disponibiliza, por ordem alfabética e por localidade postal, os registos de empresas licenciadas nas várias atividades de transporte rodoviário reguladas pelo Instituto.",
      },
      {
        type: "ul",
        items: [
          "Empresas de Transporte em Táxi;",
          "Empresas de Transporte Pesado de Passageiros (nacional/internacional e exclusivamente nacional);",
          "Empresas com Certificado para Transporte Pesado Particular de Passageiros;",
          "Empresas de Transporte Coletivo de Crianças (atividade principal ou acessória);",
          "Empresas de Aluguer sem Condutor de Veículos de Passageiros (Rent-a-Car/Sharing);",
          "Empresas de Transporte de Mercadorias (nacional/internacional e exclusivamente nacional);",
          "Empresas de Pronto-Socorro;",
          "Empresas de Aluguer sem Condutor de Veículos de Mercadorias.",
        ],
      },
    ],
  },

  "titulos-habilitantes-das-atividades": {
    title: "Títulos Habilitantes das Atividades",
    blocks: [
      {
        type: "p",
        text: "A Deliberação n.º 585/2012, de 23 de abril (alterada pelas Deliberações n.º 1538/2014 e n.º 702/2018), harmonizou e simplificou os alvarás, licenças, autorizações e certificados emitidos aos operadores de transporte e atividades complementares, unificando a numeração dos títulos emitidos pelo IMT.",
      },
      { type: "h", text: "Modelos aprovados" },
      {
        type: "ul",
        items: [
          "Transporte em táxis — Mod. 302 IMT e Mod. 323 IMT;",
          "Transporte pesado de passageiros nacional e internacional — Mod. 104 IMT e Mod. 104C IMT;",
          "Transporte pesado de passageiros exclusivamente nacional — Mod. 300, 320 e 324 IMT;",
          "Transporte particular pesado de passageiros nacional e internacional — Mod. 105 IMT;",
          "Serviços regulares nacionais/internacionais de passageiros — Mod. 330 e 106 IMT;",
          "Serviços ocasionais nacionais/internacionais — Mod. 332 e 107 IMT;",
          "Serviços expresso — Mod. 331 IMT;",
          "Transporte coletivo de crianças — Mod. 301 e 321 IMT;",
          "Transporte de doentes — Mod. 328 IMT;",
          "Transporte de mercadorias nacional e internacional — Mod. 103 IMT e Mod. 103C IMT.",
        ],
      },
    ],
  },

  "regulamentacao-em-materia-social": {
    title: "Regulamentação em Matéria Social",
    blocks: [
      {
        type: "p",
        text: "A legislação e regulamentação europeia em matéria social no domínio dos transportes rodoviários visa harmonizar as condições de concorrência entre empresas, melhorar as condições de trabalho dos condutores e promover a segurança rodoviária, através da fixação de tempos máximos de condução, tempos mínimos de pausa e repouso, proibição de certas modalidades de pagamento que agravem o risco de fadiga, e reforço dos mecanismos de controlo e sanções.",
      },
      {
        type: "p",
        text: "Face às transformações técnicas e jurídicas do setor nas últimas duas décadas, nomeadamente por força do Pacote da Mobilidade I, o quadro normativo foi atualizado e unificado no Decreto-Lei n.º 84/2026, de 13 de abril, que concentra toda a matéria social no domínio dos transportes rodoviários e as regras relativas ao tacógrafo.",
      },
    ],
  },

  "registo-eletronico-nacional": {
    title: "Registo Eletrónico Nacional",
    blocks: [
      { type: "h", text: "Registo Eletrónico Nacional dos Transportadores Rodoviários / Registo Europeu (REETR)" },
      {
        type: "p",
        text: "O Regulamento (CE) n.º 1071/2009, alterado pelo Regulamento (UE) 2020/1055, estabelece regras comuns para os requisitos de exercício da atividade de transportador rodoviário de mercadorias e de passageiros. O IMT disponibiliza a plataforma de consulta ao Registo Eletrónico Nacional dos Transportadores Rodoviários, permitindo consultar o nome e forma jurídica da empresa, o endereço do estabelecimento, os gestores de transportes, o tipo de autorização/licenciamento, o número da Licença Comunitária ou Alvará e os veículos afetos à frota.",
      },
      {
        type: "linkgroup",
        heading: "Consultar",
        links: [{ label: "Plataforma ERRU / REETR", href: "https://erru.imt-ip.pt/" }],
      },
    ],
  },

  "tacografo-digital": {
    title: "Tacógrafo Digital",
    blocks: [
      {
        type: "p",
        text: "O tacógrafo digital, ou aparelho de controlo, é um equipamento instalado em veículos de transporte rodoviário para indicar, registar e memorizar dados relativos à condução e aos tempos de trabalho e repouso dos condutores.",
      },
      {
        type: "p",
        text: "É obrigatório nos veículos afetos ao transporte rodoviário de passageiros ou mercadorias matriculados em Portugal desde 1 de maio de 2006, com as exceções previstas no Regulamento (CE) n.º 561/2006. Desde 15 de junho de 2019, os veículos novos devem ter tacógrafo digital de 2.ª geração (tacógrafo inteligente), com novos cartões tacográficos de 2.ª geração — os cartões de 1.ª geração mantêm-se compatíveis e não precisam de substituição.",
      },
      {
        type: "p",
        text: "O cartão de condutor e o cartão de empresa têm validade de 5 anos; os cartões de centro de ensaio devem ser revalidados anualmente. A renovação não é automática — deve ser solicitada preferencialmente no IMTOnline ou presencialmente num balcão do IMT.",
      },
    ],
  },

  "direitos-dos-utentes": {
    title: "Direitos dos Utentes",
    blocks: [
      { type: "h", text: "Contraordenações e Portagens" },
      {
        type: "p",
        text: "O IMT só tem competência para infrações praticadas até 31 de dezembro de 2011; pedidos de esclarecimento sobre estes processos mais antigos devem ser feitos exclusivamente por email (imt@imt-ip.pt).",
      },
      {
        type: "p",
        text: "O IMT não detém informação sobre valores em dívida de portagens associados a uma matrícula, nem é responsável pela emissão de notificações de cobrança. Os registos de portagens por regularizar podem ser consultados nos portais das respetivas concessionárias/operadoras (Pagamento de Portagens, Ascendi, Via Livre/Paytolls, Slora), 30 dias após a passagem.",
      },
      {
        type: "p",
        text: "A cobrança de portagens e o regime sancionatório por falta de pagamento seguem um faseamento legal: uma fase inicial de pagamento voluntário do valor da taxa e dos custos administrativos associados, nos termos do artigo 10.º da Lei n.º 25/2006, de 30 de junho.",
      },
    ],
  },

  "inovacao-e-normalizacao": {
    title: "Inovação e Normalização",
    blocks: [
      { type: "h", text: "Inovação no Setor" },
      {
        type: "p",
        text: "O atual grau de execução do Plano Rodoviário Nacional determina o fim de um ciclo de construção de novas infraestruturas e o início de uma nova etapa no setor rodoviário — de estradas inteligentes, seguras e de qualidade.",
      },
      {
        type: "p",
        text: "Desde 2009, o Instituto colabora ativamente na definição dos objetivos e linhas de orientação para a implementação de Sistemas de Transporte Inteligentes (ITS) ao nível nacional, alinhando Portugal com as tendências europeias e representando o país em entidades supragovernamentais como a CEDR, a PIARC ou o EasyWay, que promovem a sustentabilidade económica e ambiental e a redução do congestionamento e da sinistralidade através dos ITS.",
      },
    ],
  },

  "servicos-eletronicos-de-portagem": {
    title: "Serviços Eletrónicos de Portagem",
    blocks: [
      {
        type: "p",
        text: "O Decreto-Lei n.º 84-C/2022, de 9 de dezembro, transpõe a Diretiva (UE) 2019/520, relativa à interoperabilidade dos sistemas eletrónicos de portagem rodoviária, promovendo o uso destes sistemas nos Estados-Membros e contribuindo para uma política de cobrança rodoviária à escala da União.",
      },
      {
        type: "p",
        text: "O diploma estabelece os direitos e deveres dos principais intervenientes — fornecedores, portageiras e utilizadores — e revê a legislação em matéria de portagens, nomeadamente a interoperabilidade nacional e o acesso à atividade de fornecedor de serviços eletrónicos de portagens. Cria também o serviço eletrónico nacional de portagem, dando continuidade e melhorando a eficiência do sistema de identificação eletrónica de veículos já em funcionamento em Portugal, país pioneiro nesta área a nível europeu.",
      },
    ],
  },

  "auditores-de-seguranca-rodoviaria": {
    title: "Auditores de Segurança Rodoviária",
    blocks: [
      {
        type: "p",
        text: "A necessidade de prevenir riscos associados à infraestrutura rodoviária levou ao estabelecimento de procedimentos de gestão específicos — avaliações de impacte sobre a segurança rodoviária, auditorias de segurança rodoviária (ASR), inspeções de segurança rodoviária e classificação e gestão da segurança da rede em serviço — e à obrigatoriedade de formação dos Auditores de Segurança Rodoviária, nos termos da Lei n.º 49/2014 e da Portaria n.º 300/2021.",
      },
      {
        type: "p",
        text: "O Auditor de Segurança Rodoviária é a pessoa singular detentora de título profissional válido, a quem compete avaliar estudos e projetos na ótica da segurança rodoviária. O IMT publica a listagem dos auditores com título profissional válido, por ordem alfabética de nome e de concelho de residência.",
      },
    ],
  },

  biblioteca: {
    title: "Biblioteca",
    blocks: [
      {
        type: "p",
        text: "Tem por missão tratar, conservar, divulgar e comunicar bibliografia sobre o transporte terrestre e as infraestruturas de transporte, mobilidade e ligação entre os diferentes modos, incidindo sobre o planeamento e a atividade reguladora e operacional. Concentra documentação relativa à homologação e certificação de veículos e equipamentos afetos aos sistemas de transporte, e também temáticas relacionadas com o ensino e habilitação de condutores.",
      },
      { type: "h", text: "Fundo Documental" },
      {
        type: "p",
        text: "Criado a partir do acervo do antigo Gabinete de Estudos e Planeamento dos Transportes Terrestres, o Fundo Documental da Biblioteca do IMT reúne e trata desde 1966 documentação do setor dos transportes. Informatizado a partir de 1991, compreende monografias, revistas e artigos técnico-científicos, legislação, estatísticas, textos normativos, relatórios de organismos públicos e privados e outra informação relevante para o setor.",
      },
      { type: "h", text: "Serviços prestados" },
      {
        type: "ul",
        items: [
          "Acesso a bases de dados bibliográfica e de legislação nacional, comunitária e de interesse histórico;",
          "Consulta da documentação, sem limite no número de itens, em papel ou suportes alternativos;",
          "Empréstimo de publicações (limitado ao utilizador interno);",
          "Fornecimento de pesquisas bibliográficas, legislativas e normativas, a pedido;",
          "Reprodução de documentos, dentro das normas em vigor.",
        ],
      },
      {
        type: "linkgroup",
        heading: "Consultar",
        links: [
          { label: "Bases de Dados", href: `${BASE}/biblioteca/bases-de-dados/` },
          { label: "Reportório Geral", href: `${BASE}/biblioteca/reportorio-geral/` },
          { label: "Reportório IMT", href: `${BASE}/biblioteca/repertorio-imt/` },
          { label: "Reportório IMTT (2008-2012)", href: `${BASE}/biblioteca/repertorio-imtt-2008-2012/` },
          { label: "Reportório IMTT (< 2008)", href: `${BASE}/biblioteca/repertorio-imtt-2008/` },
          { label: "Produtos Bibliográficos", href: `${BASE}/biblioteca/produtos-bibliograficos/` },
          { label: "Recursos Documentais Externos", href: `${BASE}/biblioteca/recursos-documentais-externos/` },
        ],
      },
    ],
  },

  "arquivo-historico": {
    title: "Arquivo Histórico",
    blocks: [
      {
        type: "p",
        text: "O IMT, enquanto organismo sucessor de entidades extintas relacionadas com a atividade dos transportes e da mobilidade, detém um conjunto de fundos de arquivo relevantes para o estudo do caminho de ferro e do transporte rodoviário em veículos ligeiros e pesados, de passageiros e mercadorias.",
      },
      {
        type: "p",
        text: "O Arquivo Histórico do IMT tem por missão reunir, tratar e disponibilizar os fundos documentais arquivísticos à guarda e produzidos pelo Instituto e pelos organismos que lhe deram origem. Do seu acervo faz também parte material fotográfico, iconográfico e cartográfico, cronologicamente situado entre 1852 e finais dos anos 80.",
      },
      { type: "h", text: "Fundo Documental — 9 grupos principais de arquivo" },
      {
        type: "ul",
        items: [
          "Caminhos de Ferro do Estado (CFE), 1899–1927 — construção e exploração ferroviária do Norte, Alentejo e Algarve, arrendados à CP em 1927;",
          "Fundo Especial de Caminhos de Ferro (FECF), 1899–1951 — financiamento da construção e conservação das infraestruturas ferroviárias;",
          "Direção-Geral dos Caminhos de Ferro (DGCF), 1918–1951 — estudo, regulamentação e fiscalização da atividade ferroviária;",
          "Conselho Superior dos Caminhos de Ferro (CSCF), 1926–1945 — competências consultivas sobre planos setoriais, tarifas e material circulante;",
          "Direção-Geral dos Serviços de Viação (DGSV), 1933–1951 — licenciamento de condutores e veículos e regulamentação do transporte rodoviário;",
          "Conselho Superior de Transportes Terrestres (CSTT), 1945–1972 — pareceres sobre concessões de carreiras de autocarros e contingente de táxis;",
          "Direção-Geral de Transportes Terrestres (DGTT), 1951–1972 — regulamentação, licenciamento e fiscalização de veículos e infraestruturas;",
          "Fundo Especial de Transportes Terrestres (FETT), 1951–1986 — centralização e redistribuição de recursos financeiros do setor;",
          "Gabinete de Estudos e Planeamento dos Transportes Terrestres (GEPT), 1961–1971 — mais de 600 estudos e relatórios sobre regulamentação, segurança e mobilidade.",
        ],
      },
    ],
  },

  "codigo-de-boa-conduta-para-a-prevencao-e-combate-ao-assedio-no-trabalho": {
    title: "Código de Boa Conduta para a Prevenção e Combate ao Assédio no Trabalho",
    blocks: [
      {
        type: "p",
        text: "A Lei n.º 73/2017, de 16 de agosto, reforçou o quadro legislativo para a prevenção da prática de assédio no trabalho, tanto no setor privado como na Administração Pública, impondo ao empregador público a adoção de códigos de conduta para a prevenção e combate ao assédio no trabalho e a instauração de procedimentos disciplinares sempre que tiver conhecimento de alegadas situações de assédio.",
      },
      {
        type: "p",
        text: "O Código de Boa Conduta para a Prevenção e Combate ao Assédio no Trabalho tem como finalidade a prevenção e combate da prática de assédio moral e sexual no trabalho, contribuindo para que o local de trabalho seja reconhecido como um exemplo de integridade, responsabilidade e rigor, e assegurando o direito a condições de trabalho que respeitem a dignidade individual dos trabalhadores.",
      },
      {
        type: "docsection",
        heading: "Documento",
        docs: [
          {
            name: "Código de Boa Conduta para a Prevenção e Combate ao Assédio no Trabalho",
            href: `${BASE}/wp-content/uploads/2026/02/Codigo_BoaCondutaPrevenc_Combate_AssedioTrabalho_compressed.pdf`,
          },
        ],
      },
    ],
  },

  "politica-de-utilizacao-de-sistemas-de-videovigilancia": {
    title: "Política de Utilização de Sistemas de Videovigilância",
    blocks: [
      {
        type: "p",
        text: "O Instituto da Mobilidade e dos Transportes, I.P., opera, nas suas instalações, um sistema de proteção por vídeo, para segurança dos seus trabalhadores, utentes, fornecedores, edifícios, bens e informações.",
      },
      {
        type: "p",
        text: "A Política de Utilização de Sistemas de Videovigilância indica as medidas de salvaguarda a que o IMT, I.P., recorre para proteger os dados pessoais, a privacidade e outros direitos fundamentais e interesses legítimos das pessoas observadas pelas câmaras.",
      },
      {
        type: "docsection",
        heading: "Documento",
        docs: [
          {
            name: "Política de Utilização de Sistemas de Videovigilância",
            href: `${BASE}/wp-content/uploads/2025/01/PolticaDeUtilizacaoDeSistemasDeVideovigilancia.pdf`,
          },
        ],
      },
    ],
  },

  quar: {
    title: "QUAR",
    blocks: [
      {
        type: "p",
        text: "O Quadro de Avaliação e Responsabilização (QUAR) traduz a missão, os objetivos estratégicos e operacionais, os indicadores de desempenho e as metas fixadas para o IMT em cada ano de gestão.",
      },
      {
        type: "docsection",
        heading: "QUAR — IMT",
        docs: [
          { name: "QUAR 2025", href: `${BASE}/wp-content/uploads/2026/05/QUAR-2025_Versao-2.0_abril-2026.pdf` },
          { name: "QUAR 2024", href: `${BASE}/wp-content/uploads/2026/05/QUAR_2024_Avaliacao_Aprovado-pela-Tutela.pdf` },
          { name: "QUAR 2023", href: `${BASE}/wp-content/uploads/2025/04/Quadro-de-Avaliacao-e-Responsabilizacao-2023.pdf` },
        ],
      },
      {
        type: "p",
        text: "Estão também disponíveis os QUAR de 2022, 2021 e 2020, bem como os anteriores organismos IMTT (2010–2011) e InIR (2010–2011).",
      },
    ],
  },

  "plano-de-atividades": {
    title: "Plano de Atividades",
    blocks: [
      {
        type: "p",
        text: "O Plano de Atividades estabelece anualmente os objetivos, as ações e os recursos previstos para o desenvolvimento da atividade do IMT.",
      },
      {
        type: "docsection",
        heading: "Planos de Atividades",
        docs: [
          { name: "Plano de Atividades 2025", href: `${BASE}/wp-content/uploads/2026/05/Plano_Atividades_2025.pdf` },
          { name: "Plano de Atividades 2024", href: `${BASE}/wp-content/uploads/2025/04/Plano-de-Atividades-ano-2024-Aprovado-Tutela-04.01.2025.pdf` },
          { name: "Plano de Atividades 2023", href: `${BASE}/wp-content/uploads/2025/04/Plano-de-Atividades-ano-2023-Aprovado-Tutela-31.10.2023.pdf` },
        ],
      },
      {
        type: "p",
        text: "Os planos de anos anteriores, desde 2017, encontram-se igualmente disponíveis para consulta.",
      },
    ],
  },

  "relatorio-de-atividades": {
    title: "Relatório de Atividades",
    blocks: [
      {
        type: "p",
        text: "O Relatório de Atividades apresenta o balanço anual da execução do Plano de Atividades e dos resultados alcançados pelo IMT.",
      },
      {
        type: "docsection",
        heading: "Relatórios de Atividades",
        docs: [
          { name: "Relatório de Atividades 2024", href: `${BASE}/wp-content/uploads/2026/05/Relatorio-Atividades-IMT-VF_Marco-2026.pdf` },
          { name: "Relatório de Atividades 2023", href: `${BASE}/wp-content/uploads/2025/04/Relatorio-Anual-Atividades_2023_aprovado-Tutela-04.01.2025.pdf` },
          { name: "Relatório de Atividades 2022", href: `${BASE}/wp-content/uploads/2025/04/Relatorio-de-Atividades-ano-2022.pdf` },
        ],
      },
    ],
  },

  "balanco-social": {
    title: "Balanço Social",
    blocks: [
      {
        type: "p",
        text: "O Balanço Social carateriza anualmente os recursos humanos do IMT, incluindo a sua composição, formação, mobilidade e condições de trabalho.",
      },
      {
        type: "docsection",
        heading: "Balanço Social",
        docs: [
          { name: "Balanço Social do IMT — 2025", href: `${BASE}/wp-content/uploads/2026/04/BALANCO_SOCIAL_2025_Relatorio_VF.pdf` },
          { name: "Balanço Social do IMT — 2024", href: `${BASE}/wp-content/uploads/2026/03/BALANCO_SOCIAL_2024_Relatorio_retificado.pdf` },
          { name: "Balanço Social do IMT — 2023", href: `${BASE}/wp-content/uploads/2025/04/BALANCO_SOCIAL_2023_Relatorio_VF-1.pdf` },
        ],
      },
    ],
  },

  "documentos-de-gestao-financeira": {
    title: "Documentos de Gestão Financeira",
    blocks: [
      {
        type: "p",
        text: "Reúne os documentos de prestação de contas, os relatórios de gestão e as declarações de pagamentos e recebimentos em atraso do IMT.",
      },
      {
        type: "docsection",
        heading: "Prestação de Contas — Relatório de Gestão e Contas",
        docs: [
          { name: "Relatório de Gestão e Contas 2024", href: `${BASE}/wp-content/uploads/2026/02/Relatorio-de-Gestao-2024-IMT_VF_11-12-2025_assinado.pdf` },
          { name: "Relatório de Gestão e Contas 2023", href: `${BASE}/wp-content/uploads/2026/02/Relatorio-de-Gestao-2023.pdf` },
        ],
      },
      {
        type: "docsection",
        heading: "Pagamentos e Recebimentos em Atraso",
        docs: [
          { name: "Declaração de Pagamentos em Atraso — 31/12/2025", href: `${BASE}/wp-content/uploads/2026/08/Declaracao-de-pagamentos-em-atraso-existentes-em-31-12-2025.pdf` },
          { name: "Declaração de Pagamentos em Atraso — 31/12/2024", href: `${BASE}/wp-content/uploads/2026/08/Declaracao-de-pagamentos-em-atraso-existentes-em-31-12-2024.pdf` },
        ],
      },
    ],
  },

  "uniao-europeia": {
    title: "União Europeia",
    blocks: [
      {
        type: "p",
        text: "A União Europeia é uma união económica e política, constituída por 27 países europeus, que em conjunto abarcam grande parte do continente europeu. A sua antecessora foi a Comunidade Económica Europeia (CEE), criada pelo Tratado de Roma de 1957, com a finalidade de estabelecer um mercado comum europeu. Os Estados signatários foram seis: Alemanha Ocidental, Bélgica, França, Itália, Luxemburgo e Países Baixos.",
      },
      {
        type: "p",
        text: "Portugal é Estado-Membro desde 1 de janeiro de 1986 — o Tratado de Adesão foi assinado a 12 de junho de 1985, no Mosteiro dos Jerónimos. Em 1993, a Comunidade Económica Europeia (CEE) passou a chamar-se União Europeia (UE). O Reino Unido foi o único Estado-Membro a sair da União Europeia, em 31 de janeiro de 2020.",
      },
      {
        type: "linkgroup",
        heading: "Instituições Europeias",
        links: [
          { label: "Parlamento Europeu", href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/uniao-europeia/parlamento-europeu/` },
          { label: "Conselho Europeu", href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/uniao-europeia/conselho-europeu/` },
          { label: "Conselho da União Europeia", href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/uniao-europeia/conselho-da-uniao-europeia/` },
          { label: "Comissão Europeia", href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/uniao-europeia/comissao-europeia/` },
          { label: "Legislação Europeia", href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/uniao-europeia/legislacao-europeia/` },
          { label: "Mecanismo Interligar a Europa", href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/uniao-europeia/mecanismo-interligar-a-europa/` },
          { label: "Factos e Números sobre a União Europeia", href: "https://european-union.europa.eu/principles-countries-history/facts-and-figures-european-union_pt" },
        ],
      },
    ],
  },

  "relacoes-bilaterais": {
    title: "Relações Bilaterais",
    blocks: [
      {
        type: "p",
        text: "O IMT mantém um conjunto de instrumentos bilaterais de cooperação técnica e científica nos domínios rodoviário, ferroviário, aéreo e marítimo-portuário, celebrados com Estados da Comunidade dos Países de Língua Portuguesa (CPLP) — como Angola, através de protocolos com o Instituto de Estradas de Angola e acordos de transporte aéreo — bem como com outros Estados parceiros.",
      },
      {
        type: "p",
        text: "Estes instrumentos visam o estreitamento de relações entre entidades homólogas, a partilha de boas práticas e o desenvolvimento da cooperação técnica entre os países envolvidos.",
      },
    ],
  },

  "organizacoes-e-associacoes-internacionais": {
    title: "Organizações e Associações Internacionais",
    blocks: [
      {
        type: "p",
        text: "O IMT assegura a representação nacional num conjunto de plataformas e redes internacionais, nas quais são debatidos os principais desafios e soluções das diferentes vertentes do setor da mobilidade e dos transportes, através da participação em organizações de carácter transversal e em entidades com enfoque num dado modo de transporte ou em vertentes mais específicas do setor.",
      },
      {
        type: "linkgroup",
        heading: "Consultar",
        links: [
          {
            label: "Organizações Multilaterais",
            href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/organizacoes-e-associacoes-internacionais/organizacoes-multilaterais/`,
          },
          {
            label: "Associações e Fóruns Internacionais",
            href: `${BASE}/assuntos-europeus-e-relacoes-internacionais/organizacoes-e-associacoes-internacionais/associacoes-e-foruns-internacionais/`,
          },
        ],
      },
    ],
  },

  "dispositivos-de-monitorizacao-do-ensino-pratico-certificados": {
    title: "Dispositivos de Monitorização do Ensino Prático Certificados",
    blocks: [
      {
        type: "p",
        text: "A obrigatoriedade de registo da formação prática de condução em equipamento próprio encontra-se prevista no n.º 5 do art.º 6.º da Lei n.º 14/2014, de 18 de março, bem como no n.º 3 do art.º 25.º da Portaria n.º 185/2015, de 23 de junho, os quais estabelecem que os veículos de instrução devem estar equipados com dispositivo de monitorização das lições de prática de condução certificado pelo IMT.",
      },
      {
        type: "p",
        text: "Por Deliberação do Conselho Diretivo do IMT, IP, de 10 de maio de 2017, foi determinado que a data limite para instalação e utilização dos referidos equipamentos é 1 de setembro de 2017.",
      },
      { type: "h", text: "Dispositivos certificados" },
      {
        type: "ul",
        items: [
          "GesMoove, Gescola, TekCarta, FM-Pro4 — Paulo J. Silva, Unipessoal, Lda.",
          "Alsis, TekCarta, FM-Tco4 — Tecnologias Imaginadas, S.A.",
          "BDrive, Alsis, Telenix — ANIECA (Associação Nacional de Escolas de Condução Automóvel)",
          "SCAP, AgeOnline — PTWARE, Lda.",
          "E-Drive, ALSIS — CONPLAN, Consultores de Planeamento, Lda.",
        ],
      },
    ],
  },

  "partilha-de-veiculos": {
    title: "Partilha de Veículos",
    blocks: [
      { type: "h", text: "Associação de Empresas Exploradoras de Escolas de Condução na Ministração de Teoria de Pesados" },
      {
        type: "p",
        text: "Procedimento: comunicação 30 dias após a sua efetivação. A EEEC que ministra o ensino de condução de veículos pesados pode associar-se a EEEC com âmbito de ensino restrito de motociclos e ligeiros, para a ministração de ensino teórico das categorias C1, C, D1 ou D.",
      },
      {
        type: "p",
        text: "A sala teórica para a ministração destas categorias deve estar adaptada com o equipamento pedagógico mínimo constante do ponto 2 do anexo V da Portaria n.º 185/2015, de 23 de junho. Não há lugar ao pagamento de taxa; a documentação deve ser entregue no Núcleo de Condutores das Direções Regionais.",
      },
      {
        type: "p",
        text: "Enquadramento legal: Lei n.º 14/2014, de 18 de março (artigo 31.º); Portaria n.º 185/2015, de 23 de junho (artigo 15.º).",
      },
    ],
  },

  "transferencia-de-candidato-a-condutor": {
    title: "Transferência de Candidato a Condutor",
    blocks: [
      {
        type: "p",
        text: "Procedimento: comunicação efetuada pelo diretor da escola de condução de destino, no prazo de 2 dias — direito que assiste ao candidato a condutor.",
      },
      {
        type: "ul",
        items: [
          "Declaração do diretor da escola de condução de destino a comunicar a transferência do candidato;",
          "Declaração de concordância do candidato a condutor.",
        ],
      },
      {
        type: "p",
        text: "A comunicação de transferência é também enviada à escola de condução de origem, cujo diretor tem 5 dias para enviar à escola de destino o atestado médico do candidato e a informação referente ao ensino da condução já ministrado. Não há lugar ao pagamento de taxa.",
      },
      {
        type: "p",
        text: "Enquadramento legal: Lei n.º 14/2014, de 18 de março (artigo 27.º); Portaria n.º 185/2015, de 23 de junho (artigo 12.º).",
      },
    ],
  },

  "alteracao-do-pacto-social": {
    title: "Alteração do Pacto Social",
    blocks: [{ type: "p", text: "Formulário para comunicação de alteração do pacto social de uma empresa exploradora de escola de condução." }],
    docs: [{ name: "Alteração do Pacto Social", href: `${BASE}/wp-content/uploads/2025/01/FP_cessao-de-quotas-n.o-8-4-AMA-3.pdf` }],
  },

  "transmissao-de-propriedade": {
    title: "Transmissão de Propriedade",
    blocks: [
      { type: "h", text: "Transmissão de Escola de Condução" },
      {
        type: "p",
        text: "Procedimento: comunicação até 30 dias após a sua efetivação. A EEEC adquirente deve comunicar a transmissão, indicando as empresas envolvidas, a localização da escola, o âmbito de ensino, os instrutores e os veículos de instrução afetos.",
      },
      {
        type: "p",
        text: "A transmissão só é admitida para empresa já licenciada como EEEC. Caso a transmissão seja feita para entidade ainda não licenciada, o licenciamento é prévio à transmissão e corre nos serviços centrais. Não há lugar ao pagamento de taxa.",
      },
    ],
  },

  "mudanca-alteracao-de-instalacoes": {
    title: "Mudança/Alteração de Instalações",
    blocks: [{ type: "p", text: "Consulte a lista atualizada das Escolas de Condução em processo de mudança de instalações." }],
    docs: [{ name: "Escolas de Condução em Processo de Mudança de Instalações", href: `${BASE}/wp-content/uploads/2026/08/Mudanca-Instalacoes_04-08-2026.pdf` }],
  },

  "alteracao-dos-elementos-da-eeec": {
    title: "Alteração dos Elementos da EEEC",
    blocks: [{ type: "p", text: "Formulário para comunicação de alteração dos elementos da EEEC (Empresa Exploradora de Escola de Condução)." }],
    docs: [
      {
        name: "Alteração dos Elementos da EEEC",
        href: `${BASE}/wp-content/uploads/2025/01/FP_alteracao-elementos-licenca-EEEC-n.o-5-1AMA.pdf`,
      },
    ],
  },

  "ampliacao-do-ambito-de-ensino": {
    title: "Ampliação do Âmbito de Ensino",
    blocks: [{ type: "p", text: "Formulário para pedido de ampliação do âmbito de ensino de uma escola de condução." }],
    docs: [
      { name: "Ampliação do Âmbito de Ensino", href: `${BASE}/wp-content/uploads/2025/01/FP_ampliacao-do-ambito-de-ensino-n.o-6-2-AMA.pdf` },
    ],
  },

  "certificacao-profissional-escolas-conducao": {
    title: "Certificação Profissional",
    blocks: [
      { type: "p", text: "A certificação profissional para o Ensino da Condução é exigida ao exercício da profissão de Instrutor, Diretor e Examinador." },
      { type: "h", text: "Instrutor" },
      { type: "p", text: "Em atualização." },
      { type: "h", text: "Diretor" },
      { type: "p", text: "Em atualização." },
      { type: "h", text: "Examinador" },
      { type: "p", text: "Em atualização." },
    ],
  },

  "entidades-formadoras": {
    title: "Entidades Formadoras",
    blocks: [
      { type: "h", text: "Certificação de Entidades Formadoras" },
      {
        type: "p",
        text: "Compete ao IMT a certificação de entidades formadoras que pretendam ministrar formação inicial ou de reciclagem para conselheiros de segurança e condutores de mercadorias perigosas. A certificação é concedida pelo período de cinco anos, renovável por iguais períodos mediante a comprovação de que se mantêm os requisitos da regulamentação aplicável e da Deliberação n.º 517/2018.",
      },
      {
        type: "p",
        text: "Os pedidos de certificação ou renovação (com antecedência mínima de um mês) devem incluir, entre outros elementos: o Requerimento Modelo 13 IMT, comprovativo de certificação pela DGERT, comprovativos de situação tributária e contributiva regularizadas, e a identificação dos locais e meios didáticos e pedagógicos de formação.",
      },
      { type: "h", text: "Taxas (Portaria n.º 1165/2010)" },
      {
        type: "ul",
        items: [
          "Certificação ou renovação de certificação de entidade formadora: 350 €;",
          "Por cada curso de formação de conselheiros de segurança (rodoviário e ferroviário): 150 €;",
          "Curso de formação base de condutores: 120 €;",
          "Cada curso de formação de especializações: 120 €.",
        ],
      },
    ],
  },

  "localizacao-escolas-conducao": {
    title: "Localização Escolas Condução",
    blocks: [{ type: "p", text: "Conteúdo em atualização." }],
  },

  "manuais-ensino-conducao": {
    title: "Manuais Ensino Condução",
    blocks: [
      {
        type: "p",
        text: "As medidas de reforço da qualidade do ensino dos futuros condutores ministrado nas escolas de condução constituem um objetivo relevante no âmbito das competências e atribuições do IMT.",
      },
      {
        type: "p",
        text: "O IMT elaborou um Manual de suporte à formação de condutores e um Manual de apoio à atividade das escolas de condução, destinados a todos os que, nas suas áreas de atuação, contribuem ou são destinatários do ensino da condução.",
      },
      {
        type: "p",
        text: "O Manual do Ensino da Condução é constituído por uma parte geral, enquadradora, e por uma parte específica, seccionada em fichas autónomas sobre os conteúdos de formação dos candidatos a condutores da categoria B, incluindo textos complementares sobre temáticas mais complexas. O Manual da Qualidade de Serviços do Ensino da Condução define boas práticas e linhas de orientação para a atividade das escolas de condução.",
      },
    ],
  },

  "deliberacoes-despachos": {
    title: "Deliberações e Despachos",
    blocks: [
      {
        type: "linkgroup",
        heading: "Deliberações e despachos recentes",
        links: [
          {
            label: "Despacho n.º 2/PCD/2025 — Relatório da Prova Prática de Instrutores, Composição do Júri e Procedimentos da Prova",
            href: `${BASE}/wp-content/uploads/2025/09/SKM_4051i25090815280.pdf`,
          },
          {
            label: "Despacho n.º 7732/2024 — Conteúdo e duração da ação de formação (artigo 18.º do Regulamento de Habilitação Legal para Conduzir)",
            href: `${BASE}/wp-content/uploads/IMTT/Portugues/EnsinoConducao/Deliberacoes/Documents/A%C3%A7%C3%A3o%20de%20forma%C3%A7%C3%A3o%20artigo%2018%20RHLC.pdf`,
          },
          {
            label: "Deliberação CD — Identificação de candidatos com recurso à aplicação id.gov.pt",
            href: `${BASE}/wp-content/uploads/IMTT/Portugues/EnsinoConducao/Deliberacoes/Documents/Delibera%C3%A7%C3%A3o_CD-id_gov_pt.pdf`,
          },
          {
            label: "Deliberação CD — Certificação de plataformas de ensino à distância",
            href: `${BASE}/wp-content/uploads/IMTT/Portugues/EnsinoConducao/Deliberacoes/Documents/0761_200915160328_001.pdf`,
          },
          {
            label: "Deliberação de 9 de setembro de 2020 — Realização de provas teóricas com tradutor",
            href: `${BASE}/wp-content/uploads/IMTT/Portugues/EnsinoConducao/Deliberacoes/Documents/1400_001.pdf`,
          },
          {
            label: "Deliberação de 28 de dezembro de 2018 — Transformação de veículos para o ensino e exames de condução",
            href: `${BASE}/wp-content/uploads/IMTT/Portugues/EnsinoConducao/Deliberacoes/Documents/delibera%C3%A7%C3%A3o-Z28192601-0001.pdf`,
          },
        ],
        note: "Consulte o arquivo completo de deliberações e despachos anteriores no site do IMT.",
      },
    ],
  },

  "softwares-do-tipo-sala-virtual": {
    title: "Softwares do Tipo Sala Virtual",
    blocks: [
      {
        type: "p",
        text: "O Regime Jurídico do Ensino da Condução, aprovado pela Lei n.º 14/2014, de 18 de março, não prevê disposição legal que determine a obrigatoriedade de aprovar o equipamento pedagógico vulgarmente designado por \"sala virtual\". Contudo, os equipamentos pedagógicos de suporte deste tipo devem estar de acordo com o previsto no anexo V da Portaria n.º 185/2015, de 23 de junho.",
      },
    ],
  },

  "procedimentos-e-documentacao": {
    title: "Procedimentos e Documentação",
    blocks: [
      {
        type: "p",
        text: "Antes de solicitar a alteração de características ou o duplicado do certificado de matrícula, confirme que o veículo está devidamente registado na Conservatória do Registo Automóvel, com os dados do proprietário — nome e morada — atualizados e sem qualquer pendência legal.",
      },
    ],
  },

  "homologacao-de-ambulancias-e-transformacao-de-veiculos-especiais-para-bombeiros": {
    title: "Homologação de Ambulâncias e Transformação de Veículos Especiais para Bombeiros",
    blocks: [
      {
        type: "p",
        text: "O IMT publica informação sobre os procedimentos a seguir nos processos de homologação individual e matrícula de veículos do tipo ambulância, e de transformação individual de veículos para o tipo Veículo Especial para Bombeiros. Os procedimentos correspondentes entraram em vigor a partir de 1 de setembro de 2019.",
      },
      {
        type: "docsection",
        heading: "Documentos",
        docs: [
          {
            name: "Homologação Individual e Matrícula de Ambulâncias",
            href: `${BASE}/wp-content/uploads/IMTT/Portugues/Noticias/Documents/2019/Noticia%20-%20%20Homologacao-Ambulancias-Transformacao-Veiculos-Especiais-Bombeiros/Informa%C3%A7%C3%A3o%20-%20Homologa%C3%A7%C3%A3o%20individual%20e%20matricula%20de%20ambul%C3%A2ncias%20(Ed1).pdf`,
          },
          {
            name: "Veículo Especial para Bombeiros",
            href: `${BASE}/wp-content/uploads/IMTT/Portugues/Noticias/Documents/2019/Noticia%20-%20%20Homologacao-Ambulancias-Transformacao-Veiculos-Especiais-Bombeiros/Informa%C3%A7%C3%A3o%20-%20Veiculo%20Especial%20para%20Bombeiros%20(Ed1).pdf`,
          },
        ],
      },
    ],
  },

  "matricula-de-veiculos-novos": {
    title: "Matrícula de Veículos Novos",
    blocks: [
      {
        type: "p",
        text: "O IMT é a entidade competente junto da qual deve ser requerida a atribuição de matrícula a veículos novos. A pessoa, singular ou coletiva, com legitimidade para proceder à admissão, importação ou introdução de veículos em território nacional deve apresentar o pedido nos Serviços Regionais e Distritais do IMT da área de residência ou sede.",
      },
      {
        type: "p",
        text: "A atribuição de matrícula a automóveis ligeiros novos, de passageiros e de mercadorias, encontra-se simplificada na União Europeia sempre que os veículos correspondam a uma homologação europeia e seja apresentado o respetivo Certificado de Conformidade (COC).",
      },
      { type: "h", text: "Documentos e taxas" },
      {
        type: "ul",
        items: [
          "Com Certificado de Conformidade (COC): Formulário Modelo 9 IMT, original do COC, comprovativo de regularização junto da Alfândega e documento de identificação do requerente — taxa de 45 €;",
          "Sem COC, com Homologação Nacional: certificado técnico do fabricante ou representante legal, além dos restantes documentos — taxa de 45 €;",
          "Sem COC e sem Homologação Nacional: documentação técnica do fabricante emitida pela Administração do país de origem — taxa de 160 € + 45 €.",
        ],
      },
      {
        type: "p",
        text: "O pagamento pode ser efetuado ao balcão (numerário, multibanco ou cheque à ordem de IGCP, E.P.E.) ou pelo correio.",
      },
    ],
  },

  "matricula-para-veiculos-usados": {
    title: "Matrícula para Veículos Usados",
    blocks: [
      {
        type: "p",
        text: "O IMT é a entidade competente junto da qual deve ser requerida a atribuição de matrícula nacional a um veículo usado matriculado noutro país, sendo também da sua competência a troca de matrículas de motociclos e ciclomotores anteriormente matriculados nas câmaras municipais.",
      },
      {
        type: "p",
        text: "Tal como para os veículos novos, a atribuição de matrícula a ligeiros usados encontra-se simplificada na União Europeia quando o veículo dispõe de Certificado de Conformidade (CoC) correspondente a homologação europeia.",
      },
      { type: "h", text: "Documentos" },
      {
        type: "ul",
        items: [
          "Formulário Modelo 9 IMT;",
          "Certificado de Conformidade (CoC) ou fotocópia;",
          "Certificado de Matrícula de origem, autenticado pelos serviços da Alfândega;",
          "Comprovativo da regularização da situação do veículo junto da Alfândega;",
          "Certificado de inspeção modelo 112 emitido por um CITV da categoria B, válido por 90 dias úteis (Decreto-Lei n.º 29/2023, de 5 de maio);",
          "Documento de identificação do requerente.",
        ],
      },
      { type: "p", text: "Taxa: 45 €, paga ao balcão (numerário, multibanco ou cheque) ou pelo correio." },
    ],
  },

  "adquiridos-em-hasta-publica": {
    title: "Adquiridos em Hasta Pública",
    blocks: [
      {
        type: "p",
        text: "A atribuição de matrícula a veículos adquiridos em hasta pública é tratada de forma semelhante à dos veículos importados usados. O pedido deve ser apresentado junto dos Serviços Regionais e Distritais do IMT.",
      },
      { type: "h", text: "Documentos" },
      {
        type: "ul",
        items: [
          "Formulário Modelo 9 IMT;",
          "Documento de identificação do veículo (Livrete + Título de Registo de Propriedade, ou Certificado de Matrícula);",
          "Especificações técnicas ou catálogo;",
          "Certificado de inspeção modelo 112 emitido por um CITV, válido por 90 dias úteis (Decreto-Lei n.º 29/2023, de 5 de maio);",
          "Documento de identificação do requerente.",
        ],
      },
      {
        type: "p",
        text: "Taxa: 45 € (ou 165 € se o veículo não se encontrar homologado), paga ao balcão (numerário, multibanco ou cheque à ordem de IGCP, E.P.E.) ou pelo correio.",
      },
    ],
  },

  "quem-somos": {
    title: "Quem Somos",
    blocks: [
      { type: "h", text: "Órgãos Sociais" },
      { type: "h", text: "Conselho Diretivo" },
      {
        type: "bio",
        name: "João Jesus Caetano",
        title: "Presidente",
        docLink: {
          label: "Despacho de Nomeação",
          href: "https://diariodarepublica.pt/dr/detalhe/despacho/7479-2023-215798897",
        },
        bio: [
          "João Jesus Caetano é Presidente do Instituto da Mobilidade e dos Transportes (IMT) desde setembro de 2022.",
          "Tem uma experiência de 14 anos no setor, tendo sido responsável pelas unidades de Políticas de Inovação e de Investigação do CEiiA – Centro de Engenharia e Desenvolvimento de Produto e Conselheiro da Representação Permanente de Portugal junto da União Europeia (UE).",
          "Durante a presidência portuguesa do Conselho da UE, serviu como presidente do Grupo de Trabalho em Transportes Terrestres.",
          "Tem formação científica em Física, tendo obtido um Ph.D. na Universidade da Carolina do Norte e trabalhado como Investigador Associado na Universidade de Wisconsin, nos Estados Unidos.",
          "Atualmente, é também professor de ciências matemáticas no ISTEC-Lisboa, administrador da Agência Ferroviária da União Europeia (ERA) e membro eleito do Comité Executivo da Associação Mundial da Estrada (PIARC).",
        ],
      },
      {
        type: "bio",
        name: "Pedro Miguel Guerreiro Silva",
        title: "Vogal",
        docLink: {
          label: "Despacho de Nomeação",
          href: "https://dre.pt/application/file/a/172275051",
        },
        bio: [
          "Pedro Miguel Silva é Vogal do Conselho Diretivo do IMT desde setembro de 2021 e Vice-Presidente da Comissão de Planeamento de Emergência dos Transportes Terrestres desde agosto de 2023. É também oficial de ligação do IMT junto do Centro de Coordenação Operacional Nacional, da Autoridade Nacional de Emergência e Proteção Civil, bem como representante deste instituto em vários fóruns internacionais relacionados com a área de veículos e de condutores.",
          "Jurista com 20 anos de experiência na área da segurança rodoviária e transportes, exerceu funções de assessor da presidência da Autoridade Nacional de Segurança Rodoviária, tendo sido também técnico superior na ex-Direção Geral de Viação, na Secretaria-Geral do Ministério da Justiça e no ex-Gabinete de Estudos e Planeamento do Ministério da Justiça.",
          "Licenciado em Direito, com uma pós-graduação em Ciências Jurídico-Administrativas e diversa formação complementar, tem sido orador convidado em fóruns nacionais e internacionais relacionados com a segurança rodoviária e os transportes, sendo também autor de artigos técnicos sobre estas temáticas.",
        ],
      },
      {
        type: "docsection-row",
        sections: [
          {
            heading: "Fiscal Único",
            docs: [
              {
                name: "Despacho de Nomeação",
                href: "https://www.imt-ip.pt/wp-content/uploads/2025/01/NomeacaoFiscalUnico_IMT.pdf",
              },
            ],
          },
          {
            heading: "Dirigentes",
            docs: [
              {
                name: "Dirigentes dos Serviços Centrais",
                href: "https://www.imt-ip.pt/wp-content/uploads/2026/05/DIRIGENTES-DOS-SERVICOS-CENTRAIS.pdf",
              },
              {
                name: "Dirigentes dos Serviços Desconcentrados",
                href: "https://www.imt-ip.pt/wp-content/uploads/2026/04/DIRIGENTES-DOS-SERVICOS-DESCONCENTRADOS.pdf",
              },
            ],
          },
        ],
      },
      {
        type: "docsection",
        heading: "Deliberações / Despachos",
        docs: [
          { name: "Criação/Extinção de Unidades", href: `${BASE}/criacao-extincao-de-unidades/` },
          { name: "Nomeação/Designação de Dirigentes", href: `${BASE}/nomeacao-designacao-de-dirigentes/` },
          { name: "Delegações de Competências", href: `${BASE}/delegacoes-de-competencias/` },
        ],
      },
    ],
  },

  "provas-de-exame": {
    title: "Provas de Exame",
    blocks: [
      {
        type: "docsection",
        heading: "Provas de exame",
        docs: [
          {
            name: "Deliberação – Realização de Provas Teóricas com Tradutor",
            href: "https://www.imt-ip.pt/wp-content/uploads/2025/01/Despacho-Relatorio-da-prova-pratica_30.11.2021.pdf",
          },
        ],
      },
      { type: "h", text: "Identificação do Candidato" },
      {
        type: "p",
        text: "A identificação do examinando é feita através da apresentação de documento de identificação válido e em estado de conservação suficiente para fácil identificação, ou através da informação disponível na app id.gov.",
      },
      {
        type: "p",
        text: "A apresentação dos dados em tempo real perante terceiros através da aplicação id.gov tem um valor jurídico equivalente ao dos documentos originais, desde que aqueles terceiros disponham, no local, dos meios eletrónicos necessários à sua verificação.",
      },
      {
        type: "docsection",
        heading: "Prova de exame com recurso a tradutor",
        docs: [
          {
            name: "Deliberação – Realização de Provas Teóricas com Tradutor",
            href: "https://www.imt-ip.pt/wp-content/uploads/2025/01/4375_230904113648_001.pdf",
          },
          {
            name: "Listagem de Tradutores 2026",
            href: "https://www.imt-ip.pt/wp-content/uploads/2026/09/Lista_tradutores-atualizada-2026.pdf",
          },
        ],
      },
    ],
  },

  "documentos-de-referencia": {
    title: "Documentos de Referência",
    blocks: [
      {
        type: "linkgroup",
        heading: "Consultar documentos",
        links: [
          { label: "Documentos Internacionais", href: `${BASE}/documentos-internacionais/` },
          { label: "Documentos Nacionais", href: `${BASE}/documentos-nacionais/` },
        ],
      },
    ],
  },

  "projetos-financiados": {
    title: "Projetos Financiados",
    blocks: [
      {
        type: "p",
        text: "Através de participação direta, ou como vértice aglutinador da participação de outras entidades nacionais, o IMT tem vindo a assegurar um elevado nível de participação em projetos internacionais de mobilidade e transportes, potenciando o financiamento de ações nacionais e contribuindo para adensar a rede que liga as entidades portuguesas do setor às suas congéneres internacionais.",
      },
      {
        type: "p",
        text: "Esta ampla e constante participação em projetos internacionais tem assegurado um melhor acesso a fontes de financiamento para as iniciativas nacionais, potenciado a partilha internacional de experiências e sido um acelerador de inovação e da adoção de boas práticas.",
      },
      {
        type: "linkgroup",
        heading: "Consultar projetos",
        links: [
          { label: "Projetos Europeus", href: `${BASE}/projetos-europeus/` },
          { label: "Projetos Nacionais", href: `${BASE}/projetos-nacionais/` },
        ],
      },
    ],
  },

  "perguntas-de-exame": {
    title: "Perguntas de Exame",
    blocks: [
      { type: "p", text: "O IMT volta a disponibilizar no seu site as perguntas relativas às provas teóricas dos exames de condução." },
      {
        type: "p",
        text: "São igualmente disponibilizadas as perguntas relativas às provas para obtenção de Certificado de Aptidão de Motorista (CAM) e de Certificado de Motorista de Táxi (CMT).",
      },
      {
        type: "p",
        text: "As perguntas surgem com as imagens relacionadas, sendo também apresentadas respostas alternativas, em que só uma é a resposta certa.",
      },
      {
        type: "p",
        text: "Sempre que necessário, o IMT procederá à alteração, atualização ou substituição das perguntas abaixo divulgadas.",
      },
      { type: "linkgroup", heading: "Condutores", links: questionGroups("rel_", 14, "_condutores.pdf") },
      { type: "linkgroup", heading: "Tratores", links: questionGroups("rel_", 2, "_tratores.pdf") },
      { type: "linkgroup", heading: "CAM", links: questionGroups("rel_", 4, "_CAM's.pdf") },
      { type: "linkgroup", heading: "CMT", links: [{ label: "grupo de questões", href: `${BASE}/wp-content/uploads/2026/02/Perguntas-exame_CMT.pdf` }] },
      {
        type: "linkgroup",
        heading: "TVDE",
        links: [{ label: "grupo de questões", href: `${BASE}/wp-content/uploads/2026/02/perguntas-da-avaliacao-final-TVDEs.pdf` }],
      },
      {
        type: "linkgroup",
        heading: "Instrutor de Condução",
        links: [{ label: "grupo de questões", href: `${BASE}/wp-content/uploads/2026/02/perguntas-de-exames-Instrutores.pdf` }],
      },
      {
        type: "p",
        text: "Está a tirar a carta? Ajude-nos a melhorar o ensino da condução.",
      },
    ],
  },
  "pesquisa-centros-inspecao": {
    title: "Pesquisa Centros Inspeção",
    blocks: [{ type: "p", text: "Precisa de fazer a inspeção? Veja aqui qual o centro mais perto de si." }],
    docs: [{ name: "Lista de Centros de Inspeção Técnica de Veículos (CITV)", href: `${BASE}/wp-content/uploads/2026/02/Lista-CITV-atualizada.pdf` }],
  },
  "centros-de-exame": {
    title: "Centros de Exame",
    blocks: [],
    docs: [
      { name: "Localização dos Centros de Exame do IMT", href: `${BASE}/wp-content/uploads/2026/04/Localizacao-dos-Centros-de-Exames-do-IMT-24042026.pdf` },
      { name: "Localização dos Centros de Exame Privados", href: `${BASE}/wp-content/uploads/2025/04/Centros-de-Exame-Privados.pdf` },
    ],
  },
  siadap: {
    title: "SIADAP",
    blocks: [{ type: "p", text: "Sistema Integrado de Gestão e Avaliação do Desempenho na Administração Pública (SIADAP)." }],
  },
  "outros-documentos": {
    title: "Outros Documentos",
    blocks: [],
    docs: [
      { name: "Encargos relativos a trabalhadores/as (2026)", href: `${BASE}/wp-content/uploads/2026/02/Deliberacao_encargos_signed.pdf` },
      { name: "Encargos relativos a trabalhadores/as (2025)", href: `${BASE}/wp-content/uploads/2025/03/Encargos-relativos-a-trabalhadores-2025.pdf` },
      {
        name: "Designações para o exercício de funções de coordenação de projetos ou atividades (2025)",
        href: `${BASE}/wp-content/uploads/2025/07/Deliberacoes-do-CD-relativas-a-designacao-para-o-exercicio-de-funcoes-coordenacao-de-projetos-ou-atividades-2025.pdf`,
      },
      {
        name: "Lista nominativa de transição | art.º 20.º do DL n.º 88/2023, de 10 de outubro",
        href: `${BASE}/wp-content/uploads/2025/03/ListaNominativaDeTransicaoDL88_2023_10_10.pdf`,
      },
    ],
  },
  "formacao-atividades-transporte": {
    title: "Formação Atividades Transporte",
    blocks: [
      { type: "p", text: "São princípios orientadores da formação no IMT a:" },
      {
        type: "ul",
        items: [
          "Dignificação de todos os profissionais do IMT;",
          "Igualdade de oportunidades no acesso à formação;",
          "Adequação da formação às efetivas necessidades formativas, focadas na criação de valor público conseguido através da prossecução das atribuições do IMT, antecipando o futuro, sempre que possível.",
        ],
      },
      { type: "p", text: "Como objetivos genéricos, a formação no IMT visa:" },
      {
        type: "ul",
        items: [
          "Promover continuamente a aprendizagem;",
          "Melhorar os desempenhos;",
          "Criar novas competências, em sintonia com as perspetivas de evolução do IMT;",
          "Articular as expectativas pessoais e profissionais dos trabalhadores/as com os objetivos do IMT;",
          "Predispor todos os profissionais para processos de mudança;",
          "Reforçar a cultura organizacional.",
        ],
      },
      { type: "p", text: "As orientações estratégicas para a formação são:" },
      {
        type: "ul",
        items: [
          "A melhoria da imagem do IMT na sociedade portuguesa;",
          "A formação para dirigentes;",
          "A formação em competências para antecipar o futuro;",
          "A formação na área do atendimento ao cidadão com vista à melhoria da imagem do IMT;",
          "A formação, em pelo menos uma área pertinente, de todos os trabalhadores/as do IMT;",
          "O desenvolvimento de competências comportamentais fundamentais para que os colaboradores adotem as melhores atitudes e comportamentos no seu desempenho profissional;",
          "O desenvolvimento de competências técnicas, nomeadamente as que decorrem das alterações legislativas nos domínios da gestão de pessoas, contratação pública, gestão financeira e proteção de dados pessoais;",
          "A formação TIC para profissionais;",
          "A aposta em ações desenhadas à medida das necessidades organizacionais (formação interna).",
        ],
      },
    ],
  },
  "plano-de-prevencao-de-riscos-de-corrupcao-e-infracoes-conexas": {
    title: "Plano de Prevenção de Riscos de Corrupção e Infrações Conexas",
    blocks: [
      {
        type: "p",
        text: "O Plano de Prevenção de Riscos de Corrupção e Infrações Conexas integra o programa de cumprimento normativo, na sequência da publicação do Decreto-Lei n.º 109-E/2021, de 9 de dezembro, seguindo as disposições estabelecidas pelo artigo 6.º do Regime Geral de Prevenção da Corrupção.",
      },
      {
        type: "p",
        text: "A execução do Plano está sujeita a controlo, devendo ser produzido, no mês de outubro, relatório de avaliação intercalar, e no mês de abril, relatório de avaliação anual.",
      },
    ],
    docs: [
      { name: "Plano de Prevenção de Riscos de Corrupção e Infrações Conexas 2026-2029", href: `${BASE}/wp-content/uploads/2026/05/PPR_2026-2029_V.2.0.pdf` },
      { name: "Plano de Prevenção de Riscos de Corrupção e Infrações Conexas 2022-2024", href: `${BASE}/wp-content/uploads/2026/05/1.0_PPR_2022-2024.pdf` },
      { name: "Relatório de Avaliação Anual 2022", href: `${BASE}/wp-content/uploads/2026/05/2.1_Relatorio_AA_PPR_2022.pdf` },
      { name: "Relatório de Avaliação Anual 2023", href: `${BASE}/wp-content/uploads/2026/05/2.2_Relatorio_AA_PPR_2023.pdf` },
      { name: "Relatório de Avaliação Anual 2024", href: `${BASE}/wp-content/uploads/2026/05/2.3_Relatorio_AA_PPR_2024.pdf` },
      { name: "Relatório de Avaliação Intercalar 2022", href: `${BASE}/wp-content/uploads/2026/05/3.1_Relatorio_AI_PPR_2022.pdf` },
      { name: "Relatório de Avaliação Intercalar 2023", href: `${BASE}/wp-content/uploads/2026/05/3.2_Relatorio_AI_PPR_2023.pdf` },
      { name: "Relatório de Avaliação Intercalar 2024", href: `${BASE}/wp-content/uploads/2026/05/3.3_Relatorio_AI_PPR_2024.pdf` },
      { name: "Relatório de Avaliação Intercalar 2025", href: `${BASE}/wp-content/uploads/2026/05/3.4_Relatorio_AI_PPR_2025.pdf` },
    ],
  },
  "transparencia-administrativa": {
    title: "Transparência Administrativa",
    blocks: [
      {
        type: "p",
        text: "Em cumprimento do disposto no n.º 1 do artigo 12.º do Regime Geral de Prevenção da Corrupção, anexo ao Decreto-Lei n.º 109-E/2021, de 9 de dezembro, o IMT, I.P. publicita na sua página oficial a seguinte informação:",
      },
      {
        type: "linkgroup",
        heading: "Lei orgânica, órgãos de direção e fiscalização, estrutura orgânica e organograma",
        links: [
          { label: "Diplomas habilitantes", href: "/quem-somos/missao-e-valores" },
          { label: "Órgãos de direção e fiscalização", href: "/texto/quem-somos" },
          { label: "Organograma", href: `${BASE}/wp-content/uploads/2025/03/Organogramas-IMT.pdf` },
        ],
      },
      {
        type: "linkgroup",
        heading: "Documentos de enquadramento estratégico e operacional",
        links: [
          { label: "Instrumentos de Gestão", href: "/hub/instrumentos-de-gestao" },
          { label: "IMT Online / Serviços", href: "https://servicos.imt-ip.pt/login.aspx?ReturnUrl=%2fdefault.aspx" },
        ],
      },
      {
        type: "linkgroup",
        heading: "Plano de atividades, orçamento e contas, relatório de atividades e balanço social",
        links: [
          { label: "Plano de Atividades", href: `${BASE}/instrumentos-de-gestao/plano-de-atividades/` },
          { label: "Relatório de Atividades", href: `${BASE}/instrumentos-de-gestao/relatorio-de-atividades/` },
          { label: "QUAR", href: `${BASE}/instrumentos-de-gestao/quar/` },
          { label: "Balanço Social", href: `${BASE}/instrumentos-de-gestao/balanco-social/` },
          { label: "Documentos de gestão financeira", href: `${BASE}/instrumentos-financeiros/documentos-de-gestao-financeira/` },
        ],
      },
      {
        type: "p",
        text: "Os diplomas legais, instruções e demais documentos aplicáveis às áreas de missão do IMT, I.P. deverão ser consultados nas respetivas áreas disponíveis na página oficial do Instituto.",
      },
      {
        type: "linkgroup",
        heading: "Informação básica sobre direitos e obrigações dos cidadãos",
        note: "Consta do Portal ePortugal enquanto portal único de acesso aos serviços prestados pela Administração Pública.",
        links: [{ label: "Portal ePortugal", href: "https://www.gov.pt/entidades/instituto-da-mobilidade-e-dos-transportes-i.p." }],
      },
      {
        type: "linkgroup",
        heading: "Guias descritivos dos procedimentos administrativos relativos aos bens ou serviços prestados",
        links: [
          { label: "FAQ", href: "/faq" },
          { label: "Manuais IMT Online", href: `${BASE}/manuais-imt-online/` },
          { label: "Formulários", href: `${BASE}/formularios/` },
        ],
      },
      {
        type: "linkgroup",
        heading: "Tabelas atualizadas dos preços dos bens ou serviços prestados",
        links: [
          { label: "Portaria n.º 1165/2010, de 9 de novembro", href: "https://diariodarepublica.pt/dr/detalhe/portaria/1165-2010-309041" },
          { label: "Portaria n.º 97-A/2013, de 4 de março", href: "https://diariodarepublica.pt/dr/detalhe/portaria/97-a-2013-193407" },
        ],
      },
      {
        type: "linkgroup",
        heading: "Compromissos plurianuais e pagamentos e recebimentos em atraso",
        links: [{ label: "Documentos de gestão financeira", href: `${BASE}/instrumentos-financeiros/documentos-de-gestao-financeira/` }],
      },
      {
        type: "linkgroup",
        heading: "Relação dos benefícios e subvenções concedidos",
        links: [{ label: "Subvenções concedidas", href: `${BASE}/instrumentos-financeiros/documentos-de-gestao-financeira/#subvencoes-concedidas` }],
      },
      {
        type: "p",
        text: "Artigo 19.º, n.º 2 do Código de Conduta do IMT, I.P. – As ofertas, em contexto de representação institucional, que constituam ou possam ser interpretadas, pela sua recusa, como uma quebra de respeito interinstitucional, devem ser aceites em nome do IMT, I.P. e comunicadas e/ou entregues ao Conselho Diretivo, no prazo de cinco dias úteis, o qual mantém um registo de acesso público, incluindo a identificação do doador.",
      },
      {
        type: "linkgroup",
        heading: "Relação de doações, heranças, ofertas ou donativos recebidos",
        links: [{ label: "Mapa de Ofertas Institucionais", href: `${BASE}/wp-content/uploads/2026/08/Mapa-Ofertas-Institucionais.pdf` }],
      },
      {
        type: "linkgroup",
        heading: "Avisos sobre o recrutamento de dirigentes e trabalhadores",
        links: [{ label: "Recrutamento", href: "/recursos-humanos/recrutamento" }],
      },
      {
        type: "linkgroup",
        heading: "Avisos sobre os procedimentos pré-contratuais mais relevantes",
        links: [
          {
            label: "Procedimentos em curso",
            href: "https://www.acingov.pt/acingovprod/2/zonaPublica/zona_publica_c/indexProcedimentosActivos/1283",
          },
        ],
      },
      {
        type: "linkgroup",
        heading: "Contactos para interação com o cidadão e as empresas",
        links: [
          { label: "Contactos", href: "/contactos" },
          { label: "Canal do Utilizador (Elogios, sugestões e reclamações)", href: "https://canalutilizador.imt-ip.pt/" },
        ],
      },
      {
        type: "p",
        text: "O IMT, I.P. dispõe de Livro de Reclamações nos serviços de atendimento ao público (Livro Amarelo), cujos contactos poderá consultar na área de contactos.",
      },
    ],
  },
  "politica-de-privacidade": {
    title: "Política de Privacidade e de Proteção de Dados",
    blocks: [
      {
        type: "p",
        text: "A proteção da privacidade e dos dados pessoais constitui um compromisso do IMT, I.P. para com os cidadãos, no âmbito da sua atividade, missão e competências. Esta política aplica-se a todas as práticas de privacidade relacionadas com os portais, sítios online, plataformas de ensino à distância e outros serviços disponibilizados pelo IMT, incluindo o IMT Online e a aplicação Carta de Condução Digital.",
      },
      {
        type: "p",
        text: "Em geral, consultar o site do IMT não obriga ao registo de qualquer informação pessoal do visitante. Já a utilização do portal de serviços (IMT Online) implica o registo e consentimento explícito para a recolha e tratamento dos dados pessoais fornecidos.",
      },
      { type: "h", text: "Tipologia de dados pessoais" },
      {
        type: "p",
        text: "São recolhidos apenas os dados pessoais estritamente necessários à prestação de cada serviço (identificação, contacto, dados relativos a veículos ou cartas de condução, entre outros), consoante o pedido efetuado pelo utilizador.",
      },
      { type: "h", text: "Tratamento de dados pessoais" },
      {
        type: "p",
        text: "O tratamento é realizado com fundamento numa base legal aplicável (cumprimento de obrigação legal, exercício de missão de interesse público ou consentimento), respeitando os princípios da licitude, finalidade, minimização e limitação da conservação previstos no RGPD.",
      },
      { type: "h", text: "Segurança de dados pessoais" },
      {
        type: "p",
        text: "O IMT adota medidas técnicas e organizativas adequadas para proteger os dados pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida.",
      },
      { type: "h", text: "Arquivo de dados pessoais" },
      { type: "p", text: "Os dados são conservados apenas pelo período necessário às finalidades que motivaram a sua recolha ou conforme exigido por lei." },
      { type: "h", text: "Acesso e controlo dos dados pessoais" },
      {
        type: "p",
        text: "Os titulares dos dados podem exercer os direitos de acesso, retificação, apagamento, limitação e oposição ao tratamento, nos termos da legislação aplicável, através dos canais de contacto do IMT.",
      },
      { type: "h", text: "Uso de cookies" },
      {
        type: "p",
        text: "O site do IMT pode utilizar cookies para melhorar a experiência de navegação e para fins estatísticos, podendo o utilizador gerir as suas preferências através das definições do navegador.",
      },
      { type: "h", text: "Ficheiros de registo estatístico" },
      { type: "p", text: "São mantidos registos estatísticos de acesso ao site para fins de segurança e melhoria contínua do serviço, sem identificação individual dos visitantes." },
      { type: "h", text: "Comissão Nacional de Proteção de Dados (CNPD)" },
      { type: "p", text: "Os titulares dos dados têm o direito de apresentar reclamação junto da CNPD, enquanto autoridade de controlo nacional em matéria de proteção de dados." },
      { type: "h", text: "Encarregado de proteção de dados" },
      { type: "p", text: "O IMT dispõe de um Encarregado de Proteção de Dados, que pode ser contactado para esclarecer questões relativas ao tratamento de dados pessoais." },
    ],
  },
  "codigo-de-conduta-para-o-tratamento-de-dados-pessoais": {
    title: "Código de Conduta para o Tratamento de Dados Pessoais",
    blocks: [
      {
        type: "p",
        text: "Nos termos do n.º 2 do artigo 15.º da Lei n.º 58/2019, de 8 de agosto, o tratamento de dados pessoais pela administração direta e indireta do Estado é objeto de códigos de conduta próprios.",
      },
      {
        type: "p",
        text: "O Código de Conduta para o Tratamento de Dados Pessoais visa assegurar um nível coerente e elevado de proteção dos direitos e liberdades das pessoas singulares relativamente ao tratamento desses dados, em conformidade com o princípio da proporcionalidade.",
      },
    ],
    docs: [
      { name: "Código de Conduta para o Tratamento de Dados Pessoais", href: `${BASE}/wp-content/uploads/2025/01/CodigoDeCondutaDeProtecaoDeDados-Pessoais_vf.pdf` },
    ],
  },
  "norma-de-controlo-interno": {
    title: "Norma de Controlo Interno",
    blocks: [
      {
        type: "p",
        text: "A Norma de Controlo Interno visa clarificar métodos, técnicas e procedimentos de controlo aplicáveis ao Instituto da Mobilidade e dos Transportes, I.P. (IMT, I.P.), nomeadamente na clarificação de procedimentos de controlo interno a cumprir pelas diferentes unidades orgânicas.",
      },
      { type: "p", text: "A Norma de Controlo Interno tem como objetivos:" },
      {
        type: "ul",
        items: [
          "Definição clara e transparente dos procedimentos para todos os intervenientes;",
          "Responsabilização na gestão dos seus recursos;",
          "Cumprimento das normas legais e procedimentos instituídos intrínsecos às várias matérias.",
        ],
      },
    ],
    docs: [{ name: "Norma de Controlo Interno", href: "https://www.imt-ip.pt/wp-content/uploads/2026/04/Norma-controlo-interno.pdf" }],
  },
  "codigo-de-conduta-do-imt": {
    title: "Código de Conduta do IMT",
    blocks: [
      {
        type: "p",
        text: "O Código de Conduta do IMT estabelece o conjunto de princípios, valores e regras de atuação de todos os dirigentes e trabalhadores em matéria de ética profissional, tendo em consideração as normas penais referentes à corrupção e às infrações conexas e os riscos de exposição da entidade a estes crimes, incorporando as disposições do Regime Geral de Prevenção da Corrupção (Decreto-Lei n.º 109-E/2021, de 9 de dezembro) e o Programa de Cumprimento Normativo.",
      },
    ],
    docs: [{ name: "Código de Conduta do IMT", href: "https://www.imt-ip.pt/wp-content/uploads/2025/07/Codigo-Conduta-IMT-2025_vf.pdf" }],
  },
  "canal-de-denuncia": {
    title: "Canal de Denúncia",
    blocks: [
      {
        type: "p",
        text: "O Canal de Denúncia é uma ferramenta essencial para promover a integridade e a transparência, estando alinhado com o Regime Geral de Proteção de Denunciantes de Infrações, estabelecido pelo Decreto-Lei n.º 93/2021, que transpõe a Diretiva (UE) 2019/1937 e reforça a proteção dos denunciantes.",
      },
      {
        type: "p",
        text: "O Canal de Denúncia do IMT, I.P., é um meio de comunicação acessível online, independente de outros canais de comunicação do organismo, que permite a pessoas singulares denunciar uma infração com fundamento em informações obtidas no âmbito da sua atividade profissional.",
      },
      { type: "p", text: "Este canal não deve ser utilizado para comunicar:" },
      {
        type: "ul",
        items: [
          "Elogios, sugestões ou reclamações sobre os serviços de atendimento do IMT, I.P. (para estes assuntos, utilize o Canal do Utilizador disponível na área Contactos);",
          "Infrações ao Código da Estrada, cuja competência se encontra atribuída às forças de segurança ou às entidades de fiscalização rodoviária.",
        ],
      },
      {
        type: "p",
        text: "Para aceder e utilizar corretamente o Canal de Denúncia, recomenda-se a consulta do respetivo Guia de Utilização, onde poderá encontrar orientações sobre os procedimentos de acesso e utilização da plataforma.",
      },
    ],
    docs: [
      { name: "Guia de Utilização do Canal de Denúncia", href: "https://www.imt-ip.pt/wp-content/uploads/2026/08/GUIA_UTILIZACAO_CANAL_DENUNCIA_DO_IMT.pdf" },
    ],
  },
  "sistema-de-gestao-anticorrupcao": {
    title: "Sistema de Gestão Anticorrupção",
    blocks: [
      {
        type: "p",
        text: "O IMT, I.P. tem vindo a reforçar a transparência na gestão pública nas áreas da mobilidade e dos transportes, garantindo processos claros, acessíveis e compreendidos por trabalhadores, cidadãos e entidades envolvidas. A prevenção e o combate à corrupção dependem do envolvimento de todos os intervenientes, internos e externos.",
      },
      {
        type: "p",
        text: "A atuação do Instituto assenta em dois pilares fundamentais, aplicáveis a todos os processos e atividades:",
      },
      {
        type: "ul",
        items: [
          "Programa de Cumprimento Normativo, previsto no Decreto-Lei n.º 109-E/2021 (Regime Geral da Prevenção da Corrupção), aplicável a entidades com 50 ou mais trabalhadores;",
          "Sistema de Gestão Anticorrupção, baseado na Norma NP ISO 37001 — boas práticas para prevenir, detetar e combater a corrupção.",
        ],
      },
      { type: "h", text: "Objetivos Anticorrupção" },
      {
        type: "ul",
        items: [
          "Implementação de uma cultura que promova o combate à corrupção e a mitigação dos riscos;",
          "Conformidade com as leis anticorrupção aplicáveis;",
          "Ações de consciencialização a todos os interessados;",
          "Levantamento de preocupações em total confiança e sem receio de represálias;",
          "Avaliação do nível de risco de corrupção;",
          "Disponibilização dos recursos necessários para manter e melhorar o sistema.",
        ],
      },
      { type: "h", text: "Principais metodologias adotadas" },
      {
        type: "ul",
        items: [
          "Política Anticorrupção",
          "Objetivos Anticorrupção",
          "Código de Conduta",
          "Plano de Prevenção de Riscos de Corrupção e Infrações Conexas",
          "Canais de Denúncia",
          "Programa de Formação",
        ],
      },
      {
        type: "p",
        text: "O IMT, I.P. convida todos os cidadãos e entidades a conhecer e subscrever a sua Política Anticorrupção, reforçando o compromisso coletivo com a integridade, a legalidade e a transparência.",
      },
    ],
  },

  "licenciamento-empresa-exploradora-escola-conducao": {
    title: "Licenciamento Empresa Exploradora – Escola Condução",
    blocks: [
      { type: "h", text: "Descrição" },
      {
        type: "p",
        text: "Uma entidade que pretenda desenvolver a atividade do ensino da condução deve previamente licenciar-se como empresa exploradora de escola de condução (EEEC). No processo de licenciamento é obrigatória a afetação de, pelo menos, um estabelecimento de escola de condução, que pode ser nova ou adquirida por transmissão.",
      },
      { type: "h", text: "Requisitos" },
      {
        type: "ul",
        items: [
          "Idoneidade — não pode estar inabilitada, interdita ou suspensa do exercício da atividade, nem ter explorado escolas encerradas compulsivamente;",
          "Incompatibilidade — não pode exercer funções em centros de exame no distrito onde pretende operar (extensível a cônjuge e familiares diretos);",
          "Capacidade técnica — estrutura e organização interna adequadas, com recursos humanos habilitados em número suficiente;",
          "Situação tributária e contributiva regularizada junto da Autoridade Tributária e da Segurança Social.",
        ],
      },
      { type: "h", text: "Requisitos mínimos" },
      {
        type: "ul",
        items: [
          "Um diretor de escola de condução (no mínimo, um por cada duas escolas exploradas em território nacional);",
          "Instalações e equipamento pedagógico adequados, garantindo acessibilidade a utilizadores com mobilidade condicionada;",
          "Pelo menos um veículo adaptado ao ensino por cada categoria e escola;",
          "Área adequada ao estacionamento dos veículos.",
        ],
      },
      {
        type: "p",
        text: "Após deferimento do licenciamento, deve ser requerida a vistoria às instalações no prazo de 10 dias; o IMT realiza a vistoria no prazo de 20 dias após o pagamento da respetiva taxa. Quando a escola já existe e é adquirida por transmissão, o processo segue diretamente para o serviço regional do IMT da área da escola.",
      },
      { type: "h", text: "Taxas" },
      {
        type: "ul",
        items: ["Licenciamento de EEEC — 350 €", "Vistoria — 200 €"],
      },
      {
        type: "p",
        text: "Pagamento ao balcão em numerário, multibanco ou cheque à ordem de IGCP, E.P., ou por correio (cheque à ordem).",
      },
    ],
  },

  "licenciamentos-pendentes": {
    title: "Aberturas de Escolas de Condução Pendentes",
    blocks: [
      {
        type: "p",
        text: "Consulte a lista de candidaturas para novas Escolas de Condução, disponível para download.",
      },
    ],
    docs: [
      {
        name: "Processos de abertura de novas EC pendentes",
        href: "https://www.imt-ip.pt/wp-content/uploads/2026/09/Processos-de-abertura-de-novas-EC-pendentes-03.09.2026.pdf",
      },
    ],
  },

  "plano-ferroviario-nacional": {
    title: "Plano Ferroviário Nacional",
    blocks: [
      {
        type: "p",
        text: "A Resolução do Conselho de Ministros n.º 77/2025, de 16 de abril, aprovou o Plano Ferroviário Nacional (PFN), cuja elaboração foi determinada pelo Despacho n.º 6460/2021, de 1 de julho, com a finalidade de definir a rede ferroviária que assegura as comunicações de interesse nacional e internacional.",
      },
      { type: "h", text: "Objetivos do PFN" },
      {
        type: "ul",
        items: [
          "Planear uma rede ferroviária de médio e longo prazo, de elevada capacidade e sustentabilidade ambiental;",
          "Definir as linhas e ramais vocacionados para transporte de passageiros e mercadorias, nacional e internacional;",
          "Promover o aumento da quota modal da ferrovia no transporte de passageiros;",
          "Assegurar cobertura do território, ligações transfronteiriças ibéricas e integração na rede transeuropeia;",
          "Assegurar a conexão da rede ferroviária com os restantes modos de transporte;",
          "Estabelecer princípios para as obrigações de serviço público e para a avaliação dos investimentos necessários.",
        ],
      },
      {
        type: "p",
        text: "O PFN foi elaborado pelo IMT, acompanhado por um Grupo de Trabalho com representantes do IMT, da Infraestruturas de Portugal, da CP – Comboios de Portugal e da Direção-Geral do Território. Após a apresentação pública da primeira proposta, em novembro de 2022, seguiu-se uma ampla discussão pública com centenas de contributos de entidades públicas, fundações, instituições de ensino, partidos políticos, sindicatos, associações, empresas e cidadãos. O Plano foi também objeto de Avaliação Ambiental Estratégica.",
      },
    ],
  },

  "titulos-de-transporte-e-tarifas": {
    title: "Títulos de Transporte e Tarifas",
    blocks: [
      { type: "h", text: "Títulos de Transporte" },
      {
        type: "ul",
        items: [
          "Títulos próprios — da responsabilidade de cada operador, válidos apenas na sua rede (bilhetes simples e passes mensais, de linha ou de rede);",
          "Títulos combinados — dão acesso a serviços explorados por mais do que uma empresa, incluindo os Passes Intermodais.",
        ],
      },
      { type: "h", text: "Tarifas" },
      {
        type: "p",
        text: "As tarifas dos transportes públicos coletivos rodoviários, dos transportes ferroviários urbanos e suburbanos e dos transportes fluviais em travessias de grande densidade de tráfego estão sujeitas à intervenção do Estado enquanto autoridade de transportes, nos termos da Lei n.º 52/2015. A Autoridade da Mobilidade e dos Transportes (AMT) divulga anualmente a taxa de atualização tarifária (TAT).",
      },
      {
        type: "p",
        text: "O Programa de Incentivo ao Transporte Público Coletivo de Passageiros (Incentiva+TP) substituiu o PART e o PROTransP. O pacote de Mobilidade Verde (RCM n.º 134-C/2024) criou o Circula PT (que substitui o Passe Social+), implementou o Passe Ferroviário Verde (que substitui o Passe Ferroviário Nacional) e alargou o Passe Gratuito a todos os jovens até aos 23 anos.",
      },
      { type: "h", text: "Passes Gratuitos para Jovens" },
      {
        type: "p",
        text: "A Portaria n.º 7-A/2024, de 5 de janeiro, define as condições de atribuição de passes gratuitos: modalidade sub 18+TP para crianças e jovens dos 4 aos 18 anos, e sub 23+TP até aos 23 anos, isentando os beneficiários do pagamento dos títulos mensais, intermodais ou monomodais.",
      },
    ],
  },

  "agentes-de-fiscalizacao": {
    title: "Agentes de Fiscalização",
    blocks: [
      {
        type: "p",
        text: "Nos termos das Leis n.º 25/2006 e n.º 28/2006, cabe ao IMT ajuramentar e credenciar os agentes de fiscalização das empresas concessionárias de infraestruturas rodoviárias e das empresas concessionárias ou prestadoras de serviços de transporte coletivo de passageiros.",
      },
      { type: "h", text: "Esclarecimentos prévios" },
      {
        type: "ul",
        items: [
          "A ajuramentação só pode ser solicitada mediante requerimento das empresas concessionárias, para trabalhadores ao seu serviço;",
          "Um profissional de segurança privado pode contratar com várias concessionárias, exigindo-se uma ajuramentação por cada empresa;",
          "Os termos de juramento não têm prazo de validade, mas a concessionária deve comunicar a sua anulação quando o funcionário deixa a função de fiscalização;",
          "A falta de licenciamento FEPT não impede o contrato de trabalho — é obtido após a emissão do termo de juramento pelo IMT;",
          "Os agentes de fiscalização têm competência para lavrar autos de notícia; o fiscal de exploração de transportes apenas verifica a posse e validade dos títulos de transporte, sem poder de autoridade.",
        ],
      },
      {
        type: "p",
        text: "O pedido de ajuramentação deve ser instruído com requerimento da empresa e cópia do cartão de funcionário do agente a ajuramentar, entre outros documentos exigidos pelo IMT.",
      },
    ],
  },

  "digitalizacao-e-inovacao-no-transporte-de-mercadorias": {
    title: "Digitalização e Inovação no Transporte de Mercadorias",
    blocks: [
      { type: "h", text: "Regulamento eFTI – Informações Eletrónicas sobre o Transporte de Mercadorias" },
      {
        type: "p",
        text: "O Regulamento (UE) 2020/1056 (eFTI – electronic Freight Transport Information) cria um quadro jurídico comum na UE que impulsiona a transição digital no setor da logística e dos transportes, obrigando as autoridades nacionais a aceitar informações disponibilizadas por via eletrónica pelos operadores económicos.",
      },
      {
        type: "ul",
        items: [
          "Modos de transporte abrangidos: rodoviário, ferroviário, aéreo e vias navegáveis interiores (o marítimo é enquadrado à parte pelo Regulamento (UE) 2019/1239 — EMSW);",
          "Objetivos: tornar obrigatória a aceitação de dados digitais, reduzir o uso de papel nos controlos administrativos e aduaneiros, promover a interoperabilidade digital e contribuir para uma cadeia logística mais eficiente e sustentável.",
        ],
      },
      { type: "h", text: "Estado da implementação" },
      {
        type: "ul",
        items: [
          "Publicação do Regulamento — concluída (2020);",
          "Legislação secundária — em curso (atos de execução e delegados);",
          "Portal Nacional eFTI — em preparação, coordenado pelo IMT com foco multimodal;",
          "Fase de testes — prevista para 2026;",
          "Operacionalização total — prevista para julho de 2027.",
        ],
      },
    ],
  },
};
