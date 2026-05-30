import type { Metadata } from "next";
import {
  ArrowRight,
  MapPin,
  ClipboardList,
  Package,
  Waves,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  ScanLine,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Maintenance Préventive & Prédictive CNC | Audit Unitek Lyon",
  description:
    "Évitez les arrêts de production avec nos plans de maintenance préventive. Audit sur site, commande de pièces critiques et installation de capteurs IoT.",
  openGraph: {
    title: "Maintenance Préventive & Prédictive CNC | Audit Unitek Lyon",
    description:
      "Évitez les arrêts de production avec nos plans de maintenance préventive. Audit sur site, commande de pièces critiques et installation de capteurs IoT.",
    type: "website",
    siteName: "Unitek Automation",
  },
};

// ─── JSON-LD Service ──────────────────────────────────────────────────────────

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maintenance Préventive & Prédictive CNC",
  description:
    "Audit sur site, élaboration de plan d'entretien AMDEC, gestion des pièces critiques et intégration de capteurs IoT pour l'analyse vibratoire.",
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
  serviceType: "Maintenance préventive et prédictive machines-outils CNC",
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
    description: "Audit technique sur site — cartographie du parc machine",
    eligibleCustomerType: "http://purl.org/goodrelations/v1#Business",
  },
};

// ─── Machine diagram ──────────────────────────────────────────────────────────

