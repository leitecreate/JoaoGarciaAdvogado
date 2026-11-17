// Textos do site. Origem: briefing do cliente (27/10/2026) e textos do site anterior.
// Voz (07/11/2026): primeira pessoa, frases curtas, cada área abre com uma verdade sobre o risco e depois diz o que
// o João faz. FAQ responde primeiro com "Sim." ou "Não.". Referência de estilo: gmv.adv.br (só o tom, nunca o texto).
// Provimento 205/2021: sem promessa de resultado, sem preço.
// Itens marcados com TODO precisam de confirmação do João antes de publicar.

export const hero = {
  // Diz quem é, onde e para quê. A última linha sai em ouro. TODO: o João aprovar.
  title: ["Advogado empresarial", "em Itajaí para proteger"],
  titleAccent: "o seu negócio.",
  supporting:
    "Atendo micro, pequenas e médias empresas em assessoria preventiva, contratos, cobranças e defesa em processos. Você fala direto comigo, da primeira mensagem ao fim do caso.",
  action: "Falar com o advogado",
  location: "Presencial em Itajaí (SC) e a distância para outras cidades.",
};

export const intro = {
  // Mensagem escrita pelo próprio cliente no briefing.
  title: "Mais do que atuar em processos, meu compromisso é",
  titleAccent: "encontrar soluções.",
  body: "Seja na defesa dos seus direitos, na proteção do seu patrimônio ou na segurança jurídica da sua empresa, você encontra orientação, estratégia e uma rede de profissionais de confiança para cuidar dos seus interesses.",
};

export type ServiceIcon = "shield" | "scale" | "vault" | "file" | "coins" | "wallet" | "landmark";

