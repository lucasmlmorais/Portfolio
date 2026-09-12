import type { Dictionary } from "./types";
import { en } from "./locales/en";
import { ptBR } from "./locales/pt-BR";
import { es } from "./locales/es";

export const SUPPORTED_LOCALES = ["pt-br", "en", "es"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "pt-br";

export const LOCALE_LABELS: Record<Locale, string> = {
  "pt-br": "PT-BR",
  en: "EN-US",
  es: "ES",
};

export const dictionaries: Record<Locale, Dictionary> = {
  "pt-br": ptBR,
  en,
  es,
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export type { Dictionary } from "./types";
