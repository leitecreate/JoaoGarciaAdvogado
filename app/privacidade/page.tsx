import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacidade",
  description: `Como funcionam os dados e os canais de contato do site de ${site.legalName}.`,
  alternates: { canonical: "/privacidade" },
  openGraph: { url: "/privacidade", title: "Privacidade", locale: "pt_BR", type: "website", siteName: site.legalName, images: [ogImage] },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <div className="on-dark bg-navy pt-16 pb-16 text-ivory">
          <h1 className="shell font-display text-head">Privacidade</h1>
        </div>
        <article className="grid-page py-section">
          <div className="col-span-12 flex max-w-[65ch] flex-col gap-5 md:col-span-8 md:col-start-3 [&_h2]:mt-10 [&_h2]:text-lead [&_h2]:font-semibold">
            <p className="text-lead">Esta página explica como funcionam os dados e os canais de contato deste site.</p>
            <h2>Navegação</h2>
            <p>
              Este site é informativo. Não há formulário de cadastro, área de login nem cookies de rastreamento. Para entender o uso do
              site, ele usa a medição de audiência da Vercel, que não usa cookies e registra dados agregados, como páginas visitadas e
              tipo de dispositivo, sem identificar o visitante.
            </p>
            <p>
              A hospedagem pode processar informações técnicas da conexão, como endereço IP e registros de acesso, para entregar as
              páginas e manter o serviço funcionando.
            </p>
            <h2>Contato pelo WhatsApp ou por e-mail</h2>
            <p>
              Ao escolher um desses canais, você sai deste site e passa a usar um serviço externo, sujeito às políticas do respectivo
              fornecedor. As informações que decidir compartilhar serão usadas para compreender sua solicitação e conduzir o
              atendimento.
            </p>
            <h2>Links externos</h2>
            <p>
              Os links para Instagram e Google levam a plataformas de terceiros. O tratamento de dados nesses ambientes segue a política
              de cada plataforma.
            </p>
            <h2>Dúvidas sobre seus dados</h2>
            <p>
              Para pedir esclarecimentos sobre o uso de informações compartilhadas durante o atendimento, escreva para{" "}
              <a href={`mailto:${site.email}`} className="font-semibold underline decoration-gold-deep decoration-2 underline-offset-4">
                {site.email}
              </a>
              .
            </p>
            <p className="text-small text-navy-soft">Página atualizada em 5 de novembro de 2026.</p>
            <Link href="/" className="mt-6 font-semibold underline decoration-gold-deep decoration-2 underline-offset-4">
              Voltar para a página inicial
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
