import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Cpu,
  Zap,
  Clock,
  Shield,
  FileSearch,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Rétrofit Machine-Outil & Commande Numérique (CNC) | Unitek Lyon",
  description:
    "Modernisez vos équipements industriels sans racheter à neuf. Rétrofit d'automates, migration Siemens/FANUC, mise aux normes électriques. Devis technique.",
  openGraph: {
    title: "Rétrofit Machine-Outil & Commande Numérique (CNC) | Unitek Lyon",
    description:
      "Modernisez vos équipements industriels sans racheter à neuf. Rétrofit d'automates, migration Siemens/FANUC, mise aux normes électriques. Devis technique.",
    type: "website",
    siteName: "Unitek Automation",
  },
};

// ─── JSON-LD Service ──────────────────────────────────────────────────────────

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rétrofit Machine-Outil & Commande Numérique CNC",
  description:
    "Modernisation d'équipements industriels : migration de commandes numériques Siemens/FANUC, rétrofit d'automates, mise aux normes électriques. Alternative économique au rachat de machine neuve.",
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
  serviceType: "Rétrofit CNC — Migration commandes numériques — Modernisation automates",
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
    description: "Étude de faisabilité technique gratuite sur site",
    eligibleCustomerType: "http://purl.org/goodrelations/v1#Business",
  },
};

// ─── Before / After SVG ───────────────────────────────────────────────────────

