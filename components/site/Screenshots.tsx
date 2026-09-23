import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Eyebrow } from "./Eyebrow";

/**
 * Real product shots, dropped into public/shots as they're captured. Each slot renders only when
 * its file exists and the whole section disappears when none do — so the page is never broken by a
 * missing screenshot, and fills in without a code change.
 */
const SHOTS = [
  {
    file: "checklist.png",
    label: "DRAW / DOCUMENTS",
    caption: "A draw mid-verification: what's in, what's been sent back, and what's still blocking.",
    wide: true,
  },
  {
    file: "tenant-portal.png",
    label: "TENANT PORTAL",
    caption: "What the tenant sees. A private link, their checklist, no account.",
    wide: false,
  },
  {
    file: "release-memo.png",
    label: "RELEASE MEMO",
    caption: "The instruction your AP process pays from, with the evidence listed behind it.",
    wide: false,
  },
  {
    file: "activity.png",
    label: "ACTIVITY",
    caption: "Every action, attributed and timestamped.",
    wide: false,
  },
];

export function Screenshots() {
  const present = SHOTS.filter((shot) =>
    fs.existsSync(path.join(process.cwd(), "public", "shots", shot.file))
  );

  if (present.length === 0) return null;

  return (
    <section id="product" className="bg-band border-y border-hairline">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <Eyebrow label="THE PRODUCT / SCREENS" className="mb-5" />
            <h2 className="font-heading font-bold text-ink text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.02]">
              What it looks
              <br />
              like in use.
            </h2>
          </div>
        </div>

        <div className="grid gap-px border border-hairline bg-hairline lg:grid-cols-2">
          {present.map((shot) => (
            <figure
              key={shot.file}
              className={`bg-page p-5 lg:p-7 ${
                shot.wide && present.length > 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative w-full overflow-hidden border border-hairline">
                <Image
                  src={`/shots/${shot.file}`}
                  alt={shot.caption}
                  width={1440}
                  height={900}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="font-mono text-[10px] tracking-wider text-brand uppercase">
                  {shot.label}
                </span>
                <span className="font-body text-sm text-ink/60 sm:text-right">
                  {shot.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
