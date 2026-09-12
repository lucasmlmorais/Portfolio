import { Link } from "react-router";
import { ArrowRight, Download } from "lucide-react";
import cmsThumbnail from "../../imports/web-portfolio-cms-1.png";
import orderingThumbnail from "../../imports/web-portfolio-2.jpg";
import profileImage from "../../imports/profile-1.jpg";
import { Reveal } from "../components/Reveal";
import { SpotlightGlow } from "../components/SpotlightGlow";
import { handleSpotlightMove } from "../lib/spotlight";
import { useLocale, useTranslations } from "../../i18n/context";

export function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-[#e5e5e0]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-[#666]">{t.home.openToWork}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 sm:mb-6 leading-tight">
            {t.home.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#666] mb-6 sm:mb-8 leading-relaxed">
            {t.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to={`/${locale}/work`}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2a2a2a] text-[#fafaf8] rounded-sm hover:bg-[#444] transition-colors text-sm sm:text-base"
            >
              {t.common.viewSelectedWork}
              <ArrowRight size={16} />
            </Link>
            <a
              href={`${import.meta.env.BASE_URL}Lucas_Morais_Resume.pdf`}
              download="Lucas_Morais_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#2a2a2a] text-[#2a2a2a] rounded-sm hover:bg-[#f0f0ec] transition-colors text-sm sm:text-base"
            >
              <Download size={16} />
              {t.common.downloadResume}
            </a>
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-[#e5e5e0]">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl mb-8 sm:mb-12 tracking-tight">{t.home.howIWorkTitle}</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {t.home.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <h3 className="text-xl mb-3 tracking-tight">{pillar.title}</h3>
              <p className="text-[#666] leading-relaxed">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-[#e5e5e0]">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">{t.home.featuredWorkTitle}</h2>
          <Link
            to={`/${locale}/work`}
            className="text-sm text-[#666] hover:text-[#2a2a2a] transition-colors inline-flex items-center gap-2"
          >
            {t.home.viewAllProjects}
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <Link
              to={`/${locale}/case-study/cms-migration`}
              onMouseMove={handleSpotlightMove}
              className="group relative block border border-[#e5e5e0] rounded-sm overflow-hidden hover:border-[#2a2a2a] transition-colors"
            >
              <SpotlightGlow />
              <div className="aspect-video overflow-hidden">
                <img
                  src={cmsThumbnail}
                  alt={t.home.projects.cms.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 tracking-tight group-hover:text-[#666] transition-colors">
                  {t.home.projects.cms.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  {t.home.projects.cms.blurb}
                </p>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to={`/${locale}/case-study/ordering-optimization`}
              onMouseMove={handleSpotlightMove}
              className="group relative block border border-[#e5e5e0] rounded-sm overflow-hidden hover:border-[#2a2a2a] transition-colors"
            >
              <SpotlightGlow />
              <div className="aspect-video overflow-hidden">
                <img
                  src={orderingThumbnail}
                  alt={t.home.projects.ordering.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 tracking-tight group-hover:text-[#666] transition-colors">
                  {t.home.projects.ordering.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  {t.home.projects.ordering.blurb}
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Short Bio */}
      <section className="py-12 sm:py-16 md:py-24">
        <h2 className="text-2xl sm:text-3xl mb-8 sm:mb-12 tracking-tight">{t.home.aboutTitle}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            {t.home.bioParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg text-[#666] leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <Link
              to={`/${locale}/about`}
              className="inline-flex items-center gap-2 text-sm text-[#2a2a2a] hover:text-[#666] transition-colors"
            >
              {t.home.moreAboutMe}
              <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="aspect-square rounded-sm overflow-hidden">
            <img
              src={profileImage}
              alt="Profile photo"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
