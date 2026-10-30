/**
 * Logo JitakuTrack: casa + ventana 2x2 + check integrado.
 */
export default function Logo({
  size = 32,
  color = "currentColor",
  className = "",
  title = "JitakuTrack",
}: {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        d="M9 22 L24 9 L39 22 V36"
        fill="none"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M9 22 V40 H28"
        fill="none"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M19 22 H29 V32 H19 Z M24 22 V32 M19 27 H29"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M26 38 L32 44 L46 26"
        fill="none"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
