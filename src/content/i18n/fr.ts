import type { Copy } from "./types";

export const copy: Copy = {
  meta: {
    title: "FixReviews — Répondez aux avis négatifs automatiquement",
    description:
      "Gérez, priorisez et répondez aux avis Google en quelques clics. Gagnez du temps, protégez votre réputation, augmentez votre note.",
    ogImageAlt: "FixReviews - Transformez vos avis négatifs en clients fidèles",
  },
  nav: {
    home: "Accueil",
    features: "Fonctionnalités",
    pricing: "Tarifs",
    demo: "Booker une démo",
    login: "Se connecter",
    ctaPrimary: "Rejoindre la waitlist",
    ctaSecondary: "Voir une démo",
  },
  hero: {
    eyebrow: "Powered by AI",
    title:
      "Transformez vos avis négatifs en clients fidèles — automatiquement.",
    subtitle:
      "FixReviews propose des réponses prêtes à l'envoi, priorise les urgences et mesure l'impact sur votre note moyenne.",
    primaryCta: "Essayer gratuitement",
    secondaryCta: "Voir comment ça marche",
    logosNote: "Déjà testé par des commerces locaux",
  },
  socialProof: {
    title: "Ils nous font confiance",
    logos: ["Restaurant", "Salon de coiffure", "Garage"],
  },
  features: {
    title: "Ce que FixReviews fait pour vous",
    subtitle: "Du tri automatique aux réponses prêtes à l'emploi",
    items: [
      {
        icon: "MessageSquareWarning",
        title: "Priorisation intelligente",
        description:
          "Identifie les avis urgents et vous alerte immédiatement.",
      },
      {
        icon: "Bot",
        title: "Réponses assistées par IA",
        description:
          "Propose des réponses personnalisées, respectueuses et efficaces.",
      },
      {
        icon: "ChartLine",
        title: "Suivi de la satisfaction",
        description:
          "Visualisez l'évolution de votre note et l'impact de chaque réponse.",
      },
    ],
  },
  howItWorks: {
    title: "Comment ça marche",
    steps: [
      {
        icon: "PlugZap",
        title: "Connectez votre fiche Google",
        description:
          "Renseignez l'URL de votre fiche Google Business Profile.",
      },
      {
        icon: "Inbox",
        title: "Récupération des avis",
        description:
          "Vos avis récents sont centralisés et classés automatiquement.",
      },
      {
        icon: "PenLine",
        title: "Répondez en 1 clic",
        description: "Validez la suggestion d'IA et publiez la réponse.",
      },
    ],
    cta: "Démarrer en 2 minutes",
  },
  metrics: {
    title: "Impact mesuré",
    stats: [
      { label: "Temps gagné / semaine", value: "~3h" },
      { label: "Réponses automatisées", value: "70%" },
      { label: "↑ Note moyenne", value: "+0.3 ★" },
    ],
  },
  pricing: {
    title: "Tarifs simples et transparents",
    subtitle: "Commencez gratuitement, évoluez selon vos besoins",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: "0€",
        period: "/mois",
        ctaLabel: "Commencer",
        features: [
          "Jusqu'à 20 réponses/mois",
          "1 emplacement",
          "Suggestions IA",
        ],
        badge: "Gratuit",
      },
      {
        id: "pro",
        name: "Pro",
        price: "29€",
        period: "/mois",
        ctaLabel: "Passer au Pro",
        ctaHrefEnvKey: "STRIPE_CHECKOUT_PRO_URL",
        features: [
          "Jusqu'à 150 réponses/mois",
          "3 emplacements",
          "Priorisation avancée",
          "Exports & analytics",
        ],
      },
      {
        id: "premium",
        name: "Premium",
        price: "99€",
        period: "/mois",
        ctaLabel: "Choisir Premium",
        ctaHrefEnvKey: "STRIPE_CHECKOUT_PREMIUM_URL",
        features: [
          "Réponses illimitées",
          "Multi-équipes",
          "SLA & support prioritaire",
          "Webhooks & API",
        ],
      },
    ],
    legalNote:
      "Les paiements sont gérés par Stripe. Vous pouvez annuler à tout moment.",
  },
  testimonials: {
    title: "Ce que disent nos clients",
    items: [
      {
        quote: "On a réduit de moitié le temps passé sur les avis.",
        author: "Sarah, Restauratrice",
      },
      {
        quote:
          "Les réponses sont pro et adaptées au ton de notre marque.",
        author: "Mehdi, Directeur Marketing",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Puis-je l'utiliser sans carte bancaire ?",
        a: "Oui, l'offre Starter est gratuite.",
      },
      {
        q: "Comment se fait la connexion à Google ?",
        a: "Via Google OAuth et l'URL de votre fiche Google Business Profile.",
      },
      {
        q: "Puis-je personnaliser le ton des réponses ?",
        a: "Oui, vous pouvez ajuster le ton et valider chaque réponse avant envoi.",
      },
    ],
  },
  footer: {
    copyright: "© {{year}} FixReviews",
    links: [
      { label: "Confidentialité", href: "/privacy" },
      { label: "Conditions", href: "/terms" },
    ],
  },
  auth: {
    loginTitle: "Bienvenue sur FixReviews",
    loginSubtitle: "Connectez-vous avec Google pour commencer",
    googleButton: "Se connecter avec Google",
    logoutButton: "Se déconnecter",
  },
  onboarding: {
    title: "Configuration initiale",
    subtitle:
      "Dites-nous en plus sur votre entreprise pour personnaliser les réponses.",
    fields: {
      company: "Nom de l'entreprise",
      industry: "Secteur d'activité",
      gmbUrl: "URL de votre fiche Google Business Profile",
      timezone: "Fuseau horaire",
      submit: "Enregistrer et continuer",
    },
  },
  dashboard: {
    title: "Tableau de bord",
    kpis: [
      { label: "Avis cette semaine", help: "Total d'avis reçus 7j" },
      { label: "Avis négatifs non traités", help: "À répondre en priorité" },
      { label: "Note moyenne (30j)" },
    ],
    emptyState: {
      title: "Aucun avis encore",
      description:
        "Connectez votre fiche Google pour commencer à recevoir des recommandations.",
      cta: "Connecter ma fiche",
    },
  },
};

export default copy;
