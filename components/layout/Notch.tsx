import { ArrowDown } from "lucide-react";

// A quebra na passagem do claro para o escuro, como na referência Laurence Possebon: cantos recortados nas
// bordas da tela e um mergulho curvo no centro, onde assenta a setinha que desce para a seção.
export function Notch({ href, label }: { href: string; label: string }) {
  return (
    <>
      <span aria-hidden="true" className="corner-cut-left absolute top-0 left-0 size-6 bg-background" />
      <span aria-hidden="true" className="corner-cut-right absolute top-0 right-0 size-6 bg-background" />
      <svg aria-hidden="true" viewBox="0 0 240 44" className="absolute top-0 left-1/2 z-10 h-11 w-60 -translate-x-1/2 -translate-y-px fill-background">
        <path d="M0 0H240C206 0 192 8 170 26 152 40 136 44 120 44 104 44 88 40 70 26 48 8 34 0 0 0Z" />
      </svg>
      <a
        href={href}
        aria-label={label}
        className="absolute top-0 left-1/2 z-10 flex h-16 w-10 -translate-x-1/2 -translate-y-1/4 items-center justify-center rounded-full bg-navy text-gold outline-4 outline-background transition-colors hover:text-ivory focus-visible:outline-gold-deep"
      >
        <ArrowDown aria-hidden="true" className="size-5 motion-safe:animate-float" />
      </a>
    </>
  );
}
