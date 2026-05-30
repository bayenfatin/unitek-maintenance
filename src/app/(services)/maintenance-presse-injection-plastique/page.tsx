import type { Metadata } from "next";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Gauge,
  Settings,
  Cpu,
  Thermometer,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Maintenance Presses à Injection & Souffleuses Plastique | Unitek Lyon",
  description:
    "Dépannage d'urgence et maintenance préventive de presses à injection plastique. Diagnostic hydraulique, régulation thermique et rétrofit IHM.",
  openGraph: {
    title: "Maintenance Presses à Injection & Souffleuses Plastique | Unitek Lyon",
    description:
      "Dépannage d'urgence et maintenance préventive de presses à injection plastique. Diagnostic hydraulique, régulation thermique et rétrofit IHM.",
    type: "website",
    siteName: "Unitek Automation",
  },
};

// ─── JSON-LD Service ──────────────────────────────────────────────────────────

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maintenance Presses à Injection & Souffleuses Plastique",
  description:
    "Dépannage d'urgence, diagnostic hydraulique, régulation thermique et rétrofit IHM pour presses à injection, souffleuses et extrudeuses plastique.",
  provider: {
    "@type": "Organization",
    name: "Unitek Automation",
    url: "https://unitek-automation.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Fons",
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
  },
  serviceType: "Maintenance et dépannage presses à injection plastique",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 45.69,
      longitude: 4.87,
    },
    geoRadius: "150000",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Audit technique sur site — diagnostic complet des équipements de plasturgie",
    eligibleCustomerType: "http://purl.org/goodrelations/v1#Business",
  },
};

// ─── Vis de plastification — vue en coupe ─────────────────────────────────────

