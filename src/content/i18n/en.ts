import type { Copy } from "./types";

export const copy: Copy = {
  meta: {
    title: "FixReviews — Respond to negative reviews automatically",
    description:
      "Manage, prioritize and respond to Google reviews in a few clicks. Save time, protect your reputation, increase your rating.",
    ogImageAlt: "FixReviews - Turn negative reviews into loyal customers",
  },
  nav: {
    home: "Home",
    features: "Features",
    pricing: "Pricing",
    demo: "Book a demo",
    login: "Sign in",
    ctaPrimary: "Join waitlist",
    ctaSecondary: "See demo",
  },
  hero: {
    eyebrow: "Powered by AI",
    title: "Turn negative reviews into loyal customers — automatically.",
    subtitle:
      "FixReviews provides ready-to-send responses, prioritizes urgencies and measures the impact on your average rating.",
    primaryCta: "Try for free",
    secondaryCta: "See how it works",
    logosNote: "Already tested by local businesses",
  },
  socialProof: {
    title: "They trust us",
    logos: ["Restaurant", "Hair Salon", "Garage"],
  },
  features: {
    title: "What FixReviews does for you",
    subtitle: "From automatic sorting to ready-to-use responses",
    items: [
      {
        icon: "MessageSquareWarning",
        title: "Smart prioritization",
        description: "Identifies urgent reviews and alerts you immediately.",
      },
      {
        icon: "Bot",
        title: "AI-assisted responses",
        description:
          "Offers personalized, respectful and effective responses.",
      },
      {
        icon: "ChartLine",
        title: "Satisfaction tracking",
        description:
          "Visualize the evolution of your rating and the impact of each response.",
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    steps: [
      {
        icon: "PlugZap",
        title: "Connect your Google listing",
        description: "Enter your Google Business Profile URL.",
      },
      {
        icon: "Inbox",
        title: "Retrieve reviews",
        description:
          "Your recent reviews are centralized and automatically classified.",
      },
      {
        icon: "PenLine",
        title: "Respond in 1 click",
        description: "Validate the AI suggestion and publish the response.",
      },
    ],
    cta: "Start in 2 minutes",
  },
  metrics: {
    title: "Measured impact",
    stats: [
      { label: "Time saved / week", value: "~3h" },
      { label: "Automated responses", value: "70%" },
      { label: "↑ Average rating", value: "+0.3 ★" },
    ],
  },
  pricing: {
    title: "Simple and transparent pricing",
    subtitle: "Start for free, scale as you need",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: "$0",
        period: "/month",
        ctaLabel: "Get started",
        features: ["Up to 20 responses/month", "1 location", "AI suggestions"],
        badge: "Free",
      },
      {
        id: "pro",
        name: "Pro",
        price: "$29",
        period: "/month",
        ctaLabel: "Upgrade to Pro",
        ctaHrefEnvKey: "STRIPE_CHECKOUT_PRO_URL",
        features: [
          "Up to 150 responses/month",
          "3 locations",
          "Advanced prioritization",
          "Exports & analytics",
        ],
      },
      {
        id: "premium",
        name: "Premium",
        price: "$99",
        period: "/month",
        ctaLabel: "Choose Premium",
        ctaHrefEnvKey: "STRIPE_CHECKOUT_PREMIUM_URL",
        features: [
          "Unlimited responses",
          "Multi-teams",
          "SLA & priority support",
          "Webhooks & API",
        ],
      },
    ],
    legalNote:
      "Payments are processed by Stripe. You can cancel at any time.",
  },
  testimonials: {
    title: "What our customers say",
    items: [
      {
        quote: "We cut the time spent on reviews in half.",
        author: "Sarah, Restaurant Owner",
      },
      {
        quote: "The responses are professional and adapted to our brand tone.",
        author: "Mehdi, Marketing Director",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Can I use it without a credit card?",
        a: "Yes, the Starter offer is free.",
      },
      {
        q: "How does the Google connection work?",
        a: "Via Google OAuth and the URL of your Google Business Profile.",
      },
      {
        q: "Can I customize the tone of responses?",
        a: "Yes, you can adjust the tone and validate each response before sending.",
      },
    ],
  },
  footer: {
    copyright: "© {{year}} FixReviews",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  auth: {
    loginTitle: "Welcome to FixReviews",
    loginSubtitle: "Sign in with Google to get started",
    googleButton: "Sign in with Google",
    logoutButton: "Sign out",
  },
  onboarding: {
    title: "Initial setup",
    subtitle:
      "Tell us more about your business to personalize responses.",
    fields: {
      company: "Company name",
      industry: "Industry",
      gmbUrl: "Your Google Business Profile URL",
      timezone: "Timezone",
      submit: "Save and continue",
    },
  },
  dashboard: {
    title: "Dashboard",
    kpis: [
      { label: "Reviews this week", help: "Total reviews received in 7 days" },
      {
        label: "Untreated negative reviews",
        help: "To respond to as a priority",
      },
      { label: "Average rating (30d)" },
    ],
    emptyState: {
      title: "No reviews yet",
      description:
        "Connect your Google listing to start receiving recommendations.",
      cta: "Connect my listing",
    },
  },
};

export default copy;
