import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { Reviews } from "@/components/sections/Reviews";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Differentials } from "@/components/sections/Differentials";
import { Network } from "@/components/sections/Network";
import { Office } from "@/components/sections/Office";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { faqJsonLd, jsonLdScript } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Intro />
        <Services />
        <Reviews />
        <Process />
        <About />
        <Differentials />
        <Network />
        <Office />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd())} />
    </>
  );
}
