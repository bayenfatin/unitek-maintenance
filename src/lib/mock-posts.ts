import type { WPPost, WPPostListItem } from "@/types/blog";

// ─── Données fictives — remplace WordPress pendant le mode offline ────────────
// Pour rebrancher WordPress : supprimer les imports de ce fichier dans
// blog/page.tsx et blog/[slug]/page.tsx et restaurer les appels getAllPosts /
// getPostBySlug depuis @/lib/wpgraphql.

export const MOCK_CARD_META: Array<{ category: string; gradient: string }> = [
  {
    category: "Hydraulique",
    gradient:
      "linear-gradient(150deg, oklch(14% 0.10 240) 0%, oklch(26% 0.16 225) 100%)",
  },
  {
    category: "Maintenance préventive",
    gradient:
      "linear-gradient(150deg, oklch(12% 0.07 165) 0%, oklch(23% 0.12 150) 100%)",
  },
  {
    category: "Rétrofit IHM",
    gradient:
      "linear-gradient(150deg, oklch(14% 0.10 48) 0%, oklch(26% 0.17 38) 100%)",
  },
];

export const MOCK_POSTS: WPPostListItem[] = [
  {
    slug: "diagnostic-hydraulique-presses-injection-5-signes-alerte",
    title: "Diagnostic hydraulique sur presses à injection : 5 signes d'alerte",
    excerpt:
      "<p>Une chute de pression soudaine, des cycles allongés ou des fuites intermittentes : votre groupe hydraulique vous envoie des signaux. Apprenez à les lire avant la panne totale.</p>",
    date: "2025-04-15T09:00:00",
    author: { node: { name: "Équipe Unitek", slug: "equipe-unitek" } },
  },
  {
    slug: "amdec-plasturgie-ameliorer-trs",
    title: "AMDEC en plasturgie : récupérer 15 % de TRS perdu en 6 mois",
    excerpt:
      "<p>Appliquée méthodiquement sur un parc de 12 presses à injection, la démarche AMDEC a permis de récupérer 15 % de TRS perdu en six mois. Retour sur la méthode et les résultats obtenus.</p>",
    date: "2025-03-08T09:00:00",
    author: { node: { name: "Équipe Unitek", slug: "equipe-unitek" } },
  },
  {
    slug: "retrofit-keba-em300-ligne-soufflage",
    title: "Rétrofit KEBA EM 300 : retour d'expérience sur une ligne de soufflage",
    excerpt:
      "<p>Face à un pupitre KEBA EM 300 hors service sur une souffleuse rotative 24 postes, nous avons opté pour une migration vers un IPC Beckhoff TwinCAT. Déroulement et enseignements.</p>",
    date: "2025-01-22T09:00:00",
    author: { node: { name: "Équipe Unitek", slug: "equipe-unitek" } },
  },
];

