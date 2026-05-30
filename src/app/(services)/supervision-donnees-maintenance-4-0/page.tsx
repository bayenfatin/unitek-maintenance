import type { Metadata } from "next";
import {
  ArrowRight,
  Database,
  BarChart3,
  TrendingDown,
  Cpu,
  CheckCircle2,
  Activity,
  GitMerge,
  Shield,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Supervision 4.0 & Tableaux de bord Power BI Maintenance | Unitek",
  description:
    "Connectez votre GMAO et vos automates pour fiabiliser votre production. Méthodologie AMDEC et réduction du MTTR.",
  openGraph: {
    title: "Supervision 4.0 & Tableaux de bord Power BI Maintenance | Unitek",
    description:
      "Connectez votre GMAO et vos automates pour fiabiliser votre production. Méthodologie AMDEC et réduction du MTTR.",
    type: "website",
    siteName: "Unitek Automation",
  },
};

// ─── JSON-LD Service ──────────────────────────────────────────────────────────

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Supervision 4.0 & Tableaux de bord Power BI Maintenance",
  description:
    "Connectez votre GMAO et vos automates pour fiabiliser votre production. Méthodologie AMDEC et réduction du MTTR.",
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
  serviceType: "Supervision industrielle 4.0 — Power BI — AMDEC",
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
    description: "Audit gratuit de votre parc machine",
    eligibleCustomerType: "http://purl.org/goodrelations/v1#Business",
  },
};

// ─── Hero monitoring visualization ───────────────────────────────────────────

