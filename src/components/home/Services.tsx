import Image from "next/image";
import { ArrowRight, Wrench, Zap, BarChart3 } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const services = [
  {
    id: "maintenance",
    icon: Wrench,
    label: "Maintenance & Dépannage",
    title: "CNC & Automatisme",
    description:
      "Votre machine est à l'arrêt. Chaque heure perdue grève votre TRS. Nos techniciens interviennent sur site pour diagnostiquer et remettre en service vos commandes numériques, variateurs de vitesse, servomoteurs et broches. Maîtrise avancée des systèmes Siemens Sinumerik, FANUC, NUM, Heidenhain et Schneider.",
    video: "/maintenance-cnc.mp4",
    image: null,
    imageAlt: "Technicien intervenant sur une armoire électrique industrielle",
    features: [
      "Diagnostic et dépannage sur site",
      "Réparation de cartes électroniques en atelier",
      "Paramétrage axes, variateurs et capteurs",
      "Rapports numériques instantanés",
    ],
    href: "#contact",
    imageLeft: false,
  },
  {
    id: "retrofit",
    icon: Zap,
    label: "Rétrofit & Ingénierie",
    title: "Modernisation sans remplacement",
    description:
      "Vos commandes numériques deviennent obsolètes et les pièces de rechange se raréfient. Le rétrofit est la réponse économique : moderniser la partie commande d'une machine en conservant sa mécanique de précision. Nous prenons en charge la migration complète, de l'étude de faisabilité à la remise en production.",
    video: null,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Cartes électroniques et composants industriels",
    features: [
      "Migration de pupitres et commandes numériques",
      "Fiabilisation mécanique et électrique",
      "Analyse des causes racines (AMDEC, 5 Pourquoi)",
      "Documentation et formation équipes internes",
    ],
    href: "#contact",
    imageLeft: true,
  },
  {
    id: "data40",
    icon: BarChart3,
    label: "Supervision & Data",
    title: "Pilotage 4.0 de votre parc",
    description:
      "La panne la moins coûteuse est celle qu'on anticipe. Nous connectons vos sources hétérogènes (SCADA, GMAO Carl Source, automates, fichiers Excel) et construisons des tableaux de bord Power BI qui donnent à votre direction de production une visibilité en temps réel sur les temps d'arrêt, le MTTR et le TRS.",
    video: null,
    image: "/supervision-data.png",
    imageAlt: "Tableau de bord analytique Power BI sur écran",
    features: [
      "Tableaux de bord Power BI sur mesure",
      "Connectivité SCADA, GMAO et automates",
      "Analyse MTTR, TRS et temps d'arrêt",
      "Amélioration continue structurée",
    ],
    href: "#data40",
    imageLeft: false,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn variant="fadeUp" className="mb-16 lg:mb-20">
          <p className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Expertises
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-foreground text-3xl lg:text-4xl xl:text-5xl font-bold max-w-xl leading-tight">
              Trois leviers pour fiabiliser votre production.
            </h2>
            <p className="text-muted text-base max-w-sm leading-relaxed">
              Du curatif d'urgence à l'amélioration continue pilotée par la
              donnée, une expertise couvre l'ensemble du cycle de vie de vos
              équipements.
            </p>
          </div>
        </AnimateIn>

        <div className="flex flex-col gap-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLeft = service.imageLeft;

            return (
              <AnimateIn
                key={service.id}
                variant="fadeUp"
                delay={index * 80}
              >
              <article
                className={`grid lg:grid-cols-2 gap-0 border border-border group ${
                  index < services.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div
                  className={`relative h-72 lg:h-auto lg:min-h-[420px] overflow-hidden ${
                    isLeft ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  {service.video ? (
                    <video
                      src={service.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  ) : (
                    <Image
                      src={service.image!}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-brand-dark/20 transition-opacity duration-500 group-hover:opacity-10" />
                </div>

                <div
                  className={`p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-white ${
                    isLeft ? "lg:order-last" : "lg:order-first"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-9 h-9 bg-brand-light">
                      <Icon size={18} className="text-brand" />
                    </div>
                    <span className="text-brand text-xs font-semibold tracking-[0.15em] uppercase">
                      {service.label}
                    </span>
                  </div>

                  <h3 className="text-foreground text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-brand" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all duration-200"
                  >
                    En savoir plus
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
