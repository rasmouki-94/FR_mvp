/**
 * Application configuration
 * All product-specific settings and constants
 */

export const appConfig = {
  // Product identity
  name: process.env.NEXT_PUBLIC_APP_NAME || "FixReviews",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  description: "Transformez vos avis négatifs en clients fidèles — automatiquement.",

  // Brand colors (matching Tailwind config)
  colors: {
    primary: "#111827",      // gray-900
    secondary: "#2563EB",    // blue-600
    accent: "#14B8A6",       // teal-500
    bg: "#0B0F1A",          // custom dark bg
    text: "#F8FAFC",        // slate-50
  },

  // Typography
  fonts: {
    primary: "Inter, ui-sans-serif, system-ui, sans-serif",
  },

  // Feature flags
  features: {
    useGoogleAuth: true,
    useStripeCheckoutLink: true,
    i18nEnabled: true,
  },

  // Localization
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "fr",
    fallbackLocale: "en",
    supportedLocales: ["fr", "en"] as const,
  },

  // External integrations
  integrations: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    stripe: {
      // Stripe Checkout links (direct links, no embedded checkout)
      checkoutProUrl: process.env.STRIPE_CHECKOUT_PRO_URL || process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_PRO_URL,
      checkoutPremiumUrl: process.env.STRIPE_CHECKOUT_PREMIUM_URL || process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_PREMIUM_URL,
    },
    ai: {
      // Placeholder - no secrets in code
      openaiEnabled: !!process.env.OPENAI_API_KEY,
      anthropicEnabled: !!process.env.ANTHROPIC_API_KEY,
    },
  },

  // Auth configuration
  auth: {
    nextAuthUrl: process.env.NEXTAUTH_URL || "http://localhost:3000",
    nextAuthSecret: process.env.NEXTAUTH_SECRET,
  },

  // Database
  database: {
    url: process.env.DATABASE_URL,
  },

  // Plans (if needed for server-side logic)
  plans: {
    starter: {
      id: "starter",
      name: "Starter",
      monthlyResponseLimit: 20,
      locationLimit: 1,
    },
    pro: {
      id: "pro",
      name: "Pro",
      monthlyResponseLimit: 150,
      locationLimit: 3,
    },
    premium: {
      id: "premium",
      name: "Premium",
      monthlyResponseLimit: -1, // unlimited
      locationLimit: -1, // unlimited
    },
  },
} as const;

export type AppConfig = typeof appConfig;

export default appConfig;
