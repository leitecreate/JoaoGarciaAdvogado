// A geometria da logo (dois quadrados girados e um reto) como cenário atrás do João, em traço fino.
// Mesmas coordenadas de material-cliente/identidade/logo-original/gerar-logo.py. Os traços se desenham na entrada.
const paths = [
  { d: "M295.5 51.5L391.5 147.5L295.5 243.5L199.5 147.5Z", className: "text-gold/30" },
  { d: "M295.5 62.5L380.5 147.5L295.5 232.5L210.5 147.5Z", className: "text-gold/45" },
  { d: "M230 82.5H361V213H230Z", className: "text-gold/25" },
];

export function HeroFrame({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="192 44 207 207" fill="none" className={className}>
      {paths.map((path, index) => (
        <path
          key={path.d}
          d={path.d}
          pathLength={1}
          stroke="currentColor"
          strokeWidth={1}
          strokeDasharray={1}
          vectorEffect="non-scaling-stroke"
          style={{ animationDelay: `${300 + index * 250}ms` }}
          className={`${path.className} motion-safe:animate-draw`}
        />
      ))}
    </svg>
  );
}
