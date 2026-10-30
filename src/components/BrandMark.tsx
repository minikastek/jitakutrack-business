import { BRAND } from "@/brand";
import Logo from "@/components/Logo";

export default function BrandMark({
  logoSize = 36,
  showSlogan = false,
  tone = "default",
  className = "",
}: {
  logoSize?: number;
  showSlogan?: boolean;
  tone?: "default" | "onDark";
  className?: string;
}) {
  const onDark = tone === "onDark";
  const logoColor = onDark ? "#FFFFFF" : BRAND.colors.logo;
  const nameClass = onDark ? "text-white" : "text-ink";
  const sloganClass = onDark ? "text-white/55" : "";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`.trim()}>
      <Logo size={logoSize} color={logoColor} />
      <span>
        <span
          className={`font-display block text-xl font-semibold tracking-tight sm:text-2xl ${nameClass}`}
        >
          {BRAND.name}
        </span>
        {showSlogan ? (
          <span
            className={`mt-0.5 block text-xs ${sloganClass}`}
            style={onDark ? undefined : { color: BRAND.colors.logo }}
          >
            {BRAND.slogan}
          </span>
        ) : null}
      </span>
    </div>
  );
}
