import { WhatsAppIcon } from "@/components/layout/Icons";
import { whatsappUrl } from "@/lib/site";

// Ação fixa no celular e no tablet.
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-gold text-navy shadow-card transition-transform active:scale-95 lg:hidden"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
