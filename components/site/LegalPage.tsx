import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";

/**
 * Shared shell for /privacy and /terms. Deliberately plain: the marketing page earns attention,
 * a legal page earns trust by being readable. One column, real headings, a table of contents.
 *
 * Both documents are DRAFTS until the gaps are filled and a lawyer has read them. Anything still
 * missing is written as [[like this]] in the body text and rendered as a visible marker, so an
 * unfinished page can never quietly look finished. Flip LEGAL_DRAFT to false to drop the notice.
 */
export const LEGAL_DRAFT = true;

export type LegalSection = {
  id: string;
  heading: string;
  /** Each entry is a paragraph. A nested array renders as a bullet list. */
  body: (string | string[])[];
  /** Optional interactive extra (e.g. the analytics opt-out button). */
  after?: React.ReactNode;
};

/** Renders [[unfilled detail]] as a marker instead of letting it read as finished copy. */
function withMarkers(text: string) {
  return text.split(/(\[\[.+?\]\])/g).map((chunk, index) => {
    if (!chunk.startsWith("[[") || !chunk.endsWith("]]")) return chunk;
    return (
      <mark
        key={index}
        className="bg-[#8B1F1F]/10 text-[#8B1F1F] font-mono text-[12px] px-1.5 py-0.5"
      >
        {chunk.slice(2, -2)}
      </mark>
    );
  });
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header />
      <main id="top" className="bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <span className="font-mono text-[10px] tracking-wider text-[#8B1F1F] uppercase">
                  Legal
                </span>
                <h1 className="mt-4 font-heading font-bold text-[#1A1C1E] text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.02]">
                  {title}
                </h1>
                <p className="mt-5 font-mono text-[10px] tracking-wider text-[#1A1C1E]/50 uppercase">
                  Last updated {updated}
                </p>

                <nav className="mt-8 hidden lg:block border-t border-[#1A1C1E]/15 pt-5">
                  <ol className="space-y-2.5">
                    {sections.map((section, index) => (
                      <li key={section.id} className="flex gap-3">
                        <span className="font-mono text-[10px] text-[#1A1C1E]/35 pt-1 tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={`#${section.id}`}
                          className="font-body text-sm text-[#1A1C1E]/60 hover:text-[#8B1F1F] transition-colors"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {LEGAL_DRAFT && (
                <div className="mb-10 border border-[#8B1F1F]/30 bg-[#8B1F1F]/[0.04] p-5">
                  <span className="font-mono text-[10px] tracking-wider text-[#8B1F1F] uppercase">
                    Draft / not yet in force
                  </span>
                  <p className="mt-2.5 font-body text-[#1A1C1E]/70 leading-[1.6]">
                    This document is a working draft. The highlighted parts still need to be filled
                    in, and it has not been reviewed by a lawyer. It is not legal advice.
                  </p>
                </div>
              )}

              <p className="font-body text-[#1A1C1E]/70 text-lg leading-[1.6]">
                {withMarkers(intro)}
              </p>

              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="mt-12 scroll-mt-28">
                  <div className="flex gap-4 border-t border-[#1A1C1E]/15 pt-5">
                    <span className="font-mono text-[10px] text-[#1A1C1E]/35 pt-2 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-heading font-semibold text-[#1A1C1E] text-2xl tracking-[-0.02em]">
                        {section.heading}
                      </h2>
                      <div className="mt-4 space-y-4">
                        {section.body.map((block, blockIndex) =>
                          Array.isArray(block) ? (
                            <ul key={blockIndex} className="space-y-2.5">
                              {block.map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="text-[#8B1F1F] pt-1.5 leading-none">-</span>
                                  <span className="font-body text-[#1A1C1E]/70 leading-[1.6]">
                                    {withMarkers(item)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p
                              key={blockIndex}
                              className="font-body text-[#1A1C1E]/70 leading-[1.6]"
                            >
                              {withMarkers(block)}
                            </p>
                          )
                        )}
                        {section.after}
                      </div>
                    </div>
                  </div>
                </section>
              ))}

              <div className="mt-14 border-t border-[#1A1C1E]/15 pt-6 flex flex-wrap gap-x-8 gap-y-3">
                <Link
                  href="/"
                  className="font-mono text-[11px] tracking-wider text-[#1A1C1E]/50 uppercase hover:text-[#8B1F1F] transition-colors"
                >
                  Back to lantell.io
                </Link>
                <Link
                  href="/privacy"
                  className="font-mono text-[11px] tracking-wider text-[#1A1C1E]/50 uppercase hover:text-[#8B1F1F] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="font-mono text-[11px] tracking-wider text-[#1A1C1E]/50 uppercase hover:text-[#8B1F1F] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
