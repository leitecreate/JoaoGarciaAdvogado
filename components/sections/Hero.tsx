import Image from "next/image";
import { MapPin, Scale, ShieldCheck } from "lucide-react";
import { GoogleIcon, StarRow } from "@/components/layout/Icons";
import { WhatsAppCta } from "@/components/layout/WhatsAppCta";
import { Parallax } from "@/components/motion/ScrollMotion";
import { HeroFrame } from "@/components/sections/HeroFrame";
import { Seal } from "@/components/sections/Seal";
import { hero } from "@/lib/content";
import { photos } from "@/lib/images";
import { reviewProfile } from "@/lib/reviews";
import { site } from "@/lib/site";

const enter = "animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 motion-reduce:animate-none";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="on-dark clip-hero bg-deep relative overflow-hidden text-ivory xl:h-[clamp(42rem,calc(100svh-var(--spacing-header)),50rem)]">
      {/* Abaixo de xl, a primeira tela segue o modelo do celular do estúdio (gmv.adv.br): tudo centralizado,
          selo, título, filete, texto em primeira pessoa, botão largo e a nota do Google logo abaixo. */}
      <div className="shell relative z-10 flex h-full flex-col items-center justify-center pt-10 pb-10 text-center xl:items-start xl:pt-0 xl:pb-notch xl:text-left">
        <a
          href={reviewProfile.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${enter} hidden min-h-11 flex-wrap items-center gap-x-2 text-body transition-colors hover:text-gold xl:inline-flex`}
        >
          Nota {reviewProfile.rating} no Google
          <StarRow className="text-gold" />
          <span className="sr-only">cinco estrelas, abrir o perfil</span>
        </a>
        <p className={`${enter} inline-flex min-h-12 items-center gap-3 rounded-full border border-navy-line bg-navy-raised/60 py-1.5 pr-5 pl-1.5 text-small tracking-[0.08em] uppercase xl:hidden`}>
          <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-line ring-1 ring-gold/60 ring-offset-2 ring-offset-navy">
            <Scale className="size-4.5 text-gold" />
          </span>
          Advocacia empresarial
        </p>
        <h1 id="hero-titulo" className="mt-6 text-hero font-medium xl:mt-3">
          {[...hero.title, hero.titleAccent].map((line, index) => (
            <span key={line} className="-mb-2 block overflow-hidden pb-2">
              <span
                style={{ animationDelay: `${index * 110}ms` }}
                className={`block motion-safe:animate-line-up sm:whitespace-nowrap ${line === hero.titleAccent ? "text-gold" : ""}`}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
        <span aria-hidden="true" className="mt-7 h-px w-full max-w-lg bg-linear-to-r from-transparent via-ivory/40 to-transparent xl:bg-navy-line xl:bg-none" />
        <p className={`${enter} mt-6 max-w-lg text-lead delay-150`}>{hero.supporting}</p>
        <WhatsAppCta label={hero.action} className={`${enter} mt-8 w-full max-w-sm justify-between delay-200 xl:w-auto xl:max-w-none`} />
        <a
          href={reviewProfile.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${enter} mt-4 inline-flex min-h-11 items-center gap-2 text-small delay-300 xl:hidden`}
        >
          Nota {reviewProfile.rating} no
          <GoogleIcon className="size-4.5" />
          <span className="sr-only">Google</span>
          <StarRow className="text-gold" />
        </a>
        <p className={`${enter} mt-5 hidden items-start gap-3 delay-300 xl:flex`}>
          <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold" />
          {hero.location}
        </p>
      </div>

      {/* Filetes de luz no ângulo do recorte do hero, como as linhas da referência Laurence. */}
      <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-y-0 right-0 hidden h-full w-3/5 text-ivory xl:block">
        <path d="M18 100L100 18M40 100L100 40M58 100L100 58" stroke="currentColor" strokeOpacity={0.06} strokeWidth={1} vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Retrato recortado: passa da base do hero, que o corta, e assim a descida do parallax nunca mostra o fim da foto. */}
      <Parallax className="relative mx-auto max-w-md xl:absolute xl:top-4 xl:right-[6%] xl:mx-0 xl:aspect-[4/5] xl:h-[112%] xl:max-w-none">
        {/* luz de recorte: separa o terno marinho do fundo marinho */}
        <span aria-hidden="true" className="bg-halo absolute inset-x-[-15%] top-[-8%] h-[85%]" />
        <HeroFrame className="absolute top-[36%] left-1/2 w-[108%] -translate-x-1/2 -translate-y-1/2" />
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          width={photos.hero.width}
          height={photos.hero.height}
          sizes="(min-width: 1280px) 46rem, (min-width: 640px) 28rem, 100vw"
          loading="eager"
          fetchPriority="high"
          className="relative block h-auto w-full xl:h-full"
        />
        <p className="absolute bottom-16 left-gutter flex items-center gap-3 rounded-full bg-navy-raised py-2 pr-5 pl-2 motion-safe:animate-float xl:top-[60%] xl:bottom-auto xl:left-[-3%]">
          <span className="flex size-9 items-center justify-center rounded-full bg-navy-line">
            <ShieldCheck aria-hidden="true" className="size-5 text-gold" />
          </span>
          {site.registry.body} {site.registry.number}
        </p>
        <Seal className="absolute top-[30%] right-[-6%] hidden size-36 xl:block" />
      </Parallax>
    </section>
  );
}
