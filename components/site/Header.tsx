"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Mark } from "./Mark";
import { NAV_LINKS } from "./nav-links";

/**
 * Transparent over the top of the hero, then white + blurred + hairline once the page scrolls.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "bg-page/90 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/#top" className="flex items-center gap-2.5 group">
            <Mark />
            <span className="font-heading font-bold text-ink text-xl tracking-[-0.02em]">
              LANTELL
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-ink/70 hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://app.lantell.io/sign-in"
              className="font-body text-sm text-ink/70 hover:text-ink transition-colors"
            >
              Sign in
            </a>
            <a
              href="/#cta"
              className="font-body text-sm font-medium text-page bg-brand hover:bg-brand-hover px-5 py-2.5 transition-colors"
            >
              Book a Demo
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden text-ink"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-page border-t border-hairline">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-base text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#cta"
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm font-medium text-page bg-brand px-5 py-3 text-center"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
