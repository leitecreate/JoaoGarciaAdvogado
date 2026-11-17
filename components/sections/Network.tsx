import { SectionHeading } from "@/components/layout/SectionHeading";
import { WhatsAppCta } from "@/components/layout/WhatsAppCta";
import { network, subjectMessage } from "@/lib/content";

// Blocos com filete e aba lateral, como os diferenciais da referência Gustavo Vicelli.
export function Network() {
  return (
    <section aria-labelledby="rede-titulo" data-reveal-group className="shell py-section">
      <SectionHeading id="rede-titulo" title={network.title} intro={network.intro} />
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {network.areas.map((area) => (
          <li key={area} data-reveal className="relative rounded-sm border border-navy/25 bg-paper py-4 pr-4 pl-6 font-semibold">
            <span aria-hidden="true" className="absolute top-1/2 -left-px h-8 w-1.5 -translate-y-1/2 rounded-r-sm bg-navy" />
            {area}
          </li>
        ))}
      </ul>
      <div data-reveal className="mt-10 flex justify-center">
        <WhatsAppCta label={network.action} message={subjectMessage(network.topic)} />
      </div>
    </section>
  );
}
