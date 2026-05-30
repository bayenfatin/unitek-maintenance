import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Unitek Automation",
  description: "Politique de confidentialité et de protection des données personnelles d'Unitek Automation — conformité RGPD.",
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-base font-semibold mt-8 mb-2"
      style={{ color: "oklch(28% 0.012 240)", letterSpacing: "-0.015em" }}
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm mb-4" style={{ color: "oklch(42% 0.012 240)", lineHeight: "1.8" }}>
      {children}
    </p>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="text-sm pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-muted"
      style={{ color: "oklch(42% 0.012 240)", lineHeight: "1.8" }}
    >
      {children}
    </li>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PolitiqueConfidentialitePage() {
  return (
    <main>

      {/* En-tête */}
      <div className="bg-brand-dark py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "oklch(55% 0.13 240)" }}
          >
            RGPD &amp; données personnelles
          </p>
          <h1
            className="text-3xl font-bold text-white"
            style={{ letterSpacing: "-0.025em" }}
          >
            Politique de confidentialité
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 pb-24">

        <P>
          La présente politique de confidentialité décrit comment <strong style={{ color: "oklch(28% 0.012 240)" }}>Unitek Automation</strong> collecte, utilise et protège les données à caractère personnel des visiteurs du site <strong style={{ color: "oklch(28% 0.012 240)" }}>unitek-automation.fr</strong>, dans le respect du Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et de la loi Informatique et Libertés du 6 janvier 1978 modifiée.
        </P>

        <div className="border-t border-border my-10" />

        <H2>1. Responsable du traitement</H2>
        <div className="text-sm space-y-1.5 mb-4" style={{ color: "oklch(42% 0.012 240)" }}>
          <p><span className="font-semibold" style={{ color: "oklch(28% 0.012 240)" }}>Dénomination sociale :</span> Unitek Automation (anciennement MS2I)</p>
          <p><span className="font-semibold" style={{ color: "oklch(28% 0.012 240)" }}>Siège social :</span> [Adresse complète], Saint-Fons, 69190 Rhône, France</p>
          <p><span className="font-semibold" style={{ color: "oklch(28% 0.012 240)" }}>Contact :</span>{" "}
            <a href="mailto:contact@unitek-automation.fr" className="text-brand hover:underline">
              contact@unitek-automation.fr
            </a>
          </p>
        </div>

        <div className="border-t border-border my-10" />

        <H2>2. Données collectées</H2>
        <P>
          Dans le cadre de l&apos;utilisation du site et de nos services, nous sommes susceptibles de collecter les catégories de données suivantes :
        </P>

        <H3>Via le formulaire de contact</H3>
        <ul className="space-y-1.5 mb-6 ml-1">
          <Li>Nom et prénom</Li>
          <Li>Adresse email professionnelle</Li>
          <Li>Numéro de téléphone</Li>
          <Li>Raison sociale et secteur d&apos;activité</Li>
          <Li>Contenu du message (description de la problématique technique)</Li>
        </ul>

        <H3>Via les cookies et la navigation</H3>
        <ul className="space-y-1.5 mb-6 ml-1">
          <Li>Adresse IP (anonymisée)</Li>
          <Li>Type de navigateur et version</Li>
          <Li>Pages visitées et durée de consultation</Li>
          <Li>Source de trafic (direct, organique, référent)</Li>
        </ul>

        <div className="border-t border-border my-10" />

        <H2>3. Finalités et bases légales</H2>
        <P>
          Unitek Automation traite vos données personnelles pour les finalités suivantes, sur les bases légales indiquées :
        </P>
        <div className="overflow-hidden border border-border mb-6">
          {[
            {
              finalite: "Traitement des demandes de contact et devis",
              base: "Exécution de mesures précontractuelles (art. 6.1.b RGPD)",
            },
            {
              finalite: "Réponse aux demandes d'intervention urgente",
              base: "Intérêt légitime (art. 6.1.f RGPD)",
            },
            {
              finalite: "Envoi de documentation technique sur demande",
              base: "Consentement (art. 6.1.a RGPD)",
            },
            {
              finalite: "Amélioration du site et analyses d'audience",
              base: "Intérêt légitime (art. 6.1.f RGPD)",
            },
            {
              finalite: "Respect des obligations légales et comptables",
              base: "Obligation légale (art. 6.1.c RGPD)",
            },
          ].map(({ finalite, base }, i) => (
            <div
              key={finalite}
              className="grid grid-cols-[1fr_1fr] border-b last:border-b-0"
              style={{
                borderColor: "oklch(90% 0.008 240)",
                backgroundColor: i % 2 === 0 ? "oklch(98.5% 0.005 240)" : "oklch(96% 0.008 240)",
              }}
            >
              <div className="px-4 py-3 text-xs border-r" style={{ borderColor: "oklch(90% 0.008 240)", color: "oklch(32% 0.012 240)" }}>
                {finalite}
              </div>
              <div className="px-4 py-3 text-xs" style={{ color: "oklch(50% 0.012 240)" }}>
                {base}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border my-10" />

        <H2>4. Durée de conservation</H2>
        <P>
          Vos données sont conservées pendant la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées :
        </P>
        <ul className="space-y-1.5 mb-6 ml-1">
          <Li>Données de prospect (formulaire de contact sans suite) : <strong style={{ color: "oklch(28% 0.012 240)" }}>3 ans</strong> à compter du dernier contact</Li>
          <Li>Données client (devis, commandes, interventions) : <strong style={{ color: "oklch(28% 0.012 240)" }}>10 ans</strong> à compter de la fin de la relation contractuelle (obligations comptables)</Li>
          <Li>Données de navigation et cookies analytics : <strong style={{ color: "oklch(28% 0.012 240)" }}>13 mois</strong> maximum</Li>
          <Li>Données de gestion des droits (exercice de vos droits) : <strong style={{ color: "oklch(28% 0.012 240)" }}>5 ans</strong></Li>
        </ul>

        <div className="border-t border-border my-10" />

        <H2>5. Destinataires des données</H2>
        <P>
          Les données collectées sont destinées aux collaborateurs d&apos;Unitek Automation ayant besoin d&apos;y accéder dans le cadre de leurs fonctions (équipe commerciale, technique, comptabilité). Elles ne font l&apos;objet d&apos;aucune cession à des tiers à des fins commerciales.
        </P>
        <P>
          Certains prestataires techniques (hébergement, outil CRM, messagerie) peuvent avoir accès à vos données en qualité de sous-traitants, dans le strict respect du RGPD et d&apos;un accord de traitement de données.
        </P>
        <P>
          Aucun transfert de données vers des pays hors de l&apos;Espace Économique Européen n&apos;est effectué sans garanties appropriées (clauses contractuelles types de la Commission européenne).
        </P>

        <div className="border-t border-border my-10" />

        <H2>6. Vos droits</H2>
        <P>
          Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
        </P>
        <ul className="space-y-1.5 mb-6 ml-1">
          <Li><strong style={{ color: "oklch(28% 0.012 240)" }}>Droit d&apos;accès</strong> — obtenir une copie des données vous concernant (art. 15)</Li>
          <Li><strong style={{ color: "oklch(28% 0.012 240)" }}>Droit de rectification</strong> — corriger des données inexactes ou incomplètes (art. 16)</Li>
          <Li><strong style={{ color: "oklch(28% 0.012 240)" }}>Droit à l&apos;effacement</strong> — demander la suppression de vos données (art. 17)</Li>
          <Li><strong style={{ color: "oklch(28% 0.012 240)" }}>Droit à la limitation</strong> — restreindre temporairement le traitement (art. 18)</Li>
          <Li><strong style={{ color: "oklch(28% 0.012 240)" }}>Droit à la portabilité</strong> — recevoir vos données dans un format structuré (art. 20)</Li>
          <Li><strong style={{ color: "oklch(28% 0.012 240)" }}>Droit d&apos;opposition</strong> — vous opposer au traitement basé sur l&apos;intérêt légitime (art. 21)</Li>
          <Li><strong style={{ color: "oklch(28% 0.012 240)" }}>Retrait du consentement</strong> — à tout moment pour les traitements fondés sur votre consentement (art. 7.3)</Li>
        </ul>
        <P>
          Pour exercer ces droits, adressez votre demande par email à{" "}
          <a href="mailto:contact@unitek-automation.fr" className="text-brand hover:underline">
            contact@unitek-automation.fr
          </a>{" "}
          en précisant votre identité. Nous nous engageons à répondre dans un délai d&apos;un mois (art. 12 RGPD).
        </P>
        <P>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la <strong style={{ color: "oklch(28% 0.012 240)" }}>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) — <span style={{ color: "oklch(42% 0.135 240)" }}>cnil.fr</span>.
        </P>

        <div className="border-t border-border my-10" />

        <H2>7. Cookies</H2>
        <P>
          Le site unitek-automation.fr utilise des cookies et technologies similaires. Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d&apos;un site.
        </P>

        <H3>Cookies strictement nécessaires</H3>
        <P>
          Ces cookies sont indispensables au fonctionnement du site (gestion de session, sécurité). Ils ne requièrent pas votre consentement.
        </P>

        <H3>Cookies analytiques</H3>
        <P>
          Nous utilisons des outils d&apos;analyse d&apos;audience (mesure de trafic, pages visitées) pour améliorer l&apos;expérience utilisateur. Ces cookies sont déposés uniquement après recueil de votre consentement, conformément aux recommandations de la CNIL.
        </P>
        <P>
          Vous pouvez à tout moment paramétrer ou refuser les cookies via les paramètres de votre navigateur, ou via le gestionnaire de consentement disponible sur ce site. Le refus des cookies analytiques n&apos;impacte pas votre accès au contenu du site.
        </P>

        <div className="border-t border-border my-10" />

        <H2>8. Sécurité des données</H2>
        <P>
          Unitek Automation met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, divulgation, altération ou destruction : chiffrement des transmissions (HTTPS/TLS), contrôle d&apos;accès strict, sauvegardes régulières.
        </P>
        <P>
          En cas de violation de données susceptible d&apos;engendrer un risque pour vos droits et libertés, nous nous engageons à notifier la CNIL dans un délai de 72 heures et, si nécessaire, à vous en informer directement.
        </P>

        <div className="border-t border-border my-10" />

        <H2>9. Modifications de la présente politique</H2>
        <P>
          Unitek Automation se réserve le droit de mettre à jour cette politique de confidentialité à tout moment, notamment pour se conformer à de nouvelles obligations légales ou réglementaires. La date de dernière mise à jour figure en bas de page. Nous vous encourageons à la consulter régulièrement.
        </P>

        <p className="text-xs mt-12" style={{ color: "oklch(65% 0.010 240)" }}>
          Dernière mise à jour : juin 2025
        </p>
      </div>
    </main>
  );
}
