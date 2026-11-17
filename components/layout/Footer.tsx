import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/layout/Icons";
import { WhatsAppCta } from "@/components/layout/WhatsAppCta";
import { nav } from "@/components/layout/nav";
import { footer, seoFooter } from "@/lib/content";
import { creditLabel, creditUrl } from "@/lib/credit";
import { mapsUrl, site, whatsappUrl } from "@/lib/site";

// Um só ritmo para as colunas: título dourado e itens com a mesma altura, todos com ícone quando são contato.
const itemClass = "flex min-h-9 items-start gap-3 py-1.5";
const linkClass = `${itemClass} transition-colors hover:text-gold`;
const iconClass = "mt-0.5 size-5 shrink-0 text-gold";
const titleClass = "text-small font-semibold tracking-wide text-gold uppercase";

// Em toda a largura do site: chamada no topo, quatro colunas e o símbolo da logo no vão da chamada, longe do texto. No fim, uma barra só
// com o legal, as áreas atendidas (recolhidas) e o crédito.
export function Footer() {
  return (
    <footer className="on-dark bg-header relative isolate overflow-hidden pb-24 text-ivory lg:pb-6">
      <Image
        src="/brand/simbolo-clara.svg"
        alt=""
        width={207}
        height={207}
        className="pointer-events-none absolute -top-20 left-[58%] -z-10 hidden size-72 opacity-[0.06] lg:block"
      />
      <span aria-hidden="true" className="block h-1 bg-gold" />
      <div className="px-gutter xl:px-20">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-b border-navy-line py-12">
          <div>
            <h2 className="text-head font-semibold">{footer.title}</h2>
            <p className="mt-2 text-mist">{footer.text}</p>
          </div>
          <WhatsAppCta label={footer.action} />
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1.3fr_1.5fr] lg:gap-14">
          <div>
            <Image src="/brand/logo-clara.svg" alt={`${site.name}, advogado`} width={212} height={276} className="h-28 w-auto" />
            <p className="mt-4 font-semibold">{site.legalName}</p>
            <p className="text-mist">
              {site.registry.body} {site.registry.number}
            </p>
          </div>
          <nav aria-label="Rodapé">
            <h2 className={titleClass}>Navegue</h2>
            <ul className="mt-3 flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className={titleClass}>Contatos</h2>
            <ul className="mt-3 flex flex-col">
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <WhatsAppIcon className={iconClass} />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <InstagramIcon className={iconClass} />
                  {site.social.instagramHandle}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
                  <Mail aria-hidden="true" className={iconClass} />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={titleClass}>Escritório</h2>
            <ul className="mt-3 flex flex-col">
              <li className={itemClass}>
                <MapPin aria-hidden="true" className={iconClass} />
                <address className="not-italic">
                  {/* "sala 5" nunca se separa: o número sozinho numa linha parecia erro */}
                  {site.address.street.replace("sala ", "sala ")}
                  <br />
                  {site.address.district}, {site.address.city}/{site.address.state}
                  <br />
                  CEP {site.address.postalCode}
                </address>
              </li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} font-semibold text-gold hover:text-ivory`}>
                  <ArrowUpRight aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
                  Como chegar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra final: o legal à esquerda, o crédito à direita. O botão das áreas abre o bloco de SEO logo abaixo. */}
        <div className="group/fim border-t border-navy-line text-small text-mist">
          <div className="flex flex-wrap items-center justify-between gap-x-8 py-2">
            <div className="flex flex-wrap items-center gap-x-6">
              <p className="py-2">
                © {site.updated.slice(0, 4)} {site.legalName}. Todos os direitos reservados.
              </p>
              <Link href="/privacidade" className="inline-flex min-h-9 items-center transition-colors hover:text-gold">
                Privacidade
              </Link>
              <details className="group">
                <summary
                  aria-controls="rodape-areas"
                  className="inline-flex min-h-9 cursor-pointer list-none items-center gap-2 transition-colors hover:text-gold [&::-webkit-details-marker]:hidden"
                >
                  {seoFooter.summary}
                  <span aria-hidden="true" className="transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
              </details>
            </div>
            <a href={creditUrl(site.name)} target="_blank" rel="noopener" className="inline-flex min-h-9 items-center transition-colors hover:text-gold">
              {creditLabel}
            </a>
          </div>
          <div id="rodape-areas" className="hidden pb-4 group-has-[details[open]]/fim:block">
            <p className="max-w-[80ch]">{seoFooter.text}</p>
            <ul className="mt-3 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
              {seoFooter.terms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
