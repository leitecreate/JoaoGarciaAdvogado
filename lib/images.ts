// Todas as fotos do site em um lugar só. Origem: PNGs do cliente em material-cliente/recebido/imagens.
// Para trocar, rode scripts/gerar-fotos.py e ajuste só esta lista. Sempre PNG: quem comprime é o next/image.
export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const photos = {
  hero: { src: "/images/joao-garcia-hero.png", width: 2560, height: 3200, alt: "João Garcia de terno azul-marinho, camisa branca e gravata vinho, sorrindo" },
  atendimento: { src: "/images/joao-garcia-atendimento.png", width: 1536, height: 1024, alt: "João Garcia conversando com um cliente à mesa do escritório" },
  sobre: { src: "/images/joao-garcia-sobre.png", width: 1122, height: 1402, alt: "João Garcia de terno azul-marinho e camisa branca, sorrindo" },
  leitura: { src: "/images/joao-garcia-leitura.png", width: 1536, height: 1024, alt: "João Garcia lendo um livro na poltrona do escritório" },
} satisfies Record<string, Photo>;
