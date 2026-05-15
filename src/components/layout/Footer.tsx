import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    heading: "Expertises",
    links: [
      { label: "Maintenance & Dépannage CNC", href: "#services" },
      { label: "Rétrofit & Ingénierie", href: "#retrofit" },
      { label: "Supervision & Data 4.0", href: "#data40" },
      { label: "Réparation de cartes électroniques", href: "#services" },
    ],
  },
  {
    heading: "Systèmes maîtrisés",
    links: [
      { label: "Siemens Sinumerik", href: "#" },
      { label: "FANUC Series", href: "#" },
      { label: "NUM / Heidenhain", href: "#" },
      { label: "Schneider / Bosch Rexroth", href: "#" },
    ],
  },
  {
    heading: "Secteurs",
    links: [
      { label: "Métallurgie & Usinage", href: "#" },
      { label: "Aéronautique & Automobile", href: "#" },
      { label: "Chimie & Plasturgie", href: "#" },
      { label: "Industrie lyonnaise", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Image
              src="/unitek-logo-bleu.png"
              alt="Unitek Automation"
              width={140}
              height={40}
              className="h-9 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Expert en maintenance industrielle et dépannage commandes
              numériques depuis plus de 30 ans. Basés à Saint-Fons, au coeur
              du tissu industriel lyonnais.
            </p>
            <div className="mt-6 flex flex-col gap-1.5">
              <p className="text-white/40 text-xs">
                <span className="text-white/60 font-medium">Adresse :</span>{" "}
                Saint-Fons, 69190 Rhône
              </p>
              <p className="text-white/40 text-xs">
                <span className="text-white/60 font-medium">Email :</span>{" "}
                contact@unitek-automation.fr
              </p>
              <p className="text-white/40 text-xs">
                <span className="text-white/60 font-medium">Tél :</span>{" "}
                04 XX XX XX XX
              </p>
            </div>
          </div>

          {navigation.map((group) => (
            <div key={group.heading}>
              <p className="text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                {group.heading}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Unitek Automation (ex MS2I). Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
