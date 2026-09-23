/** The Lantell mark: outlined square, filled inner square, and a corner tick on the light one. */
export function Mark({ tone = "light" }: { tone?: "light" | "dark" }) {
  if (tone === "dark") {
    return (
      <div className="w-7 h-7 border-[1.5px] border-page flex items-center justify-center relative">
        <div className="w-2.5 h-2.5 bg-brand-on-dark" />
      </div>
    );
  }
  return (
    <div className="w-7 h-7 border-[1.5px] border-ink flex items-center justify-center relative">
      <div className="w-2.5 h-2.5 bg-brand-fill" />
      <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border-t-[1.5px] border-l-[1.5px] border-brand-fill" />
    </div>
  );
}
