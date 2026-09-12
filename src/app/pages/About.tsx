import profilePhoto from "../../imports/profile.jpg";
import { Reveal } from "../components/Reveal";
import { useTranslations } from "../../i18n/context";

export function About() {
  const t = useTranslations();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-12 sm:mb-16 tracking-tight">{t.about.title}</h1>

      {/* Bio */}
      <section className="mb-16 pb-16 border-b border-[#e5e5e0]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            {t.about.bioParagraphs.map((paragraph, i) => (
              <p
                key={paragraph}
                className={`text-[#666] leading-relaxed ${i < t.about.bioParagraphs.length - 1 ? "mb-4" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="aspect-square rounded-sm overflow-hidden">
            <img
              src={profilePhoto}
              alt="Profile photo"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Education */}
      <Reveal>
        <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.about.education.heading}</h2>
          <div className="space-y-6">
            {t.about.education.items.map((item) => (
              <div key={item.degree}>
                <h3 className="text-lg mb-2 tracking-tight">{item.degree}</h3>
                <p className="text-[#666]">{item.school}</p>
                <p className="text-sm text-[#888] mt-1">{item.years}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Tools & Skills */}
      <Reveal>
        <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.about.toolsSkills.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm text-[#888] mb-3">{t.about.toolsSkills.whatIDoLabel}</h3>
              <p className="text-[#666] leading-relaxed">{t.about.toolsSkills.whatIDo}</p>
            </div>
            <div>
              <h3 className="text-sm text-[#888] mb-3">{t.about.toolsSkills.toolsLabel}</h3>
              <p className="text-[#666] leading-relaxed">{t.about.toolsSkills.tools}</p>
            </div>
            <div>
              <h3 className="text-sm text-[#888] mb-3">{t.about.toolsSkills.languagesLabel}</h3>
              <p className="text-[#666] leading-relaxed">{t.about.toolsSkills.languages}</p>
            </div>
            <div>
              <h3 className="text-sm text-[#888] mb-3">{t.about.toolsSkills.certificationsLabel}</h3>
              <p className="text-[#666] leading-relaxed">{t.about.toolsSkills.certifications}</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Awards */}
      <Reveal>
        <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.about.awards.heading}</h2>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <h3 className="text-lg mb-2 tracking-tight">{t.about.awards.title}</h3>
            <p className="text-[#666]">{t.about.awards.body}</p>
          </div>
        </section>
      </Reveal>

      {/* Domains */}
      <section className="mb-12 sm:mb-16">
        <Reveal>
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">{t.about.domains.heading}</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.about.domains.items.map((domain, index) => (
            <Reveal key={domain.title} delay={index * 0.05}>
              <div className="bg-[#f0f0ec] p-6 rounded-sm h-full">
                <h3 className="text-lg mb-2 tracking-tight">{domain.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{domain.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
