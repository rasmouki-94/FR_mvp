import type { Copy } from "./i18n/types";
import frCopy from "./i18n/fr";
import enCopy from "./i18n/en";

export type { Copy, Feature, Plan, FAQ } from "./i18n/types";

export type Locale = "fr" | "en";

const defaultLocale: Locale = "fr";

const translations: Record<Locale, Copy> = {
  fr: frCopy,
  en: enCopy,
};

/**
 * Get copy content for a specific locale
 * @param locale - The locale to get copy for (defaults to 'fr')
 * @returns The copy object for the specified locale
 */
export function getCopy(locale?: string): Copy {
  const normalizedLocale = (locale?.toLowerCase() || defaultLocale) as Locale;
  return translations[normalizedLocale] || translations[defaultLocale];
}

/**
 * Get the default locale
 */
export function getDefaultLocale(): Locale {
  return defaultLocale;
}

/**
 * Check if a locale is supported
 */
export function isLocaleSupported(locale: string): boolean {
  return locale in translations;
}
