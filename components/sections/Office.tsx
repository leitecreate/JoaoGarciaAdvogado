import { MapPin } from "lucide-react";
import { Notch } from "@/components/layout/Notch";
import { ScrollWord } from "@/components/motion/ScrollMotion";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { WhatsAppCta } from "@/components/layout/WhatsAppCta";
import { office } from "@/lib/content";
import { brazilMap } from "@/lib/mapa-brasil";
import { mapsUrl, site } from "@/lib/site";

// O mapa em listras da referência Danilo Max, com o pino no endereço do João.
export function Office() {
  return (
    <section id="atendimento" aria-labelledby="atendimento-titulo" data-reveal-group className="on-dark bg-deep relative isolate py-section text-ivory">
      <Notch href="#atendimento" label="Descer para o atendimento" />
      <ScrollWord word="ATENDIMENTO" />
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal="image" className="relative mx-auto w-full max-w-lg">
          <svg
            viewBox={`0 0 ${brazilMap.width} ${brazilMap.height}`}
            role="img"
            aria-label="Mapa do Brasil com Itajaí, em Santa Catarina, em destaque"
            className="w-full text-mist"
          >
            <path d={brazilMap.stripes} fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx={brazilMap.pin.x} cy={brazilMap.pin.y} r="24" className="origin-center fill-gold/40 [transform-box:fill-box] motion-safe:animate-pulse-ring" />
            <circle cx={brazilMap.pin.x} cy={brazilMap.pin.y} r="11" className="fill-gold" />
          </svg>
          <p className="absolute bottom-[4%] left-0 flex items-center gap-2 rounded-full bg-navy-raised px-4 py-2 text-small">
            <MapPin aria-hidden="true" className="size-4 text-gold" />
            {office.pin}
          </p>
        </div>
        <div>
          <SectionHeading dark align="start" id="atendimento-titulo" title={office.title} />
          <div className="mt-6 flex flex-col gap-4">
            {office.paragraphs.map((text) => (
              <p key={text} data-reveal>
                {text}
              </p>
            ))}
          </div>
          <a
            data-reveal
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-start gap-3 font-semibold transition-colors hover:text-gold"
          >
            <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold" />
            <span>
              {site.address.street}, {site.address.district}, {site.address.city}/{site.address.state}
            </span>
          </a>
          <div data-reveal className="mt-8">
            <WhatsAppCta label="Agendar uma conversa" />
          </div>
        </div>
      </div>
    </section>
  );
}
