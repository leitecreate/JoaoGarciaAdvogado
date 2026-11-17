import { cn } from "@/lib/utils";

// Selo redondo com o monograma real e o nome em volta, como o da referência Laurence Possebon.
export function Seal({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("relative block", className)}>
      <svg viewBox="0 0 160 160" className="size-full motion-safe:animate-spin-slow">
        <circle cx="80" cy="80" r="79" className="fill-navy" />
        <circle cx="80" cy="80" r="52" className="fill-navy-raised" />
        <defs>
          <path id="selo-arco" d="M80 80m-63 0a63 63 0 1 1 126 0a63 63 0 1 1-126 0" />
        </defs>
        <text className="fill-ivory text-[0.72rem] font-semibold tracking-[0.2em]">
          <textPath href="#selo-arco" textLength="388">ADVOGADO · JOÃO GARCIA · ITAJAÍ · SC ·</textPath>
        </text>
      </svg>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/simbolo-forte-clara.svg" alt="" className="absolute top-1/2 left-1/2 h-[56%] w-auto -translate-x-1/2 -translate-y-1/2" />
    </span>
  );
}
