"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Check, ChevronRight, Coins, FileText, Landmark, Scale, ShieldCheck, Vault, Wallet, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { WhatsAppCta } from "@/components/layout/WhatsAppCta";
import { services, subjectMessage, type ServiceIcon } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons: Record<ServiceIcon, LucideIcon> = {
  shield: ShieldCheck,
  scale: Scale,
  vault: Vault,
  file: FileText,
  coins: Coins,
  wallet: Wallet,
  landmark: Landmark,
};

const all = [services.featured, ...services.items];
type Item = (typeof all)[number];

// Fundo do painel, com o símbolo da logo no canto livre, longe do texto.
function PanelFrame({ className, id, children }: { className?: string; id?: string; children: ReactNode }) {
  return (
    <div id={id} className={cn("on-dark bg-deep relative overflow-hidden p-7 text-ivory lg:p-10", className)}>
      <Image src="/brand/simbolo-clara.svg" alt="" width={207} height={207} className="pointer-events-none absolute -right-6 -bottom-6 hidden size-64 opacity-10 sm:block" />
      {children}
    </div>
  );
}

// A resposta ao caso escolhido, em três passos de leitura: o serviço, o que o João faz e o que entra.
function PanelBody({ item, id, className }: { item: Item; id?: string; className?: string }) {
  const Icon = icons[item.icon];
  return (
    <div id={id} className={cn("relative flex flex-col", className)}>
      <div className="flex items-center gap-4">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-gold/50 p-1">
          <span className="flex size-full items-center justify-center rounded-full bg-navy-line text-gold">
            <Icon aria-hidden="true" className="size-5" />
          </span>
        </span>
        <div>
          <p className="text-small font-semibold text-gold">{services.panelLabel}</p>
          <h3 className="mt-1 text-lead font-semibold">{item.name}</h3>
        </div>
      </div>
      <p className="mt-5 max-w-[56ch] text-mist">{item.detail}</p>
      <div className="mt-5 border-t border-navy-line pt-5">
        <p className="text-small font-semibold text-gold">{services.topicsLabel}</p>
        <ul className="mt-3 flex flex-col gap-2">
          {item.topics.map((topic) => (
            <li key={topic} className="flex items-start gap-3">
              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-6">
        <WhatsAppCta label="Falar sobre isso" message={subjectMessage(item.topic)} />
      </div>
    </div>
  );
}

// Pergunta e resposta: o visitante escolhe o caso dele à esquerda, e a faixa marinha desliza até lá e se funde ao
// painel que responde. Os sete painéis ficam empilhados na mesma célula, então a altura não salta ao trocar de
// assunto e todo o texto está no HTML. No celular, o painel abre logo abaixo do item.
export function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="atuacao" aria-labelledby="atuacao-titulo" data-reveal-group className="shell py-section">
      <SectionHeading id="atuacao-titulo" title={services.title} intro={services.intro} />
      <div className="mt-10 grid overflow-hidden rounded-sm border border-navy/20 lg:grid-cols-[6fr_7fr]">
        <div className="flex flex-col bg-paper">
          <p className="border-b border-navy/15 px-6 py-3 text-small font-semibold text-gold-deep">{services.listLabel}</p>
          <div className="relative grid flex-1">
            <span
              aria-hidden="true"
              style={{ top: `${(active * 100) / all.length}%`, height: `${100 / all.length}%` }}
              className="absolute inset-x-0 hidden bg-navy transition-[top] duration-500 ease-out-expo motion-reduce:transition-none lg:block"
            />
            <span
              aria-hidden="true"
              style={{ top: `${(active * 100) / all.length}%`, height: `${100 / all.length}%` }}
              className="absolute left-0 z-10 hidden w-1.5 bg-gold transition-[top] duration-500 ease-out-expo motion-reduce:transition-none lg:block"
            />
            <ul className="relative lg:grid lg:auto-rows-fr">
              {all.map((item, index) => {
                const Icon = icons[item.icon];
                const selected = index === active;
                return (
                  <li key={item.hook} data-reveal className="flex flex-col border-navy/15 not-first:border-t">
                    <button
                      type="button"
                      aria-expanded={selected}
                      aria-controls={`atuacao-painel-${index} atuacao-painel-movel-${index}`}
                      onClick={() => setActive(index)}
                      className={cn(
                        "group flex flex-1 items-center gap-4 py-4 pr-5 pl-6 text-left font-semibold transition-colors duration-300 focus-visible:-outline-offset-3 motion-reduce:transition-none",
                        selected ? "bg-navy text-ivory lg:delay-200" : "hover:bg-tone/60",
                      )}
                    >
                      <Icon aria-hidden="true" className={cn("size-5 shrink-0 transition-colors duration-300", selected ? "text-gold" : "text-gold-deep")} />
                      <span className="flex-1">{item.hook}</span>
                      <ChevronRight
                        aria-hidden="true"
                        className={cn(
                          "size-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none",
                          selected ? "rotate-90 text-gold lg:rotate-0" : "text-navy-soft group-hover:translate-x-0.5",
                        )}
                      />
                    </button>
                    {selected && (
                      <PanelFrame id={`atuacao-painel-movel-${index}`} className="lg:hidden">
                        <PanelBody item={item} />
                      </PanelFrame>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div data-reveal className="hidden lg:flex">
          <PanelFrame className="grid w-full">
            {all.map((item, index) => (
              <PanelBody
                key={item.hook}
                id={`atuacao-painel-${index}`}
                item={item}
                className={cn(
                  "col-start-1 row-start-1",
                  index === active ? "animate-in fade-in slide-in-from-bottom-2 duration-300 motion-reduce:animate-none" : "invisible",
                )}
              />
            ))}
          </PanelFrame>
        </div>
      </div>
    </section>
  );
}
