import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// cn padrão do shadcn, ensinado sobre os tokens do globals.css: sem isso o tailwind-merge
// lê "text-body" como cor e apaga a cor do texto do botão.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["small", "body", "lead", "head", "hero", "giant"],
      spacing: ["gutter", "section", "header", "notch"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