function MonitoringViz() {
  const channels: Array<{ label: string; path: string; color: string }> = [
    {
      label: "BROCHE A",
      path: "M0,18 L20,16 L38,22 L52,8 L68,18 L84,15 L100,20 L116,10 L130,18 L148,14 L164,22 L180,9 L196,17 L212,15 L228,20 L244,12 L260,18 L270,17",
      color: "oklch(55% 0.13 240)",
    },
    {
      label: "VITESSE AXE X",
      path: "M0,18 L18,20 L36,14 L54,22 L66,16 L82,10 L96,20 L112,15 L128,22 L144,12 L162,18 L178,20 L196,10 L212,18 L228,14 L248,20 L266,16 L270,18",
      color: "oklch(65% 0.18 148)",
    },
    {
      label: "TEMPÉRATURE",
      path: "M0,16 L24,17 L44,18 L60,19 L76,20 L92,21 L108,20 L124,19 L140,21 L156,22 L172,21 L188,20 L204,21 L220,22 L236,21 L252,20 L268,19 L270,18",
      color: "oklch(68% 0.15 50)",
    },
  ];

  return (
    <div
      className="relative w-full border overflow-hidden"
      style={{
        backgroundColor: "oklch(14% 0.055 240)",
        borderColor: "oklch(32% 0.08 240)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ borderColor: "oklch(26% 0.07 240)", backgroundColor: "oklch(18% 0.06 240)" }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: "oklch(65% 0.18 148)",
              boxShadow: "0 0 6px oklch(65% 0.18 148)",
            }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "oklch(82% 0.012 240)" }}
          >
            SUPERVISION TEMPS RÉEL
          </span>
        </div>
        <span
          className="text-xs font-mono"
          style={{ color: "oklch(65% 0.18 148)" }}
        >
          ● LIVE
        </span>
      </div>

      {/* Signal channels */}
      <div className="divide-y" style={{ borderColor: "oklch(24% 0.065 240)" }}>
        {channels.map(({ label, path, color }) => (
          <div key={label} className="flex items-center gap-3 px-4 py-2">
            <span
              className="text-[10px] font-semibold tracking-[0.12em] uppercase w-24 shrink-0"
              style={{ color: "oklch(52% 0.015 240)" }}
            >
              {label}
            </span>
            <svg
              viewBox="0 0 270 30"
              className="flex-1 h-7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={path} stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
        ))}
      </div>

      {/* Time axis */}
      <div
        className="flex justify-between px-4 py-2 text-[10px] border-t"
        style={{
          borderColor: "oklch(26% 0.07 240)",
          color: "oklch(40% 0.01 240)",
          backgroundColor: "oklch(16% 0.055 240)",
        }}
      >
        <span>08:00</span>
        <span>08:15</span>
        <span>08:30</span>
        <span>08:45</span>
        <span>09:00</span>
      </div>

      {/* Scan line overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, oklch(100% 0 0 / 0.012) 3px, oklch(100% 0 0 / 0.012) 4px)",
        }}
      />
    </div>
  );
}

// ─── Pipeline architecture SVG ────────────────────────────────────────────────

function PipelineArch() {
  const sources = [
    { y: 36, label: "SCADA / OPC-UA", sub: "Automates" },
    { y: 96, label: "GMAO Carl Source", sub: "Bons de travail" },
    { y: 156, label: "PLC Siemens / Schneider", sub: "Capteurs terrain" },
    { y: 216, label: "Excel / ERP / CSV", sub: "Historiques" },
  ];

  return (
    <svg
      viewBox="0 0 460 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      role="img"
      aria-label="Architecture d'intégration : sources de données vers Power BI"
    >
      <defs>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="oklch(35% 0.06 240)" />
        </pattern>
        <marker id="arrowBlue" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="oklch(50% 0.13 240)" />
        </marker>
      </defs>

      {/* BG */}
      <rect width="460" height="290" fill="oklch(16% 0.06 240)" />
      <rect width="460" height="290" fill="url(#dots)" />

      {/* Source nodes */}
      {sources.map(({ y, label, sub }) => (
        <g key={label}>
          <rect
            x="10"
            y={y}
            width="150"
            height="44"
            fill="oklch(24% 0.08 240)"
            stroke="oklch(36% 0.09 240)"
            strokeWidth="1"
          />
          <text
            x="18"
            y={y + 17}
            fontSize="9.5"
            fill="oklch(88% 0.012 240)"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
            letterSpacing="0.03em"
          >
            {label}
          </text>
          <text
            x="18"
            y={y + 32}
            fontSize="8"
            fill="oklch(52% 0.012 240)"
            fontFamily="system-ui, sans-serif"
          >
            {sub}
          </text>
          {/* Wire to hub */}
          <line
            x1="160"
            y1={y + 22}
            x2="248"
            y2="152"
            stroke="oklch(40% 0.10 240)"
            strokeWidth="1"
            strokeDasharray="5 4"
          />
          <circle cx="160" cy={y + 22} r="3" fill="oklch(50% 0.13 240)" />
        </g>
      ))}

      {/* Hub */}
      <rect
        x="252"
        y="110"
        width="120"
        height="84"
        fill="oklch(35% 0.12 240)"
        stroke="oklch(52% 0.14 240)"
        strokeWidth="1.5"
      />
      <text
        x="312"
        y="144"
        fontSize="10"
        fill="white"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        textAnchor="middle"
        letterSpacing="0.08em"
      >
        COUCHE
      </text>
      <text
        x="312"
        y="158"
        fontSize="10"
        fill="white"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        textAnchor="middle"
        letterSpacing="0.08em"
      >
        UNITEK
      </text>
      <text
        x="312"
        y="181"
        fontSize="7.5"
        fill="oklch(78% 0.025 240)"
        fontFamily="system-ui, sans-serif"
        textAnchor="middle"
      >
        Normalisation · Temps réel
      </text>

      {/* Hub → Power BI arrow */}
      <line
        x1="372"
        y1="152"
        x2="400"
        y2="152"
        stroke="oklch(55% 0.14 240)"
        strokeWidth="2"
        markerEnd="url(#arrowBlue)"
      />

      {/* Power BI node */}
      <rect
        x="406"
        y="112"
        width="46"
        height="80"
        fill="oklch(42% 0.16 240)"
        stroke="oklch(55% 0.14 240)"
        strokeWidth="1.5"
      />
      <text
        x="429"
        y="147"
        fontSize="8.5"
        fill="white"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        textAnchor="middle"
      >
        Power
      </text>
      <text
        x="429"
        y="160"
        fontSize="8.5"
        fill="white"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        textAnchor="middle"
      >
        BI
      </text>
      <text
        x="429"
        y="181"
        fontSize="6.5"
        fill="oklch(82% 0.025 240)"
        fontFamily="system-ui, sans-serif"
        textAnchor="middle"
      >
        Dashboard
      </text>

      {/* Live badge */}
      <circle cx="444" cy="100" r="5" fill="oklch(65% 0.18 148)" />
      <circle cx="444" cy="100" r="8" fill="none" stroke="oklch(65% 0.18 148)" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

// ─── Dashboard mockup ─────────────────────────────────────────────────────────

function DashboardMockup() {
  const bars = [62, 78, 85, 71, 91, 83, 76];
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <div
      className="w-full border overflow-hidden"
      style={{
        backgroundColor: "oklch(15% 0.055 240)",
        borderColor: "oklch(30% 0.08 240)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{
          backgroundColor: "oklch(20% 0.07 240)",
          borderColor: "oklch(28% 0.075 240)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: "oklch(65% 0.18 148)",
              boxShadow: "0 0 6px oklch(65% 0.18 148)",
            }}
          />
          <span
            className="text-xs font-semibold tracking-wide"
            style={{ color: "oklch(82% 0.012 240)" }}
          >
            TRS hebdomadaire — Ligne A
          </span>
        </div>
        <span className="text-[10px]" style={{ color: "oklch(48% 0.012 240)" }}>
          Actualisé il y a 4 min
        </span>
      </div>

      {/* KPIs */}
      <div
        className="grid grid-cols-3 divide-x border-b"
        style={{
          borderColor: "oklch(28% 0.075 240)",
          borderBottomColor: "oklch(28% 0.075 240)",
        }}
      >
        {[
          { label: "TRS", value: "83.4 %", delta: "+4.2 pts", positive: true },
          { label: "MTTR", value: "47 min", delta: "−12 min", positive: true },
          { label: "Disponibilité", value: "91.7 %", delta: "+2.1 pts", positive: true },
        ].map(({ label, value, delta, positive }) => (
          <div
            key={label}
            className="px-4 py-3"
            style={{ borderColor: "oklch(28% 0.075 240)" }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.14em] font-semibold mb-1"
              style={{ color: "oklch(50% 0.012 240)" }}
            >
              {label}
            </p>
            <p className="text-white font-bold text-base leading-none mb-1">{value}</p>
            <p
              className="text-[10px] font-semibold"
              style={{
                color: positive ? "oklch(65% 0.18 148)" : "oklch(60% 0.2 25)",
              }}
            >
              {delta}
            </p>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="px-4 pt-3 pb-1">
        <p
          className="text-[10px] uppercase tracking-[0.14em] font-semibold mb-3"
          style={{ color: "oklch(50% 0.012 240)" }}
        >
          TRS quotidien (%)
        </p>
        <div className="flex items-end gap-1.5 h-14">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full"
                style={{
                  height: `${(h / 100) * 52}px`,
                  backgroundColor: h >= 85 ? "oklch(55% 0.14 240)" : "oklch(40% 0.11 240)",
                  minHeight: 3,
                }}
              />
              <span className="text-[9px]" style={{ color: "oklch(44% 0.012 240)" }}>
                {days[i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Alerts */}
      <div
        className="border-t px-4 py-2.5"
        style={{ borderColor: "oklch(28% 0.075 240)" }}
      >
        <p
          className="text-[10px] uppercase tracking-[0.14em] font-semibold mb-2"
          style={{ color: "oklch(50% 0.012 240)" }}
        >
          Alertes récentes
        </p>
        {[
          { time: "08:14", msg: "Broche Mori Seiki — vibration anormale", critical: false },
          { time: "06:50", msg: "OEE sous seuil critique — Centre usinage #3", critical: true },
        ].map(({ time, msg, critical }) => (
          <div key={time} className="flex items-start gap-2 py-0.5">
            <span
              className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                backgroundColor: critical ? "oklch(60% 0.2 25)" : "oklch(70% 0.15 80)",
              }}
            />
            <span
              className="text-[10px] w-9 shrink-0 font-mono"
              style={{ color: "oklch(44% 0.012 240)" }}
            >
              {time}
            </span>
            <span
              className="text-[10px] leading-relaxed"
              style={{ color: "oklch(76% 0.012 240)" }}
            >
              {msg}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SupervisionPage() {
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
          {/* Horizontal scan lines overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 4px, oklch(100% 0 0 / 0.01) 4px, oklch(100% 0 0 / 0.01) 5px)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

              {/* Left: content */}
              <div>
                <AnimateIn variant="fadeUp" delay={0}>
                  <p
                    className="text-xs font-semibold tracking-[0.2em] uppercase mb-8"
                    style={{ color: "oklch(55% 0.13 240)" }}
                  >
                    Supervision &amp; Data 4.0
                  </p>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={80}>
                  <h1
                    className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.04] mb-7"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.03em",
                      color: "oklch(97% 0.005 240)",
                    }}
                  >
                    Pilotez votre production
                    <br />
                    par la donnée.
                    <br />
                    <span style={{ color: "oklch(55% 0.13 240)" }}>Pas par intuition.</span>
                  </h1>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={160}>
                  <p
                    className="text-lg leading-relaxed mb-10 max-w-xl font-light"
                    style={{ color: "oklch(68% 0.015 240)", lineHeight: "1.7" }}
                  >
                    Vos SCADA, GMAO et automates parlent chacun leur langue. Nous
                    unifions ces silos en une visibilité temps réel sur votre TRS,
                    votre MTTR et vos causes racines — pour que chaque décision
                    repose sur un fait, pas une estimation.
                  </p>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={240}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#audit"
                      className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 transition-colors duration-150"
                      style={{
                        backgroundColor: "oklch(97% 0.005 240)",
                        color: "oklch(18% 0.06 240)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(92% 0.01 240)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(97% 0.005 240)";
                      }}
                    >
                      Demander un audit gratuit
                      <ArrowRight size={16} />
                    </a>
                    <a
                      href="#integration"
                      className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 transition-colors duration-150"
                      style={{
                        color: "oklch(82% 0.012 240)",
                        border: "1px solid oklch(38% 0.08 240)",
                      }}
                    >
                      Voir la méthodologie
                    </a>
                  </div>
                </AnimateIn>
              </div>

              {/* Right: monitoring display */}
              <AnimateIn variant="fadeLeft" delay={200} className="hidden lg:block">
                <MonitoringViz />
              </AnimateIn>
            </div>
          </div>

          {/* Stat strip */}
          <div
            className="relative z-10 border-t"
            style={{ borderColor: "oklch(25% 0.07 240)", backgroundColor: "oklch(17% 0.06 240)" }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div
                className="grid grid-cols-2 lg:grid-cols-4 divide-x"
                style={{ borderColor: "oklch(28% 0.07 240)" }}
              >
                {[
                  { value: "4 sources", label: "unifiées en un dashboard", delay: 280 },
                  { value: "−30 %", label: "de MTTR observé en moyenne", delay: 340 },
                  { value: "Temps réel", label: "données actualisées < 5 min", delay: 400 },
                  { value: "AMDEC", label: "priorité aux défauts critiques", delay: 460 },
                ].map(({ value, label, delay }) => (
                  <AnimateIn key={value} variant="fadeUp" delay={delay}>
                    <div className="px-6 py-5">
                      <p
                        className="font-bold text-base lg:text-lg leading-tight"
                        style={{ color: "oklch(92% 0.01 240)" }}
                      >
                        {value}
                      </p>
                      <p
                        className="text-xs mt-1 leading-snug"
                        style={{ color: "oklch(52% 0.012 240)" }}
                      >
                        {label}
                      </p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PAIN RECOGNITION ─────────────────────────────────────────────────── */}
        <section
          style={{ backgroundColor: "oklch(16% 0.058 240)" }}
          className="py-16 lg:py-20"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimateIn variant="fadeUp">
              <p
                className="text-sm font-medium mb-10 max-w-2xl"
                style={{ color: "oklch(58% 0.015 240)" }}
              >
                Les directeurs d&apos;usine que nous rencontrons décrivent souvent les mêmes trois blocages :
              </p>
            </AnimateIn>
            <div
              className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
              style={{ borderColor: "oklch(28% 0.07 240)" }}
            >
              {[
                {
                  num: "01",
                  title: "Le TRS est une intuition",
                  body: "Chaque service a son fichier. Production calcule 78 %, maintenance voit 65 %, la direction cite 82 %. Personne ne ment — les sources diffèrent.",
                  icon: BarChart3,
                  delay: 0,
                },
                {
                  num: "02",
                  title: "GMAO et SCADA ne se parlent pas",
                  body: "L'automate enregistre l'arrêt. La GMAO enregistre l'intervention. Les deux logs ne sont jamais rapprochés, donc la cause racine reste inconnue.",
                  icon: Database,
                  delay: 80,
                },
                {
                  num: "03",
                  title: "La panne coûte sans qu'on comprenne pourquoi",
                  body: "Après l'urgence, l'analyse est escamotée. La même machine tombe à nouveau 6 semaines plus tard. Le coût est doublé, la confiance est entamée.",
                  icon: TrendingDown,
                  delay: 160,
                },
              ].map(({ num, title, body, icon: Icon, delay }) => (
                <AnimateIn key={num} variant="fadeUp" delay={delay}>
                  <div className="px-0 md:px-8 py-8 md:py-0 first:pl-0 last:pr-0">
                    <p
                      className="text-5xl font-bold mb-5 leading-none"
                      style={{
                        fontFamily: "var(--font-space, system-ui, sans-serif)",
                        color: "oklch(28% 0.075 240)",
                      }}
                    >
                      {num}
                    </p>
                    <Icon size={20} className="mb-4" style={{ color: "oklch(52% 0.13 240)" }} />
                    <h2
                      className="text-base font-bold mb-3 leading-snug"
                      style={{
                        fontFamily: "var(--font-space, system-ui, sans-serif)",
                        color: "oklch(90% 0.01 240)",
                      }}
                    >
                      {title}
                    </h2>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.7" }}
                    >
                      {body}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── H2 : INTÉGRATION SOURCES ──────────────────────────────────────────── */}
        <section
          id="integration"
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(14% 0.052 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

              {/* Text */}
              <AnimateIn variant="fadeUp">
                <div>
                  <h2
                    className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-6"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.025em",
                      color: "oklch(95% 0.007 240)",
                    }}
                  >
                    Intégration de vos sources hétérogènes
                  </h2>
                  <p
                    className="text-base leading-relaxed mb-8"
                    style={{ color: "oklch(62% 0.013 240)", lineHeight: "1.75" }}
                  >
                    Vos équipements industriels génèrent chacun un flux de données dans
                    un protocole différent. SCADA Wonderware, GMAO Carl Source,
                    automates Siemens S7 ou Schneider Modicon, exports Excel du service
                    méthodes : nous connectons chaque source via des adaptateurs
                    natifs — sans développement sur mesure, sans interruption de
                    production.
                  </p>

                  <div className="space-y-0">
                    {[
                      { icon: Cpu, label: "SCADA &amp; OPC-UA", desc: "Wonderware, Ignition, Simatic WinCC" },
                      { icon: Database, label: "GMAO", desc: "Carl Source, Maximo, SAP PM" },
                      { icon: Activity, label: "Automates &amp; capteurs", desc: "Siemens S7, Schneider Modicon, Beckhoff" },
                      { icon: GitMerge, label: "Fichiers plats &amp; ERP", desc: "Excel, CSV, SAP, Sage, Divalto" },
                    ].map(({ icon: Icon, label, desc }, i) => (
                      <div
                        key={label}
                        className="flex items-start gap-4 py-5 border-b"
                        style={{ borderColor: "oklch(25% 0.065 240)" }}
                      >
                        <AnimateIn variant="fadeRight" delay={i * 60}>
                          <div
                            className="flex items-center justify-center w-9 h-9 shrink-0 mt-0.5"
                            style={{ backgroundColor: "oklch(24% 0.09 240)" }}
                          >
                            <Icon size={17} style={{ color: "oklch(55% 0.13 240)" }} />
                          </div>
                        </AnimateIn>
                        <div>
                          <p
                            className="text-sm font-semibold mb-0.5"
                            style={{ color: "oklch(88% 0.01 240)" }}
                            dangerouslySetInnerHTML={{ __html: label }}
                          />
                          <p
                            className="text-sm"
                            style={{ color: "oklch(54% 0.012 240)" }}
                          >
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Architecture SVG */}
              <AnimateIn variant="fadeLeft" delay={120}>
                <PipelineArch />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── H3 : TABLEAUX DE BORD POWER BI ───────────────────────────────────── */}
        <section
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(17% 0.062 240)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

              {/* Dashboard mockup */}
              <AnimateIn variant="fadeUp">
                <DashboardMockup />
              </AnimateIn>

              {/* Text */}
              <AnimateIn variant="fadeUp" delay={80}>
                <div>
                  <h3
                    className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight mb-6"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.025em",
                      color: "oklch(95% 0.007 240)",
                    }}
                  >
                    Visualisation experte via des tableaux de bord Power BI interactifs
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-8"
                    style={{ color: "oklch(62% 0.013 240)", lineHeight: "1.75" }}
                  >
                    Chaque dashboard est conçu avec vos équipes de production. Pas un
                    template générique : une architecture de mesures pensée pour vos
                    machines, votre organisation, vos KPI contractuels.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "TRS, MTTR, MTBF, taux de disponibilité par ligne et par équipement",
                      "Décomposition des temps d&apos;arrêt : pannes, changements de série, micro-arrêts",
                      "Alertes push sur seuils critiques configurable par rôle (directeur, chef d&apos;atelier)",
                      "Filtres temporels et drill-down jusqu&apos;à la pièce défaillante",
                      "Export automatique vers vos réunions de production hebdomadaires",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: "oklch(55% 0.13 240)" }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: "oklch(72% 0.013 240)" }}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── H2 : AMÉLIORATION CONTINUE ───────────────────────────────────────── */}
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
                Amélioration continue structurée
              </h2>
              <p
                className="text-base mb-16 max-w-2xl"
                style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
              >
                La visibilité ne suffit pas. Nous accompagnons vos équipes dans la
                transformation des données en décisions : AMDEC pour hiérarchiser les
                risques, méthode des 5 Pourquoi pour éradiquer les causes racines.
              </p>
            </AnimateIn>

            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">

              {/* AMDEC */}
              <AnimateIn variant="fadeUp" delay={0}>
                <div
                  className="border p-8 lg:p-10"
                  style={{ borderColor: "oklch(28% 0.075 240)" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Shield size={20} style={{ color: "oklch(52% 0.13 240)" }} />
                    <span
                      className="text-xs font-semibold tracking-[0.16em] uppercase"
                      style={{ color: "oklch(52% 0.13 240)" }}
                    >
                      Analyse AMDEC
                    </span>
                  </div>
                  <p
                    className="text-base font-bold mb-4"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      color: "oklch(90% 0.01 240)",
                    }}
                  >
                    Prioriser les défauts avant qu&apos;ils coûtent
                  </p>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
                  >
                    Pour chaque mode de défaillance, nous calculons un Indice de
                    Priorité de Risque (Gravité × Occurrence × Détectabilité). Les
                    actions correctives sont ensuite classées par impact sur votre TRS.
                  </p>
                  <div className="space-y-3">
                    {[
                      { letter: "G", label: "Gravité", desc: "Impact sur la production si la panne survient" },
                      { letter: "O", label: "Occurrence", desc: "Fréquence historique issue de votre GMAO" },
                      { letter: "D", label: "Détectabilité", desc: "Capacité à détecter avant la rupture" },
                    ].map(({ letter, label, desc }) => (
                      <div
                        key={letter}
                        className="flex items-start gap-4 pt-3 border-t"
                        style={{ borderColor: "oklch(24% 0.065 240)" }}
                      >
                        <span
                          className="text-xl font-bold w-7 shrink-0 leading-none"
                          style={{
                            fontFamily: "var(--font-space, system-ui, sans-serif)",
                            color: "oklch(42% 0.13 240)",
                          }}
                        >
                          {letter}
                        </span>
                        <div>
                          <p
                            className="text-sm font-semibold"
                            style={{ color: "oklch(82% 0.01 240)" }}
                          >
                            {label}
                          </p>
                          <p className="text-xs" style={{ color: "oklch(52% 0.01 240)" }}>
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* 5 Pourquoi */}
              <AnimateIn variant="fadeUp" delay={100}>
                <div
                  className="border p-8 lg:p-10"
                  style={{ borderColor: "oklch(28% 0.075 240)" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <GitMerge size={20} style={{ color: "oklch(52% 0.13 240)" }} />
                    <span
                      className="text-xs font-semibold tracking-[0.16em] uppercase"
                      style={{ color: "oklch(52% 0.13 240)" }}
                    >
                      Méthode des 5 Pourquoi
                    </span>
                  </div>
                  <p
                    className="text-base font-bold mb-4"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      color: "oklch(90% 0.01 240)",
                    }}
                  >
                    Remonter à la cause, pas traiter le symptôme
                  </p>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
                  >
                    Animés par nos ingénieurs avec vos équipes terrain, ces ateliers
                    structurés transforment un historique de pannes en arbre causal
                    documenté — et en plan d&apos;action traçable dans votre GMAO.
                  </p>
                  <div className="space-y-0">
                    {[
                      "La broche surchauffe",
                      "Le système de refroidissement est sous-dimensionné",
                      "Il a été configuré pour un cycle de 2h, pas 6h",
                      "Le cahier des charges n&apos;a pas été mis à jour après l&apos;allongement des séries",
                      "Aucune revue de paramétrage lors du changement de produit",
                    ].map((why, i) => (
                      <div
                        key={i}
                        className="flex gap-4 py-3 border-b"
                        style={{ borderColor: "oklch(22% 0.065 240)" }}
                      >
                        <span
                          className="text-xs font-semibold shrink-0 w-14 mt-0.5"
                          style={{ color: "oklch(45% 0.13 240)" }}
                        >
                          {i === 0 ? "Fait :" : `Pcq. ${i} :`}
                        </span>
                        <span
                          className="text-sm leading-relaxed"
                          style={{
                            color:
                              i === 4 ? "oklch(80% 0.01 240)" : "oklch(62% 0.012 240)",
                            fontWeight: i === 4 ? 600 : 400,
                          }}
                          dangerouslySetInnerHTML={{ __html: why }}
                        />
                      </div>
                    ))}
                  </div>
                  <p
                    className="mt-4 text-xs font-semibold"
                    style={{ color: "oklch(65% 0.18 148)" }}
                  >
                    Cause racine identifiée → action correctrice dans la GMAO
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── CTA : AUDIT GRATUIT ───────────────────────────────────────────────── */}
        <section
          id="audit"
          className="py-24 lg:py-32"
          style={{ backgroundColor: "oklch(10% 0.04 240)" }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <AnimateIn variant="fadeUp">
              <p
                className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
                style={{ color: "oklch(52% 0.21 25)" }}
              >
                Sans engagement
              </p>

              <h2
                className="text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-space, system-ui, sans-serif)",
                  letterSpacing: "-0.03em",
                  color: "oklch(97% 0.005 240)",
                }}
              >
                Audit gratuit de vos données de parc machine
              </h2>

              <p
                className="text-lg mb-12 max-w-2xl mx-auto"
                style={{ color: "oklch(62% 0.013 240)", lineHeight: "1.75" }}
              >
                En 2 heures avec votre responsable maintenance, nous analysons vos
                sources existantes et vous remettons un rapport de maturité données
                avec les 3 indicateurs prioritaires à mettre en place.
              </p>

              {/* What&apos;s included */}
              <div
                className="grid sm:grid-cols-3 gap-0 mb-12 border text-left"
                style={{ borderColor: "oklch(24% 0.07 240)" }}
              >
                {[
                  {
                    title: "Cartographie des sources",
                    desc: "Inventaire de vos SCADA, GMAO, automates et fichiers existants.",
                  },
                  {
                    title: "Rapport de maturité",
                    desc: "Score de lisibilité de vos données, failles identifiées, potentiel de gains TRS.",
                  },
                  {
                    title: "Plan de déploiement",
                    desc: "Proposition de dashboard en 30 jours, chiffrée, sans engagement contractuel.",
                  },
                ].map(({ title, desc }) => (
                  <div
                    key={title}
                    className="px-6 py-7 border-b sm:border-b-0 sm:border-r last:border-r-0"
                    style={{ borderColor: "oklch(24% 0.07 240)" }}
                  >
                    <p
                      className="text-sm font-bold mb-2"
                      style={{
                        fontFamily: "var(--font-space, system-ui, sans-serif)",
                        color: "oklch(88% 0.01 240)",
                      }}
                    >
                      {title}
                    </p>
                    <p className="text-sm" style={{ color: "oklch(54% 0.012 240)", lineHeight: "1.65" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="mailto:contact@unitek-automation.fr?subject=Demande%20d%27audit%20gratuit%20parc%20machine"
                className="inline-flex items-center justify-center gap-3 font-bold text-base px-10 py-5 transition-all duration-150"
                style={{
                  backgroundColor: "oklch(52% 0.21 25)",
                  color: "white",
                }}
              >
                Demander mon audit gratuit
                <ArrowRight size={18} />
              </a>

              <p
                className="mt-5 text-xs"
                style={{ color: "oklch(40% 0.01 240)" }}
              >
                Réponse sous 48h. Aucun engagement, aucun commercial.
              </p>
            </AnimateIn>
          </div>
        </section>

      </main>
    </>
  );
}
