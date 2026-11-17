import { cn } from "@/lib/utils";

// Abertura das seções: título e, se preciso, uma frase de apoio.
export function SectionHeading({
  id,
  title,
  intro,
  dark = false,
  align = "center",
  className,
}: {
  id: string;
  title: string;
  intro?: string;
  dark?: boolean;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start", className)}>
      <h2 id={id} data-reveal className="text-head font-semibold">
        {title}
      </h2>
      {intro && (
        <p data-reveal className={cn("max-w-[60ch]", dark ? "text-mist" : "text-navy-soft")}>
          {intro}
        </p>
      )}
    </div>
  );
}
