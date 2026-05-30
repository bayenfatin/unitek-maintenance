import Image from "next/image";
import Link from "next/link";

// ─── Maillage interne ─────────────────────────────────────────────────────────
//
// "Expertises" : liens vers les routes dédiées existantes.
// "Systèmes maîtrisés" / "Secteurs" : pas encore de pages — pointent vers /#services.
// Mentionner une cible inexistante (href="#") pénalise le crawl de Googlebot.

const navigation = [
  {
    heading: "Expertises",
    links: [
      {
        label: "Maintenance préventive CNC",
        href: "/maintenance-preventive-predictive-cnc",
      },
      {
        label: "Supervision & Data 4.0",
        href: "/supervision-donnees-maintenance-4-0",
      },
      {
        label: "Rétrofit & Ingénierie CNC",
        href: "/retrofit-machine-outil-automate",
      },
      {
        label: "Dépannage urgence 24/7",
        href: "/#contact",
      },
    ],
  },
  {
    heading: "Systèmes maîtrisés",
    links: [
      { label: "Siemens Sinumerik", href: "/#services" },
      { label: "FANUC Series",      href: "/#services" },
      { label: "NUM / Heidenhain",  href: "/#services" },
      { label: "Schneider / Bosch", href: "/#services" },
    ],
  },
  {
    heading: "Secteurs",
    links: [
      { label: "Métallurgie & Usinage",      href: "/#services" },
      { label: "Aéronautique & Automobile",  href: "/#services" },
      { label: "Chimie & Plasturgie",        href: "/#services" },
      { label: "Industrie lyonnaise",        href: "/#contact"  },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Brand block */}
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
                <a
                  href="mailto:contact@unitek-automation.fr"
                  className="hover:text-white/70 transition-colors"
                >
                  contact@unitek-automation.fr
                </a>
              </p>
              <p className="text-white/40 text-xs">
                <span className="text-white/60 font-medium">Tél :</span>{" "}
                <a
                  href="tel:+33XXXXXXXXX"
                  className="hover:text-white/70 transition-colors"
                >
                  04 XX XX XX XX
                </a>
              </p>
            </div>
          </div>

          {/* Nav columns */}
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

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Unitek Automation (ex MS2I). Tous droits
            réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-white/30 text-xs hover:text-white/60 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-white/30 text-xs hover:text-white/60 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
