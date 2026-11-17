import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/layout/Icons";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

// A ação do site: botão dourado com o ícone em círculo claro. Por padrão abre o WhatsApp;
// com href, leva a outro destino e deve trazer o ícone desse destino.
export function WhatsAppCta({
  label,
  message,
  href,
  icon,
  className,
}: {
  label: string;
  message?: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href ?? whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ size: "cta" }), "relative overflow-hidden hover:-translate-y-0.5", className)}
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1/5 bg-paper/30 motion-safe:animate-shine motion-reduce:hidden" />
      <span className="relative">{label}</span>
      <span className="relative flex size-10 items-center justify-center rounded-full bg-paper text-navy transition-transform duration-200 group-hover/button:scale-105">
        {icon ?? <WhatsAppIcon className="size-5" />}
      </span>
    </a>
  );
}
