// Crédito do autor no rodapé. Este arquivo é igual em todos os projetos de cliente.
// Quando o portfólio existir, preencha AUTHOR_SITE: o link deixa de ir para o WhatsApp.
const AUTHOR = "joão gabriel";
const AUTHOR_SITE = ""; // TODO: endereço do portfólio, ex.: https://joaogabriel.com.br
const AUTHOR_WHATSAPP = "5551993389808";

export const creditLabel = `feito por ${AUTHOR}`;

// `client`: nome do cliente, para saber de qual site veio o contato.
export function creditUrl(client: string) {
  if (AUTHOR_SITE) return `${AUTHOR_SITE}?ref=${encodeURIComponent(client)}`;
  const message = `Oi, João! Vi o site de ${client} e quero saber como ter um assim.`;
  return `https://wa.me/${AUTHOR_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
