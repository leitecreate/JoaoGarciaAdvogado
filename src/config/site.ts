const whatsappMessage =
  "Olá, João. Encontrei seu site e gostaria de entender melhor como funciona a consultoria sobre a Reforma Tributária.";

export const siteConfig = {
  name: "João Garcia",
  role: "Advogado",
  instagram: "@joao.garcia.adv",
  instagramUrl: "https://www.instagram.com/joao.garcia.adv/",
  whatsapp: "554797199120",
  whatsappDisplay: "+55 47 9719-9120",
  whatsappMessage,
  whatsappUrl: `https://wa.me/554797199120?text=${encodeURIComponent(whatsappMessage)}`,
  positioning: "Atuação com firmeza e estratégia",
  service: "Consultoria sobre a Reforma Tributária",
  education: "Pós-graduando pela PUC",
  title: "João Garcia | Advogado — Consultoria sobre Reforma Tributária",
  description:
    "Orientação jurídica sobre a Reforma Tributária para compreender mudanças, avaliar pontos de atenção e tomar decisões com mais clareza e estratégia.",
  siteUrl: "https://joaogarciaadv.vercel.app",
} as const;

export const navItems = [
  { label: "Consultoria", href: "#consultoria" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;