function PlastificationSVG() {
  type AnnotSide = "top" | "bottom";

  const annotations: Array<{
    cx: number;
    cy: number;
    label: string;
    sub: string;
    critical: boolean;
    side: AnnotSide;
  }> = [
    { cx: 48,  cy: 130, label: "Groupe hydraulique",   sub: "pression & débit injection",  critical: true,  side: "top"    },
    { cx: 140, cy: 76,  label: "Zone alimentation",     sub: "goulotte refroidie ~40 °C",   critical: false, side: "top"    },
    { cx: 292, cy: 76,  label: "Zone 3 — collier",      sub: "210 °C — type J ±2 °C",       critical: false, side: "top"    },
    { cx: 408, cy: 130, label: "Buse — thermocouple",   sub: "point chaud critique 230 °C", critical: true,  side: "bottom" },
    { cx: 140, cy: 184, label: "Capteur pression",      sub: "pression injection (bar)",    critical: true,  side: "bottom" },
  ];

  return (
    <svg
      viewBox="0 0 480 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      role="img"
      aria-label="Vue en coupe d'une vis de plastification avec points de contrôle pour maintenance industrielle"
    >
      <defs>
        <pattern id="pGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.65" fill="oklch(34% 0.06 240)" />
        </pattern>
      </defs>

      {/* Background */}
      <rect width="480" height="260" fill="oklch(15% 0.058 240)" />
      <rect width="480" height="260" fill="url(#pGrid)" />

      {/* ── Groupe hydraulique (moteur arrière) ── */}
      <rect x="10" y="102" width="56" height="56" fill="oklch(22% 0.078 240)" stroke="oklch(36% 0.09 240)" strokeWidth="1.5" />
      <rect x="66" y="121" width="22" height="18" fill="oklch(28% 0.085 240)" stroke="oklch(40% 0.10 240)" strokeWidth="1" />
      {/* Hydraulic lines HP/LP */}
      <line x1="10" y1="114" x2="4" y2="114" stroke="oklch(52% 0.21 25)" strokeWidth="2" />
      <line x1="10" y1="146" x2="4" y2="146" stroke="oklch(52% 0.21 25)" strokeWidth="2" />
      <text x="3" y="111" fontSize="5.5" fill="oklch(52% 0.21 25)" fontFamily="system-ui, sans-serif" textAnchor="start">HP</text>
      <text x="3" y="143" fontSize="5.5" fill="oklch(52% 0.21 25)" fontFamily="system-ui, sans-serif" textAnchor="start">LP</text>

      {/* ── Zones du cylindre ── */}
      {/* Zone alimentation */}
      <rect x="88" y="76" width="78" height="108" fill="oklch(20% 0.068 240)" stroke="oklch(34% 0.085 240)" strokeWidth="1.5" />
      {/* Zone 2 */}
      <rect x="166" y="76" width="78" height="108" fill="oklch(23% 0.082 240)" stroke="oklch(38% 0.10 240)" strokeWidth="1.5" />
      {/* Zone 3 */}
      <rect x="244" y="76" width="78" height="108" fill="oklch(26% 0.090 240)" stroke="oklch(40% 0.10 240)" strokeWidth="1.5" />
      {/* Zone buse */}
      <rect x="322" y="84" width="62" height="92" fill="oklch(29% 0.098 240)" stroke="oklch(44% 0.11 240)" strokeWidth="1.5" />

      {/* Colliers chauffants (bandes colorées sur les zones) */}
      <rect x="166" y="76" width="78" height="7" fill="oklch(55% 0.16 45)" opacity="0.7" />
      <rect x="166" y="177" width="78" height="7" fill="oklch(55% 0.16 45)" opacity="0.7" />
      <rect x="244" y="76" width="78" height="7" fill="oklch(52% 0.18 25)" opacity="0.7" />
      <rect x="244" y="177" width="78" height="7" fill="oklch(52% 0.18 25)" opacity="0.7" />
      <rect x="322" y="84" width="62" height="6" fill="oklch(58% 0.20 25)" opacity="0.85" />
      <rect x="322" y="170" width="62" height="6" fill="oklch(58% 0.20 25)" opacity="0.85" />

      {/* Labels zones */}
      {[
        { x: 127, label: "ALIM.",  temp: "~40°C" },
        { x: 205, label: "Z.2",    temp: "180°C" },
        { x: 283, label: "Z.3",    temp: "210°C" },
        { x: 353, label: "BUSE",   temp: "230°C" },
      ].map(({ x, label, temp }) => (
        <g key={label}>
          <text x={x} y="127" fontSize="8" fill="oklch(65% 0.012 240)" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="700" letterSpacing="0.05em">
            {label}
          </text>
          <text x={x} y="140" fontSize="6.5" fill="oklch(48% 0.012 240)" fontFamily="system-ui, sans-serif" textAnchor="middle">
            {temp}
          </text>
        </g>
      ))}

      {/* ── Vis de plastification (noyau + filets) ── */}
      <rect x="88" y="121" width="296" height="18" fill="oklch(32% 0.10 240)" stroke="oklch(44% 0.12 240)" strokeWidth="1" />
      {Array.from({ length: 19 }, (_, i) => (
        <line
          key={i}
          x1={91 + i * 15}
          y1="121"
          x2={97 + i * 15}
          y2="139"
          stroke="oklch(50% 0.12 240)"
          strokeWidth="1.8"
          opacity="0.75"
        />
      ))}

      {/* ── Buse (nozzle) ── */}
      <path d="M384 95 L424 112 L424 148 L384 165 Z" fill="oklch(30% 0.095 240)" stroke="oklch(44% 0.11 240)" strokeWidth="1.5" />
      <circle cx="428" cy="130" r="5.5" fill="oklch(48% 0.15 240)" stroke="oklch(62% 0.14 240)" strokeWidth="1" />

      {/* Moule (représentation simplifiée) */}
      <rect x="434" y="118" width="14" height="24" fill="oklch(20% 0.072 240)" stroke="oklch(34% 0.085 240)" strokeWidth="1" strokeDasharray="3 2" />
      <text x="450" y="131" fontSize="6" fill="oklch(40% 0.012 240)" fontFamily="system-ui, sans-serif">MOULE</text>

      {/* ── Annotations ── */}
      {annotations.map(({ cx, cy, label, sub, critical, side }) => {
        const isTop     = side === "top";
        const lineEndY  = isTop ? cy - 36 : cy + 36;
        const textY     = isTop ? lineEndY - 13 : lineEndY + 13;
        const dotColor  = critical ? "oklch(60% 0.20 25)"  : "oklch(65% 0.18 148)";
        const lineColor = critical ? "oklch(52% 0.18 25)"  : "oklch(42% 0.10 240)";
        const textColor = critical ? "oklch(82% 0.015 25)" : "oklch(88% 0.010 240)";

        return (
          <g key={label}>
            <circle cx={cx} cy={cy} r="4.5" fill={dotColor} />
            <line
              x1={cx} y1={cy}
              x2={cx} y2={lineEndY}
              stroke={lineColor}
              strokeWidth="1"
              strokeDasharray={critical ? undefined : "4 3"}
            />
            <text
              x={cx}
              y={isTop ? textY : textY + 3}
              fontSize="7.5"
              fill={textColor}
              fontFamily="system-ui, sans-serif"
              fontWeight="600"
              textAnchor="middle"
              letterSpacing="0.02em"
            >
              {label}
            </text>
            <text
              x={cx}
              y={isTop ? textY + 10 : textY + 13}
              fontSize="6"
              fill="oklch(50% 0.012 240)"
              fontFamily="system-ui, sans-serif"
              textAnchor="middle"
            >
              {sub}
            </text>
          </g>
        );
      })}

      {/* Légende */}
      <circle cx="12" cy="238" r="3.5" fill="oklch(60% 0.20 25)" />
      <text x="20" y="242" fontSize="6.5" fill="oklch(60% 0.20 25)" fontFamily="system-ui, sans-serif">Point critique</text>
      <circle cx="12" cy="252" r="3.5" fill="oklch(65% 0.18 148)" />
      <text x="20" y="256" fontSize="6.5" fill="oklch(65% 0.18 148)" fontFamily="system-ui, sans-serif">Sous surveillance</text>
    </svg>
  );
}

