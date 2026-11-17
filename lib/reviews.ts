// Avaliações públicas do perfil do Google, transcritas dos prints enviados pelo Leite em 06/11/2026.
// Texto como publicado; emojis removidos. Nota e total conferidos em 31/10/2026.
// TODO: confirmar com o João a autorização para exibir nomes, trechos e fotos.
// TODO: faltam 32 das 56 avaliações do perfil, se a ideia for colocar todas. Quatro foram retiradas por pedido do Leite em
// 06/11/2026 (Provimento 205/2021 da OAB: vitória, resultado, "o melhor advogado"): não recolocar.
export const reviewProfile = {
  rating: "5,0",
  count: 56,
  checkedAt: "31/10/2026",
  url: "https://www.google.com/maps?cid=4455799305360882334",
};

export type Review = {
  name: string;
  when: string;
  quote: string;
  rating: number;
  photo?: string; // caminho em public/images/avaliacoes; sem foto, entra a inicial do nome
};

export const reviews: Review[] = [
  { name: "Renata Chaves", when: "3 meses atrás", rating: 5, quote: "Dr. João Guilherme, profissional muito atencioso, passa muita segurança a nós clientes. Profissional extremamente qualificado. Recomendo!" },
  { name: "Naiane Games", photo: "/images/avaliacoes/naiane-games.png", when: "2 meses atrás", rating: 5, quote: "Hoje o João está cuidando de um caso para mim e quero deixar registrado o quanto confio no trabalho dele. É um excelente profissional, muito competente, responsável e dedicado. Quando se trata de algo sério, é importante contar com alguém em quem você realmente possa confiar. Recomendo de olhos fechados!" },
  { name: "Caroline Getit", when: "11 meses atrás", rating: 5, quote: "O Dr. João é um profissional incrível, além de super competente na sua área, ele é uma pessoa humana e de fácil comunicação. Me ajudou muito nas questões jurídicas da minha empresa." },
  { name: "Matheus Moreria", when: "4 meses atrás", rating: 5, quote: "Profissional qualificado, com experiência, compromisso e seriedade. Honra a profissão e traz muita segurança para nós clientes!!" },
  { name: "Neila Bertram", photo: "/images/avaliacoes/neila-bertram.png", when: "um ano atrás", rating: 5, quote: "Excelente advogado, muito competente e atencioso. Atendimento claro, objetivo e eficiente. Profissional sério e confiável, que demonstra dedicação e conhecimento. Recomendo fortemente!" },
  // TODO: texto cortado no print ("Mais"). Abrir a avaliação e completar.
  { name: "Yessica Maitia", photo: "/images/avaliacoes/yessica-maitia.png", when: "3 meses atrás", rating: 5, quote: "Não tenho palavras para descrever o apoio e o profissionalismo que o doutor João oferece." },
  { name: "Midnight Club", photo: "/images/avaliacoes/midnight-club.png", when: "5 meses atrás", rating: 5, quote: "Dr. João, conheço, confio e recomendo de longa data!" },
  { name: "Jessica Santos", photo: "/images/avaliacoes/jessica-santos.png", when: "4 meses atrás", rating: 5, quote: "Advogado excelente, atendimento super personalizado. Muito simpático e super profissional." },
  { name: "Leandro Nicodemos", when: "6 meses atrás", rating: 5, quote: "Profissional Serio, Confiável e Focado na Defesa dos meus Interesses. Super Recomendo!" },
  { name: "Junior Araújo", when: "um ano atrás", rating: 5, quote: "Excelente profissional, muito atencioso e empenhado. Recomendo demais." },
  { name: "Daniel Camini", when: "3 meses atrás", rating: 5, quote: "Excelente profissional, recomendo." },
  { name: "Gustavo Rodrigues", when: "5 meses atrás", rating: 5, quote: "Um advogado com um excelente trabalho, perfeito no que faz" },
  // TODO: texto pode estar cortado no print ("...").
  { name: "Wesley Antunes Sousa", when: "um ano atrás", rating: 5, quote: "Através de uma indicação conheci o DR João Guilherme. Sempre se mostrou atento aos mínimos detalhes, com muito conhecimento e técnica conseguiu resolver meu problema. Somente gratidão pela sua vida" },
  { name: "Adrielson Busato", when: "um ano atrás", rating: 5, quote: "Um profissional extremamente competente e uma pessoa excepcional, super recomendo!" },
  { name: "Silvio da Luz", when: "um ano atrás", rating: 5, quote: "Serviço e trabalho excepcional, recomendo e confio no João, otima pessoa e excelente profissional." },
  { name: "Carlos Meneghelli", when: "um ano atrás", rating: 5, quote: "Recomendo 100%, trabalho honesto e conseguiu me ajudar e esclarecer todas as dúvidas!" },
  { name: "Arieli Santos", photo: "/images/avaliacoes/arieli-santos.png", when: "um ano atrás", rating: 5, quote: "Excelente profissional, atencioso, educado, prestativo. Super recomendo" },
  { name: "Kawanne Passos", when: "um ano atrás", rating: 5, quote: "Desde o primeiro dia que falei com ele foi super atencioso, um querido e super profissional. Recomendo" },
  // TODO: texto pode estar cortado no print ("...").
  { name: "Reinaldo Rocha", when: "5 meses atrás", rating: 5, quote: "Excelente profissional !! Sempre bem atendendo sem deixar dúvidas" },
  { name: "DRK renanzin", photo: "/images/avaliacoes/drk-renanzin.png", when: "7 meses atrás", rating: 5, quote: "Excelente profissional e justo" },
];
