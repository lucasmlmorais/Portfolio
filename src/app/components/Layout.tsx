import { Outlet, Link, useLocation, useParams } from "react-router";
import { Menu, X, Command } from "lucide-react";
import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DEFAULT_LOCALE, isLocale } from "../../i18n";
import { LocaleProvider, useLocale, useTranslations } from "../../i18n/context";
import { rememberLocale } from "../../i18n/detect";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NotFound } from "../pages/NotFound";

const CommandPalette = lazy(() =>
  import("./CommandPalette").then((m) => ({ default: m.CommandPalette })),
);

export function Layout() {
  const { lang } = useParams();

  if (!isLocale(lang)) {
    return (
      <LocaleProvider locale={DEFAULT_LOCALE}>
        <Chrome invalidLocale />
      </LocaleProvider>
    );
  }

  return (
    <LocaleProvider locale={lang}>
      <Chrome />
    </LocaleProvider>
  );
}

function Chrome({ invalidLocale = false }: { invalidLocale?: boolean }) {
  const locale = useLocale();
  const t = useTranslations();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    if (!invalidLocale) rememberLocale(locale);
  }, [locale, t, invalidLocale]);

  const isActive = (path: string) => {
    const base = `/${locale}`;
    if (path === base) {
      return location.pathname === base;
    }
    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const path = (segment: string) => `/${locale}${segment ? `/${segment}` : ""}`;

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#2a2a2a]">
      <Suspense fallback={null}>
        <CommandPalette />
      </Suspense>
      <nav className="border-b border-[#e5e5e0] bg-[#fafaf8] sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between gap-4">
            <Link to={path("")} className="text-lg tracking-tight shrink-0" onClick={closeMobileMenu}>
              {t.nav.brand}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                to={path("")}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(path("")) ? "text-[#2a2a2a]" : "text-[#888] hover:text-[#2a2a2a]"
                }`}
              >
                {t.nav.home}
              </Link>
              <Link
                to={path("work")}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(path("work")) ? "text-[#2a2a2a]" : "text-[#888] hover:text-[#2a2a2a]"
                }`}
              >
                {t.nav.work}
              </Link>
              <Link
                to={path("about")}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(path("about")) ? "text-[#2a2a2a]" : "text-[#888] hover:text-[#2a2a2a]"
                }`}
              >
                {t.nav.about}
              </Link>
              <Link
                to={path("resume")}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(path("resume")) ? "text-[#2a2a2a]" : "text-[#888] hover:text-[#2a2a2a]"
                }`}
              >
                {t.nav.resume}
              </Link>
              <Link
                to={path("contact")}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(path("contact")) ? "text-[#2a2a2a]" : "text-[#888] hover:text-[#2a2a2a]"
                }`}
              >
                {t.nav.contact}
              </Link>
              <button
                onClick={() =>
                  document.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "k", metaKey: true }),
                  )
                }
                className="hidden lg:flex items-center gap-1.5 text-xs text-[#888] border border-[#e5e5e0] rounded-sm px-2 py-1 hover:border-[#2a2a2a] hover:text-[#2a2a2a] transition-colors"
                aria-label={t.nav.commandHint}
              >
                <Command size={12} />K
              </button>
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 -mr-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={t.nav.toggleMenu}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-[#e5e5e0]">
              <div className="flex flex-col gap-4">
                <Link
                  to={path("")}
                  className={`text-base tracking-wide transition-colors ${
                    isActive(path("")) ? "text-[#2a2a2a]" : "text-[#888]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {t.nav.home}
                </Link>
                <Link
                  to={path("work")}
                  className={`text-base tracking-wide transition-colors ${
                    isActive(path("work")) ? "text-[#2a2a2a]" : "text-[#888]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {t.nav.work}
                </Link>
                <Link
                  to={path("about")}
                  className={`text-base tracking-wide transition-colors ${
                    isActive(path("about")) ? "text-[#2a2a2a]" : "text-[#888]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {t.nav.about}
                </Link>
                <Link
                  to={path("resume")}
                  className={`text-base tracking-wide transition-colors ${
                    isActive(path("resume")) ? "text-[#2a2a2a]" : "text-[#888]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {t.nav.resume}
                </Link>
                <Link
                  to={path("contact")}
                  className={`text-base tracking-wide transition-colors ${
                    isActive(path("contact")) ? "text-[#2a2a2a]" : "text-[#888]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <main>
        {invalidLocale ? (
          <NotFound />
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}
