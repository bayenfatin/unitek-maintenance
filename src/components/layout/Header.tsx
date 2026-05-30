"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

// ─── Nav link definitions ─────────────────────────────────────────────────────
//
// Règle : chaque route dédiée → href absolu Next.js ("/...").
// Sections de la page d'accueil → "/#ancre" (scroll natif du navigateur).
// "#retrofit" n'existe pas dans le DOM — on pointe vers /#services.

const NAV_LINKS = [
  {
    label: "Maintenance CNC",
    href: "/maintenance-preventive-predictive-cnc",
    isPage: true,
  },
  {
    label: "Rétrofit CNC",
    href: "/retrofit-machine-outil-automate",
    isPage: true,
  },
  {
    label: "Supervision 4.0",
    href: "/supervision-donnees-maintenance-4-0",
    isPage: true,
  },
  {
    label: "Presses Plastique",
    href: "/maintenance-presse-injection-plastique",
    isPage: true,
  },
  {
    label: "Actualités",
    href: "/blog",
    isPage: true,
  },
  {
    label: "Contact",
    href: "/contact",
    isPage: true,
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquer le scroll body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(href: string): boolean {
    if (!href.startsWith("/") || href.startsWith("/#")) return false;
    return pathname === href;
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border transition-shadow duration-200 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ───────────────────────────────────────────────────────── */}
            <Link
              href="/"
              className="flex-shrink-0"
              aria-label="Unitek Automation — retour à l'accueil"
            >
              <Image
                src="/unitek-logo-bleu.png"
                alt="Unitek Automation"
                width={140}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* ── Desktop nav ────────────────────────────────────────────────── */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`nav-link text-sm transition-colors duration-150 ${
                      active
                        ? "text-brand font-semibold"
                        : "font-medium text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop right actions ──────────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+33XXXXXXXXX"
                className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                <Phone size={15} />
                <span>04 XX XX XX XX</span>
              </a>
              <Link
                href="/#contact"
                className="urgence-pulse relative flex items-center gap-2 bg-urgent text-white text-sm font-semibold px-4 py-2 hover:bg-urgent-dark transition-colors duration-150 overflow-hidden"
              >
                Urgence 24/7
              </Link>
            </div>

            {/* ── Mobile toggle ──────────────────────────────────────────────── */}
            <button
              className="lg:hidden p-2 -mr-2 text-foreground"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu panel (dans le header fixé) ────────────────────────── */}
        {menuOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden bg-white border-t border-border"
            style={{ animation: "fadeIn 0.16s cubic-bezier(0.22, 1, 0.36, 1) both" }}
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="px-6 pt-5 pb-6">

              {/* Groupe pages expertes */}
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted mb-3">
                Nos expertises
              </p>

              <Link
                href="/maintenance-preventive-predictive-cnc"
                aria-current={
                  isActive("/maintenance-preventive-predictive-cnc") ? "page" : undefined
                }
                className={`flex items-center py-3 text-sm border-b border-border transition-colors ${
                  isActive("/maintenance-preventive-predictive-cnc")
                    ? "text-brand font-semibold"
                    : "font-medium text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Maintenance préventive &amp; prédictive CNC
              </Link>

              <Link
                href="/retrofit-machine-outil-automate"
                aria-current={
                  isActive("/retrofit-machine-outil-automate") ? "page" : undefined
                }
                className={`flex items-center py-3 text-sm border-b border-border transition-colors ${
                  isActive("/retrofit-machine-outil-automate")
                    ? "text-brand font-semibold"
                    : "font-medium text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Rétrofit CNC
              </Link>

              <Link
                href="/supervision-donnees-maintenance-4-0"
                aria-current={
                  isActive("/supervision-donnees-maintenance-4-0") ? "page" : undefined
                }
                className={`flex items-center py-3 text-sm border-b border-border transition-colors ${
                  isActive("/supervision-donnees-maintenance-4-0")
                    ? "text-brand font-semibold"
                    : "font-medium text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Supervision &amp; Data 4.0
              </Link>

              <Link
                href="/maintenance-presse-injection-plastique"
                aria-current={
                  isActive("/maintenance-presse-injection-plastique") ? "page" : undefined
                }
                className={`flex items-center py-3 text-sm border-b border-border transition-colors ${
                  isActive("/maintenance-presse-injection-plastique")
                    ? "text-brand font-semibold"
                    : "font-medium text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Presses injection &amp; plasturgie
              </Link>

              <Link
                href="/blog"
                aria-current={isActive("/blog") ? "page" : undefined}
                className={`flex items-center py-3 text-sm border-b border-border transition-colors ${
                  isActive("/blog")
                    ? "text-brand font-semibold"
                    : "font-medium text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Actualités Industrielles
              </Link>

              {/* Actions */}
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  aria-current={isActive("/contact") ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    isActive("/contact")
                      ? "text-brand font-semibold"
                      : "font-medium text-muted"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="urgence-pulse relative bg-urgent text-white text-sm font-semibold px-4 py-3.5 text-center overflow-hidden"
                  onClick={() => setMenuOpen(false)}
                >
                  Urgence 24/7
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Backdrop (hors header, derrière z-50) ────────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
          style={{ animation: "fadeIn 0.15s ease both" }}
        />
      )}
    </>
  );
}
