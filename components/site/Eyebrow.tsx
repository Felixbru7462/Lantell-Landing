/**
 * A short rule plus a mono section label. `dark` is for the charcoal bands.
 *
 * The two tones don't just swap a hex: on light the rule can carry the decorative blue, but the
 * label is 11px text and needs the darker `brand` to clear 4.5:1. On charcoal both have to be the
 * lightened blue, since `brand` only reaches 3.21:1 there.
 */
export function Eyebrow({
  label,
  className = "",
  tone = "light",
}: {
  label: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const rule = tone === "dark" ? "bg-brand-on-dark" : "bg-brand-fill";
  const text = tone === "dark" ? "text-brand-on-dark" : "text-brand";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`w-8 h-px ${rule}`} />
      <span className={`font-mono text-[11px] tracking-[0.15em] uppercase ${text}`}>{label}</span>
    </div>
  );
}
