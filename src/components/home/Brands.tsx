import { AnimateIn } from "@/components/ui/AnimateIn";

const brands = [
  { name: "Siemens Sinumerik", sub: "840D / 828D / 808D" },
  { name: "FANUC", sub: "Series 0i / 30i / 31i" },
  { name: "NUM", sub: "1060 / 1020 / Axium" },
  { name: "Heidenhain", sub: "TNC 640 / 530 / 426" },
  { name: "Schneider Electric", sub: "Modicon / Altivar" },
  { name: "Bosch Rexroth", sub: "IndraControl / IndraDrive" },
  { name: "Mitsubishi", sub: "MELDAS / M70 / M80" },
];

export function Brands() {
  return (
    <section className="bg-brand-light border-y border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          <AnimateIn variant="fadeLeft" className="flex-shrink-0">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase mb-1">
              Systèmes maîtrisés
            </p>
            <p className="text-foreground font-bold text-lg leading-snug max-w-[180px]">
              Expertise multimarque certifiée terrain
            </p>
          </AnimateIn>

          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-0 min-w-max lg:min-w-0 lg:flex-wrap">
              {brands.map((brand, i) => (
                <AnimateIn
                  key={brand.name}
                  variant="fadeUp"
                  delay={i * 60}
                  className={`px-6 py-4 flex flex-col transition-colors duration-200 hover:bg-brand/5 ${
                    i < brands.length - 1 ? "border-r border-border" : ""
                  }`}
                >
                  <span className="text-foreground font-semibold text-sm whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-muted text-xs mt-0.5 whitespace-nowrap">
                    {brand.sub}
                  </span>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
