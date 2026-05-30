import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ContactForm } from "./ContactForm";

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Contact — Dépannage & Maintenance Industrielle Lyon | Unitek Automation",
  description:
    "Contactez Unitek Automation à Saint-Fons (69) pour un dépannage urgent ou un audit de maintenance. Presses à injection, CNC, automatisme — intervention en 4h sur la région lyonnaise.",
  openGraph: {
    title: "Contact — Dépannage & Maintenance Industrielle Lyon | Unitek Automation",
    description:
      "Contactez Unitek Automation à Saint-Fons (69) pour un dépannage urgent ou un audit de maintenance. Intervention en 4h sur la région lyonnaise.",
    type: "website",
    siteName: "Unitek Automation",
  },
};

// ─── JSON-LD LocalBusiness ─────────────────────────────────────────────────────

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Unitek Automation",
  alternateName: "MS2I",
  description:
    "Expert en maintenance industrielle : dépannage commandes numériques CNC, hydraulique, rétrofit IHM, AMDEC et supervision 4.0 pour l'industrie lyonnaise.",
  url: "https://unitek-automation.fr",
  logo: "https://unitek-automation.fr/unitek-logo-bleu.png",
  image: "https://unitek-automation.fr/unitek-logo-bleu.png",
  telephone: "+33XXXXXXXXX",
  email: "contact@unitek-automation.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Adresse complète]",
    addressLocality: "Saint-Fons",
    postalCode: "69190",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.69,
    longitude: 4.87,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 45.69,
      longitude: 4.87,
    },
    geoRadius: "150000",
  },
  serviceType: [
    "Maintenance industrielle CNC",
    "Dépannage hydraulique",
    "Rétrofit commandes numériques",
    "Maintenance presses à injection",
    "Supervision industrielle 4.0",
  ],
  priceRange: "Sur devis",
  currenciesAccepted: "EUR",
  paymentAccepted: "Virement bancaire, Chèque",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main style={{ backgroundColor: "oklch(13% 0.048 240)" }}>

        {/* ── HERO ─────────────────────────────────────────────────────────────── */}
        <section
          className="relative pt-28 pb-20 px-6 overflow-hidden"
          style={{ backgroundColor: "oklch(13% 0.048 240)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 4px, oklch(100% 0 0 / 0.008) 4px, oklch(100% 0 0 / 0.008) 5px)",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto">
            <AnimateIn variant="fadeUp">
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
                style={{ color: "oklch(55% 0.13 240)" }}
              >
                Saint-Fons — Lyon métropole
              </p>
              <h1
                className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-[1.06] mb-5"
                style={{
                  fontFamily: "var(--font-space, system-ui, sans-serif)",
                  letterSpacing: "-0.03em",
                  color: "oklch(97% 0.005 240)",
                }}
              >
                Parlons de votre
                <br />
                <span style={{ color: "oklch(55% 0.13 240)" }}>
                  problème de production.
                </span>
              </h1>
              <p
                className="text-base max-w-xl"
                style={{ color: "oklch(62% 0.013 240)", lineHeight: "1.75" }}
              >
                Panne hydraulique, dérive thermique, IHM hors service ou audit
                préventif — décrivez votre situation, nous vous rappelons sous
                48h. Pour toute urgence, le téléphone reste le chemin le plus
                court.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── CORPS ────────────────────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24 px-6"
          style={{ backgroundColor: "oklch(14% 0.052 240)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_380px] gap-12 xl:gap-20 items-start">

              {/* ── Formulaire ─────────────────────────────────────────────── */}
              <AnimateIn variant="fadeUp">
                <div
                  className="border p-8 lg:p-10"
                  style={{
                    borderColor: "oklch(26% 0.072 240)",
                    backgroundColor: "oklch(16% 0.058 240)",
                  }}
                >
                  <h2
                    className="text-xl font-bold mb-8"
                    style={{
                      fontFamily: "var(--font-space, system-ui, sans-serif)",
                      letterSpacing: "-0.02em",
                      color: "oklch(95% 0.007 240)",
                    }}
                  >
                    Envoyer une demande
                  </h2>
                  <ContactForm />
                </div>
              </AnimateIn>

              {/* ── Informations directes ───────────────────────────────────── */}
              <div className="space-y-5">

                {/* Urgence 24/7 */}
                <AnimateIn variant="fadeUp" delay={80}>
                  <div
                    className="border p-6"
                    style={{
                      borderColor: "oklch(52% 0.21 25)",
                      backgroundColor: "oklch(16% 0.07 25)",
                    }}
                  >
                    <p
                      className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
                      style={{ color: "oklch(60% 0.20 25)" }}
                    >
                      Panne ou arrêt machine ?
                    </p>
                    <p
                      className="text-base font-bold mb-1"
                      style={{
                        fontFamily: "var(--font-space, system-ui, sans-serif)",
                        color: "oklch(97% 0.005 240)",
                      }}
                    >
                      Intervention sous 4h
                    </p>
                    <p
                      className="text-xs mb-5"
                      style={{ color: "oklch(62% 0.014 25)", lineHeight: "1.7" }}
                    >
                      Astreinte 24h/7j — région lyonnaise (Rhône, Ain, Isère,
                      Loire)
                    </p>
                    <a
                      href="tel:+33XXXXXXXXX"
                      className="flex items-center justify-center gap-3 font-bold text-base py-4 w-full transition-colors duration-150"
                      style={{
                        backgroundColor: "oklch(52% 0.21 25)",
                        color: "white",
                      }}
                    >
                      <Phone size={18} />
                      04 XX XX XX XX
                      <ArrowRight size={16} />
                    </a>
                    <p
                      className="text-center text-xs mt-3"
                      style={{ color: "oklch(50% 0.013 25)" }}
                    >
                      Appel direct — aucune attente téléphonique
                    </p>
                  </div>
                </AnimateIn>

                {/* Email */}
                <AnimateIn variant="fadeUp" delay={140}>
                  <div
                    className="border p-5"
                    style={{
                      borderColor: "oklch(26% 0.072 240)",
                      backgroundColor: "oklch(16% 0.058 240)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex items-center justify-center w-9 h-9 shrink-0"
                        style={{
                          backgroundColor: "oklch(22% 0.08 240)",
                          border: "1px solid oklch(34% 0.09 240)",
                        }}
                      >
                        <Mail size={15} style={{ color: "oklch(55% 0.13 240)" }} />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.12em] mb-1.5"
                          style={{ color: "oklch(50% 0.012 240)" }}
                        >
                          Email
                        </p>
                        <a
                          href="mailto:contact@unitek-automation.fr"
                          className="text-sm font-semibold transition-colors duration-150"
                          style={{ color: "oklch(78% 0.013 240)" }}
                        >
                          contact@unitek-automation.fr
                        </a>
                        <p
                          className="text-xs mt-1"
                          style={{ color: "oklch(46% 0.011 240)" }}
                        >
                          Réponse sous 48h ouvrées
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>

                {/* Adresse */}
                <AnimateIn variant="fadeUp" delay={180}>
                  <div
                    className="border p-5"
                    style={{
                      borderColor: "oklch(26% 0.072 240)",
                      backgroundColor: "oklch(16% 0.058 240)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex items-center justify-center w-9 h-9 shrink-0"
                        style={{
                          backgroundColor: "oklch(22% 0.08 240)",
                          border: "1px solid oklch(34% 0.09 240)",
                        }}
                      >
                        <MapPin size={15} style={{ color: "oklch(55% 0.13 240)" }} />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.12em] mb-1.5"
                          style={{ color: "oklch(50% 0.012 240)" }}
                        >
                          Adresse
                        </p>
                        <address
                          className="not-italic text-sm"
                          style={{ color: "oklch(72% 0.012 240)", lineHeight: "1.7" }}
                        >
                          Unitek Automation
                          <br />
                          [Adresse complète]
                          <br />
                          69190 Saint-Fons
                          <br />
                          Auvergne-Rhône-Alpes, France
                        </address>
                      </div>
                    </div>
                  </div>
                </AnimateIn>

                {/* Horaires */}
                <AnimateIn variant="fadeUp" delay={220}>
                  <div
                    className="border p-5"
                    style={{
                      borderColor: "oklch(26% 0.072 240)",
                      backgroundColor: "oklch(16% 0.058 240)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex items-center justify-center w-9 h-9 shrink-0"
                        style={{
                          backgroundColor: "oklch(22% 0.08 240)",
                          border: "1px solid oklch(34% 0.09 240)",
                        }}
                      >
                        <Clock size={15} style={{ color: "oklch(55% 0.13 240)" }} />
                      </div>
                      <div className="flex-1">
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.12em] mb-3"
                          style={{ color: "oklch(50% 0.012 240)" }}
                        >
                          Horaires
                        </p>
                        <div className="space-y-0">
                          {[
                            { jours: "Lun — Ven",  heures: "08h00 – 18h00" },
                            { jours: "Samedi",      heures: "Sur rendez-vous" },
                            { jours: "Urgences",    heures: "24h / 7j",        urgent: true },
                          ].map(({ jours, heures, urgent }) => (
                            <div
                              key={jours}
                              className="flex justify-between items-center py-2.5 border-b last:border-b-0"
                              style={{ borderColor: "oklch(22% 0.068 240)" }}
                            >
                              <span
                                className="text-xs"
                                style={{ color: urgent ? "oklch(60% 0.20 25)" : "oklch(56% 0.012 240)" }}
                              >
                                {jours}
                              </span>
                              <span
                                className="text-xs font-semibold"
                                style={{ color: urgent ? "oklch(60% 0.20 25)" : "oklch(80% 0.010 240)" }}
                              >
                                {heures}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>

                {/* Zone d'intervention */}
                <AnimateIn variant="fadeUp" delay={260}>
                  <div
                    className="p-5 border"
                    style={{
                      borderColor: "oklch(26% 0.072 240)",
                      backgroundColor: "oklch(15% 0.055 240)",
                    }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.12em] mb-3"
                      style={{ color: "oklch(50% 0.012 240)" }}
                    >
                      Zone d&apos;intervention
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(58% 0.012 240)", lineHeight: "1.75" }}
                    >
                      Rayon de 150 km autour de Lyon — Rhône (69), Ain (01),
                      Isère (38), Loire (42), Saône-et-Loire (71), Drôme (26).
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Lyon", "Villeurbanne", "Saint-Étienne", "Grenoble", "Bourg-en-Bresse", "Valence"].map(
                        (ville) => (
                          <span
                            key={ville}
                            className="text-[10px] font-medium px-2 py-0.5"
                            style={{
                              border: "1px solid oklch(28% 0.075 240)",
                              color: "oklch(52% 0.012 240)",
                            }}
                          >
                            {ville}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </AnimateIn>

              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
