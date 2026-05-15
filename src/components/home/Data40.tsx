import Image from "next/image";
import { ArrowRight, Database, LineChart, FileText, GitBranch } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const pillars = [
  {
    icon: FileText,
    title: "Digitalisation des interventions",
    text: "Formulaires numériques sur mobile, rapports journaliers automatisés, traçabilité totale des opérations terrain.",
  },
  {
    icon: LineChart,
    title: "Tableaux de bord Power BI",
    text: "Visualisation des temps d'arrêt, identification des équipements critiques, suivi MTTR et TRS en temps réel.",
  },
  {
    icon: Database,
    title: "Connectivité & Intégration",
    text: "Connexion de sources hétérogènes : SCADA, GMAO Carl Source, automates Siemens et fichiers Excel.",
  },
  {
    icon: GitBranch,
    title: "Amélioration continue",
    text: "Méthodologies AMDEC et 5 Pourquoi pour éradiquer les causes racines des défaillances chroniques.",
  },
];

const kpis = [
  { label: "MTTR moyen", value: "Temps moyen de réparation" },
  { label: "TRS", value: "Taux de rendement synthétique" },
  { label: "Top 5 pannes", value: "Classement par fréquence" },
];

export function Data40() {
  return (
    <section id="data40" className="bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          <div className="px-6 lg:px-16 py-20 lg:py-28 flex flex-col justify-center">
            <AnimateIn variant="fadeLeft">
              <p className="text-brand-light/60 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                Maintenance 4.0
              </p>

              <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                De l'expertise curative
                <br />
                au pilotage par la donnée.
              </h2>

              <p className="text-white/60 text-base leading-relaxed mb-12 max-w-md">
                Nous ne repartons pas seulement après la panne. Nous mettons en
                place les outils et les méthodes pour qu'elle ne se reproduise
                pas, et que votre direction dispose d'une visibilité totale sur
                l'état du parc.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <AnimateIn key={pillar.title} variant="fadeUp" delay={i * 80}>
                    <div className="flex flex-col gap-3">
                      <div className="w-9 h-9 flex items-center justify-center bg-brand/20 border border-brand/30">
                        <Icon size={17} className="text-brand-light" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">
                          {pillar.title}
                        </p>
                        <p className="text-white/50 text-xs leading-relaxed">
                          {pillar.text}
                        </p>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>

            <AnimateIn variant="fadeUp" delay={320}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-light font-semibold text-sm hover:gap-3 transition-all duration-200 self-start"
              >
                Demander une démonstration
                <ArrowRight size={15} />
              </a>
            </AnimateIn>
          </div>

          <AnimateIn variant="fadeRight" className="relative min-h-[400px] lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              alt="Tableau de bord de supervision industrielle"
              fill
              className="object-cover opacity-70"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, oklch(22% 0.08 240) 0%, transparent 40%)",
              }}
            />

            <div className="absolute bottom-8 right-8 left-8 lg:left-auto lg:max-w-xs bg-brand-dark/90 backdrop-blur-sm border border-white/10 p-5 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 h-px bg-brand/60 top-0 pointer-events-none"
                style={{
                  animation: "scanDown 3.5s linear infinite 1.2s",
                }}
              />

              <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-3">
                Indicateurs suivis
              </p>
              <div className="space-y-2">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="flex items-center justify-between gap-4 py-1.5 border-b border-white/5 last:border-0"
                  >
                    <span className="text-white font-semibold text-xs">
                      {kpi.label}
                    </span>
                    <span className="text-white/40 text-xs text-right">
                      {kpi.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
