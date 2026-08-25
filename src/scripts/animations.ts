import { animate, inView, scroll, stagger } from "motion";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const heroItems = Array.from(document.querySelectorAll<HTMLElement>("[data-hero-reveal]"));
  if (heroItems.length) {
    animate(
      heroItems,
      { opacity: [0.18, 1], y: [18, 0] },
      { duration: 0.72, delay: stagger(0.075), ease: [0.22, 1, 0.36, 1] },
    );
  }

  const heroImage = document.querySelector<HTMLElement>("[data-hero-image]");
  if (heroImage) {
    animate(
      heroImage,
      { opacity: [0.4, 1], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"] },
      { duration: 1.05, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
    );
  }

  inView(
    "[data-reveal]",
    (element) => {
      animate(
        element,
        { opacity: [0.28, 1], y: [24, 0] },
        { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
      );
    },
    { amount: 0.18, margin: "0px 0px -8% 0px" },
  );

  document.querySelectorAll<HTMLElement>("[data-stagger-group]").forEach((group) => {
    inView(
      group,
      () => {
        const items = Array.from(group.querySelectorAll<HTMLElement>("[data-stagger-item]"));
        animate(
          items,
          { opacity: [0.34, 1], y: [16, 0] },
          { duration: 0.55, delay: stagger(0.055), ease: [0.22, 1, 0.36, 1] },
        );
      },
      { amount: 0.15 },
    );
  });

  document.querySelectorAll<HTMLElement>("[data-line-reveal]").forEach((line) => {
    inView(
      line,
      () => {
        animate(line, { scaleX: [0, 1] }, { duration: 0.9, ease: [0.22, 1, 0.36, 1] });
      },
      { amount: 0.7 },
    );
  });

  document.querySelectorAll<HTMLElement>("[data-parallax-wrap]").forEach((wrap) => {
    const image = wrap.querySelector<HTMLElement>("[data-parallax-image]");
    if (!image) return;
    scroll(animate(image, { y: [-18, 18] }, { ease: "linear" }), {
      target: wrap,
      offset: ["start end", "end start"],
    });
  });
}
