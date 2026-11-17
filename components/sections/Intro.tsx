import Image from "next/image";
import { intro } from "@/lib/content";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

// Faixa baixa: foto na borda da tela com corte diagonal, que repete o recorte do hero, seguida de um filete
// dourado paralelo. No celular, a mesma diagonal fica na base da foto.
export function Intro() {
  return (
    <section aria-labelledby="intro-titulo" data-reveal-group className="grid pt-16 lg:grid-cols-[5fr_6fr] lg:pt-20">
      <div data-reveal="image" className="relative aspect-[16/9] lg:aspect-auto lg:min-h-band">
        <span aria-hidden="true" className="clip-band-base lg:clip-band absolute inset-0 bg-gold" />
        <span aria-hidden="true" className="clip-band-base lg:clip-band absolute inset-x-0 top-0 bottom-1 bg-background lg:right-1 lg:bottom-0" />
        <div className="clip-band-base lg:clip-band absolute inset-x-0 top-0 bottom-4 overflow-hidden lg:right-4 lg:bottom-0">
          <Image src={photos.atendimento.src} alt={photos.atendimento.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-[50%_8%]" />
        </div>
      </div>
      <div className="flex flex-col justify-center px-gutter pt-8 lg:pr-edge lg:pl-8 lg:pt-0">
        <h2 id="intro-titulo" data-reveal className="text-head font-semibold">
          {intro.title} <span className="text-gold-deep">{intro.titleAccent}</span>
        </h2>
        <p data-reveal className="mt-4 text-navy-soft">
          {intro.body}
        </p>
        <p data-reveal className="mt-5 flex items-center gap-3 text-small font-semibold">
          <span aria-hidden="true" className="h-0.5 w-10 bg-gold" />
          {site.name} · {site.registry.body} {site.registry.number}
        </p>
      </div>
    </section>
  );
}