// ─── Matrice AMDEC plasturgie ─────────────────────────────────────────────────

function RiskMatrixPlasturgie() {
  const cellColors: string[][] = [
    ["oklch(62% 0.18 148)", "oklch(68% 0.17 80)", "oklch(62% 0.20 45)", "oklch(58% 0.20 25)"],
    ["oklch(62% 0.18 148)", "oklch(68% 0.17 80)", "oklch(58% 0.20 25)", "oklch(52% 0.20 25)"],
    ["oklch(68% 0.17 80)",  "oklch(62% 0.20 45)", "oklch(58% 0.20 25)", "oklch(48% 0.20 25)"],
    ["oklch(62% 0.20 45)",  "oklch(58% 0.20 25)", "oklch(48% 0.20 25)", "oklch(40% 0.20 25)"],
  ];

  const modes: Array<[number, number, string]> = [
    [2, 3, "Pompe hydraulique"],
    [3, 2, "Thermocouple buse"],
    [1, 2, "Clapet injection"],
    [0, 1, "Joints vérin"],
  ];

  const cellW = 52;
  const cellH = 36;
  const originX = 42;
  const originY = 12;

  return (
    <svg
      viewBox="0 0 280 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs"
      role="img"
      aria-label="Matrice de risque AMDEC presse à injection — occurrence versus gravité"
    >
      <rect width="280" height="210" fill="oklch(15% 0.058 240)" />

      <text x="140" y="198" fontSize="8" fill="oklch(55% 0.012 240)" fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="0.06em">
        OCCURRENCE →
      </text>

      <text
        x="10"
        y="106"
        fontSize="8"
        fill="oklch(55% 0.012 240)"
        fontFamily="system-ui, sans-serif"
        textAnchor="middle"
        letterSpacing="0.06em"
        transform="rotate(-90 10 106)"
      >
        GRAVITÉ →
      </text>

      {["Rare", "Peu fréq.", "Fréq.", "Systém."].map((lbl, ci) => (
        <text
          key={lbl}
          x={originX + ci * cellW + cellW / 2}
          y={originY + 4 * cellH + 12}
          fontSize="6.5"
          fill="oklch(48% 0.012 240)"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          {lbl}
        </text>
      ))}

      {["Mineure", "Modérée", "Élevée", "Critique"].reverse().map((lbl, ri) => (
        <text
          key={lbl}
          x={originX - 5}
          y={originY + ri * cellH + cellH / 2 + 3}
          fontSize="6.5"
          fill="oklch(48% 0.012 240)"
          fontFamily="system-ui, sans-serif"
          textAnchor="end"
        >
          {lbl}
        </text>
      ))}

      {cellColors.map((row, ri) =>
        row.map((color, ci) => (
          <rect
            key={`${ri}-${ci}`}
            x={originX + ci * cellW}
            y={originY + ri * cellH}
            width={cellW - 2}
            height={cellH - 2}
            fill={color}
            opacity="0.22"
            stroke={color}
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
        ))
      )}

      {modes.map(([ci, ri, label]) => (
        <g key={label}>
          <circle
            cx={originX + ci * cellW + cellW / 2}
            cy={originY + ri * cellH + cellH / 2}
            r="7"
            fill="oklch(55% 0.13 240)"
            stroke="oklch(75% 0.08 240)"
            strokeWidth="1"
          />
          <text
            x={originX + ci * cellW + cellW / 2}
            y={originY + ri * cellH + cellH / 2 + 22}
            fontSize="6"
            fill="oklch(78% 0.012 240)"
            fontFamily="system-ui, sans-serif"
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MaintenancePressesInjectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main style={{ backgroundColor: "oklch(13% 0.048 240)" }}>

        {/* ── HERO ─────────────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden"
          style={{ backgroundColor: "oklch(13% 0.048 240)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 4px, oklch(100% 0 0 / 0.008) 4px, oklch(100% 0 0 / 0.008) 5px)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

              {/* Content */}
              <div>
                <AnimateIn variant="fadeUp" delay={0}>
                  <p
                    className="text-xs font-semibold tracking-[0.2em] uppercase mb-8"
                    style={{ color: "oklch(55% 0.13 240)" }}
                  >
                    Maintenance &amp; dépannage plasturgie
                  </p>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={80}>
                  <h1
                    className="text-[clamp(2.2rem,4.5vw,4rem)] font-bold leading-[1.06] mb-7"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.03em",
                      color: "oklch(97% 0.005 240)",
                    }}
                  >
                    Dépannage et fiabilisation
                    <br />
                    de vos équipements
                    <br />
                    <span style={{ color: "oklch(55% 0.13 240)" }}>de plasturgie.</span>
                  </h1>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={160}>
                  <p
                    className="text-base mb-10 max-w-lg font-light"
                    style={{ color: "oklch(66% 0.014 240)", lineHeight: "1.75" }}
                  >
                    Chaque heure d&apos;arrêt d&apos;une presse à injection représente des milliers
                    d&apos;euros de production perdue. Nous intervenons en urgence sur votre
                    groupe hydraulique, votre régulation thermique et vos IHM — pour
                    remettre vos presses en production le plus vite possible.
                  </p>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={240}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:contact@unitek-automation.fr?subject=URGENCE%20presse%20injection%20plastique"
                      className="inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-4 transition-colors duration-150"
                      style={{
                        backgroundColor: "oklch(52% 0.21 25)",
                        color: "white",
                      }}
                    >
                      Intervention d&apos;urgence
                      <ArrowRight size={16} />
                    </a>
                    <a
                      href="#audit-plasturgie"
                      className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 transition-colors duration-150"
                      style={{
                        color: "oklch(80% 0.012 240)",
                        border: "1px solid oklch(36% 0.08 240)",
                      }}
                    >
                      Audit complet
                    </a>
                  </div>
                </AnimateIn>
              </div>

              {/* SVG Diagram */}
              <AnimateIn variant="fadeUp" delay={120}>
                <div>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-3"
                    style={{ color: "oklch(44% 0.012 240)" }}
                  >
                    Vis de plastification — points de contrôle
                  </p>
                  <PlastificationSVG />
                </div>
              </AnimateIn>

            </div>
          </div>
        </section>

        {/* ── KPI STRIP ────────────────────────────────────────────────────────── */}
        <section
          className="border-y"
          style={{
            backgroundColor: "oklch(16% 0.058 240)",
            borderColor: "oklch(24% 0.068 240)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
              style={{ borderColor: "oklch(24% 0.068 240)" }}
            >
              {[
                { value: "< 4h",  label: "MTTR moyen sur intervention hydraulique" },
                { value: "+12%",  label: "Gain de TRS constaté à 6 mois" },
                { value: "±2 °C", label: "Précision régulation zones de chauffe" },
                { value: "−60%",  label: "Coût maintenance après rétrofit IHM" },
              ].map(({ value, label }, i) => (
                <AnimateIn key={value} variant="fadeUp" delay={i * 55}>
                  <div className="px-8 py-10 text-center">
                    <p
                      className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-none mb-3"
                      style={{
                        fontFamily: "var(--font-space, system-ui, sans-serif)",
                        color: "oklch(55% 0.13 240)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-xs uppercase tracking-[0.12em] font-medium"
                      style={{ color: "oklch(48% 0.012 240)" }}
                    >
                      {label}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLÈMES RÉCURRENTS ─────────────────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(14% 0.052 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimateIn variant="fadeUp">
              <h2
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4 max-w-2xl"
                style={{
                  fontFamily: "var(--font-space, system-ui, sans-serif)",
                  letterSpacing: "-0.025em",
                  color: "oklch(95% 0.007 240)",
                }}
              >
                Les arrêts qui paralysent vos lignes de production
              </h2>
              <p
                className="text-base mb-16 max-w-xl"
                style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
              >
                Presses à injection, souffleuses, extrudeuses — trois typologies de
                défaillances reviennent systématiquement dans nos missions plasturgie.
              </p>
            </AnimateIn>

            <div
              className="grid md:grid-cols-3 gap-px"
              style={{ backgroundColor: "oklch(24% 0.068 240)" }}
            >
              {[
                {
                  num: "01",
                  title: "Défaillance hydraulique",
                  desc: "Chute de pression, pompe usée, clapet anti-retour défectueux ou fuite sur vérin de fermeture. L'arrêt est immédiat et le diagnostic sans équipement prend des heures.",
                  accent: true,
                },
                {
                  num: "02",
                  title: "Dérive des zones de chauffe",
                  desc: "Thermocouple HS, collier chauffant grillé ou régulateur PID déréglé. Résultat : pièces défectueuses, purges répétées, matière dégradée dans le cylindre.",
                  accent: false,
                },
                {
                  num: "03",
                  title: "IHM et CN obsolètes",
                  desc: "Pupitre hors service, programme perdu, carte électronique introuvable. La presse est immobilisée faute d'interface — même si la mécanique est intacte.",
                  accent: false,
                },
              ].map(({ num, title, desc, accent }, i) => (
                <AnimateIn key={num} variant="fadeUp" delay={i * 70}>
                  <div
                    className="p-8 lg:p-10"
                    style={{ backgroundColor: "oklch(15% 0.055 240)" }}
                  >
                    <span
                      className="text-5xl font-bold leading-none block mb-6"
                      style={{
                        fontFamily: "var(--font-space, system-ui, sans-serif)",
                        color: accent ? "oklch(30% 0.10 25)" : "oklch(26% 0.075 240)",
                      }}
                    >
                      {num}
                    </span>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{
                        fontFamily: "var(--font-space, system-ui, sans-serif)",
                        color: "oklch(92% 0.010 240)",
                      }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm" style={{ color: "oklch(56% 0.012 240)", lineHeight: "1.8" }}>
                      {desc}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── H2 : GROUPES HYDRAULIQUES ────────────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(16% 0.058 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

              <AnimateIn variant="fadeUp">
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
                    style={{ color: "oklch(55% 0.13 240)" }}
                  >
                    Expertise hydraulique industrielle
                  </p>
                  <h2
                    className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight mb-5"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.025em",
                      color: "oklch(95% 0.007 240)",
                    }}
                  >
                    Diagnostic et remise en service des groupes hydrauliques
                  </h2>
                  <p
                    className="text-base mb-8"
                    style={{ color: "oklch(60% 0.013 240)", lineHeight: "1.78" }}
                  >
                    Le groupe hydraulique est le cœur de votre presse. Pompe à pistons
                    axiaux, accumulateur, distributeurs proportionnels, clapets de
                    séquence — chaque composant contribue à la pression d&apos;injection, à
                    la force de fermeture et à la vitesse d&apos;éjection. Nous analysons la
                    courbe pression/débit en temps réel pour localiser la défaillance
                    sans démontage systématique.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={80}>
                <div className="space-y-0">
                  {[
                    {
                      icon: Gauge,
                      label: "Pompe à pistons axiaux",
                      desc: "Mesure du rendement volumétrique, remplacement ou reconditionnement sur site",
                    },
                    {
                      icon: Settings,
                      label: "Accumulateur à vessie",
                      desc: "Contrôle pré-charge azote, diagnostic fuites internes, remplacement vessie",
                    },
                    {
                      icon: Cpu,
                      label: "Distributeurs proportionnels",
                      desc: "Étalonnage solénoïdes, remplacement vannes proportionnelles Bosch/Atos/Parker",
                    },
                    {
                      icon: AlertTriangle,
                      label: "Clapets et joints haute pression",
                      desc: "Localisation de fuites internes, remplacement joints jusqu'à 350 bar",
                    },
                  ].map(({ icon: Icon, label, desc }, i) => (
                    <div
                      key={label}
                      className="flex items-start gap-5 py-5 border-b"
                      style={{ borderColor: "oklch(24% 0.065 240)" }}
                    >
                      <AnimateIn variant="fadeRight" delay={i * 60}>
                        <div
                          className="flex items-center justify-center w-9 h-9 shrink-0"
                          style={{
                            backgroundColor: "oklch(22% 0.08 240)",
                            border: "1px solid oklch(34% 0.09 240)",
                          }}
                        >
                          <Icon size={16} style={{ color: "oklch(55% 0.13 240)" }} />
                        </div>
                      </AnimateIn>
                      <div className="pt-1">
                        <p className="text-sm font-bold mb-0.5" style={{ color: "oklch(88% 0.010 240)" }}>
                          {label}
                        </p>
                        <p className="text-sm" style={{ color: "oklch(54% 0.012 240)" }}>
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateIn>

            </div>
          </div>
        </section>

        {/* ── H2 : RÉGULATION ZONES DE CHAUFFE ─────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(14% 0.052 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

              {/* Profil thermique visuel */}
              <AnimateIn variant="fadeUp">
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
                    style={{ color: "oklch(55% 0.13 240)" }}
                  >
                    Régulation thermique
                  </p>
                  <div
                    className="border overflow-hidden"
                    style={{
                      borderColor: "oklch(28% 0.075 240)",
                      backgroundColor: "oklch(15% 0.055 240)",
                    }}
                  >
                    <div
                      className="px-4 py-3 border-b text-xs font-semibold tracking-widest uppercase"
                      style={{
                        borderColor: "oklch(24% 0.068 240)",
                        color: "oklch(48% 0.012 240)",
                        backgroundColor: "oklch(18% 0.065 240)",
                      }}
                    >
                      Profil thermique — cylindre d&apos;injection
                    </div>
                    <div className="p-5 space-y-5">
                      {[
                        { zone: "Alimentation", setpoint: 40,  actual: 42,  max: 280, color: "oklch(55% 0.13 240)" },
                        { zone: "Zone 2",       setpoint: 180, actual: 183, max: 280, color: "oklch(62% 0.20 45)"  },
                        { zone: "Zone 3",       setpoint: 210, actual: 208, max: 280, color: "oklch(58% 0.20 25)"  },
                        { zone: "Buse",         setpoint: 230, actual: 235, max: 280, color: "oklch(52% 0.21 25)"  },
                      ].map(({ zone, setpoint, actual, max, color }) => {
                        const isAlert = Math.abs(actual - setpoint) > 4;
                        return (
                          <div key={zone}>
                            <div className="flex justify-between items-baseline mb-2">
                              <span className="text-xs font-semibold" style={{ color: "oklch(82% 0.010 240)" }}>
                                {zone}
                              </span>
                              <div className="flex items-center gap-3">
                                <span className="text-xs" style={{ color: "oklch(50% 0.012 240)" }}>
                                  SP: {setpoint}&nbsp;°C
                                </span>
                                <span
                                  className="text-xs font-bold"
                                  style={{ color: isAlert ? "oklch(60% 0.20 25)" : "oklch(65% 0.18 148)" }}
                                >
                                  {actual}&nbsp;°C {isAlert ? "⚠" : "✓"}
                                </span>
                              </div>
                            </div>
                            <div
                              className="h-2 w-full overflow-hidden"
                              style={{ backgroundColor: "oklch(22% 0.075 240)" }}
                            >
                              <div
                                style={{
                                  width: `${(actual / max) * 100}%`,
                                  height: "100%",
                                  backgroundColor: color,
                                  opacity: 0.85,
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      className="px-5 py-3 border-t text-xs flex items-center gap-2"
                      style={{ borderColor: "oklch(24% 0.068 240)", color: "oklch(52% 0.21 25)" }}
                    >
                      <AlertTriangle size={12} />
                      Dérive zone buse : +5&nbsp;°C — thermocouple à recalibrer
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Texte */}
              <AnimateIn variant="fadeUp" delay={80}>
                <div>
                  <h2
                    className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight mb-5"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.025em",
                      color: "oklch(95% 0.007 240)",
                    }}
                  >
                    Maîtrise des zones de chauffe et régulation thermique
                  </h2>
                  <p
                    className="text-base mb-8"
                    style={{ color: "oklch(60% 0.013 240)", lineHeight: "1.78" }}
                  >
                    Une dérive de ±5&nbsp;°C sur la zone buse suffit à générer des pièces
                    hors-cote, des filaments ou une dégradation matière. Nous
                    diagnostiquons les colliers chauffants, remplaçons les thermocouples
                    défectueux, recalibrons les régulateurs PID et reparamétons les
                    profils thermiques pour chaque matériau — PP, PA, ABS, POM.
                  </p>

                  <div className="space-y-0">
                    {[
                      "Remplacement colliers chauffants 220 V/380 V toutes puissances",
                      "Thermocouples type J et K — étalonnage tracé COFRAC",
                      "Reconfiguration régulateurs Eurotherm, RKC, Omron E5",
                      "Profils thermiques matière documentés (PP, PA66, ABS, POM, PET)",
                      "Test isolation électrique des zones après intervention",
                    ].map((item, i) => (
                      <AnimateIn key={item} variant="fadeRight" delay={i * 50}>
                        <div
                          className="flex items-start gap-3 py-3 border-b"
                          style={{ borderColor: "oklch(24% 0.065 240)" }}
                        >
                          <CheckCircle2
                            size={14}
                            className="shrink-0 mt-0.5"
                            style={{ color: "oklch(55% 0.13 240)" }}
                          />
                          <span className="text-sm" style={{ color: "oklch(72% 0.012 240)" }}>
                            {item}
                          </span>
                        </div>
                      </AnimateIn>
                    ))}
                  </div>
                </div>
              </AnimateIn>

            </div>
          </div>
        </section>

        {/* ── H2 : RÉTROFIT CN / IHM ───────────────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(16% 0.058 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimateIn variant="fadeUp">
              <h2
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4 max-w-3xl"
                style={{
                  fontFamily: "var(--font-space, system-ui, sans-serif)",
                  letterSpacing: "-0.025em",
                  color: "oklch(95% 0.007 240)",
                }}
              >
                Rétrofit CN et modernisation des IHM de presses plastique
              </h2>
              <p
                className="text-base mb-16 max-w-2xl"
                style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
              >
                Une presse mécanique saine avec un pupitre hors service ou un programme
                perdu est une machine morte. Nous remplaçons les commandes obsolètes
                par des solutions actuelles — sans remplacer la presse entière.
              </p>
            </AnimateIn>

            <div
              className="grid md:grid-cols-3 gap-px"
              style={{ backgroundColor: "oklch(24% 0.068 240)" }}
            >
              {[
                {
                  tag: "IHM",
                  title: "Migration commandes KEBA / B&R",
                  desc: "Remplacement pupitres KEBA EM 200/300, B&R PP500 — reprise des programmes CN et sauvegarde complète des paramètres process.",
                },
                {
                  tag: "Automatisme",
                  title: "Retrofit Beckhoff TwinCAT",
                  desc: "Installation IPC Beckhoff + panel PC tactile. Reprise des E/S existantes sur modules EtherCAT. Formation opérateur et transfert de compétences.",
                },
                {
                  tag: "Urgence",
                  title: "Récupération de programmes perdus",
                  desc: "Extraction depuis sauvegardes constructeur, reconstitution depuis les paramètres moule, assistance téléphonique avancée ou intervention sur site.",
                },
              ].map(({ tag, title, desc }, i) => (
                <AnimateIn key={title} variant="fadeUp" delay={i * 70}>
                  <div
                    className="p-8 lg:p-10"
                    style={{ backgroundColor: "oklch(15% 0.055 240)" }}
                  >
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.15em] block mb-5 px-2 py-1 w-fit"
                      style={{
                        color: "oklch(55% 0.13 240)",
                        border: "1px solid oklch(34% 0.09 240)",
                        backgroundColor: "oklch(20% 0.075 240)",
                      }}
                    >
                      {tag}
                    </span>
                    <h3
                      className="text-base font-bold mb-3"
                      style={{
                        fontFamily: "var(--font-space, system-ui, sans-serif)",
                        color: "oklch(92% 0.010 240)",
                      }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm" style={{ color: "oklch(54% 0.012 240)", lineHeight: "1.8" }}>
                      {desc}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── AMDEC / TRS ──────────────────────────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(14% 0.052 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

              <AnimateIn variant="fadeUp">
                <div>
                  <div
                    className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 text-xs font-semibold tracking-widest uppercase"
                    style={{
                      backgroundColor: "oklch(20% 0.078 240)",
                      border: "1px solid oklch(34% 0.09 240)",
                      color: "oklch(55% 0.13 240)",
                    }}
                  >
                    <Thermometer size={13} />
                    Matrice AMDEC — presses injection
                  </div>
                  <RiskMatrixPlasturgie />
                  <p className="mt-4 text-xs" style={{ color: "oklch(44% 0.010 240)" }}>
                    Modes de défaillance positionnés selon les historiques d&apos;arrêts
                    terrain et les données constructeur. IPR = gravité × fréquence × détectabilité.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={80}>
                <div>
                  <h2
                    className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight mb-5"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.025em",
                      color: "oklch(95% 0.007 240)",
                    }}
                  >
                    AMDEC et impact TRS : mesurer pour prévenir
                  </h2>
                  <p
                    className="text-base mb-8"
                    style={{ color: "oklch(60% 0.013 240)", lineHeight: "1.78" }}
                  >
                    Le TRS d&apos;une ligne de plasturgie est directement piloté par la
                    fiabilité des presses. Chaque arrêt non planifié détériore la
                    disponibilité — premier facteur du TRS. Nous appliquons l&apos;AMDEC sur
                    vos équipements pour identifier les modes de défaillance à fort
                    impact et concentrer la maintenance préventive là où elle compte.
                  </p>

                  <div className="space-y-0">
                    {[
                      {
                        color: "oklch(40% 0.20 25)",
                        label: "Pompe hydraulique défaillante",
                        gain: "→ +8 % TRS / an en maintenance préventive",
                      },
                      {
                        color: "oklch(58% 0.20 25)",
                        label: "Thermocouple buse dérivant",
                        gain: "→ −35 % rebuts matière sur PP et PA",
                      },
                      {
                        color: "oklch(62% 0.20 45)",
                        label: "Clapet injection usé",
                        gain: "→ −20 % micro-arrêts cycle",
                      },
                      {
                        color: "oklch(62% 0.18 148)",
                        label: "Joints de vérin dégradés",
                        gain: "→ Anticipation possible à 6 mois",
                      },
                    ].map(({ color, label, gain }) => (
                      <div
                        key={label}
                        className="flex items-start gap-4 py-4 border-b"
                        style={{ borderColor: "oklch(24% 0.065 240)" }}
                      >
                        <span
                          className="w-3 h-3 shrink-0 mt-1"
                          style={{ backgroundColor: color, opacity: 0.9 }}
                        />
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "oklch(86% 0.010 240)" }}>
                            {label}
                          </p>
                          <p className="text-xs mt-0.5 font-mono" style={{ color: "oklch(55% 0.13 240)" }}>
                            {gain}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}
        <section
          id="audit-plasturgie"
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(10% 0.040 240)" }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimateIn variant="fadeUp">
              <div className="text-center mb-16">
                <p
                  className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
                  style={{ color: "oklch(52% 0.21 25)" }}
                >
                  Intervention possible sous 24 à 48 h — région lyonnaise
                </p>
                <h2
                  className="text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-tight mb-6 max-w-3xl mx-auto"
                  style={{
                    fontFamily: "var(--font-space, system-ui, sans-serif)",
                    letterSpacing: "-0.03em",
                    color: "oklch(97% 0.005 240)",
                  }}
                >
                  Presse à l&apos;arrêt ou audit de fiabilisation ?
                </h2>
                <p
                  className="text-base max-w-xl mx-auto"
                  style={{ color: "oklch(60% 0.013 240)", lineHeight: "1.78" }}
                >
                  Urgence ou planification : deux modes d&apos;intervention adaptés à votre
                  situation. Dépannage immédiat ou audit complet — nous intervenons sur
                  presses à injection, souffleuses et extrudeuses plastique.
                </p>
              </div>
            </AnimateIn>

            <div className="grid md:grid-cols-3 gap-8 mb-14">
              {[
                "Diagnostic hydraulique complet inclus",
                "Rapport d'intervention remis sous 24 h",
                "Devis préventif fourni après chaque urgence",
              ].map((item, i) => (
                <AnimateIn key={item} variant="fadeUp" delay={i * 60}>
                  <div
                    className="flex items-start gap-3 p-5 border"
                    style={{
                      borderColor: "oklch(26% 0.072 240)",
                      backgroundColor: "oklch(13% 0.048 240)",
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(55% 0.13 240)" }}
                    />
                    <span className="text-sm" style={{ color: "oklch(70% 0.012 240)" }}>
                      {item}
                    </span>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn variant="fadeUp" delay={180}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:contact@unitek-automation.fr?subject=URGENCE%20presse%20injection%20plastique%20-%20intervention%20demandée"
                  className="inline-flex items-center justify-center gap-3 font-bold text-base px-10 py-5 transition-colors duration-150"
                  style={{
                    backgroundColor: "oklch(52% 0.21 25)",
                    color: "white",
                  }}
                >
                  Intervention d&apos;urgence
                  <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:contact@unitek-automation.fr?subject=Demande%20audit%20maintenance%20presses%20plasturgie"
                  className="inline-flex items-center justify-center gap-3 font-semibold text-base px-10 py-5 transition-colors duration-150"
                  style={{
                    color: "oklch(80% 0.012 240)",
                    border: "1px solid oklch(36% 0.08 240)",
                  }}
                >
                  Demander l&apos;audit complet
                  <ArrowRight size={18} />
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>
    </>
  );
}
