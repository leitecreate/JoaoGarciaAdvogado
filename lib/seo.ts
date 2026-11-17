import { faqs } from "@/lib/content";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export const ogImage = { url: "/brand/og-image.png", width: 1200, height: 630, alt: "João Garcia, advogado" };

export function legalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: `${site.name}, advogado`,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/brand/logo-escura-512.png`,
    image: `${site.url}${photos.hero.src}`,
    telephone: site.phoneE164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: site.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    knowsAbout: ["Direito Empresarial", "Contratos", "Recuperação de créditos", "Direito do Trabalho"],
    sameAs: [site.social.instagram, site.social.google],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export const jsonLdScript = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
