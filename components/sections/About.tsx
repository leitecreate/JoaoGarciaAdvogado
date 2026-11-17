import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Seal } from "@/components/sections/Seal";
import { about } from "@/lib/content";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

// Texto à esquerda e foto emoldurada à direita, com o selo no canto, como na referência Gustavo Vicelli.
export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" data-reveal-group className="on-dark bg-deep overflow-x-clip py-section text-ivory">
      <div className="shell grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
        <div>
          <h2 id="sobre-titulo" data-reveal className="text-head font-semibold">
            {about.title}
          </h2>
          <span aria-hidden="true" className="mt-4 block h-0.5 w-20 bg-gold" />
          <div className="mt-5 flex flex-col gap-4">
            {about.paragraphs.map((text) => (
              <p key={text} data-reveal>
                {text}
              </p>
            ))}
          </div>
          <ul className="mt-7 flex flex-col gap-2 text-mist">
            {about.credentials.map((item) => (
              <li key={item} data-reveal className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1.5 size-3 shrink-0 rounded-full border-2 border-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <span aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border border-gold/60" />
          <div data-reveal="image" className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image src={photos.sobre.src} alt={photos.sobre.alt} fill sizes="(min-width: 1024px) 28rem, 100vw" className="object-cover object-top" />
          </div>
          <Seal className="absolute -top-8 -right-4 size-28 sm:-right-8" />
          <p className="absolute bottom-6 -left-3 flex items-center gap-3 rounded-sm bg-navy-raised py-2 pr-5 pl-3 sm:-left-8">
            <ShieldCheck aria-hidden="true" className="size-5 text-gold" />
            {site.registry.body} {site.registry.number}
          </p>
        </div>
      </div>
    </section>
  );
}
