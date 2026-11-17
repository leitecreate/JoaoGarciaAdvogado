"use client";

import { useState } from "react";
import Image from "next/image";
import { InstagramIcon } from "@/components/layout/Icons";
import { WhatsAppCta } from "@/components/layout/WhatsAppCta";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { contact, subjectMessage, subjects } from "@/lib/content";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

// Escolher o assunto muda a mensagem que já vai escrita no WhatsApp e mostra o que separar
// para a primeira conversa. Sem script, o botão abre com a mensagem do primeiro assunto.
export function Contact() {
  const [id, setId] = useState<string>(subjects[0].id);
  const subject = subjects.find((s) => s.id === id) ?? subjects[0];

  return (
    <section id="contato" aria-labelledby="contato-titulo" data-reveal-group className="on-dark relative isolate overflow-hidden bg-navy py-section text-ivory">
      <Image src={photos.leitura.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/85" />
      <div className="shell flex flex-col items-center text-center">
        <h2 id="contato-titulo" data-reveal className="text-head font-semibold">
          {contact.title}
        </h2>
        <div data-reveal className="flex w-full flex-col items-center">
          <ToggleGroup
            value={[id]}
            onValueChange={(v) => v[0] && setId(v[0] as string)}
            aria-label="Assunto da conversa"
            spacing={2}
            className="mt-8 w-full max-w-3xl flex-wrap justify-center"
          >
            {subjects.map((s) => (
              <ToggleGroupItem
                key={s.id}
                value={s.id}
                className="h-auto min-h-11 rounded-sm bg-navy-raised px-4 py-2 text-small font-semibold text-ivory hover:bg-navy-line hover:text-ivory data-[pressed]:bg-gold data-[pressed]:text-navy"
              >
                {s.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <p className="mt-6 max-w-[56ch]" aria-live="polite">
            <span className="font-semibold text-gold">{contact.bringLead} </span>
            {subject.bring}.
          </p>
          <WhatsAppCta label={contact.action} message={subjectMessage(subject.topic)} className="mt-8" />
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6">
            <span>{site.phone}</span>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-gold"
            >
              <InstagramIcon className="size-5" />
              {site.social.instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
