"use client";

import { useEffect } from "react";
import { animate, inView } from "motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// Entradas das seções. [data-reveal] sobe com fade ao entrar na tela, em sequência dentro do grupo.
// [data-reveal="image"] abre de baixo para cima, com a foto assentando. O conteúdo nasce visível no HTML:
// só é escondido depois que o script roda, e nunca com movimento reduzido.
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const stops: (() => void)[] = [];
    for (const group of document.querySelectorAll<HTMLElement>("[data-reveal-group]")) {
      const items = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]"));
      items.forEach((el, index) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return; // já na tela: não pisca
        const isImage = el.dataset.reveal === "image";
        const inner = isImage ? el.querySelector<HTMLElement>("img") : null;
        if (isImage) {
          el.style.clipPath = "inset(100% 0 0 0)";
          if (inner) inner.style.transform = "scale(1.12)";
        } else {
          el.style.opacity = "0";
          el.style.transform = "translateY(28px)";
        }
        // A imagem recortada a zero nunca conta como visível: quem dispara é o elemento pai.
        const target = isImage ? (el.parentElement ?? el) : el;
        stops.push(
          inView(
            target,
            () => {
              if (isImage) {
                animate(el, { clipPath: ["inset(100% 0 0 0)", "inset(0% 0 0 0)"] }, { duration: 1.1, ease: EASE });
                if (inner) animate(inner, { transform: ["scale(1.12)", "scale(1)"] }, { duration: 1.4, ease: EASE });
              } else {
                animate(
                  el,
                  { opacity: [0, 1], transform: ["translateY(28px)", "translateY(0px)"] },
                  { duration: 0.8, delay: (index % 4) * 0.08, ease: EASE },
                );
              }
            },
            { amount: isImage ? 0.05 : 0.15 },
          ),
        );
      });
    }
    return () => stops.forEach((stop) => stop());
  }, []);
  return null;
}
