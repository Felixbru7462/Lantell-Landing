import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Eyebrow } from "./Eyebrow";

const PHOTO = "founder.jpg";

/** Renders the note with or without the portrait, so a missing file never leaves a broken frame. */
function hasPhoto() {
  return fs.existsSync(path.join(process.cwd(), "public", PHOTO));
}

export function Founder() {
  const photo = hasPhoto();

  return (
    <section id="founder" className="bg-band border-y border-hairline">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <Eyebrow label="BEHIND LANTELL" className="mb-10" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {photo && (
            <div className="lg:col-span-3">
              <div className="relative aspect-square w-40 lg:w-full overflow-hidden border border-ink">
                <Image
                  src={`/${PHOTO}`}
                  alt="Felix Brunnemann"
                  fill
                  sizes="(min-width: 1024px) 25vw, 160px"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className={photo ? "lg:col-span-7 lg:col-start-5" : "lg:col-span-8"}>
            <p className="font-body text-ink/70 text-lg leading-[1.6]">
              Tenant improvement allowances get held up by paperwork, not by construction. A missing
              certificate of insurance stalls a draw for weeks while five people email around a
              shared drive, and the record of who approved what ends up scattered across inboxes.
            </p>
            <p className="mt-5 font-body text-ink/70 text-lg leading-[1.6]">
              Lantell holds one standard: nothing releases until the evidence is in place and
              attributed to a named person. Everything else in the product follows from that.
            </p>
            <p className="mt-5 font-body text-ink text-lg leading-[1.6]">
              I built Lantell, and I run the demos myself. Bring one real project and we&apos;ll map
              it live - half an hour and you&apos;ll know whether it fits how you work.
            </p>
            <p className="mt-7 font-mono text-[11px] tracking-wider text-ink/50 uppercase">
              Felix Brunnemann / Lantell
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
