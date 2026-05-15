"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Maintenance CNC", href: "#services" },
  { label: "Rétrofit", href: "#retrofit" },
  { label: "Supervision 4.0", href: "#data40" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-white/95 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/unitek-logo-bleu.png"
              alt="Unitek Automation"
              width={140}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium text-muted hover:text-foreground transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+33XXXXXXXXX"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <Phone size={15} />
              <span>04 XX XX XX XX</span>
            </a>
            <a
              href="#contact"
              className="urgence-pulse relative flex items-center gap-2 bg-urgent text-white text-sm font-semibold px-4 py-2 hover:bg-urgent-dark transition-colors duration-150 overflow-hidden"
            >
              Urgence 24/7
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="bg-urgent text-white text-sm font-semibold px-4 py-3 text-center"
          >
            Urgence 24/7
          </a>
        </div>
      )}
    </header>
  );
}
