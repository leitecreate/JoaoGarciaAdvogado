// Fonte única dos dados do negócio. Nenhum componente deve repetir estes valores.
// Origem: briefing respondido pelo cliente em 27/10/2026 (material-cliente/referencias/briefing-consolidado-institucional.md).
export const site = {
  name: "João Garcia",
  legalName: "João Garcia Advocacia",
  tagline: "Advogado empresarial em Itajaí",
  description:
    "Assessoria jurídica preventiva, contratos, cobranças e defesa em processos para micro, pequenas e médias empresas de Itajaí e região. OAB/SC 71.983.",
  // TODO: confirmar o domínio definitivo. Este é o endereço da Vercel usado no site anterior, não conferido no ar.
  url: "https://joaogarciaadv.vercel.app",
  locale: "pt-BR",
  updated: "2026-11-06", // data da última revisão do conteúdo (rodapé e sitemap)

  phone: "(47) 99719-9120",
  phoneE164: "+5547997199120",
  whatsapp: "5547997199120",
  whatsappMessage: "Olá, João. Vim pelo site e quero conversar sobre uma questão da minha empresa.",
  email: "joberguilherme1@gmail.com",

  address: {
    street: "R. José Pereira Liberato, 1050, sala 5",
    district: "São João",
    city: "Itajaí",
    state: "SC",
    postalCode: "88304-401",
    country: "BR",
  },
  geo: { lat: -26.9008214, lng: -48.6826435 },
  // Briefing: "Itajaí/SC e região", com atendimento remoto para outras localidades.
  areaServed: ["Itajaí", "Santa Catarina"],
  // TODO: o cliente informou 07h às 22h, sem dizer os dias. Não publicar horário até confirmar.
  hours: [] as { days: string; opens: string; closes: string }[],

  registry: { body: "OAB/SC", number: "71.983" },
  education: {
    graduation: "Direito pela Universidade do Vale do Itajaí (Univali)",
    // TODO: atualizar quando o cliente confirmar a conclusão.
    postgraduation: "pós-graduando em Direito do Trabalho e Direito Previdenciário pela PUC Minas",
  },

  // Crédito do estúdio no rodapé.

  social: {
    instagram: "https://www.instagram.com/joao.garcia.adv/",
    instagramHandle: "@joao.garcia.adv",
    google: "https://www.google.com/maps?cid=4455799305360882334",
  },
} as const;

export const whatsappUrl = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}`,
)}`;
