"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const INTERVAL = 6000;
const DOTS = 5;
const LONG_QUOTE = 170;

// Texto longo fica em cinco linhas, com a opção de ler tudo.
export function ReviewQuote({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const long = text.length > LONG_QUOTE;
  return (
    <>
      <blockquote className={cn("mt-3", long && !open && "line-clamp-5")}>{text}</blockquote>
      {long && (
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="mt-auto inline-flex min-h-11 items-center self-start text-small text-navy-soft transition-colors hover:text-gold-deep"
        >
          {open ? "Ler menos" : "Ler tudo"}
        </button>
      )}
    </>
  );
}

// Trilho com scroll-snap: funciona com o dedo e sem script. Avança sozinho só enquanto está na tela.
// Espera com o mouse em cima ou com foco dentro, e para de vez no primeiro toque ou clique: é assim que
// quem navega consegue parar o movimento (WCAG 2.2.2). Com movimento reduzido, não avança.
export function ReviewsCarousel({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [dot, setDot] = useState(0);
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const [visible, setVisible] = useState(false);

  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const move = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const behavior = reduced() ? "auto" : "smooth";
    const end = el.scrollWidth - el.clientWidth;
    if (direction === 1 && el.scrollLeft >= end - 4) return el.scrollTo({ left: 0, behavior });
    if (direction === -1 && el.scrollLeft <= 4) return el.scrollTo({ left: end, behavior });
    const card = el.firstElementChild?.getBoundingClientRect().width ?? 336;
    el.scrollBy({ left: direction * (card + 16), behavior });
  };

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || held || !visible || reduced()) return;
    const timer = window.setTimeout(() => {
      const el = track.current;
      if (!el) return;
      const end = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= end - 4) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollBy({ left: (el.firstElementChild?.getBoundingClientRect().width ?? 336) + 16, behavior: "smooth" });
      setTick((value) => value + 1);
    }, INTERVAL);
    return () => window.clearTimeout(timer);
  }, [tick, paused, held, visible]);

  const control = "flex size-11 items-center justify-center rounded-full transition-colors hover:text-gold";
  return (
    <div
      ref={root}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
      onPointerDown={() => setPaused(true)}
    >
      <ul
        ref={track}
        tabIndex={0}
        aria-label="Avaliações do Google"
        onScroll={(e) => {
          const el = e.currentTarget;
          const progress = el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth);
          setDot(Math.min(DOTS - 1, Math.floor(progress * DOTS)));
        }}
        className="no-scrollbar relative flex snap-x snap-mandatory scroll-px-gutter gap-4 overflow-x-auto px-gutter"
      >
        {children}
      </ul>
      <div className="mt-5 flex items-center justify-center gap-3">
        <button type="button" onClick={() => move(-1)} aria-label="Avaliações anteriores" className={control}>
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <span aria-hidden="true" className="flex gap-2">
          {Array.from({ length: DOTS }, (_, index) => (
            <span key={index} className={cn("size-2 rounded-full transition-colors", index === dot ? "bg-gold" : "bg-navy-line")} />
          ))}
        </span>
        <button type="button" onClick={() => move(1)} aria-label="Próximas avaliações" className={control}>
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
}
