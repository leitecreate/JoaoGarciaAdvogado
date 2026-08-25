import { animate, inView } from "motion";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const heroItems = Array.from(document.querySelectorAll<HTMLElement>("[data-hero-reveal]"));
  const heroDelays = [0, 0.08, 0.2, 0.3, 0.38];

  heroItems.forEach((item, index) => {
    animate(
      item,
      { opacity: [0.72, 1], y: [9, 0] },
      { duration: 0.62, delay: heroDelays[index] ?? 0.3, ease: [0.22, 1, 0.36, 1] },
    );
  });

  const heroImage = document.querySelector<HTMLElement>("[data-hero-image]");
  if (heroImage) {
    animate(
      heroImage,
      { opacity: [0.84, 1], clipPath: ["inset(0 0 12% 0)", "inset(0 0 0% 0)"], scale: [1.025, 1] },
      { duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] },
    );
  }

  inView(
    "[data-reveal]",
    (element) => {
      animate(
        element,
        { opacity: [0.55, 1], y: [20, 0] },
        { duration: 0.66, ease: [0.22, 1, 0.36, 1] },
      );
    },
    { amount: 0.16, margin: "0px 0px -7% 0px" },
  );
}
