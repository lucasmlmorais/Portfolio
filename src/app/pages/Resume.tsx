import { Download } from "lucide-react";
import { useTranslations } from "../../i18n/context";

export function Resume() {
  const t = useTranslations();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0 mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight">{t.nav.resume}</h1>
        <a
          href={`${import.meta.env.BASE_URL}Lucas_Morais_Resume.pdf`}
          download="Lucas_Morais_Resume.pdf"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2a2a2a] text-[#fafaf8] rounded-sm hover:bg-[#444] transition-colors text-sm sm:text-base whitespace-nowrap"
        >
          <Download size={16} />
          {t.resume.downloadPdf}
        </a>
      </div>

      {/* Professional Summary */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.resume.summaryHeading}</h2>
        {t.resume.summary.map((paragraph, i) => (
          <p
            key={paragraph}
            className={`text-[#666] leading-relaxed ${i < t.resume.summary.length - 1 ? "mb-4" : ""}`}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Experience */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-8 sm:mb-12 tracking-tight">{t.resume.experienceHeading}</h2>
        <div className="space-y-12">
          {t.resume.jobs.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl mb-1 tracking-tight">{job.title}</h3>
                  <p className="text-[#666]">{job.company}</p>
                  <p className="text-sm text-[#888] mt-1">{job.location}</p>
                </div>
                <span className="text-sm text-[#888] whitespace-nowrap">{job.period}</span>
              </div>
              {job.intro && (
                <p className="text-[#666] leading-relaxed mb-3">{job.intro}</p>
              )}
              <ul className="space-y-2 text-[#666] leading-relaxed">
                {job.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#2a2a2a] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.resume.educationHeading}</h2>
        <div className="space-y-6">
          {t.resume.education.map((item) => (
            <div key={item.degree} className="flex items-start justify-between">
              <div>
                <h3 className="text-lg mb-1 tracking-tight">{item.degree}</h3>
                <p className="text-[#666]">{item.school}</p>
              </div>
              <span className="text-sm text-[#888] whitespace-nowrap">{item.years}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Skills */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.resume.skillsHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.resume.skills.map((skill) => (
            <div key={skill.label}>
              <h3 className="text-sm text-[#888] mb-3">{skill.label}</h3>
              <p className="text-[#666] leading-relaxed">{skill.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