// Os sete serviços, na ordem pedida no briefing. O hook é o problema que leva o empresário a procurar o João
// (resposta 11 do briefing). O detail abre com uma verdade sobre o risco e diz o que ele faz, em primeira pessoa,
// sem prometer resultado. Os painéis ficam empilhados na mesma célula: manter cada detail em duas frases.
// TODO: o João aprovar as frases de abertura de cada serviço.
export const services = {
  // Frase do cliente no briefing: "não precisa enfrentar sozinho os problemas jurídicos do seu negócio".
  title: "Sua empresa não precisa enfrentar isso sozinha",
  intro: "Escolha a situação mais parecida com a sua e veja como eu atuo em cada uma.",
  listLabel: "Escolha o seu caso",
  panelLabel: "Como eu ajudo",
  topicsLabel: "O que entra",
  featured: {
    icon: "shield" as ServiceIcon,
    name: "Assessoria Jurídica Preventiva e Consultoria Mensal",
    hook: "Um advogado de confiança ao lado da sua empresa",
    detail:
      "A maior parte dos problemas de uma empresa começa numa decisão tomada sem orientação. Acompanho o dia a dia do negócio para encontrar o risco antes que ele vire prejuízo ou processo.",
    topic: "assessoria jurídica mensal",
    topics: ["Consultorias periódicas", "Auditorias jurídicas internas", "Análise de riscos", "Orientação sobre obrigações legais", "Revisão de procedimentos"],
  },
  items: [
    {
      icon: "scale",
      name: "Defesa em Processos Judiciais e Administrativos",
      hook: "Recebeu uma reclamação trabalhista ou uma ação?",
      detail:
        "Num processo, prazo perdido não volta. Assumo a defesa desde a citação, acompanho cada etapa e avalio com você quando um acordo faz mais sentido do que seguir até o fim.",
      topic: "um processo contra a minha empresa",
      topics: ["Reclamações trabalhistas", "Ações de cobrança e execuções", "Disputas contratuais"],
    },
    {
      icon: "wallet",
      name: "Renegociação de Dívidas e Reestruturação de Passivos",
      hook: "Conta bloqueada ou dívidas acumulando?",
      detail:
        "Dívida ignorada cresce, e um bloqueio na conta trava o caixa de uma hora para outra. Analiso os débitos, negocio com os credores e monto uma saída que deixe a empresa seguir funcionando.",
      topic: "dívidas ou um bloqueio na conta da empresa",
      topics: ["Bloqueios de contas", "Acordos com credores", "Parcelamentos"],
    },
    {
      icon: "coins",
      name: "Cobranças, Execuções e Recuperação de Créditos",
      hook: "Tem cliente que não paga?",
      detail:
        "Quanto mais tempo uma dívida fica parada, mais difícil fica receber. Busco o que é devido à empresa primeiro pela notificação e pela negociação e, quando não há acordo, pela Justiça.",
      topic: "um cliente que não paga",
      topics: ["Cobrança extrajudicial", "Negociação e acordos", "Ações e execuções"],
    },
    {
      icon: "file",
      name: "Elaboração, Revisão e Gestão de Contratos",
      hook: "Vai fechar um contrato importante?",
      detail:
        "Contrato copiado da internet parece economia até o dia em que alguém descumpre. Elaboro e reviso cada contrato para a realidade do seu negócio, com obrigações claras desde a assinatura.",
      topic: "um contrato",
      topics: ["Comerciais e de serviços", "Fornecedores e colaboradores", "Parcerias"],
    },
    {
      icon: "vault",
      name: "Proteção Patrimonial e Gestão de Riscos Empresariais",
      hook: "Seu patrimônio pessoal está exposto?",
      detail:
        "Em muitas empresas, a separação entre o patrimônio do negócio e o dos sócios é mais frágil do que parece. Analiso a estrutura, mostro o que está exposto e oriento medidas lícitas de proteção.",
      topic: "a proteção do patrimônio da empresa e dos sócios",
      topics: ["Estrutura jurídica da empresa", "Patrimônio dos sócios", "Prevenção de conflitos"],
    },
    {
      icon: "landmark",
      name: "Regularização e Negociação de Débitos Tributários",
      hook: "Débitos com a Receita ou a PGFN?",
      detail:
        "Débito tributário em aberto pesa nas certidões, no crédito e nos contratos da empresa. Analiso as possibilidades de transação e parcelamento e negocio as condições de regularização, conforme os requisitos.",
      topic: "débitos tributários",
      topics: ["Regularização de passivos", "Transação tributária", "Reforma Tributária, como apoio"],
    },
  ] as { icon: ServiceIcon; name: string; hook: string; detail: string; topic: string; topics: string[] }[],
};

export const reviewsSection = {
  title: "Quem já foi atendido, recomenda",
  intro: "Veja o que disseram os clientes que confiaram no meu trabalho:",
  action: "Falar com o advogado",
};

export const care = {
  title: "O que me diferencia",
  // TODO: o João confirmar a redação destes cinco pontos (tirados do briefing).
  items: [
    { name: "Atendimento direto comigo", text: "Quem responde a sua mensagem sou eu, em qualquer área. Sem intermediários." },
    { name: "Sem juridiquês", text: "Explico cada caminho em linguagem simples, com os riscos de cada um. A decisão é sua." },
    { name: "Prevenção antes do conflito", text: "Cuido do contrato, da rotina e do risco antes que virem processo, porque prevenir custa menos do que litigar." },
    { name: "Perto das decisões", text: "Acompanho o negócio no dia a dia, não só quando o problema aparece." },
    { name: "Rede de confiança", text: "Se o caso pede outra especialidade, indico um profissional de confiança, sempre com a sua concordância." },
  ],
};

