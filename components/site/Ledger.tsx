"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const EVENTS = [
  { time: "09:42:18.221", actor: "PM_USER_01", event: "DOCUMENT_UPLOADED", status: "RECORDED" },
  { time: "09:43:05.874", actor: "PM_USER_02", event: "DOCUMENT_VERIFIED", status: "VERIFIED" },
  { time: "10:12:51.003", actor: "PM_USER_02", event: "DOCUMENT_REJECTED", status: "RETURNED" },
  { time: "10:13:02.440", actor: "SYSTEM", event: "DRAW_STATUS_CHANGED", status: "RECORDED" },
  { time: "11:04:33.917", actor: "OWNER_REVIEW", event: "STAGE_APPROVED", status: "STAMPED" },
  { time: "11:04:34.002", actor: "SYSTEM", event: "DRAW_CLEARED", status: "RECORDED" },
  { time: "14:30:11.556", actor: "PM_USER_01", event: "DRAW_RELEASED", status: "RELEASED" },
  { time: "15:08:44.710", actor: "SYSTEM", event: "MEMO_GENERATED", status: "RECORDED" },
];

/**
 * Scrubbing the timeline fades the stream: every row keeps a 0.3 floor, and rows further down
 * the history fall off faster — the same falloff the design uses (0.7 spread over the run).
 */
function rowOpacity(index: number, visibility: number) {
  return 0.3 + (visibility / 100) * (1 - (index * 0.7) / EVENTS.length);
}

export function Ledger() {
  const [visibility, setVisibility] = useState(100);

  return (
    <section id="ledger" className="bg-[#1A1C1E] text-white relative overflow-hidden">
      <div className="relative max-w-[120rem] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-6">
            <Eyebrow label="THE IMMUTABLE LEDGER / AUDIT STREAM" tone="coral" className="mb-5" />
            <h2 className="font-heading font-bold text-white text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.02]">
              Every action,
              <br />
              permanently recorded.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="font-body text-white/60 text-lg leading-[1.6]">
              The audit trail is append-only - the database itself refuses updates and deletes.
              Scrub the timeline below to move through a project&apos;s history; nothing is ever
              overwritten.
            </p>
          </div>
        </div>

        <div className="border border-white/15 bg-white/[0.02]">
          <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-white/15">
            <div className="flex items-center gap-2 min-w-0">
              <Lock size={14} className="text-[#008545] shrink-0" />
              <span className="font-mono text-[11px] tracking-wider text-white/50 uppercase truncate">
                AUDIT_STREAM / PROJECT 8829-TI / SAMPLE BUILDOUT
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#008545]" />
              <span className="font-mono text-[11px] tracking-wider text-[#008545] uppercase">
                SAMPLE
              </span>
            </div>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {EVENTS.map((entry, index) => (
              <div
                key={`${entry.time}-${entry.event}`}
                className="grid grid-cols-3 divide-x divide-white/[0.06] font-mono text-[11px] transition-opacity sm:grid-cols-4 sm:text-xs"
                style={{ opacity: rowOpacity(index, visibility) }}
              >
                <span className="px-3 py-3.5 text-center tracking-wider text-white/40">
                  {entry.time}
                </span>
                <span className="hidden px-3 py-3.5 text-center tracking-wider text-white/60 sm:block">
                  {entry.actor}
                </span>
                <span className="truncate px-3 py-3.5 text-center tracking-wider text-[#F26C6C]">
                  {entry.event}
                </span>
                <span className="px-3 py-3.5 text-center tracking-wider text-white/50">
                  {entry.status}
                </span>
              </div>
            ))}
          </div>

          <div className="px-5 py-5 border-t border-white/15">
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-mono text-[10px] tracking-wider text-white/40 uppercase">
                TIMELINE_SCRUB / 2026.09.20
              </span>
              <span className="font-mono text-[10px] tracking-wider text-white/40 uppercase">
                {visibility}% VISIBILITY
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={visibility}
              onChange={(event) => setVisibility(Number(event.target.value))}
              aria-label="Scrub the audit timeline"
              className="w-full accent-[#F26C6C] h-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
