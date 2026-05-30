import profilePhoto from "../../imports/profile.jpg";

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-12 sm:mb-16 tracking-tight">About</h1>

      {/* Short Bio */}
      <section className="mb-16 pb-16 border-b border-[#e5e5e0]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl mb-6 tracking-tight">About Me</h2>
            <p className="text-[#666] leading-relaxed">
              I'm a Product Designer driven by curiosity for people and
              technology. My background spans Interaction Design, UX/UI, Product
              Design, Design Thinking, and AI-assisted workflows, with experience
              across digital transformation, QSR, B2B e-commerce, chatbots, and
              international product environments. I value clarity, collaboration,
              and thoughtful systems that create meaningful outcomes for both
              users and businesses.
            </p>
          </div>
          <div className="aspect-square rounded-sm overflow-hidden">
            <img
              src={profilePhoto}
              alt="Profile photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">
          Experience Highlights
        </h2>
        <p className="text-[#666] leading-relaxed mb-4">
          I've worked across multiple product contexts, including:
        </p>
        <ul className="space-y-2 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Digital transformation consultancies</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>QSR and restaurant platforms</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>B2B e-commerce</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Internal management systems</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Data and analytics products</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Chatbot and conversational interfaces</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>International product environments</span>
          </li>
        </ul>
      </section>

      {/* Education */}
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

      {/* Tools & Skills */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">
          Tools & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm text-[#888] mb-3">What I Do</h3>
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
        </div>
      </section>

      {/* Awards */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Awards</h2>
        <div className="bg-[#f0f0ec] p-6 rounded-sm">
          <h3 className="text-lg mb-2 tracking-tight">
            1st Place — Students to Business (S2B)
          </h3>
          <p className="text-[#666]">Microsoft Innovation Center</p>
        </div>
      </section>

      {/* Domains */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Domains of Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <h3 className="text-lg mb-2 tracking-tight">
              QSR & Restaurant Tech
            </h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Multi-brand platforms, ordering systems, loyalty programs,
              operations dashboards, POS integration
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <h3 className="text-lg mb-2 tracking-tight">B2B E-commerce</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Enterprise dashboards, SaaS platforms, analytics tools, admin
              interfaces, permission systems
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <h3 className="text-lg mb-2 tracking-tight">
              Digital Transformation
            </h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Legacy system migrations, process digitization, change management,
              training and adoption
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <h3 className="text-lg mb-2 tracking-tight">
              Growth & Optimization
            </h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Conversion optimization, funnel analysis, A/B testing, user
              research, behavioral analytics
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <h3 className="text-lg mb-2 tracking-tight">Design Systems</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Component libraries, design tokens, documentation, governance,
              multi-brand theming
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <h3 className="text-lg mb-2 tracking-tight">
              AI-Assisted Workflows
            </h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Content generation tools, productivity augmentation, design
              automation, workflow optimization
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
