import { SectionHeading } from "@/components/layout/SectionHeading";
import { WhatsAppCta } from "@/components/layout/WhatsAppCta";
import { process } from "@/lib/content";

// Linha do tempo em toda a largura do site, sem foto: a foto do João vem logo abaixo, no Sobre.
export function Process() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" data-reveal-group className="px-gutter py-section xl:px-20">
      <SectionHeading id="como-funciona-titulo" title={process.title} intro={process.intro} />
      <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {process.steps.map((step, index) => (
          <li key={step.name} data-reveal className="relative flex gap-5 xl:flex-col xl:gap-0">
            {index < process.steps.length - 1 && (
              <span aria-hidden="true" className="absolute top-6 right-[-1.5rem] left-14 hidden h-0.5 bg-gold xl:block" />
            )}
            <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy font-bold text-gold">
              {index + 1}
            </span>
            <div className="xl:mt-5 xl:pr-4">
              <h3 className="text-lead font-semibold">{step.name}</h3>
              <p className="mt-2 text-navy-soft">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div data-reveal className="mt-12 flex justify-center">
        <WhatsAppCta label="Começar pelo WhatsApp" />
      </div>
    </section>
  );
}
