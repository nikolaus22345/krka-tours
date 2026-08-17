type Props = {
  className?: string;
  size?: number;
};

const CHECKER_CELLS = Array.from({ length: 5 }, (_, row) =>
  Array.from({ length: 5 }, (_, col) => ({
    row,
    col,
    isRed: (row + col) % 2 === 1,
  })),
).flat();

/**
 * Krka Tours brand mark — Croatian šahovnica shield with a route from the park.
 */
export function BrandLogo({ className, size = 40 }: Props) {
  const uid = "kt";

  const shieldPath =
    "M24 7 L35 11.5 V19.5 C35 27.5 30 33.5 24 37 C18 33.5 13 27.5 13 19.5 V11.5 Z";

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Krka Tours"
      role="img"
    >
      <defs>
        <pattern
          id={`${uid}-checker`}
          x="13"
          y="7"
          width="22"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          {CHECKER_CELLS.map(({ row, col, isRed }) => (
            <rect
              key={`${row}-${col}`}
              x={col * 4.4}
              y={row * 6}
              width={4.4}
              height={6}
              fill={isRed ? "#C8102E" : "#FFFFFF"}
            />
          ))}
        </pattern>
      </defs>

      {/* White badge, green border */}
      <rect width="48" height="48" rx="11" fill="#FFFFFF" stroke="#367c2b" strokeWidth="2" />

      {/* Šahovnica — Croatian coat-of-arms checkerboard */}
      <path d={shieldPath} fill={`url(#${uid}-checker)`} />
      <path
        d={shieldPath}
        fill="none"
        stroke="#C8102E"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Route from Krka outward */}
      <path
        d="M24 36.5 Q30 39 36 37.5 T43 41"
        stroke="#367c2b"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="43" cy="41" r="2.2" fill="#367c2b" />
      <circle cx="43" cy="41" r="4.2" fill="#367c2b" fillOpacity="0.18" />

      {/* Krka — starting point */}
      <circle cx="24" cy="36.5" r="2" fill="#367c2b" stroke="#FFFFFF" strokeWidth="1.2" />
    </svg>
  );
}

export function BrandWordmark({ className }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className ?? "text-foreground"}`}>
      krka tours.
    </span>
  );
}