export const MOCK_POSTS_FULL: WPPost[] = [
  {
    id: "mock-1",
    slug: "diagnostic-hydraulique-presses-injection-5-signes-alerte",
    title: "Diagnostic hydraulique sur presses à injection : 5 signes d'alerte",
    excerpt:
      "<p>Une chute de pression soudaine, des cycles allongés ou des fuites intermittentes : votre groupe hydraulique vous envoie des signaux. Apprenez à les lire avant la panne totale.</p>",
    date: "2025-04-15T09:00:00",
    modified: "2025-04-15T09:00:00",
    author: { node: { name: "Équipe Unitek", slug: "equipe-unitek" } },
    categories: { nodes: [{ name: "Hydraulique", slug: "hydraulique" }] },
    tags: {
      nodes: [
        { name: "presse injection", slug: "presse-injection" },
        { name: "diagnostic hydraulique", slug: "diagnostic-hydraulique" },
        { name: "maintenance préventive", slug: "maintenance-preventive" },
      ],
    },
    seo: {
      title:
        "Diagnostic hydraulique presses à injection : 5 signes d'alerte | Unitek",
      description:
        "Chute de pression, cavitation, fuites, cycles irréguliers : 5 indicateurs clés pour diagnostiquer votre groupe hydraulique avant la panne totale.",
      canonicalUrl:
        "https://unitek-automation.fr/blog/diagnostic-hydraulique-presses-injection-5-signes-alerte",
      openGraph: {
        title:
          "Diagnostic hydraulique presses à injection : 5 signes d'alerte",
        description:
          "Chute de pression, cavitation, fuites, cycles irréguliers : 5 indicateurs clés pour diagnostiquer votre groupe hydraulique avant la panne totale.",
        url: "https://unitek-automation.fr/blog/diagnostic-hydraulique-presses-injection-5-signes-alerte",
      },
    },
    content: `
<p>Le groupe hydraulique est le cœur battant de toute presse à injection. Sa défaillance ne prévient généralement pas — sauf si l'on sait où regarder. Voici les cinq indicateurs que nos techniciens examinent systématiquement lors d'un audit sur site.</p>

<h2>1. Chute de pression d'injection</h2>
<p>La pression d'injection est le paramètre le plus sensible. Une dérive de plus de 20 bar par rapport au nominal process indique soit une usure de la pompe à pistons axiaux, soit un clapet anti-retour défectueux au niveau de la vis. À surveiller : le temps de montée en pression lors de la phase d'injection — s'il s'allonge de plus de 15 %, engagez le diagnostic sans attendre.</p>

<h2>2. Augmentation anormale de la température d'huile</h2>
<p>Au-delà de 55 °C en régime établi, l'huile hydraulique se dégrade plus rapidement et sa viscosité chute, ce qui accélère l'usure des organes internes. Vérifiez l'échangeur thermique huile/eau, l'état des filtres de retour (colmatage) et le niveau du réservoir. Un échangeur encrassé peut à lui seul faire monter la température de 8 à 12 °C.</p>

<h2>3. Fuites extérieures sur les flexibles et raccords</h2>
<p>Les fuites visibles sont rarement catastrophiques en elles-mêmes, mais elles signalent un vieillissement des garnitures. Dans 70 % des cas que nous traitons, un flexible qui suinte en surface est un flexible qui va éclater dans les 3 à 6 mois suivants. Procédez à un remplacement préventif groupé lors du prochain arrêt planifié.</p>

<h2>4. Bruit de cavitation sur la pompe</h2>
<p>Un claquement métallique ou un sifflement à la mise en route évoque une cavitation — manque d'huile en aspiration, filtre d'aspiration colmaté ou tuyauterie d'aspiration trop étroite. C'est une urgence : la cavitation détruit les pistons et le plateau inclinable en quelques heures d'utilisation.</p>

<h2>5. Cycles d'injection irréguliers et dérives de temps</h2>
<p>Si vos temps de cycle varient de plus de 2 % d'un cycle à l'autre sans modification du programme, le problème vient souvent des distributeurs proportionnels. Leurs solénoïdes peuvent se polariser ou leur bobinage se dégrader thermiquement. Un test ampèremétrique sur chaque solénoïde permet de confirmer en moins d'une heure.</p>

<h2>Que faire ensuite ?</h2>
<p>Un diagnostic hydraulique complet prend moins d'une journée. Il comprend la mesure de rendement volumétrique de la pompe, l'analyse d'huile (viscosité, indice acide, particules en suspension), le contrôle des pressions de tarage des limiteurs et la thermographie infrarouge de l'ensemble des raccords. C'est la base d'un plan de maintenance préventive efficace pour votre parc de presses.</p>
`,
  },
  {
    id: "mock-2",
    slug: "amdec-plasturgie-ameliorer-trs",
    title: "AMDEC en plasturgie : récupérer 15 % de TRS perdu en 6 mois",
    excerpt:
      "<p>Appliquée méthodiquement sur un parc de 12 presses à injection, la démarche AMDEC a permis de récupérer 15 % de TRS perdu en six mois. Retour sur la méthode et les résultats obtenus.</p>",
    date: "2025-03-08T09:00:00",
    modified: "2025-03-08T09:00:00",
    author: { node: { name: "Équipe Unitek", slug: "equipe-unitek" } },
    categories: {
      nodes: [
        { name: "Maintenance préventive", slug: "maintenance-preventive" },
      ],
    },
    tags: {
      nodes: [
        { name: "AMDEC", slug: "amdec" },
        { name: "TRS", slug: "trs" },
        { name: "plasturgie", slug: "plasturgie" },
      ],
    },
    seo: {
      title: "AMDEC en plasturgie : récupérer 15 % de TRS perdu en 6 mois | Unitek",
      description:
        "Méthode AMDEC appliquée à un parc de 12 presses à injection : identification des IPR critiques, plan de maintenance ciblé et gain de 15 % de TRS en six mois.",
      canonicalUrl:
        "https://unitek-automation.fr/blog/amdec-plasturgie-ameliorer-trs",
      openGraph: {
        title: "AMDEC en plasturgie : récupérer 15 % de TRS perdu en 6 mois",
        description:
          "Méthode AMDEC appliquée à un parc de 12 presses à injection : identification des IPR critiques et gain de 15 % de TRS en six mois.",
        url: "https://unitek-automation.fr/blog/amdec-plasturgie-ameliorer-trs",
      },
    },
    content: `
<p>Le TRS (Taux de Rendement Synthétique) est l'indicateur de performance qui cristallise toutes les pertes d'une ligne de production. Quand il chute, c'est souvent le signe d'un parc machine qui accumule des défaillances non traitées. Voici comment nous avons aidé un industriel lyonnais du secteur emballage à récupérer 15 points de TRS en six mois, grâce à une démarche AMDEC structurée.</p>

<h2>Le contexte : 12 presses, un TRS moyen de 61 %</h2>
<p>Notre client exploite 12 presses à injection (Engel, Arburg, Husky) pour la fabrication de bouchons et corps de flacons. Au démarrage de la mission, son TRS moyen était de 61 % — pour une cible contractuelle de 76 %. Les pertes se répartissaient ainsi : 40 % sur les arrêts non planifiés, 35 % sur les micro-arrêts et 25 % sur les rebuts matière.</p>

<h2>Phase 1 — Construction de l'AMDEC</h2>
<p>Nous avons mené une semaine d'observation terrain en trois équipes, en relevant tous les incidents avec leur durée, leur fréquence et leur impact sur la production. Chaque mode de défaillance a été coté selon trois critères : <strong>gravité</strong> (impact sur la production et la qualité), <strong>occurrence</strong> (fréquence d'apparition) et <strong>détectabilité</strong> (possibilité de l'anticiper). L'Indice de Priorité de Risque (IPR = G × O × D) a permis de hiérarchiser 47 modes de défaillance identifiés.</p>

<h2>Phase 2 — Les 5 IPR critiques</h2>
<p>Les cinq défaillances à IPR supérieur à 200 étaient :</p>
<ul>
<li>Usure du clapet anti-retour vis (IPR 288) — cause principale des variations de poids pièces</li>
<li>Dérive thermocouple buse (IPR 264) — à l'origine de 60 % des rebuts matière</li>
<li>Usure joints vérin de fermeture (IPR 216) — allongement progressif du temps de cycle</li>
<li>Dérive servo-valve injection (IPR 210) — cycles irréguliers à haute cadence</li>
<li>Filtre huile colmaté (IPR 204) — montée en température accélérée</li>
</ul>

<h2>Phase 3 — Plan d'action et résultats</h2>
<p>En concentrant les ressources de maintenance sur ces cinq points, en imposant des fréquences d'intervention préventive adaptées et en constituant un stock de sécurité des pièces critiques, les résultats à six mois ont été les suivants :</p>
<ul>
<li>TRS moyen : 76,4 % (vs 61 % au départ)</li>
<li>Arrêts non planifiés : −68 %</li>
<li>Rebuts matière : −41 %</li>
<li>Coût de maintenance corrective : −52 %</li>
</ul>

<h2>Ce que cette mission enseigne</h2>
<p>L'AMDEC n'est pas un outil réservé aux grandes industries. Appliquée sur deux à trois jours par un technicien expérimenté, elle transforme un historique de pannes en un plan d'action concret et priorisé. C'est le meilleur investissement de maintenance que nous connaissons pour un parc de presses à injection.</p>
`,
  },
  {
    id: "mock-3",
    slug: "retrofit-keba-em300-ligne-soufflage",
    title:
      "Rétrofit KEBA EM 300 : retour d'expérience sur une ligne de soufflage",
    excerpt:
      "<p>Face à un pupitre KEBA EM 300 hors service sur une souffleuse rotative 24 postes, nous avons opté pour une migration vers un IPC Beckhoff TwinCAT. Déroulement et enseignements.</p>",
    date: "2025-01-22T09:00:00",
    modified: "2025-01-22T09:00:00",
    author: { node: { name: "Équipe Unitek", slug: "equipe-unitek" } },
    categories: { nodes: [{ name: "Rétrofit IHM", slug: "retrofit-ihm" }] },
    tags: {
      nodes: [
        { name: "KEBA", slug: "keba" },
        { name: "Beckhoff", slug: "beckhoff" },
        { name: "rétrofit IHM", slug: "retrofit-ihm" },
        { name: "souffleuse", slug: "souffleuse" },
      ],
    },
    seo: {
      title:
        "Rétrofit KEBA EM 300 vers Beckhoff TwinCAT : retour d'expérience | Unitek",
      description:
        "Migration d'un pupitre KEBA EM 300 hors service vers un IPC Beckhoff sur une souffleuse rotative 24 postes. Méthodologie, contraintes et résultats de production.",
      canonicalUrl:
        "https://unitek-automation.fr/blog/retrofit-keba-em300-ligne-soufflage",
      openGraph: {
        title:
          "Rétrofit KEBA EM 300 vers Beckhoff TwinCAT : retour d'expérience",
        description:
          "Migration d'un pupitre KEBA EM 300 hors service vers un IPC Beckhoff sur une souffleuse rotative 24 postes.",
        url: "https://unitek-automation.fr/blog/retrofit-keba-em300-ligne-soufflage",
      },
    },
    content: `
<p>Les pupitres KEBA EM 300, omniprésents sur les machines de soufflage des années 2000-2010, commencent à poser des problèmes sérieux d'approvisionnement en pièces de rechange. Quand la carte CPU d'un KEBA EM 300 rend l'âme sur une souffleuse rotative 24 postes chez l'un de nos clients conditionneurs, la décision d'un rétrofit complet s'impose d'elle-même.</p>

<h2>Contexte et contraintes du projet</h2>
<p>La machine concernée est une souffleuse rotative Sidel SBO 12 de 2007, produisant 12 000 bouteilles PET par heure. Le KEBA EM 300 gérait l'ensemble de la cinématique roue de transfert, le séquencement des fours IR et la régulation des 24 moules de soufflage. Contrainte principale : l'arrêt de production ne pouvait pas excéder 72 heures (week-end de maintenance planifié).</p>

<h2>Choix technique : IPC Beckhoff CX5140 + Panel PC CP2916</h2>
<p>Après analyse du câblage existant, nous avons opté pour :</p>
<ul>
<li>Un IPC Beckhoff CX5140 (Intel Core i7, TwinCAT 3) en remplacement de l'unité de calcul KEBA</li>
<li>Un Panel PC CP2916 15" tactile en remplacement du pupitre opérateur</li>
<li>Des coupleurs EtherCAT EK1100 pour reprendre les 340 entrées/sorties existantes via des modules EL1809 et EL2809</li>
<li>Maintien du câblage terrain d'origine (économie de 60 % sur le coût du câblage)</li>
</ul>

<h2>Méthodologie de reprise de programme</h2>
<p>La récupération du programme KEBA s'est faite en deux étapes. La sauvegarde constructeur sur disquette 3,5" (!) a d'abord été extraite et convertie via un outil dédié. Les variables process, les recettes matière et les paramètres machine ont ensuite été réintégrés dans TwinCAT 3 en respectant l'architecture fonctionnelle d'origine. Seul l'IHM opérateur a été intégralement repensé : interface tactile, gestion des alarmes en français, accès par niveau opérateur/technicien/maintenance.</p>

<h2>Mise en service et résultats</h2>
<p>La mise en service complète a été réalisée en 58 heures (vendredi 18h → lundi 8h), avec 4 heures de marge sur l'objectif de 72h. Les résultats de production à 30 jours sont les suivants :</p>
<ul>
<li>Cadence nominale atteinte dès le lundi matin : 11 800 bouteilles/h (vs 12 000 avant panne — la différence sera résorbée après réglage des moules)</li>
<li>Temps de changement de format : −35 % grâce aux recettes automatisées sur le nouveau pupitre</li>
<li>Interventions maintenance liées à l'IHM : zéro dans les 30 jours suivants</li>
</ul>

<h2>Les enseignements clés</h2>
<p>Ce projet confirme que le rétrofit IHM est presque toujours moins coûteux que le remplacement d'une machine saine. La clé du succès réside dans la préparation : extraction du programme existant avant la panne, cartographie exhaustive du câblage et choix d'un intégrateur maîtrisant à la fois l'ancien et le nouveau système. Pour les KEBA EM 200/300 encore en service, nous recommandons de lancer la préparation du rétrofit sans attendre la défaillance.</p>
`,
  },
];
