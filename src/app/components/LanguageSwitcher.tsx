import { Link, useLocation } from "react-router";
import { Globe } from "lucide-react";
import { SUPPORTED_LOCALES, LOCALE_LABELS } from "../../i18n";
import { useLocale, useTranslations, switchLocaleInPath } from "../../i18n/context";
import { rememberLocale } from "../../i18n/detect";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function LanguageSwitcher() {
  const locale = useLocale();
  const location = useLocation();
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-1.5 text-xs text-[#666] border border-[#e5e5e0] rounded-sm px-2 py-1 hover:border-[#2a2a2a] hover:text-[#2a2a2a] transition-colors outline-none"
        aria-label={t.nav.languageLabel}
      >
        <Globe size={12} />
        {LOCALE_LABELS[locale]}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {SUPPORTED_LOCALES.map((loc) => (
          <DropdownMenuItem key={loc} asChild>
            <Link
              to={switchLocaleInPath(location.pathname, loc)}
              onClick={() => rememberLocale(loc)}
              className={loc === locale ? "font-medium" : ""}
            >
              {LOCALE_LABELS[loc]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
