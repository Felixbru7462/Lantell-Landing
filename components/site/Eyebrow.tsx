/** Maroon rule + mono section label. Coral on the dark sections. */
export function Eyebrow({
  label,
  className = "",
  tone = "maroon",
}: {
  label: string;
  className?: string;
  tone?: "maroon" | "coral";
}) {
  const color = tone === "coral" ? "#F26C6C" : "#8B1F1F";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-8 h-px" style={{ backgroundColor: color }} />
      <span
        className="font-mono text-[11px] tracking-[0.15em] uppercase"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}