function MachineDiagram() {
  type Side = "left" | "right";

  const annotations: Array<{
    cx: number;
    cy: number;
    label: string;
    sub: string;
    critical: boolean;
    side: Side;
  }> = [
    { cx: 196, cy: 98,  label: "Broche — roulement", sub: "lubrification + équilibrage", critical: false, side: "right" },
    { cx: 142, cy: 152, label: "Axe Z — servo Z1",   sub: "jeu à rattraper détecté",    critical: true,  side: "left"  },
    { cx: 196, cy: 202, label: "Axes X/Y",            sub: "vis à billes, guidages",     critical: false, side: "right" },
    { cx: 128, cy: 242, label: "Refroidissement",     sub: "circuit d'arrosage",         critical: false, side: "left"  },
    { cx: 210, cy: 268, label: "Pupitre CN",          sub: "Fanuc 30i-B",               critical: false, side: "right" },
  ];

  return (
    <svg
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      role="img"
      aria-label="Schéma d'un centre d'usinage CNC avec composants annotés pour la maintenance préventive"
    >
      <defs>
        <pattern id="mGrid" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="oklch(34% 0.06 240)" />
        </pattern>
      </defs>

      <rect width="380" height="320" fill="oklch(15% 0.058 240)" />
      <rect width="380" height="320" fill="url(#mGrid)" />

      {/* Column / main body */}
      <rect x="108" y="44" width="148" height="210" fill="oklch(22% 0.078 240)" stroke="oklch(36% 0.09 240)" strokeWidth="1.5" />

      {/* Magazine outils — top notch */}
      <rect x="108" y="44" width="148" height="28" fill="oklch(28% 0.088 240)" stroke="oklch(38% 0.09 240)" strokeWidth="1" />
      {[130, 150, 170, 190, 210, 228].map((x) => (
        <rect key={x} x={x} y={44} width="6" height="10" fill="oklch(35% 0.1 240)" />
      ))}

      {/* Spindle head */}
      <rect x="136" y="72" width="92" height="64" fill="oklch(28% 0.095 240)" stroke="oklch(44% 0.11 240)" strokeWidth="1.5" />
      <circle cx="182" cy="104" r="22" fill="oklch(18% 0.07 240)" stroke="oklch(50% 0.13 240)" strokeWidth="1.5" />
      <circle cx="182" cy="104" r="10" fill="oklch(40% 0.13 240)" stroke="oklch(52% 0.13 240)" strokeWidth="1" />
      <circle cx="182" cy="104" r="3"  fill="oklch(60% 0.13 240)" />

      {/* Tool holder */}
      <rect x="178" y="136" width="8" height="32" fill="oklch(34% 0.10 240)" />
      <rect x="174" y="162" width="16" height="8"  fill="oklch(32% 0.09 240)" />

      {/* Side panel — axis Z */}
      <rect x="78" y="80" width="30" height="140" fill="oklch(20% 0.072 240)" stroke="oklch(34% 0.085 240)" strokeWidth="1" />
      <line x1="93" y1="90" x2="93" y2="210" stroke="oklch(38% 0.09 240)" strokeWidth="0.8" strokeDasharray="4 3" />

      {/* Table */}
      <rect x="76"  y="257" width="212" height="20" fill="oklch(26% 0.085 240)" stroke="oklch(38% 0.09 240)" strokeWidth="1.5" />
      <rect x="90"  y="250" width="184" height="10" fill="oklch(30% 0.09 240)"  stroke="oklch(40% 0.10 240)"  strokeWidth="1" />
      <rect x="108" y="277" width="30"  height="10" fill="oklch(22% 0.075 240)" />
      <rect x="226" y="277" width="30"  height="10" fill="oklch(22% 0.075 240)" />

      {/* Annotations */}
      {annotations.map(({ cx, cy, label, sub, critical, side }) => {
        const isLeft  = side === "left";
        const lineEnd = isLeft ? cx - 50 : cx + 50;
        const dotColor  = critical ? "oklch(60% 0.20 25)"  : "oklch(65% 0.18 148)";
        const lineColor = critical ? "oklch(52% 0.18 25)"  : "oklch(40% 0.10 240)";
        const textColor = critical ? "oklch(82% 0.015 25)" : "oklch(88% 0.010 240)";

        return (
          <g key={label}>
            <circle cx={cx} cy={cy} r="4.5" fill={dotColor} />
            <line
              x1={cx} y1={cy} x2={lineEnd} y2={cy}
              stroke={lineColor}
              strokeWidth="1"
              strokeDasharray={critical ? "none" : "4 3"}
            />
            <text
              x={isLeft ? lineEnd - 5 : lineEnd + 5}
              y={cy - 3}
              fontSize="8.5"
              fill={textColor}
              fontFamily="system-ui, sans-serif"
              fontWeight="600"
              textAnchor={isLeft ? "end" : "start"}
              letterSpacing="0.03em"
            >
              {label}
            </text>
            <text
              x={isLeft ? lineEnd - 5 : lineEnd + 5}
              y={cy + 9}
              fontSize="7"
              fill="oklch(50% 0.012 240)"
              fontFamily="system-ui, sans-serif"
              textAnchor={isLeft ? "end" : "start"}
            >
              {sub}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <circle cx="14" cy="292" r="4" fill="oklch(60% 0.20 25)" />
      <text x="22" y="296" fontSize="7" fill="oklch(60% 0.20 25)" fontFamily="system-ui, sans-serif">
        Point critique
      </text>
      <circle cx="14" cy="309" r="4" fill="oklch(65% 0.18 148)" />
      <text x="22" y="313" fontSize="7" fill="oklch(65% 0.18 148)" fontFamily="system-ui, sans-serif">
        État satisfaisant
      </text>
    </svg>
  );
}

// ─── AMDEC risk matrix ────────────────────────────────────────────────────────

function RiskMatrix() {
  // 4 × 4 grid: occurrence (col) × severity (row, inverted — worst on top)
  const cellColors: string[][] = [
    ["oklch(62% 0.18 148)", "oklch(68% 0.17 80)", "oklch(62% 0.20 45)", "oklch(58% 0.20 25)"],
    ["oklch(62% 0.18 148)", "oklch(68% 0.17 80)", "oklch(58% 0.20 25)", "oklch(52% 0.20 25)"],
    ["oklch(68% 0.17 80)",  "oklch(62% 0.20 45)", "oklch(58% 0.20 25)", "oklch(48% 0.20 25)"],
    ["oklch(62% 0.20 45)",  "oklch(58% 0.20 25)", "oklch(48% 0.20 25)", "oklch(40% 0.20 25)"],
  ];

  // failure modes: [col 0-3, row 0-3, label]
  const modes: Array<[number, number, string]> = [
    [1, 3, "Roulement broche"],
    [3, 2, "Servo axe Z"],
    [0, 1, "Capteur pièce"],
    [2, 0, "Filtre huile"],
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
      aria-label="Matrice de risque AMDEC — occurrence versus gravité"
    >
      <rect width="280" height="210" fill="oklch(15% 0.058 240)" />

      {/* Axis labels */}
      <text x="140" y="198" fontSize="8" fill="oklch(55% 0.012 240)" fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="0.06em">
        OCCURRENCE →
      </text>

      {/* Y axis label */}
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

      {/* Row/col header labels */}
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

      {/* Grid cells */}
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

      {/* Failure mode dots */}
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

// ─── Vibration spectrum ───────────────────────────────────────────────────────

const VIBE_FREQS = ["25", "50", "75", "100", "125", "150", "175", "200", "225", "250", "275", "300"];

function VibrationPanel({
  bars,
  label,
  anomalyIdx,
}: {
  bars: number[];
  label: string;
  anomalyIdx?: number;
}) {
  const max = Math.max(...bars);
  return (
    <div
      className="flex-1 border overflow-hidden"
      style={{ borderColor: "oklch(28% 0.075 240)", backgroundColor: "oklch(15% 0.055 240)" }}
    >
      <div
        className="px-3 py-2 border-b flex items-center justify-between"
        style={{ borderColor: "oklch(25% 0.07 240)", backgroundColor: "oklch(19% 0.065 240)" }}
      >
        <span
          className="text-[10px] font-semibold tracking-widest uppercase"
          style={{ color: anomalyIdx !== undefined ? "oklch(60% 0.20 25)" : "oklch(65% 0.18 148)" }}
        >
          {label}
        </span>
      </div>
      <div className="px-3 pb-2 pt-3">
        <div className="flex items-end gap-px h-16">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1"
              style={{
                height: `${(h / max) * 60}px`,
                minHeight: 2,
                backgroundColor:
                  anomalyIdx !== undefined && i === anomalyIdx
                    ? "oklch(60% 0.20 25)"
                    : i === anomalyIdx! - 1 || i === anomalyIdx! + 1
                    ? "oklch(56% 0.18 45)"
                    : "oklch(42% 0.13 240)",
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[8px]" style={{ color: "oklch(40% 0.01 240)" }}>
            {VIBE_FREQS[0]} Hz
          </span>
          <span className="text-[8px]" style={{ color: "oklch(40% 0.01 240)" }}>
            {VIBE_FREQS[VIBE_FREQS.length - 1]} Hz
          </span>
        </div>
      </div>
      {anomalyIdx !== undefined && (
        <div
          className="px-3 py-1.5 border-t text-[9px]"
          style={{ borderColor: "oklch(25% 0.07 240)", color: "oklch(60% 0.20 25)" }}
        >
          Pic à 225 Hz — fréquence de passage roulement
        </div>
      )}
    </div>
  );
}

function VibrationChart() {
  const normalBars  = [14, 9, 5, 4, 7, 3, 4, 2, 2, 3, 1, 2];
  const anomalyBars = [14, 9, 5, 4, 7, 3, 4, 2, 42, 18, 6, 3];

  return (
    <div className="flex gap-3">
      <VibrationPanel bars={normalBars} label="État nominal" />
      <VibrationPanel bars={anomalyBars} label="Anomalie détectée" anomalyIdx={8} />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MaintenancePreventivePage() {
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
          className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
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

              {/* Diagram — left on desktop, below on mobile */}
              <AnimateIn variant="fadeUp" delay={100} className="order-last lg:order-first">
                <MachineDiagram />
              </AnimateIn>

              {/* Content — right on desktop, first on mobile */}
              <div className="order-first lg:order-last">
                <AnimateIn variant="fadeUp" delay={0}>
                  <p
                    className="text-xs font-semibold tracking-[0.2em] uppercase mb-8"
                    style={{ color: "oklch(55% 0.13 240)" }}
                  >
                    Maintenance préventive &amp; prédictive
                  </p>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={80}>
                  <h1
                    className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-[1.06] mb-7"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.03em",
                      color: "oklch(97% 0.005 240)",
                    }}
                  >
                    Audit et maintenance
                    <br />
                    conditionnelle de vos
                    <br />
                    <span style={{ color: "oklch(55% 0.13 240)" }}>machines-outils.</span>
                  </h1>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={160}>
                  <p
                    className="text-base leading-relaxed mb-10 max-w-lg font-light"
                    style={{ color: "oklch(66% 0.014 240)", lineHeight: "1.75" }}
                  >
                    La panne imprévue coûte 6 à 10 fois plus cher qu&apos;une maintenance
                    planifiée. Nous cartographions votre parc, établissons le plan
                    d&apos;entretien prioritaire et instrumentons vos machines critiques —
                    pour que l&apos;arrêt suivant soit prévu, pas subi.
                  </p>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={230}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#audit-site"
                      className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 transition-colors duration-150"
                      style={{
                        backgroundColor: "oklch(97% 0.005 240)",
                        color: "oklch(18% 0.06 240)",
                      }}
                    >
                      Réserver un audit sur site
                      <ArrowRight size={16} />
                    </a>
                    <a
                      href="#methodologie"
                      className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 transition-colors duration-150"
                      style={{
                        color: "oklch(80% 0.012 240)",
                        border: "1px solid oklch(36% 0.08 240)",
                      }}
                    >
                      Notre méthodologie
                    </a>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>

        {/* ── MÉTHODOLOGIE — timeline verticale ────────────────────────────────── */}
        <section
          id="methodologie"
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(16% 0.058 240)" }}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <AnimateIn variant="fadeUp">
              <h2
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-space, system-ui, sans-serif)",
                  letterSpacing: "-0.025em",
                  color: "oklch(95% 0.007 240)",
                }}
              >
                Notre méthodologie en quatre phases
              </h2>
              <p
                className="text-base mb-16 max-w-xl"
                style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
              >
                Chaque mission démarre par un diagnostic terrain. Tout ce qui suit
                découle de ce que nous trouvons — pas d&apos;un catalogue standard.
              </p>
            </AnimateIn>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical connector */}
              <div
                className="absolute left-[19px] top-6 bottom-6 w-px"
                style={{ backgroundColor: "oklch(28% 0.075 240)" }}
              />

              <div className="space-y-0">
                {[
                  {
                    num: "01",
                    icon: MapPin,
                    title: "Visite d'évaluation sur site",
                    body: "Une demi-journée avec votre responsable maintenance. Machine par machine, nous relevons l'état des broches, des servomoteurs, des systèmes de refroidissement et des capteurs. Chaque point est photographié, coté et tracé dans un rapport structuré.",
                    deliverable: "Rapport d'état photographique + scoring machine",
                    delay: 0,
                  },
                  {
                    num: "02",
                    icon: ClipboardList,
                    title: "Plan d'entretien sur-mesure et AMDEC",
                    body: "Nous appliquons la méthode AMDEC (Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité) à votre parc. Les défaillances sont classées par Indice de Priorité de Risque : gravité × occurrence × détectabilité. Le plan d'entretien est ordonné par impact TRS.",
                    deliverable: "Calendrier de maintenance annuel + matrice de criticité",
                    delay: 60,
                  },
                  {
                    num: "03",
                    icon: Package,
                    title: "Gestion des pièces de rechange critiques",
                    body: "Nous identifions les pièces dont la rupture de stock entraîne un arrêt immédiat (roulements de broche, cartes d'axe, capteurs). Puis nous établissons un niveau de stock minimum et une liste de fournisseurs alternatifs homologués pour les pièces obsolètes.",
                    deliverable: "Nomenclature pièces critiques + stock minimum recommandé",
                    delay: 120,
                  },
                  {
                    num: "04",
                    icon: Waves,
                    title: "Capteurs IoT et analyse vibratoire",
                    body: "Sur les machines prioritaires, nous installons des capteurs d'accélérométrie et de température. Les mesures sont transmises en temps réel vers votre dashboard Power BI. L'analyse fréquentielle détecte le début de dégradation des roulements avant toute manifestation sonore.",
                    deliverable: "Rapport de spectre vibratoire + seuils d'alerte configurés",
                    delay: 180,
                  },
                ].map(({ num, icon: Icon, title, body, deliverable, delay }) => (
                  <AnimateIn key={num} variant="fadeUp" delay={delay}>
                    <div className="relative flex gap-8 pb-14 last:pb-0">
                      {/* Step number + icon */}
                      <div className="relative z-10 flex flex-col items-center gap-2 shrink-0">
                        <div
                          className="flex items-center justify-center w-10 h-10"
                          style={{ backgroundColor: "oklch(22% 0.08 240)", border: "1px solid oklch(36% 0.09 240)" }}
                        >
                          <Icon size={16} style={{ color: "oklch(55% 0.13 240)" }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-1.5 flex-1">
                        <div className="flex items-baseline gap-3 mb-3">
                          <span
                            className="text-3xl font-bold leading-none"
                            style={{
                              fontFamily: "var(--font-space, system-ui, sans-serif)",
                              color: "oklch(28% 0.082 240)",
                            }}
                          >
                            {num}
                          </span>
                          <h2
                            className="text-lg font-bold leading-snug"
                            style={{
                              fontFamily: "var(--font-space, system-ui, sans-serif)",
                              color: "oklch(92% 0.010 240)",
                            }}
                          >
                            {title}
                          </h2>
                        </div>
                        <p
                          className="text-sm mb-4"
                          style={{ color: "oklch(60% 0.012 240)", lineHeight: "1.8" }}
                        >
                          {body}
                        </p>
                        <div
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold"
                          style={{
                            backgroundColor: "oklch(20% 0.075 240)",
                            border: "1px solid oklch(32% 0.085 240)",
                            color: "oklch(72% 0.013 240)",
                          }}
                        >
                          <CheckCircle2 size={12} style={{ color: "oklch(55% 0.13 240)" }} />
                          {deliverable}
                        </div>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── AMDEC — matrice risque ────────────────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(14% 0.052 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

              {/* Matrix */}
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
                    <ScanLine size={13} />
                    Matrice AMDEC
                  </div>
                  <RiskMatrix />
                  <p
                    className="mt-4 text-xs"
                    style={{ color: "oklch(44% 0.010 240)" }}
                  >
                    Chaque mode de défaillance est positionné sur la matrice à partir
                    des historiques GMAO et de l&apos;expertise terrain.
                  </p>
                </div>
              </AnimateIn>

              {/* Explanation */}
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
                    Anticiper les défaillances avant qu&apos;elles coûtent
                  </h2>
                  <p
                    className="text-base mb-8"
                    style={{ color: "oklch(60% 0.013 240)", lineHeight: "1.78" }}
                  >
                    L&apos;AMDEC appliquée à la maintenance transforme votre historique de pannes en
                    une carte de priorités d&apos;action. Les ressources de maintenance ne
                    sont plus dispersées sur l&apos;ensemble du parc : elles sont concentrées
                    sur les défaillances dont l&apos;IPR (Indice de Priorité de Risque) dépasse
                    le seuil de tolérance que vous définissez avec nous.
                  </p>
                  <div className="space-y-0">
                    {[
                      { color: "oklch(40% 0.20 25)", label: "IPR critique (> 200)", desc: "Action corrective immédiate, pièces commandées en urgence" },
                      { color: "oklch(62% 0.20 45)", label: "IPR élevé (100–200)",  desc: "Planification dans les 30 jours, stock de sécurité recommandé" },
                      { color: "oklch(68% 0.17 80)", label: "IPR modéré (40–100)",  desc: "Inclus dans le plan de maintenance trimestriel" },
                      { color: "oklch(62% 0.18 148)", label: "IPR acceptable (< 40)", desc: "Surveillance de routine, mesures vibratoires annuelles" },
                    ].map(({ color, label, desc }) => (
                      <div
                        key={label}
                        className="flex items-start gap-4 py-4 border-b"
                        style={{ borderColor: "oklch(24% 0.065 240)" }}
                      >
                        <span
                          className="w-3 h-3 shrink-0 mt-0.5"
                          style={{ backgroundColor: color, opacity: 0.9 }}
                        />
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "oklch(86% 0.010 240)" }}>
                            {label}
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: "oklch(52% 0.011 240)" }}>
                            {desc}
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

        {/* ── PIÈCES DE RECHANGE ────────────────────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(17% 0.062 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimateIn variant="fadeUp">
              <h2
                className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight mb-4 max-w-2xl"
                style={{
                  fontFamily: "var(--font-space, system-ui, sans-serif)",
                  letterSpacing: "-0.025em",
                  color: "oklch(95% 0.007 240)",
                }}
              >
                Pièces de rechange critiques sous contrôle
              </h2>
              <p
                className="text-base mb-12 max-w-xl"
                style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
              >
                50 % des délais de remise en service sont causés par l&apos;absence de la
                pièce juste. Nous établissons la nomenclature de criticité de votre
                parc et identifions vos points de rupture.
              </p>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={60}>
              <div
                className="overflow-hidden border"
                style={{ borderColor: "oklch(28% 0.075 240)" }}
              >
                {/* Table header */}
                <div
                  className="grid grid-cols-[1fr_1fr_auto_auto] gap-px px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]"
                  style={{
                    backgroundColor: "oklch(20% 0.07 240)",
                    color: "oklch(48% 0.012 240)",
                    borderBottom: "1px solid oklch(28% 0.075 240)",
                  }}
                >
                  <span>Composant</span>
                  <span>Application</span>
                  <span className="text-center">Délai approvisionnement</span>
                  <span className="text-center">Criticité</span>
                </div>

                {/* Rows */}
                {[
                  { part: "Roulement de broche",       app: "Centres d'usinage toutes marques", delay: "3–8 semaines",   level: "Critique"   },
                  { part: "Codeur / resolver axe",      app: "Siemens, FANUC, Heidenhain",        delay: "4–12 semaines",  level: "Critique"   },
                  { part: "Carte d'entraînement axe",  app: "Servomoteurs Siemens 840D/i",        delay: "6–16 semaines",  level: "Critique"   },
                  { part: "Pompe arrosage haute pression", app: "Tours et centres CN",            delay: "1–3 semaines",   level: "Important"  },
                  { part: "Filtre à huile hydraulique", app: "Machines à commande hydraulique",   delay: "< 1 semaine",    level: "Standard"   },
                  { part: "Courroie de transmission",   app: "Broches à entraînement indirect",   delay: "< 1 semaine",    level: "Standard"   },
                ].map(({ part, app, delay, level }, i) => {
                  const levelColor =
                    level === "Critique"  ? "oklch(60% 0.20 25)"  :
                    level === "Important" ? "oklch(68% 0.17 80)"  :
                                           "oklch(62% 0.18 148)";
                  return (
                    <div
                      key={part}
                      className="grid grid-cols-[1fr_1fr_auto_auto] gap-px items-center px-5 py-4 border-b last:border-b-0"
                      style={{
                        borderColor: "oklch(24% 0.068 240)",
                        backgroundColor: i % 2 === 0 ? "oklch(16% 0.058 240)" : "oklch(14% 0.052 240)",
                      }}
                    >
                      <span className="text-sm font-semibold" style={{ color: "oklch(88% 0.010 240)" }}>
                        {part}
                      </span>
                      <span className="text-xs" style={{ color: "oklch(56% 0.012 240)" }}>
                        {app}
                      </span>
                      <span className="text-xs text-center" style={{ color: "oklch(62% 0.012 240)" }}>
                        {delay}
                      </span>
                      <span
                        className="text-[10px] font-bold text-center px-2 py-0.5"
                        style={{ color: levelColor, border: `1px solid ${levelColor}`, opacity: 0.95 }}
                      >
                        {level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={120}>
              <p className="mt-5 text-xs" style={{ color: "oklch(40% 0.010 240)" }}>
                Cette liste est personnalisée lors de l&apos;audit sur site en fonction de vos équipements réels et de vos fournisseurs actuels.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── CAPTEURS IoT + VIBRATOIRE ─────────────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(14% 0.052 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

              {/* Text */}
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
                    Capteurs IoT et analyse vibratoire
                  </h2>
                  <p
                    className="text-base mb-8"
                    style={{ color: "oklch(60% 0.013 240)", lineHeight: "1.78" }}
                  >
                    Un roulement de broche ne tombe pas sans prévenir : il dégrades
                    sur plusieurs semaines. L&apos;analyse vibratoire détecte les premières
                    anomalies spectrales 3 à 8 semaines avant la défaillance mécanique
                    visible — soit une fenêtre d&apos;intervention planifiable.
                  </p>

                  <div className="space-y-0">
                    {[
                      { icon: Waves,        label: "Accélérométrie 3 axes",     desc: "Roulements, déséquilibres, désalignements détectés < 1 g" },
                      { icon: AlertTriangle, label: "Température en continu",    desc: "Surchauffe électrique, lubrification insuffisante" },
                      { icon: ScanLine,     label: "Courant moteur",             desc: "Surcharges intermittentes, défauts d'isolant" },
                    ].map(({ icon: Icon, label, desc }, i) => (
                      <div
                        key={label}
                        className="flex items-start gap-4 py-5 border-b"
                        style={{ borderColor: "oklch(24% 0.065 240)" }}
                      >
                        <AnimateIn variant="fadeRight" delay={i * 70}>
                          <div
                            className="flex items-center justify-center w-9 h-9 shrink-0"
                            style={{ backgroundColor: "oklch(22% 0.08 240)", border: "1px solid oklch(34% 0.09 240)" }}
                          >
                            <Icon size={16} style={{ color: "oklch(55% 0.13 240)" }} />
                          </div>
                        </AnimateIn>
                        <div className="pt-1">
                          <p className="text-sm font-semibold mb-0.5" style={{ color: "oklch(88% 0.010 240)" }}>
                            {label}
                          </p>
                          <p className="text-sm" style={{ color: "oklch(54% 0.012 240)" }}>
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Vibration chart + explainer */}
              <AnimateIn variant="fadeUp" delay={80}>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.16em] mb-4"
                    style={{ color: "oklch(50% 0.012 240)" }}
                  >
                    Analyse fréquentielle — broche centre d&apos;usinage
                  </p>
                  <VibrationChart />
                  <div
                    className="mt-4 p-4 border"
                    style={{
                      borderColor: "oklch(52% 0.20 25)",
                      backgroundColor: "oklch(16% 0.058 240)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle
                        size={16}
                        className="shrink-0 mt-0.5"
                        style={{ color: "oklch(60% 0.20 25)" }}
                      />
                      <div>
                        <p
                          className="text-sm font-semibold mb-1"
                          style={{ color: "oklch(82% 0.012 240)" }}
                        >
                          Interprétation : défaut de cage de roulement
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "oklch(56% 0.012 240)", lineHeight: "1.7" }}
                        >
                          Le pic à 225 Hz correspond à 4,2× la fréquence de rotation
                          broche — signature caractéristique d&apos;un défaut de cage.
                          Intervention recommandée sous 3 semaines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── CTA — réserver audit site ─────────────────────────────────────────── */}
        <section
          id="audit-site"
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(10% 0.040 240)" }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">

              {/* Left — headline + what to expect */}
              <AnimateIn variant="fadeUp">
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
                    style={{ color: "oklch(52% 0.21 25)" }}
                  >
                    Sans engagement — sous 48h
                  </p>
                  <h2
                    className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-tight mb-6"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.03em",
                      color: "oklch(97% 0.005 240)",
                    }}
                  >
                    Réservez votre audit technique sur site
                  </h2>
                  <p
                    className="text-base mb-10 max-w-lg"
                    style={{ color: "oklch(60% 0.013 240)", lineHeight: "1.78" }}
                  >
                    Une demi-journée chez vous. Nous repartons avec la cartographie
                    complète de votre parc, le scoring machine et les 3 actions
                    prioritaires à engager dans les 30 prochains jours.
                  </p>

                  {/* Steps */}
                  <div className="space-y-0">
                    {[
                      { step: "1", label: "Vous nous contactez",      desc: "Réponse sous 48h, prise de rendez-vous selon vos disponibilités." },
                      { step: "2", label: "Visite terrain",            desc: "Inspection de votre parc, mesures et relevés sur place." },
                      { step: "3", label: "Rapport et plan d'action",  desc: "Document remis sous 5 jours ouvrés, présenté à votre direction si souhaité." },
                    ].map(({ step, label, desc }) => (
                      <div
                        key={step}
                        className="flex gap-5 py-5 border-b"
                        style={{ borderColor: "oklch(22% 0.065 240)" }}
                      >
                        <span
                          className="text-4xl font-bold leading-none shrink-0 w-8"
                          style={{
                            fontFamily: "var(--font-space, system-ui, sans-serif)",
                            color: "oklch(24% 0.072 240)",
                          }}
                        >
                          {step}
                        </span>
                        <div className="pt-1">
                          <p
                            className="text-sm font-bold mb-1"
                            style={{ color: "oklch(88% 0.010 240)" }}
                          >
                            {label}
                          </p>
                          <p className="text-sm" style={{ color: "oklch(54% 0.012 240)" }}>
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Right — CTA block */}
              <AnimateIn variant="fadeUp" delay={100} className="lg:sticky lg:top-24">
                <div
                  className="border p-8 min-w-[280px]"
                  style={{
                    borderColor: "oklch(28% 0.075 240)",
                    backgroundColor: "oklch(15% 0.055 240)",
                  }}
                >
                  <Calendar size={22} className="mb-5" style={{ color: "oklch(55% 0.13 240)" }} />
                  <p
                    className="text-base font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      color: "oklch(95% 0.007 240)",
                    }}
                  >
                    Audit terrain gratuit
                  </p>
                  <p className="text-sm mb-6" style={{ color: "oklch(56% 0.012 240)" }}>
                    Région lyonnaise — intervention possible sous 5 à 10 jours ouvrés.
                  </p>

                  <a
                    href="mailto:contact@unitek-automation.fr?subject=Demande%20d%27audit%20maintenance%20préventive%20CNC"
                    className="flex items-center justify-center gap-2 font-bold text-sm w-full py-4 mb-4 transition-colors duration-150"
                    style={{
                      backgroundColor: "oklch(52% 0.21 25)",
                      color: "white",
                    }}
                  >
                    Demander l&apos;audit
                    <ArrowRight size={16} />
                  </a>

                  <div
                    className="pt-4 border-t space-y-2"
                    style={{ borderColor: "oklch(24% 0.068 240)" }}
                  >
                    {[
                      "Cartographie parc incluse",
                      "Rapport écrit remis sous 5j",
                      "Aucun engagement contractuel",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={13} style={{ color: "oklch(55% 0.13 240)" }} />
                        <span className="text-xs" style={{ color: "oklch(60% 0.012 240)" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
