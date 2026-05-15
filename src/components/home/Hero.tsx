import { ArrowRight, ChevronDown } from "lucide-react";
import { HeroVideo } from "./HeroVideo";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

function heroAnim(delay: number) {
  return {
    animation: `fadeSlideUp 0.8s ${ease} ${delay}ms both`,
  };
}

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex flex-col">
      <HeroVideo />

      <div className="absolute inset-0 bg-brand-dark/80" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, oklch(22% 0.08 240 / 0.6) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col justify-center flex-1 pt-16 pb-32">
          <div className="max-w-3xl">
            <p
              className="text-brand-light text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={heroAnim(80)}
            >
              30 ans d'expertise terrain — Région lyonnaise
            </p>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6">
              <span className="block" style={heroAnim(220)}>
                Fiabilisez vos
              </span>
              <span className="block" style={heroAnim(340)}>
                équipements
              </span>
              <span className="block text-brand-light" style={heroAnim(460)}>
                critiques.
              </span>
            </h1>

            <p
              className="text-white/70 text-lg lg:text-xl max-w-xl mb-10 leading-relaxed font-light"
              style={heroAnim(580)}
            >
              De l'expertise curative sur commandes numériques jusqu'au pilotage
              par la donnée, nous transformons vos arrêts de production en
              performance continue.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={heroAnim(700)}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark font-semibold text-sm px-8 py-4 hover:bg-brand-light transition-colors duration-150"
              >
                Contacter un expert
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/40 font-semibold text-sm px-8 py-4 hover:bg-white/10 transition-colors duration-150"
              >
                Nos expertises
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-10 flex justify-center" style={heroAnim(1100)}>
          <a
            href="#proof"
            className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
            aria-label="Défiler"
          >
            <ChevronDown size={22} className="animate-bounce" />
          </a>
        </div>
      </div>

      <div
        id="proof"
        className="absolute bottom-0 left-0 right-0 bg-brand/90 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {[
              { value: "+30 ans", label: "d'expertise terrain", delay: 900 },
              { value: "Multimarque", label: "Siemens, FANUC, NUM, Heidenhain", delay: 1000 },
              { value: "Urgence", label: "Intervention rapide sur site", delay: 1100 },
              { value: "Lyon & région", label: "Saint-Fons, industrie locale", delay: 1200 },
            ].map((item) => (
              <div
                key={item.value}
                className="px-6 py-5"
                style={heroAnim(item.delay)}
              >
                <p className="text-white font-bold text-base lg:text-lg leading-tight">
                  {item.value}
                </p>
                <p className="text-white/60 text-xs mt-1 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