export const process = {
  title: "Como funciona o atendimento",
  intro: "Quase toda empresa chega com algo urgente. Primeiro eu cuido da urgência. Depois, com calma, olhamos juntos para o resto do negócio.",
  steps: [
    { name: "Contato direto comigo", text: "Você me conta pelo WhatsApp, em poucas linhas, o que aconteceu. Quem responde sou eu." },
    { name: "Entender a urgência", text: "Antes de tudo, vejo prazos, valores e riscos imediatos. O que não pode esperar vem primeiro." },
    { name: "Reunir os documentos", text: "Indico exatamente o que separar. Você não precisa chegar com tudo organizado." },
    { name: "Definir a estratégia", text: "Explico as alternativas (defesa, acordo ou negociação) e os riscos de cada uma. A decisão é sua." },
    { name: "Conduzir o caso", text: "Acompanho cada etapa de perto e mantenho você informado sobre o andamento." },
    { name: "Prevenir o próximo", text: "Resolvida a urgência, olho para a empresa como um todo, para que o mesmo problema não volte." },
  ],
};

export const about = {
  title: "Sou João Garcia",
  paragraphs: [
    "Sou advogado empresarial em Itajaí, formado em Direito pela Univali e pós-graduando em Direito do Trabalho e Direito Previdenciário pela PUC Minas.",
    "Acredito que o melhor trabalho jurídico para uma empresa é o que acontece antes do problema. Por isso atuo perto das decisões do negócio: contratos, cobranças, dívidas e equipe.",
    "Aqui, você fala comigo do início ao fim. Quando o caso pede outra especialidade, eu mesmo faço o primeiro atendimento e, com a sua concordância, indico um profissional de confiança.",
  ],
  // TODO: atualizar a pós-graduação quando o João confirmar a conclusão.
  credentials: ["Direito pela Univali", "Pós em Direito do Trabalho e Previdenciário pela PUC Minas, em conclusão", "OAB/SC 71.983"],
};

export const network = {
  title: "Rede de atendimento em outras áreas",
  intro:
    "A sua dúvida não é empresarial? Fale comigo do mesmo jeito. Faço o primeiro atendimento nestas áreas e, quando o caso exige, indico um profissional parceiro, sempre com a sua concordância.",
  areas: ["Direito do Trabalho", "Direito Previdenciário", "Civil e Contratual", "Família e Sucessões", "Direito Bancário", "Direito do Consumidor", "Direito Tributário", "Direito Criminal, por parceiros"],
  action: "Falar sobre outra área",
  topic: "outra área do Direito",
};

export const office = {
  title: "Presencial em Itajaí ou a distância",
  // TODO: o João detalhar as modalidades de atendimento presencial e os dias.
  paragraphs: [
    "Meu escritório fica no bairro São João, em Itajaí. Atendo presencialmente empresas da cidade e da região.",
    "Se a sua empresa está em outra cidade, o atendimento é a distância, com o mesmo contato direto comigo.",
    "A distância muda o meio, não o cuidado com o seu caso.",
  ],
  pin: "Itajaí, Santa Catarina",
};

export const faqSection = {
  title: "Perguntas frequentes",
};

// Cada resposta começa pela resposta curta ("Sim.", "Não.", "Vale.") e só depois explica.
// TODO: o João aprovar as duas perguntas novas (documentos e revisão de contrato), tiradas do fluxo do briefing.
export const faqs = [
  {
    question: "Preciso ter um processo para procurar assessoria?",
    answer:
      "Não. A assessoria preventiva existe justamente para cuidar dos contratos, da rotina e das decisões antes que surja um conflito. Eu identifico os riscos e oriento a empresa enquanto ainda é tempo.",
  },
  {
    question: "Posso procurar você por uma demanda específica?",
    answer:
      "Pode. Muitas empresas chegam assim, com algo urgente. Eu cuido da demanda pontual e, se fizer sentido para você, ela vira um acompanhamento contínuo.",
  },
  {
    question: "Preciso chegar com os documentos organizados?",
    answer:
      "Não. No primeiro contato eu entendo a situação. Depois indico exatamente o que separar para a análise.",
  },
  {
    question: "Vale revisar um contrato antes de assinar?",
    answer:
      "Vale. É antes da assinatura que se evita a cláusula que só mostra o problema quando já é tarde. Revisar antes costuma custar bem menos do que discutir depois.",
  },
  {
    question: "Quais empresas você atende?",
    answer:
      "Micro, pequenas e médias empresas que precisam de orientação em decisões, contratos, relações de trabalho, cobranças, dívidas e outros desafios jurídicos do negócio.",
  },
  {
    question: "Você atende empresas de outras cidades?",
    answer:
      "Sim. Atendo presencialmente em Itajaí e região e, a distância, empresas de outras cidades, com o mesmo contato direto comigo.",
  },
  {
    question: "Você atende outras áreas do Direito?",
    answer:
      "Sim. Eu faço o primeiro atendimento e, quando a demanda pede outra especialidade, indico um profissional parceiro de confiança, com a sua concordância.",
  },
  {
    question: "Como começo o atendimento?",
    answer:
      "Me mande uma mensagem pelo WhatsApp contando, em poucas linhas, o que aconteceu. A partir dessa conversa, eu indico o que separar e definimos juntos os próximos passos.",
  },
];

