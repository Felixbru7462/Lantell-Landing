"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";
import { CircleCheck, CircleSlash } from "lucide-react";

/**
 * A real opt-out, not a sentence about one. Flips posthog's own opt-out flag, which it stores in
 * this browser and checks before every capture.
 *
 * Renders nothing conclusive until mounted, because the answer lives in browser storage and would
 * otherwise differ between the server render and the client. When analytics never initialised
 * (no NEXT_PUBLIC_POSTHOG_KEY - local dev, preview deployments) it says so rather than offering a
 * button that does nothing.
 */
export function AnalyticsOptOut() {
  const [state, setState] = useState<"loading" | "inactive" | "on" | "off">("loading");

  useEffect(() => {
    if (!posthog.__loaded) {
      setState("inactive");
      return;
    }
    setState(posthog.has_opted_out_capturing() ? "off" : "on");
  }, []);

  function toggle() {
    if (state === "on") {
      posthog.opt_out_capturing();
      setState("off");
    } else if (state === "off") {
      posthog.opt_in_capturing();
      setState("on");
    }
  }

  return (
    <div className="mt-6 border border-ink/15 bg-band p-5">
      <span className="font-mono text-[10px] tracking-wider text-ink/50 uppercase">
        Analytics on this browser
      </span>

      {state === "loading" && (
        <p className="mt-2.5 font-body text-ink/50 leading-[1.6]">Checking...</p>
      )}

      {state === "inactive" && (
        <p className="mt-2.5 font-body text-ink/70 leading-[1.6]">
          Analytics is not running on this page, so there is nothing to turn off.
        </p>
      )}

      {(state === "on" || state === "off") && (
        <>
          <p className="mt-2.5 flex items-center gap-2.5 font-body text-ink/70 leading-[1.6]">
            {state === "on" ? (
              <CircleCheck size={16} className="shrink-0 text-positive" />
            ) : (
              <CircleSlash size={16} className="shrink-0 text-ink-soft" />
            )}
            {state === "on"
              ? "Analytics is currently on."
              : "Analytics is off. Nothing is being recorded."}
          </p>
          <button
            type="button"
            onClick={toggle}
            className="mt-4 border border-ink bg-page px-5 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-page"
          >
            {state === "on" ? "Turn analytics off" : "Turn analytics back on"}
          </button>
          <p className="mt-3 font-body text-sm text-ink/50 leading-[1.6]">
            The choice is stored in this browser only, so it will not follow you to another device.
          </p>
        </>
      )}
    </div>
  );
}
