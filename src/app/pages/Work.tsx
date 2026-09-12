import { Link } from "react-router";
import cmsThumbnail from "../../imports/web-portfolio-cms-1.png";
import orderingThumbnail from "../../imports/web-portfolio-2.jpg";
import { Reveal } from "../components/Reveal";
import { SpotlightGlow } from "../components/SpotlightGlow";
import { handleSpotlightMove } from "../lib/spotlight";
import { useLocale, useTranslations } from "../../i18n/context";

export function Work() {
  const t = useTranslations();
  const locale = useLocale();

  const projects = [
    {
      id: "cms-migration",
      link: `/${locale}/case-study/cms-migration`,
      thumbnail: cmsThumbnail,
      ...t.work.projects.cms,
    },
    {
      id: "ordering-optimization",
      link: `/${locale}/case-study/ordering-optimization`,
      thumbnail: orderingThumbnail,
      ...t.work.projects.ordering,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className="mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight">{t.work.title}</h1>
        <p className="text-base sm:text-lg text-[#666] max-w-3xl leading-relaxed">
          {t.work.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <Link
              to={project.link}
              onMouseMove={handleSpotlightMove}
              className="group relative block border border-[#e5e5e0] rounded-sm overflow-hidden hover:border-[#2a2a2a] transition-colors"
            >
              <SpotlightGlow />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-6 lg:py-8">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl tracking-tight group-hover:text-[#666] transition-colors">
                      {project.title}
                    </h2>
                    <span className="text-sm text-[#888] whitespace-nowrap ml-4">2022-2026</span>
                  </div>
                  <p className="text-[#666] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#f0f0ec] text-[#666] text-xs rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
