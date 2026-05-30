import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Unitek Automation",
  description: "Mentions légales du site unitek-automation.fr — identification de l'éditeur, hébergeur et informations légales.",
  robots: {
    index: false,
    follow: true,
  },
};

// ─── Shared typography primitives ────────────────────────────────────────────

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xl font-bold mt-12 mb-4"
      style={{ color: "oklch(18% 0.015 240)", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm mb-4" style={{ color: "oklch(42% 0.012 240)", lineHeight: "1.8" }}>
      {children}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MentionsLegalesPage() {
  return (
    <main>

      {/* En-tête */}
      <div className="bg-brand-dark py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "oklch(55% 0.13 240)" }}
          >
            Informations légales
          </p>
          <h1
            className="text-3xl font-bold text-white"
            style={{ letterSpacing: "-0.025em" }}
          >
            Mentions légales
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 pb-24">

        <H2>1. Éditeur du site</H2>
        <P>
          Le site <strong style={{ color: "oklch(28% 0.012 240)" }}>unitek-automation.fr</strong> est édité par la société <strong style={{ color: "oklch(28% 0.012 240)" }}>Unitek Automation</strong> (anciennement MS2I), société par actions simplifiée au capital social de [MONTANT] euros.
        </P>
        <div className="text-sm space-y-1.5 mb-4" style={{ color: "oklch(42% 0.012 240)" }}>
          <p><span className="font-semibold" style={{ color: "oklch(28% 0.012 240)" }}>Siège social :</span> [Adresse complète], Saint-Fons, 69190 Rhône, France</p>
          <p><span className="font-semibold" style={{ color: "oklch(28% 0.012 240)" }}>SIRET :</span> XXX XXX XXX XXXXX</p>
          <p><span className="font-semibold" style={{ color: "oklch(28% 0.012 240)" }}>Code APE :</span> 3312Z — Réparation de machines et équipements mécaniques</p>
          <p><span className="font-semibold" style={{ color: "oklch(28% 0.012 240)" }}>Numéro TVA intracommunautaire :</span> FR XX XXX XXX XXX</p>
          <p><span className="font-semibold" style={{ color: "oklch(28% 0.012 240)" }}>Directeur de la publication :</span> [Prénom Nom], en qualité de [fonction]</p>
          <p><span className="font-semibold" style={{ color: "oklch(28% 0.012 240)" }}>Email :</span>{" "}
            <a href="mailto:contact@unitek-automation.fr" className="text-brand hover:underline">
              contact@unitek-automation.fr
            </a>
          </p>
          <p><span className="font-semibold" style={{ color: "oklch(28% 0.012 240)" }}>Téléphone :</span> 04 XX XX XX XX</p>
        </div>

        <div className="border-t border-border my-10" />

        <H2>2. Hébergement</H2>
        <P>
          Le site est hébergé par <strong style={{ color: "oklch(28% 0.012 240)" }}>Vercel Inc.</strong>, dont le siège social est situé au 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.
        </P>
        <P>
          Site web : <span style={{ color: "oklch(42% 0.135 240)" }}>vercel.com</span> — contact disponible via le support Vercel.
        </P>

        <div className="border-t border-border my-10" />

        <H2>3. Propriété intellectuelle</H2>
        <P>
          L&apos;ensemble des contenus présents sur ce site (textes, images, graphiques, schémas techniques, logotypes, icônes) est la propriété exclusive d&apos;Unitek Automation ou fait l&apos;objet d&apos;une licence d&apos;utilisation accordée à la société, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
        </P>
        <P>
          Toute reproduction, représentation, modification, publication, adaptation ou exploitation totale ou partielle des éléments du site, par quelque procédé que ce soit et sur quelque support que ce soit, est interdite sans l&apos;accord préalable écrit d&apos;Unitek Automation, sous peine de poursuites judiciaires.
        </P>

        <div className="border-t border-border my-10" />

        <H2>4. Limitation de responsabilité</H2>
        <P>
          Unitek Automation s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, la société ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations publiées. En conséquence, Unitek Automation décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
        </P>
        <P>
          Les informations contenues sur ce site sont données à titre indicatif. Elles ne constituent en aucun cas un engagement contractuel de la part d&apos;Unitek Automation. La société se réserve le droit de modifier, corriger ou supprimer à tout moment et sans préavis le contenu de ce site.
        </P>
        <P>
          Ce site peut contenir des liens hypertextes pointant vers d&apos;autres sites internet. Unitek Automation n&apos;exerce aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur contenu ou aux pratiques de confidentialité qu&apos;ils appliquent.
        </P>

        <div className="border-t border-border my-10" />

        <H2>5. Disponibilité du site</H2>
        <P>
          Unitek Automation met tout en œuvre pour assurer la disponibilité du site. Toutefois, la société ne saurait être tenue responsable des interruptions de service dues à des opérations de maintenance, des pannes techniques, des actes de tiers malveillants ou tout événement indépendant de sa volonté.
        </P>

        <div className="border-t border-border my-10" />

        <H2>6. Droit applicable et juridiction compétente</H2>
        <P>
          Les présentes mentions légales sont soumises au droit français. En cas de litige relatif à l&apos;utilisation du site, les tribunaux compétents du ressort de la Cour d&apos;appel de Lyon seront seuls compétents, sauf disposition légale contraire.
        </P>

        <p className="text-xs mt-12" style={{ color: "oklch(65% 0.010 240)" }}>
          Dernière mise à jour : juin 2025
        </p>
      </div>
    </main>
  );
}
