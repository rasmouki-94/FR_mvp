export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  ctaLabel: string;
  ctaHrefEnvKey?: string;
  features: string[];
  badge?: string;
};

export type FAQ = {
  q: string;
  a: string;
};

export type Copy = {
  meta: {
    title: string;
    description: string;
    ogImageAlt?: string;
  };
  nav: {
    home: string;
    features: string;
    pricing: string;
    demo: string;
    login: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    logosNote?: string;
  };
  socialProof: {
    title: string;
    logos: string[];
  };
  features: {
    title: string;
    subtitle: string;
    items: Feature[];
  };
  howItWorks: {
    title: string;
    steps: Feature[];
    cta: string;
  };
  metrics: {
    title: string;
    stats: { label: string; value: string }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: Plan[];
    legalNote?: string;
  };
  testimonials: {
    title: string;
    items: { quote: string; author: string; role?: string }[];
  };
  faq: {
    title: string;
    items: FAQ[];
  };
  footer: {
    copyright: string;
    links: { label: string; href: string }[];
  };
  auth: {
    loginTitle: string;
    loginSubtitle: string;
    googleButton: string;
    logoutButton: string;
  };
  onboarding: {
    title: string;
    subtitle: string;
    fields: {
      company: string;
      industry: string;
      gmbUrl: string;
      timezone: string;
      submit: string;
    };
  };
  dashboard: {
    title: string;
    kpis: { label: string; help?: string }[];
    emptyState: {
      title: string;
      description: string;
      cta: string;
    };
  };
};
