import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ImageModal } from "../components/ImageModal";
import { Reveal } from "../components/Reveal";
import { ReadingProgress } from "../components/ReadingProgress";
import { useLocale, useTranslations } from "../../i18n/context";
import orderingHero from "../../imports/case-studies/ordering-intro.png";
import orderingShowcase1 from "../../imports/case-studies/ordering-showcase-1.png";
import orderingShowcase2 from "../../imports/case-studies/ordering-showcase-2.png";
import orderingProblemDesktopEn from "../../imports/case-studies/ordering-problem-en.png";
import orderingProblemDesktopPtBr from "../../imports/case-studies/ordering-problem-pt-br.png";
import orderingProblemDesktopEs from "../../imports/case-studies/ordering-problem-es.png";
import orderingProblemMobileEn from "../../imports/case-studies/ordering-problem-mobile-en.png";
import orderingProblemMobilePtBr from "../../imports/case-studies/ordering-problem-mobile-pt-br.png";
import orderingProblemMobileEs from "../../imports/case-studies/ordering-problem-mobile-es.png";
import orderingStrategicDesktopEn from "../../imports/case-studies/ordering-strategic-desktop-en.png";
import orderingStrategicDesktopPtBr from "../../imports/case-studies/ordering-strategic-desktop-pt-br.png";
import orderingStrategicDesktopEs from "../../imports/case-studies/ordering-strategic-desktop-es.png";
import orderingStrategicMobileEn from "../../imports/case-studies/ordering-strategic-mobile-en.png";
import orderingStrategicMobilePtBr from "../../imports/case-studies/ordering-strategic-mobile-pt-br.png";
import orderingStrategicMobileEs from "../../imports/case-studies/ordering-strategic-mobile-es.png";

const orderingProblemDesktop = {
  "pt-br": orderingProblemDesktopPtBr,
  en: orderingProblemDesktopEn,
  es: orderingProblemDesktopEs,
};

const orderingProblemMobile = {
  "pt-br": orderingProblemMobilePtBr,
  en: orderingProblemMobileEn,
  es: orderingProblemMobileEs,
};

const orderingStrategicDesktop = {
  "pt-br": orderingStrategicDesktopPtBr,
  en: orderingStrategicDesktopEn,
  es: orderingStrategicDesktopEs,
};

const orderingStrategicMobile = {
  "pt-br": orderingStrategicMobilePtBr,
  en: orderingStrategicMobileEn,
  es: orderingStrategicMobileEs,
};

export function CaseStudyOrdering() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const t = useTranslations().caseStudyOrdering;
  const locale = useLocale();
  const { common } = useTranslations();

  return (
    <>
      <ReadingProgress />
      <ImageModal
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <Link
        to={`/${locale}/work`}
        className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#2a2a2a] transition-colors mb-8 sm:mb-12"
      >
        <ArrowLeft size={14} />
        {common.backToWork}
      </Link>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight">
        {t.title}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-[#666] mb-8 sm:mb-12 leading-relaxed">
        {t.subtitle}
      </p>

      <div
        className="rounded-sm mb-12 sm:mb-16 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
        onClick={() => setModalImage({ src: orderingHero, alt: t.title })}
      >
        <img src={orderingHero} alt={t.title} className="w-full h-auto" />
      </div>

      {/* Overview */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.overview.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm text-[#888] mb-2">{t.overview.yearLabel}</h3>
            <p className="text-lg">{t.overview.year}</p>
          </div>
          <div>
            <h3 className="text-sm text-[#888] mb-2">{t.overview.roleLabel}</h3>
            <p className="text-lg">{t.overview.role}</p>
          </div>
          <div>
            <h3 className="text-sm text-[#888] mb-2">{t.overview.domainLabel}</h3>
            <p className="text-lg">{t.overview.domain}</p>
          </div>
        </div>
        <p className="text-[#666] leading-relaxed">{t.overview.body}</p>
      </section>
      </Reveal>

      {/* Showcase */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="rounded-sm overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => setModalImage({ src: orderingShowcase1, alt: t.title })}
          >
            <img
              src={orderingShowcase1}
              alt={t.title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
          <div
            className="rounded-sm overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => setModalImage({ src: orderingShowcase2, alt: t.title })}
          >
            <img
              src={orderingShowcase2}
              alt={t.title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      </Reveal>

      {/* Problem */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.problem.heading}</h2>
        {t.problem.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-[#666] leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
        <div
          className="rounded-sm mt-8 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setModalImage({ src: orderingProblemDesktop[locale], alt: t.problem.heading })}
        >
          <img
            src={orderingProblemMobile[locale]}
            alt={t.problem.heading}
            loading="lazy"
            decoding="async"
            className="w-full h-auto md:hidden"
          />
          <img
            src={orderingProblemDesktop[locale]}
            alt={t.problem.heading}
            loading="lazy"
            decoding="async"
            className="hidden w-full h-auto md:block"
          />
        </div>
      </section>
      </Reveal>

      {/* My Role */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.role.heading}</h2>
        <p className="text-[#666] leading-relaxed mb-4">{t.role.intro}</p>
        <ul className="space-y-3 text-[#666] leading-relaxed">
          {t.role.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[#2a2a2a] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      </Reveal>

      {/* Constraints */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.constraints.heading}</h2>
        <ul className="space-y-3 text-[#666] leading-relaxed">
          {t.constraints.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[#2a2a2a] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      </Reveal>

      {/* Strategic Approach */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.approach.heading}</h2>
        <p className="text-[#666] leading-relaxed mb-6">{t.approach.intro}</p>
        {t.approach.boxes.map((box) => (
          <div key={box.title} className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
            <h3 className="text-lg mb-3 tracking-tight">{box.title}</h3>
            <p className="text-[#666] leading-relaxed">{box.body}</p>
          </div>
        ))}
        <div
          className="rounded-sm mt-8 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setModalImage({ src: orderingStrategicDesktop[locale], alt: t.approach.boxes[0].title })}
        >
          <img
            src={orderingStrategicMobile[locale]}
            alt={t.approach.boxes[0].title}
            loading="lazy"
            decoding="async"
            className="w-full h-auto md:hidden"
          />
          <img
            src={orderingStrategicDesktop[locale]}
            alt={t.approach.boxes[0].title}
            loading="lazy"
            decoding="async"
            className="hidden w-full h-auto md:block"
          />
        </div>
      </section>
      </Reveal>

      {/* Key Design Decisions */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.decisions.heading}</h2>
        <div className="space-y-8">
          {t.decisions.items.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg mb-3 tracking-tight">{item.title}</h3>
              <p className="text-[#666] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      </Reveal>

      {/* Outcomes */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.outcomes.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {t.outcomes.stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="bg-[#f0f0ec] p-6 rounded-sm h-full">
                <div className="text-3xl mb-2">{item.stat}</div>
                <p className="text-[#666]">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-[#666] leading-relaxed">{t.outcomes.closing}</p>
      </section>
      </Reveal>

      {/* Learnings */}
      <Reveal>
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.learnings.heading}</h2>
        <ul className="space-y-4 text-[#666] leading-relaxed">
          {t.learnings.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[#2a2a2a] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      </Reveal>
    </div>
    </>
  );
}
