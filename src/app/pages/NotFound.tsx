import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "../../i18n/context";

export function NotFound() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-5xl sm:text-6xl mb-4 sm:mb-6 tracking-tight">{t.notFound.title}</h1>
        <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4 tracking-tight">{t.notFound.subtitle}</h2>
        <p className="text-sm sm:text-base text-[#666] mb-6 sm:mb-8 max-w-md px-4">
          {t.notFound.body}
        </p>
        <Link
          to={`/${locale}`}
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2a2a2a] text-[#fafaf8] rounded-sm hover:bg-[#444] transition-colors text-sm sm:text-base"
        >
          <ArrowLeft size={16} />
          {t.notFound.backHome}
        </Link>
      </div>
    </div>
  );
}
