import { Download } from "lucide-react";

export function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0 mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight">Resume</h1>
        <button className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2a2a2a] text-[#fafaf8] rounded-sm hover:bg-[#444] transition-colors text-sm sm:text-base whitespace-nowrap">
          <Download size={16} />
          Download PDF
        </button>
      </div>

      {/* Professional Summary */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Professional Summary</h2>
        <p className="text-[#666] leading-relaxed">
          Senior Product Designer with experience across digital transformation,
          QSR, B2B e-commerce, conversational interfaces, and international
          product contexts. Focused on scalable, user-centered solutions that
          balance business goals, operational realities, and technical
          constraints.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-8 sm:mb-12 tracking-tight">
          Professional Experience
        </h2>
        <div className="space-y-12">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1 tracking-tight">Product Designer</h3>
                <p className="text-[#666]">dti digital</p>
                <p className="text-sm text-[#888] mt-1">
                  Belo Horizonte, Brazil
                </p>
              </div>
              <span className="text-sm text-[#888] whitespace-nowrap">
                April 2021 - Present
              </span>
            </div>
            <p className="text-[#666] leading-relaxed mb-3">
              Product Designer working end-to-end on the ideation and
              development of digital products with agile squads.
            </p>
            <ul className="space-y-2 text-[#666] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Since 2022, played a strategic role in client relationships and
                  design operations, helping communicate the value of UX and
                  collaborating with designers from specialties such as UX
                  Research, Visual Design, and UX Writing
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Work as a UX design reference across products in areas such as
                  data analytics, internal management platforms, mobile community
                  apps, restaurant and QSR platforms, e-commerce, and
                  international product contexts
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Facilitated multiple workshops for early discovery and
                  contributed to continuous discovery throughout longer product
                  engagements
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Participate in the mentorship program, supporting new designers
                  in building confidence across the full design process and
                  workshop facilitation
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Contribute monthly to the Design Guild with content focused on
                  soft skills development
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1 tracking-tight">UX Designer</h3>
                <p className="text-[#666]">Avenue Code</p>
                <p className="text-sm text-[#888] mt-1">
                  Belo Horizonte, Brazil
                </p>
              </div>
              <span className="text-sm text-[#888] whitespace-nowrap">
                November 2019 - April 2021
              </span>
            </div>
            <p className="text-[#666] leading-relaxed mb-3">
              UX Designer responsible for understanding user and client needs,
              designing conversational flows, and defining interactions between
              people and chatbots.
            </p>
            <ul className="space-y-2 text-[#666] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Collaborated closely with stakeholders and subject matter
                  experts to shape strong conversational experiences across
                  platforms such as WhatsApp, Facebook Messenger, Google Business
                  Messenger, and Web
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Worked as a consultant for the leading chatbot company in
                  Brazil, contributing to projects for companies across multiple
                  industries, from computer hardware to pulp and paper
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Facilitated discovery inceptions, aligned product improvements,
                  and briefly supported the design manager as a Buddy, helping
                  track team needs and career development
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1 tracking-tight">UX/UI Designer</h3>
                <p className="text-[#666]">Paiva Piovesan Softwares</p>
                <p className="text-sm text-[#888] mt-1">
                  Belo Horizonte, Brazil
                </p>
              </div>
              <span className="text-sm text-[#888] whitespace-nowrap">
                January 2019 - November 2019
              </span>
            </div>
            <ul className="space-y-2 text-[#666] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Responsible for the design department, conducted usability
                  tests, user interviews, and experience analysis while designing
                  interfaces for the company's software products
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Strong advocate for introducing Scrum into the development
                  process and acted as a Scrum Master adapted to the team's needs
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1 tracking-tight">
                  UX/UI Design Intern
                </h3>
                <p className="text-[#666]">Paiva Piovesan Softwares</p>
                <p className="text-sm text-[#888] mt-1">
                  Belo Horizonte, Brazil
                </p>
              </div>
              <span className="text-sm text-[#888] whitespace-nowrap">
                June 2018 - December 2018
              </span>
            </div>
            <ul className="space-y-2 text-[#666] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Worked on interface design for the Finance product across web
                  and mobile versions for Android and iPhone
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#2a2a2a] mt-1">•</span>
                <span>
                  Created promotional materials for the company's website and
                  social media, as well as internal communication assets
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Education</h2>
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg mb-1 tracking-tight">
                Postgraduate Specialization in Interaction Design
              </h3>
              <p className="text-[#666]">
                Pontifical Catholic University of Minas Gerais
              </p>
            </div>
            <span className="text-sm text-[#888] whitespace-nowrap">
              2019 - 2020
            </span>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg mb-1 tracking-tight">
                Bachelor's Degree in Graphic Design
              </h3>
              <p className="text-[#666]">
                Universidade do Estado de Minas Gerais
              </p>
            </div>
            <span className="text-sm text-[#888] whitespace-nowrap">
              2014 - 2018
            </span>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg mb-1 tracking-tight">
                Bachelor's Degree in Information Systems Management
              </h3>
              <p className="text-[#666]">
                Universidade Federal de Minas Gerais
              </p>
            </div>
            <span className="text-sm text-[#888] whitespace-nowrap">
              2011 - 2013
            </span>
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">
          Skills & Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm text-[#888] mb-3">Core Competencies</h3>
            <p className="text-[#666] leading-relaxed">
              Product Design, UX/UI Design, Interaction Design, Design Thinking,
              Discovery Workshops, Conversational Design, AI-assisted Design
              Workflows
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
              Portuguese (Native), English (Full Professional), German
              (Professional Working), Spanish (Limited Working)
            </p>
          </div>
          <div>
            <h3 className="text-sm text-[#888] mb-3">Certifications</h3>
            <p className="text-[#666] leading-relaxed">
              Qualitative UX Research, UX Weekend, Design Sprint, Design
              Thinking Facilitation, B1
            </p>
          </div>
          <div>
            <h3 className="text-sm text-[#888] mb-3">Product Domains</h3>
            <p className="text-[#666] leading-relaxed">
              Data Analytics, Internal Management Platforms, Mobile Apps, QSR &
              Restaurant Platforms, E-commerce, International Products, Chatbots
              & Conversational Interfaces
            </p>
          </div>
          <div>
            <h3 className="text-sm text-[#888] mb-3">Awards</h3>
            <p className="text-[#666] leading-relaxed">
              1st Place — Students to Business (S2B), Microsoft Innovation
              Center
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
