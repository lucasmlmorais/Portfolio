import { DEFAULT_LOCALE, isLocale, type Locale } from "./index";

const STORAGE_KEY = "preferred-locale";

function matchBrowserLocale(): Locale | null {
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const raw of candidates) {
    const lower = raw.toLowerCase();
    if (lower.startsWith("pt")) return "pt-br";
    if (lower.startsWith("es")) return "es";
    if (lower.startsWith("en")) return "en";
  }
  return null;
}

export function detectPreferredLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored ?? undefined)) return stored as Locale;
  return matchBrowserLocale() ?? DEFAULT_LOCALE;
}

export function rememberLocale(locale: Locale) {
  window.localStorage.setItem(STORAGE_KEY, locale);
}
