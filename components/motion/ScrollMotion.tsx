"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionStyle } from "motion/react";

// Foto do hero descendo mais devagar que a página. Só no computador: no celular, a foto é parte do fluxo.
export function Parallax({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], ["0px", "90px"]);
  return (
    <motion.div style={reduced ? undefined : ({ "--parallax": y } as MotionStyle)} className={`xl:translate-y-(--parallax) ${className ?? ""}`}>
      {children}
    </motion.div>
  );
}

// A palavra gigante ao fundo, que anda de lado com a rolagem (detalhe da referência Gustavo Vicelli).
export function ScrollWord({ word }: { word: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-22%"]);
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-8 -z-10 hidden overflow-hidden select-none lg:block">
      <motion.p style={reduced ? undefined : { x }} className="text-giant font-bold whitespace-nowrap text-navy-raised">
        {word}
      </motion.p>
    </div>
  );
}