export const contact = {
  title: "O que aconteceu na sua empresa?",
  bringLead: "Para a primeira conversa, tenha em mãos",
  action: "Abrir o WhatsApp",
};

// O seletor de assunto do contato. TODO: o João deve confirmar a lista de documentos de cada assunto.
export const subjects = [
  { id: "trabalhista", label: "Reclamação trabalhista", topic: "uma reclamação trabalhista", bring: "a notificação ou citação recebida, o contrato de trabalho e os recibos do funcionário" },
  { id: "bloqueio", label: "Bloqueio na conta", topic: "um bloqueio na conta da empresa", bring: "o extrato com o bloqueio e qualquer intimação recebida" },
  { id: "inadimplencia", label: "Cliente que não paga", topic: "um cliente que não paga", bring: "o contrato, as notas fiscais e as conversas sobre a dívida" },
  { id: "dividas", label: "Dívidas com credores", topic: "as dívidas da empresa", bring: "a lista de débitos, os contratos e as cobranças recebidas" },
  { id: "contrato", label: "Contrato", topic: "um contrato", bring: "a minuta ou o contrato assinado e o ponto que preocupa" },
  { id: "tributario", label: "Débito tributário", topic: "débitos tributários", bring: "as notificações da Receita Federal ou da PGFN e os débitos em aberto" },
  { id: "assessoria", label: "Assessoria mensal", topic: "assessoria jurídica mensal", bring: "um resumo da empresa: atividade, número de funcionários e principais contratos" },
] as const;

export const subjectMessage = (topic: string) =>
  `Olá, João. Vim pelo site e quero conversar sobre ${topic}.`;

// Bloco recolhido no rodapé. Fica no HTML e o Google lê, sem pesar no visual. Só serviços reais do briefing.
// Não trocar por texto invisível (display:none ou cor do fundo): o Google trata como spam e pode penalizar o site.
// TODO: confirmar com o João se devem entrar cidades da região pelo nome.
export const seoFooter = {
  summary: "Áreas e região de atendimento",
  text: "João Garcia é advogado empresarial em Itajaí, Santa Catarina, com escritório no bairro São João. Atende micro, pequenas e médias empresas de Itajaí e região e, a distância, empresas de outras cidades.",
  terms: [
    "Advogado empresarial em Itajaí",
    "Advogado para empresas em Itajaí",
    "Assessoria jurídica empresarial em Itajaí",
    "Consultoria jurídica mensal para empresas",
    "Defesa de empresas em reclamação trabalhista",
    "Advogado trabalhista para empresas",
    "Bloqueio de conta bancária da empresa",
    "Cobrança de clientes inadimplentes",
    "Recuperação de créditos e execuções",
    "Renegociação de dívidas de empresas",
    "Proteção patrimonial de empresas e sócios",
    "Elaboração e revisão de contratos empresariais",
    "Regularização de débitos tributários",
    "Transação tributária com a PGFN",
  ],
};

export const footer = {
  title: "Sua empresa precisa de orientação?",
  text: "Me conte o que aconteceu. O primeiro contato é pelo WhatsApp, direto comigo.",
  action: "Falar com o advogado",
};
