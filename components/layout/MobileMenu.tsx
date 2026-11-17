"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { nav } from "@/components/layout/nav";
import { site, whatsappUrl } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="min-h-12 rounded-md px-3 text-body font-semibold text-ivory transition-colors hover:text-gold lg:hidden">
        Menu
      </SheetTrigger>
      <SheetContent side="right" className="on-dark w-full gap-0 bg-navy px-gutter pt-24 pb-10 text-ivory sm:max-w-md">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav aria-label="Menu do celular">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-head text-ivory transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto flex flex-col gap-4 pt-10">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "cta", className: "w-full pr-6" })}
          >
            Conversar no WhatsApp
          </a>
          <p className="text-small text-ivory">
            {site.registry.body} {site.registry.number} · {site.address.city}/{site.address.state}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
