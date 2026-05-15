"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const contactItems = [
  {
    icon: Phone,
    label: "Téléphone direct",
    value: "04 XX XX XX XX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@unitek-automation.fr",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Saint-Fons (69190) — Rhône",
  },
  {
    icon: Clock,
    label: "Disponibilité urgence",
    value: "Intervention rapide sur demande",
  },
];

export function CtaUrgence() {
  return (
    <section id="contact" className="relative bg-foreground overflow-hidden">
      <video
        src="/contact-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AnimateIn variant="fadeLeft">
            <p className="text-brand-light/60 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Contactez-nous
            </p>
            <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Votre machine est
              <br />
              à l'arrêt ?
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-md">
              Décrivez-nous votre situation : type de machine, marque de la
              commande numérique, symptômes observés. Notre équipe revient vers
              vous dans les plus brefs délais.
            </p>

            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 text-white/60">
                    <div className="w-8 h-8 flex items-center justify-center bg-white/5">
                      <Icon size={14} className="text-brand-light" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeRight" delay={120}>
            <div className="bg-white/5 border border-white/10 p-8 lg:p-10">
              <h3 className="text-white font-bold text-lg mb-6">
                Décrivez votre situation
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs mb-2 font-medium">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3 placeholder-white/25 focus:outline-none focus:border-brand transition-colors duration-200"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs mb-2 font-medium">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3 placeholder-white/25 focus:outline-none focus:border-brand transition-colors duration-200"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-2 font-medium">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3 placeholder-white/25 focus:outline-none focus:border-brand transition-colors duration-200"
                    placeholder="Nom de votre société"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-2 font-medium">
                    Type de besoin
                  </label>
                  <select className="w-full bg-white/5 border border-white/15 text-white/80 text-sm px-4 py-3 focus:outline-none focus:border-brand transition-colors duration-200 appearance-none">
                    <option value="" className="bg-foreground">
                      Sélectionner...
                    </option>
                    <option value="urgence" className="bg-foreground">
                      Urgence — machine à l'arrêt
                    </option>
                    <option value="preventif" className="bg-foreground">
                      Maintenance préventive
                    </option>
                    <option value="retrofit" className="bg-foreground">
                      Rétrofit / Modernisation
                    </option>
                    <option value="data" className="bg-foreground">
                      Supervision & tableau de bord
                    </option>
                    <option value="audit" className="bg-foreground">
                      Audit de parc machines
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-2 font-medium">
                    Machine et commande numérique
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3 placeholder-white/25 focus:outline-none focus:border-brand transition-colors duration-200"
                    placeholder="Ex: fraiseuse Siemens Sinumerik 840D"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-2 font-medium">
                    Description de la situation
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3 placeholder-white/25 focus:outline-none focus:border-brand transition-colors duration-200 resize-none"
                    placeholder="Symptômes observés, codes alarme, contexte de la panne..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand text-white font-semibold text-sm py-4 hover:bg-brand-mid transition-colors duration-150 active:scale-[0.99]"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