function BeforeAfterSVG() {
  const flowYs = [80, 112, 144, 176];
  const dotXs  = [222, 268, 318, 362];

  // CRT text lines (old panel)
  const crtLines = [
    "N1234  G01  X120.450",
    "Y0.000  Z-45.230  F200",
    "T02  M06",
    "G41  D1  H02",
    "",
    "> PROGRAM STOP_",
    "ALARM: 5028",
    "PARTS: 0047",
  ];

  // Softkey labels (new panel)
  const softkeys = ["M-S", "OUTIL", "PARAM", "DIAG", "CYCL"];

  return (
    <svg
      viewBox="0 0 580 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      role="img"
      aria-label="Transition retrofit : pupitre CNC obsolète vers IHM tactile Siemens 840D sl"
    >
      <defs>
        <pattern id="rDots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="oklch(30% 0.06 240)" />
        </pattern>
        <filter id="crtGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="580" height="290" fill="oklch(14% 0.052 240)" />
      <rect width="580" height="290" fill="url(#rDots)" />

      {/* ─── OLD PANEL ──────────────────────────────────────── */}
      <rect x="5" y="8" width="193" height="262" fill="oklch(16% 0.034 240)" stroke="oklch(28% 0.048 240)" strokeWidth="1.5" />

      {/* Panel header */}
      <rect x="5" y="8" width="193" height="22" fill="oklch(21% 0.040 240)" />
      <text x="14" y="23" fontSize="8.5" fill="oklch(50% 0.009 240)" fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="0.05em">
        SINUMERIK 3 — SIEMENS
      </text>
      <text x="190" y="23" fontSize="7" fill="oklch(36% 0.007 240)" fontFamily="system-ui,sans-serif" textAnchor="end">
        1994
      </text>

      {/* Status LEDs */}
      {[16, 30, 44, 58, 72, 86, 100, 114].map((cx, i) => (
        <circle
          key={cx} cx={cx} cy={39} r="3.5"
          fill={i === 2 ? "oklch(58% 0.20 25)" : i === 6 ? "oklch(52% 0.18 148)" : "oklch(24% 0.040 240)"}
          stroke="oklch(32% 0.055 240)" strokeWidth="0.8"
        />
      ))}

      {/* CRT screen */}
      <rect x="13" y="50" width="172" height="96" fill="oklch(7% 0.09 150)" stroke="oklch(30% 0.055 240)" strokeWidth="1" />
      {crtLines.map((line, i) => (
        <text key={i} x="17" y={63 + i * 10} fontSize="6.5" fill="oklch(56% 0.24 148)" fontFamily="'Courier New',monospace" filter="url(#crtGlow)">
          {line}
        </text>
      ))}
      {/* Cursor */}
      <rect x="17" y="115" width="5" height="7" fill="oklch(60% 0.24 148)" opacity="0.85" />

      {/* Divider */}
      <line x1="10" y1="153" x2="190" y2="153" stroke="oklch(26% 0.05 240)" strokeWidth="1" />

      {/* F-keys */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i}>
          <rect x={10 + i * 22} y={158} width="18" height="11" fill="oklch(22% 0.055 240)" stroke="oklch(32% 0.065 240)" strokeWidth="0.8" />
          <text x={19 + i * 22} y={167} fontSize="5.8" fill="oklch(44% 0.009 240)" fontFamily="system-ui,sans-serif" textAnchor="middle">
            {`F${i + 1}`}
          </text>
        </g>
      ))}

      {/* Numeric keypad: 4×4 */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={10 + col * 26} y={176 + row * 17}
            width="22" height="13"
            fill="oklch(20% 0.050 240)" stroke="oklch(30% 0.060 240)" strokeWidth="0.8"
          />
        ))
      )}

      {/* Axis / letter keys column */}
      {["X", "Y", "Z", "A"].map((label, i) => (
        <g key={label}>
          <rect x={120} y={176 + i * 17} width="30" height="13" fill="oklch(22% 0.060 240)" stroke="oklch(33% 0.068 240)" strokeWidth="0.8" />
          <text x={135} y={185 + i * 17} fontSize="7" fill="oklch(50% 0.010 240)" fontFamily="system-ui,sans-serif" textAnchor="middle" fontWeight="600">
            {label}
          </text>
        </g>
      ))}

      {/* Side func keys */}
      {Array.from({ length: 4 }).map((_, i) => (
        <rect key={i} x={158} y={176 + i * 17} width="34" height="13" fill="oklch(19% 0.048 240)" stroke="oklch(30% 0.060 240)" strokeWidth="0.8" />
      ))}

      {/* Bottom label */}
      <text x="99" y="278" fontSize="7.5" fill="oklch(34% 0.007 240)" fontFamily="system-ui,sans-serif" textAnchor="middle" letterSpacing="0.06em">
        PIÈCES DISCONTINUÉES — SUPPORT ARRÊTÉ
      </text>

      {/* ─── TRANSITION ZONE ──────────────────────────────── */}
      {/* Section labels */}
      <text x="99" y="22" fontSize="7" fill="oklch(40% 0.008 240)" fontFamily="system-ui,sans-serif" textAnchor="middle" letterSpacing="0.10em">
        AVANT
      </text>
      <text x="481" y="22" fontSize="7" fill="oklch(55% 0.13 240)" fontFamily="system-ui,sans-serif" textAnchor="middle" letterSpacing="0.10em" fontWeight="600">
        APRÈS
      </text>

      {/* Flow lines */}
      {flowYs.map((y) => (
        <line key={y} x1="202" y1={y} x2="376" y2={y} stroke="oklch(36% 0.098 240)" strokeWidth="1" strokeDasharray="6 4" />
      ))}

      {/* Arrowheads */}
      {flowYs.map((y) => (
        <path key={y} d={`M372,${y - 4} L380,${y} L372,${y + 4}`} fill="oklch(44% 0.11 240)" />
      ))}

      {/* Data dots */}
      {flowYs.map((y) =>
        dotXs.map((x) => (
          <circle key={`${y}-${x}`} cx={x} cy={y} r="3.2" fill="oklch(48% 0.13 240)" />
        ))
      )}

      {/* Central badge */}
      <rect x="245" y="112" width="90" height="56" fill="oklch(26% 0.095 240)" stroke="oklch(50% 0.13 240)" strokeWidth="1.5" />
      <text x="290" y="137" fontSize="10" fill="oklch(62% 0.13 240)" fontFamily="system-ui,sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
        RETROFIT
      </text>
      <text x="290" y="155" fontSize="10" fill="oklch(95% 0.006 240)" fontFamily="system-ui,sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
        UNITEK
      </text>

      {/* ─── NEW PANEL ────────────────────────────────────── */}
      <rect x="382" y="8" width="193" height="262" fill="oklch(22% 0.082 240)" stroke="oklch(48% 0.13 240)" strokeWidth="1.5" />

      {/* Panel header */}
      <rect x="382" y="8" width="193" height="22" fill="oklch(28% 0.098 240)" />
      <circle cx="393" cy="19" r="4" fill="oklch(65% 0.18 148)" />
      <text x="402" y="23" fontSize="8.5" fill="oklch(90% 0.010 240)" fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="0.04em">
        SINUMERIK 840D sl
      </text>
      <text x="568" y="23" fontSize="7" fill="oklch(55% 0.13 240)" fontFamily="system-ui,sans-serif" textAnchor="end" fontWeight="600">
        2025
      </text>

      {/* Touchscreen */}
      <rect x="390" y="36" width="177" height="176" fill="oklch(13% 0.056 240)" stroke="oklch(38% 0.095 240)" strokeWidth="1" />

      {/* Screen header bar */}
      <rect x="391" y="37" width="175" height="16" fill="oklch(28% 0.095 240)" />
      <text x="398" y="48" fontSize="7" fill="oklch(78% 0.010 240)" fontFamily="system-ui,sans-serif">MODE AUTO</text>
      <text x="560" y="48" fontSize="7" fill="oklch(65% 0.18 148)" fontFamily="system-ui,sans-serif" textAnchor="end">● PRÊT CYCLE</text>

      {/* Axis readout */}
      {[
        { axis: "X", val: "120.450", dy: 0 },
        { axis: "Y", val: "  0.000", dy: 1 },
        { axis: "Z", val: "-45.230", dy: 2 },
      ].map(({ axis, val, dy }) => (
        <g key={axis}>
          <text x="397" y={68 + dy * 19} fontSize="8" fill="oklch(48% 0.010 240)" fontFamily="system-ui,sans-serif" fontWeight="700">
            {axis}
          </text>
          <text x="410" y={68 + dy * 19} fontSize="11" fill="oklch(56% 0.13 240)" fontFamily="'Courier New',monospace" fontWeight="700" letterSpacing="0.04em">
            {val}
          </text>
        </g>
      ))}

      {/* Feed / Spindle bars */}
      {[
        { label: "AVANCE", pct: 75, y: 133 },
        { label: "BROCHE", pct: 90, y: 149 },
      ].map(({ label, pct, y }) => (
        <g key={label}>
          <text x="397" y={y} fontSize="7" fill="oklch(46% 0.010 240)" fontFamily="system-ui,sans-serif">{label}</text>
          <rect x="432" y={y - 8} width="126" height="8" fill="oklch(20% 0.07 240)" />
          <rect x="432" y={y - 8} width={126 * pct / 100} height="8" fill="oklch(50% 0.13 240)" />
          <text x="561" y={y} fontSize="7" fill="oklch(58% 0.012 240)" fontFamily="system-ui,sans-serif" textAnchor="end">{pct}%</text>
        </g>
      ))}

      {/* Program strip */}
      <rect x="391" y="158" width="175" height="28" fill="oklch(16% 0.063 240)" />
      <text x="397" y="170" fontSize="7" fill="oklch(54% 0.13 240)" fontFamily="'Courier New',monospace">N1234  G01  X120.450  Y0.000</text>
      <text x="397" y="181" fontSize="7" fill="oklch(54% 0.13 240)" fontFamily="'Courier New',monospace">Z-45.230  F200  S2800</text>

      {/* Tool life indicator */}
      <rect x="391" y="189" width="175" height="22" fill="oklch(18% 0.07 240)" />
      <text x="397" y="201" fontSize="7" fill="oklch(60% 0.012 240)" fontFamily="system-ui,sans-serif">T02 — Fraise Ø12</text>
      <text x="397" y="209" fontSize="6.5" fill="oklch(65% 0.18 148)" fontFamily="system-ui,sans-serif">3 847 h restantes</text>

      {/* Softkeys */}
      {softkeys.map((label, i) => (
        <g key={label}>
          <rect x={390 + i * 36} y={219} width="30" height="14" fill="oklch(26% 0.090 240)" stroke="oklch(42% 0.11 240)" strokeWidth="0.8" />
          <text x={405 + i * 36} y={229} fontSize="5.8" fill="oklch(68% 0.010 240)" fontFamily="system-ui,sans-serif" textAnchor="middle">{label}</text>
        </g>
      ))}

      {/* Connectors */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={390 + i * 22} y={241} width="16" height="10" fill="oklch(20% 0.072 240)" stroke="oklch(36% 0.090 240)" strokeWidth="0.8" />
      ))}
      <text x="445" y="249" fontSize="6" fill="oklch(40% 0.010 240)" fontFamily="system-ui,sans-serif">USB  ·  PROFIBUS  ·  CF</text>

      {/* Bottom label */}
      <text x="481" y="278" fontSize="7.5" fill="oklch(55% 0.13 240)" fontFamily="system-ui,sans-serif" textAnchor="middle" letterSpacing="0.06em" fontWeight="600">
        IHM TACTILE — SUPPORT ACTIF
      </text>
    </svg>
  );
}

