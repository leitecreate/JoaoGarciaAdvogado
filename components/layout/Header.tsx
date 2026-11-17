import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/layout/Icons";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { nav } from "@/components/layout/nav";
import { site, whatsappUrl } from "@/lib/site";

// Modelo da referência Gustavo Vicelli, nas cores do João: logo, links e o contato com o número à direita.
export function Header() {
  return (
    <header className="on-dark bg-header sticky top-0 z-30 text-ivory">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-4 focus:py-3 focus:text-navy"
      >
        Pular para o conteúdo
      </a>
      <div className="shell flex h-header items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name}, advogado: página inicial`} className="shrink-0">
          <Image src="/brand/horizontal-clara.svg" alt="" width={678} height={207} priority className="h-14 w-auto xl:h-16" />
        </Link>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="py-2 transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group hidden items-center gap-3 lg:flex">
          <span className="flex size-12 items-center justify-center rounded-sm bg-gold text-navy transition-colors group-hover:bg-gold/85">
            <WhatsAppIcon className="size-6" />
          </span>
          <span className="leading-snug">
            <span className="block">Entre em contato</span>
            <span className="block transition-colors group-hover:text-gold">{site.phone}</span>
          </span>
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
