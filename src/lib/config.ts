import { AppConfigPublic } from "./types";

export const appConfig: AppConfigPublic = {
  projectName: "FixReviews",
  projectSlug: "fixreviews",
  keywords: [
    "FixReviews",
    "Google Reviews",
    "Review Management",
    "AI Review Response",
    "Business Reputation",
    "Customer Reviews",
    "Review Automation",
  ],
  description:
    "Transformez vos avis négatifs en clients fidèles — automatiquement.",
  auth: {
    enablePasswordAuth: false, // Google OAuth only
  },
  legal: {
    address: {
      street: "123 Rue de la Paix",
      city: "Paris",
      state: "Île-de-France",
      postalCode: "75001",
      country: "France",
    },
    email: "contact@fixreviews.fr",
    phone: "+33 1 23 45 67 89",
  },
  social: {
    twitter: "https://twitter.com/fixreviews",
    instagram: "https://instagram.com/fixreviews",
    linkedin: "https://linkedin.com/company/fixreviews",
    facebook: "https://facebook.com/fixreviews",
    youtube: "https://youtube.com/@fixreviews",
  },
  email: {
    senderName: "FixReviews",
    senderEmail: "contact@fixreviews.fr",
  },
};
