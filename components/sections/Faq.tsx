import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { faqSection, faqs } from "@/lib/content";

// Acordeão com <details> nativo: teclado e leitor de tela já funcionam, sem JavaScript.
export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" data-reveal-group className="shell py-section">
      <SectionHeading id="duvidas-titulo" title={faqSection.title} />
      <div className="mx-auto mt-12 max-w-3xl border-t border-navy/15">
        {faqs.map((faq) => (
          <details key={faq.question} data-reveal className="group border-b border-navy/15">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-300 group-open:rotate-45">
                <Plus aria-hidden="true" className="size-4" />
              </span>
            </summary>
            <p className="pb-5 text-navy-soft">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
