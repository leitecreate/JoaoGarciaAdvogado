"use client";

import { useEffect, useRef } from "react";

// Pontos de partida, nas coordenadas do mapa (600 x 617): do Acre ao Rio Grande do Sul.
const ORIGINS = [
  { x: 60, y: 215 },
  { x: 200, y: 42 },
  { x: 190, y: 150 },
  { x: 345, y: 50 },
  { x: 440, y: 125 },
  { x: 510, y: 150 },
  { x: 575, y: 205 },
  { x: 250, y: 320 },
  { x: 515, y: 300 },
  { x: 450, y: 395 },
  { x: 320, y: 570 },
];

// Ciclo (referência gmv.adv.br): as linhas crescem da ponta até o pino, seguram, são recolhidas pelo pino e recomeçam.
const DRAW = 2200;
const STAGGER = 70;
const HOLD = 500;
const RETRACT = 1300;
const GAP = 600;
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";

// Arco de cada ponto até o pino, curvado para o lado (bojo de 22% do comprimento).
function arc(from: { x: number; y: number }, to: { x: number; y: number }) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const bow = 0.22;
  const cx = (from.x + to.x) / 2 + dy * bow;
  const cy = (from.y + to.y) / 2 - dx * bow;
  return `M${from.x} ${from.y}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${to.x} ${to.y}`;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Raios que saem de vários pontos do Brasil e terminam no pino de Itajaí. Só animam com a seção na tela.
// Sem script ou com movimento reduzido, as linhas ficam desenhadas e paradas.
export function MapRays({ pin }: { pin: { x: number; y: number } }) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    const group = ref.current;
    if (!group || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rays = Array.from(group.querySelectorAll<SVGPathElement>("[data-ray]"));
    const flash = group.querySelector<SVGCircleElement>("[data-ray-flash]");
    const hide = () =>
      rays.forEach((ray) => {
        ray.getAnimations().forEach((a) => a.cancel());
        ray.style.strokeDasharray = "1 1";
        ray.style.strokeDashoffset = "1";
      });
    hide();

    let cycle = 0; // cada entrada na tela abre um ciclo novo; sair invalida o anterior
    const loop = async (id: number) => {
      while (id === cycle) {
        await Promise.all(
          rays.map(
            (ray) =>
              ray.animate(
                [
                  { strokeDashoffset: 1, opacity: 0 },
                  { opacity: 1, offset: 0.12 },
                  { strokeDashoffset: 0, opacity: 1 },
                ],
                { duration: DRAW, delay: Number(ray.dataset.index) * STAGGER, easing: EASE, fill: "forwards" },
              ).finished,
          ),
        ).catch(() => {});
        if (id !== cycle) return;
        flash?.animate(
          [
            { transform: "scale(1)", opacity: 0.9 },
            { transform: "scale(2.4)", opacity: 0 },
          ],
          { duration: 750, easing: "ease-out" },
        );
        await wait(HOLD);
        if (id !== cycle) return;
        await Promise.all(
          rays.map(
            (ray) =>
              ray.animate(
                [
                  { strokeDashoffset: 0, opacity: 1 },
                  { opacity: 1, offset: 0.65 },
                  { strokeDashoffset: -1, opacity: 0 },
                ],
                { duration: RETRACT, easing: EASE, fill: "forwards" },
              ).finished,
          ),
        ).catch(() => {});
        await wait(GAP);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        cycle += 1;
        hide();
        if (entry.isIntersecting) loop(cycle);
      },
      { threshold: 0.3 },
    );
    io.observe(group.ownerSVGElement ?? group);
    return () => {
      cycle += 1;
      io.disconnect();
    };
  }, []);

  return (
    <g ref={ref} aria-hidden="true" fill="none" strokeLinecap="round">
      {/* contorno marinho por baixo, para a linha não se perder nas listras claras do mapa */}
      {ORIGINS.map((origin, index) => (
        <path key={`c${index}`} data-ray data-index={index} d={arc(origin, pin)} pathLength={1} className="stroke-navy" strokeWidth="6" />
      ))}
      {ORIGINS.map((origin, index) => (
        <path key={`l${index}`} data-ray data-index={index} d={arc(origin, pin)} pathLength={1} className="stroke-gold" strokeWidth="2" />
      ))}
      <circle
        data-ray-flash
        cx={pin.x}
        cy={pin.y}
        r="11"
        className="origin-center fill-gold/70 opacity-0 [transform-box:fill-box]"
      />
    </g>
  );
}
