import { Link } from "react-router";
import cmsThumbnail from "../../imports/web-portfolio-cms-1.png";
import orderingThumbnail from "../../imports/web-portfolio-2.jpg";

export function Work() {
  const projects = [
    {
      id: "cms-migration",
      title: "CMS Migration for a Multi-Brand Restaurant Platform",
      description:
        "Legacy CMS migration for multiple restaurant brands, enabling scalable brand customization and autonomy for non-design teams.",
      year: "2022-2026",
      tags: ["Systems Design", "B2B", "QSR"],
      link: "/case-study/cms-migration",
      thumbnail: cmsThumbnail,
    },
    {
      id: "ordering-optimization",
      title: "Ordering Experience Optimization for a Restaurant Platform",
      description:
        "Redesigned ordering flow to reduce friction, increase conversion from 6% to 8%, and improve loyalty program adoption.",
      year: "2022-2026",
      tags: ["Growth", "E-commerce", "QSR"],
      link: "/case-study/ordering-optimization",
      thumbnail: orderingThumbnail,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className="mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight">Selected work</h1>
        <p className="text-base sm:text-lg text-[#666] max-w-3xl leading-relaxed">
          Two featured case studies demonstrating systems design and growth
          optimization for multi-brand restaurant platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            className={`group border border-[#e5e5e0] rounded-sm overflow-hidden ${
              project.link === "#"
                ? "cursor-default"
                : "hover:border-[#2a2a2a] transition-colors"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="aspect-video lg:aspect-square overflow-hidden">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="bg-[#e5e5e0] w-full h-full flex items-center justify-center">
                    <span className="text-[#888] text-sm">
                      {project.title.substring(0, 30)}... thumbnail
                    </span>
                  </div>
                )}</div>
              <div className="lg:col-span-2 p-6 lg:py-8">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl tracking-tight group-hover:text-[#666] transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-sm text-[#888] whitespace-nowrap ml-4">
                    {project.year}
                  </span>
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
        ))}
      </div>
    </div>
  );
}
