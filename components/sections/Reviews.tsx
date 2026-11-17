import Image from "next/image";
import { Notch } from "@/components/layout/Notch";
import { GoogleIcon, StarRow } from "@/components/layout/Icons";
import { WhatsAppCta } from "@/components/layout/WhatsAppCta";
import { ReviewQuote, ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { reviewsSection } from "@/lib/content";
import { reviewProfile, reviews, type Review } from "@/lib/reviews";
import { cn } from "@/lib/utils";

function Avatar({ review, className }: { review: Review; className?: string }) {
  if (review.photo) {
    return <Image src={review.photo} alt="" width={48} height={48} className={cn("rounded-full object-cover", className)} />;
  }
  return (
    <span aria-hidden="true" className={cn("flex items-center justify-center rounded-full bg-navy font-semibold text-ivory", className)}>
      {review.name[0]}
    </span>
  );
}

// Modelo da referência Laurence Possebon: selo com a nota, fileira de cards de ponta a ponta, setas e pontos.
// TODO: antes de publicar, confirmar com o João a autorização para exibir nomes e trechos.
export function Reviews() {
  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-titulo" data-reveal-group className="on-dark bg-deep relative py-section text-ivory">
      <Notch href="#avaliacoes" label="Descer para as avaliações" />
      <div className="shell flex flex-col items-center text-center">
        <div data-reveal className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={reviewProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 flex-wrap items-center justify-center gap-2 rounded-md border border-navy-line bg-navy-raised px-5 py-2 text-small font-semibold uppercase transition-colors hover:border-gold"
          >
            Escritório avaliado em {reviewProfile.rating} no
            <GoogleIcon className="size-4" />
            <StarRow className="text-star" />
          </a>
          <span aria-hidden="true" className="flex -space-x-2.5">
            {reviews.slice(0, 5).map((review) => (
              <Avatar key={review.name} review={review} className="size-10 text-small ring-2 ring-ivory" />
            ))}
          </span>
        </div>
        <h2 id="avaliacoes-titulo" data-reveal className="mt-6 text-head font-medium">
          {reviewsSection.title}
        </h2>
        <span aria-hidden="true" className="mt-5 h-px w-full max-w-sm bg-navy-line" />
        <p data-reveal className="mt-5">
          {reviewsSection.intro}
        </p>
      </div>
      <div data-reveal className="mt-10">
        <ReviewsCarousel>
          {reviews.map((review) => (
            <li key={review.name} className="flex w-[min(21rem,84vw)] shrink-0 snap-start flex-col rounded-xl bg-paper p-6 text-navy">
              <div className="flex items-start gap-3">
                <Avatar review={review} className="size-12 shrink-0" />
                <p className="min-w-0 flex-1 leading-tight">
                  <span className="block font-semibold">{review.name}</span>
                  <span className="text-small text-navy-soft">{review.when}</span>
                </p>
                <GoogleIcon className="size-6 shrink-0" />
              </div>
              <StarRow className="mt-3 text-star" size="size-5" />
              <span className="sr-only">Nota {review.rating} de 5</span>
              <ReviewQuote text={review.quote} />
            </li>
          ))}
        </ReviewsCarousel>
      </div>
      <div data-reveal className="mt-8 flex justify-center">
        <WhatsAppCta label={reviewsSection.action} />
      </div>
    </section>
  );
}
