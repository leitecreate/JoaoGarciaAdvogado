import { SectionHeading } from "@/components/layout/SectionHeading";
import { WhatsAppCta } from "@/components/layout/WhatsAppCta";
import { care } from "@/lib/content";

// "O que me diferencia" da referência Gustavo Vicelli: um ponto por bloco, para ler de relance.
export function Differentials() {
  return (
    <section aria-labelledby="diferencial-titulo" data-reveal-group className="on-dark bg-navy-raised py-section text-ivory">
      <div className="shell">
        <SectionHeading dark id="diferencial-titulo" title={care.title} />
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {care.items.map((item) => (
            <li
              key={item.name}
              data-reveal
              className="relative w-full rounded-sm border border-navy-line bg-navy py-5 pr-5 pl-7 sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
            >
              <span aria-hidden="true" className="absolute top-5 -left-px h-8 w-1.5 rounded-r-sm bg-gold" />
              <h3 className="text-body font-bold tracking-normal">{item.name}</h3>
              <p className="mt-1 text-mist">{item.text}</p>
            </li>
          ))}
        </ul>
        <div data-reveal className="mt-10 flex justify-center">
          <WhatsAppCta label="Falar sobre a minha empresa" />
        </div>
      </div>
    </section>
  );
}
