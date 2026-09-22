/**
 * The decorative 12-column rules that bleed through every section. Sits inside the same
 * max-width container as the content, so the lines land on the real column boundaries.
 */
export function GridLines({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none${dark ? " opacity-[0.06]" : ""}`}
    >
      <div className="max-w-[120rem] mx-auto h-full px-6 lg:px-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 11 }).map((_, i) => (
            <div
              key={i}
              className={`h-full border-r ${dark ? "border-white" : "border-[#1A1C1E]/[0.04]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