// ─── Migration stepper (horizontal) ──────────────────────────────────────────

const MIGRATION_STEPS = [
  { num: "01", label: "Audit d'obsolescence", desc: "Inventaire des équipements, analyse des risques de rupture" },
  { num: "02", label: "Étude de faisabilité", desc: "Chiffrage, planning, alternatives techniques documentées" },
  { num: "03", label: "Câblage armoire", desc: "Remplacement des composants, mise aux normes CE/NF" },
  { num: "04", label: "Migration CN/API", desc: "Paramétrage axes, servo-variateurs, programmation ladder" },
  { num: "05", label: "Tests & validation", desc: "Essais à vide, pièce témoin, réception contradictoire" },
  { num: "06", label: "Remise en production", desc: "Formation opérateurs, documentation technique complète" },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RetrofitPage() {
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
          className="relative pt-24 pb-0 overflow-hidden"
          style={{ backgroundColor: "oklch(13% 0.048 240)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 4px, oklch(100% 0 0 / 0.008) 4px, oklch(100% 0 0 / 0.008) 5px)",
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <AnimateIn variant="fadeUp" delay={0}>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-7"
                style={{ color: "oklch(55% 0.13 240)" }}
              >
                Rétrofit &amp; Modernisation CNC
              </p>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={60}>
              <h1
                className="text-[clamp(2.2rem,4.8vw,4rem)] font-bold leading-[1.06] mb-6 mx-auto"
                style={{
                  fontFamily: "var(--font-space, system-ui, sans-serif)",
                  letterSpacing: "-0.03em",
                  color: "oklch(97% 0.005 240)",
                  maxWidth: "44rem",
                }}
              >
                Prolongez la vie de vos machines.
                <br />
                <span style={{ color: "oklch(55% 0.13 240)" }}>Sans racheter à neuf.</span>
              </h1>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={130}>
              <p
                className="text-base leading-relaxed mb-10 mx-auto font-light"
                style={{
                  color: "oklch(65% 0.014 240)",
                  lineHeight: "1.78",
                  maxWidth: "38rem",
                }}
              >
                Votre commande numérique est obsolète, le fabricant a arrêté le support,
                les pièces se raréfient. Un rétrofit remplace la partie électronique
                en conservant la précision mécanique que vos équipes ont rodée depuis
                20 ans — pour 15 à 25 % du prix d&apos;une machine neuve.
              </p>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={200}>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a
                  href="#faisabilite"
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4"
                  style={{
                    backgroundColor: "oklch(97% 0.005 240)",
                    color: "oklch(18% 0.06 240)",
                  }}
                >
                  Demander une étude de faisabilité
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#methodologie"
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4"
                  style={{
                    color: "oklch(78% 0.012 240)",
                    border: "1px solid oklch(34% 0.08 240)",
                  }}
                >
                  Notre méthodologie
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Full-width Before/After SVG */}
          <AnimateIn variant="fade" delay={280}>
            <div
              className="border-t border-b"
              style={{ borderColor: "oklch(24% 0.068 240)" }}
            >
              <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
                <BeforeAfterSVG />
              </div>
            </div>
          </AnimateIn>
        </section>

        {/* ── DIAGNOSTIC D'OBSOLESCENCE ─────────────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(16% 0.058 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

              {/* Left — signs checklist */}
              <AnimateIn variant="fadeUp">
                <div>
                  <h2
                    className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight mb-5"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.025em",
                      color: "oklch(95% 0.007 240)",
                    }}
                  >
                    Diagnostic d&apos;obsolescence
                  </h2>
                  <p
                    className="text-base mb-8"
                    style={{ color: "oklch(60% 0.013 240)", lineHeight: "1.78" }}
                  >
                    L&apos;obsolescence ne se déclare pas d&apos;un coup. Elle s&apos;installe
                    progressivement — jusqu&apos;au jour où le délai de réparation
                    dépasse le délai de la commande client.
                  </p>

                  <div className="space-y-0">
                    {[
                      {
                        icon: AlertTriangle,
                        title: "Pièces introuvables ou délai > 12 semaines",
                        desc: "Cartes d'axe, codeurs, variateurs — le fabricant a discontinué la référence.",
                        critical: true,
                      },
                      {
                        icon: Cpu,
                        title: "Fin du support constructeur",
                        desc: "Plus de mise à jour firmware, plus de hotline technique, plus de documentation officielle.",
                        critical: true,
                      },
                      {
                        icon: Clock,
                        title: "Arrêts de production répétés non expliqués",
                        desc: "Le technicien fait un reset et ça repart — jusqu'au prochain arrêt.",
                        critical: false,
                      },
                      {
                        icon: Shield,
                        title: "Non-conformité CE ou NF C 18-510",
                        desc: "Armoire électrique hors norme, documentation manquante, risque assurance.",
                        critical: false,
                      },
                      {
                        icon: Zap,
                        title: "Temps de cycle dégradé vs specs d'origine",
                        desc: "Servo-variateurs vieillissants, pertes d'accélération, impossibilité d'atteindre les avances nominales.",
                        critical: false,
                      },
                    ].map(({ icon: Icon, title, desc, critical }, i) => (
                      <AnimateIn key={title} variant="fadeRight" delay={i * 55}>
                        <div
                          className="flex items-start gap-4 py-5 border-b"
                          style={{ borderColor: "oklch(24% 0.065 240)" }}
                        >
                          <div
                            className="flex items-center justify-center w-9 h-9 shrink-0 mt-0.5"
                            style={{
                              backgroundColor: critical
                                ? "oklch(20% 0.07 25)"
                                : "oklch(22% 0.08 240)",
                              border: `1px solid ${critical ? "oklch(42% 0.16 25)" : "oklch(34% 0.09 240)"}`,
                            }}
                          >
                            <Icon
                              size={16}
                              style={{
                                color: critical
                                  ? "oklch(62% 0.20 25)"
                                  : "oklch(55% 0.13 240)",
                              }}
                            />
                          </div>
                          <div>
                            <p
                              className="text-sm font-semibold mb-0.5"
                              style={{ color: "oklch(88% 0.010 240)" }}
                            >
                              {title}
                            </p>
                            <p
                              className="text-sm"
                              style={{ color: "oklch(54% 0.012 240)" }}
                            >
                              {desc}
                            </p>
                          </div>
                        </div>
                      </AnimateIn>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Right — compatible systems */}
              <AnimateIn variant="fadeUp" delay={80}>
                <div
                  className="border p-8 lg:p-10"
                  style={{
                    borderColor: "oklch(28% 0.075 240)",
                    backgroundColor: "oklch(15% 0.055 240)",
                  }}
                >
                  <FileSearch
                    size={22}
                    className="mb-6"
                    style={{ color: "oklch(55% 0.13 240)" }}
                  />
                  <p
                    className="text-base font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      color: "oklch(92% 0.010 240)",
                    }}
                  >
                    Systèmes pris en charge
                  </p>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "oklch(56% 0.012 240)", lineHeight: "1.75" }}
                  >
                    Nos ingénieurs maîtrisent les migrations entre générations de CN
                    et d&apos;automates — y compris les équipements dont la documentation
                    est partielle ou manquante.
                  </p>

                  <div className="space-y-0">
                    {[
                      {
                        from: "Siemens SINUMERIK 3 / 810 / 820",
                        to: "Siemens SINUMERIK 840D sl / ONE",
                      },
                      {
                        from: "FANUC System 10 / 11 / 15 / 18i",
                        to: "FANUC 0i-MF / 30i-B Plus",
                      },
                      {
                        from: "NUM 760 / 1020 / 1040",
                        to: "NUM 1060 / Flexium+",
                      },
                      {
                        from: "Mitsubishi M3 / M64 / M70",
                        to: "Mitsubishi M80 / M800",
                      },
                      {
                        from: "Siemens S5 / S7-300",
                        to: "Siemens S7-1500 / TIA Portal",
                      },
                      {
                        from: "Schneider TSX / Modicon 984",
                        to: "Schneider M340 / M580",
                      },
                    ].map(({ from, to }) => (
                      <div
                        key={from}
                        className="py-3.5 border-b"
                        style={{ borderColor: "oklch(22% 0.065 240)" }}
                      >
                        <p
                          className="text-xs font-mono mb-1"
                          style={{ color: "oklch(44% 0.010 240)" }}
                        >
                          {from}
                        </p>
                        <div className="flex items-center gap-2">
                          <ArrowRight size={12} style={{ color: "oklch(50% 0.13 240)" }} />
                          <p
                            className="text-sm font-semibold"
                            style={{ color: "oklch(78% 0.013 240)" }}
                          >
                            {to}
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

        {/* ── MÉTHODOLOGIE — stepper horizontal ────────────────────────────────── */}
        <section
          id="methodologie"
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
                Méthodologie de migration
              </h2>
              <p
                className="text-base mb-14 max-w-xl"
                style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
              >
                Du premier audit à la remise en production : six phases structurées,
                chaque étape documentée et validée avec vos équipes de maintenance.
              </p>
            </AnimateIn>

            {/* Horizontal stepper */}
            <div className="relative">
              {/* Connector line (desktop only) */}
              <div
                className="hidden lg:block absolute top-5 left-0 right-0 h-px"
                style={{ backgroundColor: "oklch(26% 0.07 240)" }}
              />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
                {MIGRATION_STEPS.map(({ num, label, desc }, i) => (
                  <AnimateIn key={num} variant="fadeUp" delay={i * 60}>
                    <div className="flex flex-col gap-3">
                      {/* Number bubble */}
                      <div
                        className="relative z-10 flex items-center justify-center w-10 h-10 text-sm font-bold"
                        style={{
                          backgroundColor: "oklch(14% 0.052 240)",
                          border: "1px solid oklch(44% 0.11 240)",
                          color: "oklch(55% 0.13 240)",
                          fontFamily: "var(--font-space, system-ui, sans-serif)",
                        }}
                      >
                        {num}
                      </div>
                      <p
                        className="text-sm font-bold leading-snug"
                        style={{
                          fontFamily: "var(--font-space, system-ui, sans-serif)",
                          color: "oklch(88% 0.010 240)",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "oklch(52% 0.011 240)" }}
                      >
                        {desc}
                      </p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>

            {/* Phase details */}
            <AnimateIn variant="fadeUp" delay={200}>
              <div
                className="mt-16 grid md:grid-cols-3 gap-0 border"
                style={{ borderColor: "oklch(26% 0.070 240)" }}
              >
                {[
                  {
                    title: "Câblage armoire",
                    items: [
                      "Refonte du schéma électrique sous SEE Electrical",
                      "Remplacement des composants vieillissants",
                      "Mise aux normes CE / NF C 18-510",
                      "Chemin de câbles identifié et étiqueté",
                    ],
                  },
                  {
                    title: "Migration CN & paramétrage variateurs",
                    items: [
                      "Récupération / reconstitution des programmes CN",
                      "Paramétrage axes sur nouvelle CN (jerk, accélération)",
                      "Réglage servo-variateurs et tests dynamiques",
                      "Calibration des capteurs et systèmes de mesure",
                    ],
                  },
                  {
                    title: "Programmation automate",
                    items: [
                      "Réécriture du programme ladder en ST / FBD",
                      "Intégration des nouvelles sécurités (SIL/PL)",
                      "Tests de la chaîne fonctionnelle complète",
                      "Documentation GRAFCET livrée en fin de chantier",
                    ],
                  },
                ].map(({ title, items }) => (
                  <div
                    key={title}
                    className="px-6 py-7 border-b md:border-b-0 md:border-r last:border-r-0"
                    style={{ borderColor: "oklch(26% 0.070 240)" }}
                  >
                    <p
                      className="text-sm font-bold mb-4"
                      style={{
                        fontFamily: "var(--font-space, system-ui, sans-serif)",
                        color: "oklch(88% 0.010 240)",
                      }}
                    >
                      {title}
                    </p>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2
                            size={13}
                            className="shrink-0 mt-0.5"
                            style={{ color: "oklch(55% 0.13 240)" }}
                          />
                          <span
                            className="text-xs leading-relaxed"
                            style={{ color: "oklch(58% 0.012 240)" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── RÉTROFIT VS ACHAT NEUF ────────────────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(17% 0.062 240)" }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimateIn variant="fadeUp">
              <h2
                className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight mb-4 max-w-2xl"
                style={{
                  fontFamily: "var(--font-space, system-ui, sans-serif)",
                  letterSpacing: "-0.025em",
                  color: "oklch(95% 0.007 240)",
                }}
              >
                Rétrofit contre achat neuf : les chiffres
              </h2>
              <p
                className="text-base mb-10 max-w-xl"
                style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
              >
                Pour un centre d&apos;usinage 3 axes de type Mazak / Mori Seiki, voici
                les ordres de grandeur observés sur nos derniers chantiers.
              </p>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={60}>
              <div
                className="overflow-hidden border"
                style={{ borderColor: "oklch(28% 0.075 240)" }}
              >
                {/* Header row */}
                <div
                  className="grid grid-cols-[1fr_1fr_1fr] border-b"
                  style={{
                    borderColor: "oklch(28% 0.075 240)",
                    backgroundColor: "oklch(20% 0.07 240)",
                  }}
                >
                  <div className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "oklch(48% 0.012 240)" }}>
                    Critère
                  </div>
                  <div className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] border-l" style={{ color: "oklch(58% 0.012 240)", borderColor: "oklch(28% 0.075 240)" }}>
                    Achat neuf
                  </div>
                  <div className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] border-l" style={{ color: "oklch(55% 0.13 240)", borderColor: "oklch(28% 0.075 240)" }}>
                    Rétrofit Unitek
                  </div>
                </div>

                {[
                  { criterion: "Investissement",        old: "200 k€ – 500 k€",    new_: "40 k€ – 120 k€",     advantage: true },
                  { criterion: "Délai de mise en service", old: "6 – 18 mois",     new_: "4 – 12 semaines",    advantage: true },
                  { criterion: "Arrêt de production",   old: "Long (installation)", new_: "Court (échange)",    advantage: true },
                  { criterion: "Précision mécanique",   old: "Neuve, non rodée",    new_: "Rodée sur 20+ ans",  advantage: true },
                  { criterion: "Formation équipes",     old: "Complète (3–5 j)",    new_: "Partielle (0,5–1 j)", advantage: true },
                  { criterion: "Risque pièces de rechange", old: "Catalogue neuf",  new_: "Catalogue + legacy", advantage: false },
                  { criterion: "ROI estimé",            old: "7 – 12 ans",         new_: "18 – 36 mois",       advantage: true },
                ].map(({ criterion, old, new_, advantage }, i) => (
                  <div
                    key={criterion}
                    className="grid grid-cols-[1fr_1fr_1fr] border-b last:border-b-0"
                    style={{
                      borderColor: "oklch(24% 0.068 240)",
                      backgroundColor: i % 2 === 0 ? "oklch(15% 0.055 240)" : "oklch(14% 0.052 240)",
                    }}
                  >
                    <div className="px-5 py-4 text-sm font-semibold" style={{ color: "oklch(82% 0.010 240)" }}>
                      {criterion}
                    </div>
                    <div className="px-5 py-4 text-sm border-l" style={{ color: "oklch(50% 0.012 240)", borderColor: "oklch(24% 0.068 240)" }}>
                      {old}
                    </div>
                    <div className="px-5 py-4 text-sm font-semibold border-l" style={{ color: advantage ? "oklch(65% 0.18 148)" : "oklch(72% 0.012 240)", borderColor: "oklch(24% 0.068 240)" }}>
                      {new_}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── GAINS & ROI ──────────────────────────────────────────────────────── */}
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
                Gains de productivité et retour sur investissement
              </h2>
              <p
                className="text-base mb-14 max-w-xl"
                style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
              >
                Les gains d&apos;un rétrofit ne se limitent pas à la continuité de production.
                La nouvelle architecture débloque des capacités que l&apos;ancienne commande
                ne permettait pas.
              </p>
            </AnimateIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border" style={{ borderColor: "oklch(26% 0.070 240)" }}>
              {[
                {
                  icon: TrendingUp,
                  value: "+ 15 – 30 %",
                  label: "de temps de cycle récupéré",
                  desc: "Nouvelles accélérations, jerk optimisé, communication servo plus rapide.",
                },
                {
                  icon: Zap,
                  value: "− 40 – 60 %",
                  label: "de temps d'arrêt non planifié",
                  desc: "Pièces de rechange disponibles, diagnostics embarqués, alertes préventives.",
                },
                {
                  icon: Shield,
                  value: "10 – 15 ans",
                  label: "de prolongation de vie",
                  desc: "Nouvelle CN avec support constructeur actif, firmware évolutif.",
                },
                {
                  icon: TrendingUp,
                  value: "18 – 36 mois",
                  label: "de retour sur investissement",
                  desc: "Sur la base du coût des pannes évitées et du gain de disponibilité.",
                },
              ].map(({ icon: Icon, value, label, desc }, i) => (
                <AnimateIn key={value} variant="fadeUp" delay={i * 55}>
                  <div
                    className="px-6 py-8 border-b md:border-b-0 md:border-r last:border-r-0"
                    style={{ borderColor: "oklch(26% 0.070 240)" }}
                  >
                    <Icon
                      size={18}
                      className="mb-4"
                      style={{ color: "oklch(55% 0.13 240)" }}
                    />
                    <p
                      className="text-2xl font-bold mb-1 leading-none"
                      style={{
                        fontFamily: "var(--font-space, system-ui, sans-serif)",
                        color: "oklch(90% 0.010 240)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-xs font-semibold mb-3 uppercase tracking-[0.10em]"
                      style={{ color: "oklch(55% 0.13 240)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "oklch(52% 0.011 240)" }}
                    >
                      {desc}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA — étude de faisabilité ────────────────────────────────────────── */}
        <section
          id="faisabilite"
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(10% 0.040 240)" }}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <AnimateIn variant="fadeUp">
              <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">

                {/* Text */}
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
                    style={{ color: "oklch(52% 0.21 25)" }}
                  >
                    Gratuite — sans engagement
                  </p>
                  <h2
                    className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-5"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.03em",
                      color: "oklch(97% 0.005 240)",
                    }}
                  >
                    Étude de faisabilité
                    <br />
                    technique sur site
                  </h2>
                  <p
                    className="text-base mb-10 max-w-lg"
                    style={{ color: "oklch(60% 0.013 240)", lineHeight: "1.78" }}
                  >
                    Nous venons sur site inspecter la machine ciblée. En une
                    demi-journée, nous vous remettons un pré-chiffrage du rétrofit
                    avec les alternatives techniques, le délai estimé et le ROI
                    projeté sur 3 ans.
                  </p>

                  <div className="space-y-0 mb-10">
                    {[
                      "Inspection mécanique et électrique de la machine",
                      "Identification des équipements à remplacer",
                      "Pré-chiffrage rétrofit vs achat neuf",
                      "Délai de réalisation et planning chantier",
                      "Rapport technique écrit remis sous 5 jours ouvrés",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 py-3 border-b"
                        style={{ borderColor: "oklch(20% 0.062 240)" }}
                      >
                        <CheckCircle2
                          size={14}
                          style={{ color: "oklch(55% 0.13 240)" }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "oklch(68% 0.013 240)" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA card */}
                <div
                  className="border p-8 min-w-[260px]"
                  style={{
                    borderColor: "oklch(28% 0.075 240)",
                    backgroundColor: "oklch(15% 0.055 240)",
                  }}
                >
                  <Cpu
                    size={22}
                    className="mb-5"
                    style={{ color: "oklch(55% 0.13 240)" }}
                  />
                  <p
                    className="text-base font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      color: "oklch(95% 0.007 240)",
                    }}
                  >
                    Faisabilité technique
                  </p>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "oklch(54% 0.012 240)", lineHeight: "1.65" }}
                  >
                    Région lyonnaise. Déplacement possible sous 5 à 10 jours ouvrés.
                  </p>

                  <a
                    href="mailto:contact@unitek-automation.fr?subject=Demande%20d%27étude%20de%20faisabilité%20retrofit%20CNC"
                    className="flex items-center justify-center gap-2 font-bold text-sm w-full py-4 mb-4"
                    style={{
                      backgroundColor: "oklch(52% 0.21 25)",
                      color: "white",
                    }}
                  >
                    Demander l&apos;étude
                    <ArrowRight size={16} />
                  </a>

                  <div
                    className="pt-4 border-t space-y-2"
                    style={{ borderColor: "oklch(24% 0.068 240)" }}
                  >
                    {[
                      "Rapport technique inclus",
                      "Chiffrage détaillé fourni",
                      "Aucun engagement contractuel",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2
                          size={13}
                          style={{ color: "oklch(55% 0.13 240)" }}
                        />
                        <span
                          className="text-xs"
                          style={{ color: "oklch(60% 0.012 240)" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>
    </>
  );
}
