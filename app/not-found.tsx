import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="on-dark flex min-h-svh flex-col justify-end gap-8 bg-navy px-gutter pt-40 pb-section text-ivory outline-none">
        <h1 className="font-display text-head">Página não encontrada</h1>
        <p className="max-w-[44ch]">O endereço pode ter mudado. Volte para a página inicial ou fale direto com o João pelo WhatsApp.</p>
        <Link href="/" className="font-semibold text-gold underline decoration-2 underline-offset-4">
          Ir para a página inicial
        </Link>
      </main>
      <Footer />
    </>
  );
}
