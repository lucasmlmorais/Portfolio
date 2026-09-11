import profilePhoto from "../../imports/profile.jpg";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-12 sm:mb-16 tracking-tight">About</h1>

      {/* Bio */}
      <section className="mb-16 pb-16 border-b border-[#e5e5e0]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            <p className="text-[#666] leading-relaxed mb-4">
              I came into design sideways: a bachelor's in graphic design,
              another in information systems management, and a postgrad in
              interaction design squeezed in between. That mix is probably
              why I gravitate toward the parts of product work that are more
              plumbing than polish — component systems, edge cases, the CMS
              nobody wants to touch.
            </p>
            <p className="text-[#666] leading-relaxed">
              Most of the last five years have been inside one restaurant
              platform, watching it grow from one brand to eight while I
              rebuilt the systems underneath it. Before that, I spent two
              years designing conversational flows for Brazil's largest
              chatbot consultancy, for clients ranging from computer hardware
              to pulp and paper.
            </p>
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
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg mb-2 tracking-tight">
                Postgraduate Specialization in Interaction Design
              </h3>
              <p className="text-[#666]">
                Pontifical Catholic University of Minas Gerais
              </p>
              <p className="text-sm text-[#888] mt-1">2019 - 2020</p>
            </div>
            <div>
              <h3 className="text-lg mb-2 tracking-tight">
                Bachelor's Degree in Graphic Design
              </h3>
              <p className="text-[#666]">
                Universidade do Estado de Minas Gerais
              </p>
              <p className="text-sm text-[#888] mt-1">2014 - 2018</p>
            </div>
            <div>
              <h3 className="text-lg mb-2 tracking-tight">
                Bachelor's Degree in Information Systems Management
              </h3>
              <p className="text-[#666]">
                Universidade Federal de Minas Gerais
              </p>
              <p className="text-sm text-[#888] mt-1">2011 - 2013</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Tools & Skills */}
      <Reveal>
        <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">
            Tools & Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm text-[#888] mb-3">What I do</h3>
              <p className="text-[#666] leading-relaxed">
                Product design, UX/UI, interaction design, discovery
                workshops, conversational design, AI-assisted workflows
              </p>
            </div>
            <div>
              <h3 className="text-sm text-[#888] mb-3">Tools</h3>
              <p className="text-[#666] leading-relaxed">
                Figma, Figma Make, FigJam, Adobe Suite
              </p>
            </div>
            <div>
              <h3 className="text-sm text-[#888] mb-3">Languages</h3>
              <p className="text-[#666] leading-relaxed">
                Portuguese (native), English (full professional), German
                (professional working), Spanish (limited working)
              </p>
            </div>
            <div>
              <h3 className="text-sm text-[#888] mb-3">Certifications</h3>
              <p className="text-[#666] leading-relaxed">
                Qualitative UX Research, UX Weekend, Design Sprint, Design
                Thinking Facilitation, B1
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Awards */}
      <Reveal>
        <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Awards</h2>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <h3 className="text-lg mb-2 tracking-tight">
              1st Place — Students to Business (S2B)
            </h3>
            <p className="text-[#666]">Microsoft Innovation Center</p>
          </div>
        </section>
      </Reveal>

      {/* Domains */}
      <section className="mb-12 sm:mb-16">
        <Reveal>
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Domains of experience</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "QSR & Restaurant Tech",
              body: "Multi-brand platforms, ordering systems, loyalty programs, operations dashboards, POS integration",
            },
            {
              title: "B2B E-commerce",
              body: "Enterprise dashboards, SaaS platforms, analytics tools, admin interfaces, permission systems",
            },
            {
              title: "Digital Transformation",
              body: "Legacy system migrations, process digitization, change management, training and adoption",
            },
            {
              title: "Growth & Optimization",
              body: "Conversion optimization, funnel analysis, A/B testing, user research, behavioral analytics",
            },
            {
              title: "Design Systems",
              body: "Component libraries, design tokens, documentation, governance, multi-brand theming",
            },
            {
              title: "AI-Assisted Workflows",
              body: "Using AI tools to move faster on production work — including shipping this portfolio's code with Claude Code",
            },
          ].map((domain, index) => (
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
