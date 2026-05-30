import { Mail, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight">Get in touch</h1>
      <p className="text-base sm:text-lg md:text-xl text-[#666] mb-12 sm:mb-16 leading-relaxed max-w-2xl">
        I'm currently open to new opportunities and collaborations. If you're
        working on something interesting—especially in growth, systems design,
        or operational efficiency—I'd love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Mail size={20} className="text-[#666]" />
            <h2 className="text-xl sm:text-2xl tracking-tight">Email</h2>
          </div>
          <a
            href="mailto:lucasmlmorais@gmail.com"
            className="text-lg text-[#666] hover:text-[#2a2a2a] transition-colors"
          >
            lucasmlmorais@gmail.com
          </a>
          <p className="text-sm text-[#888] mt-2">
            Best for project inquiries and detailed discussions
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Linkedin size={20} className="text-[#666]" />
            <h2 className="text-xl sm:text-2xl tracking-tight">LinkedIn</h2>
          </div>
          <a
            href="https://www.linkedin.com/in/lucasmlmorais"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-[#666] hover:text-[#2a2a2a] transition-colors"
          >
            www.linkedin.com/in/lucasmlmorais
          </a>
          <p className="text-sm text-[#888] mt-2">
            Connect for networking and quick questions
          </p>
        </div>
      </div>

      <div className="border-t border-[#e5e5e0] pt-8 sm:pt-12 mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <MapPin size={20} className="text-[#666]" />
          <h2 className="text-2xl tracking-tight">Location</h2>
        </div>
        <p className="text-lg text-[#666]">Belo Horizonte, Minas Gerais, Brazil</p>
        <p className="text-sm text-[#888] mt-2">
          BRT - (UTC-3) • Open to remote work and occasional travel
        </p>
      </div>

      <div className="bg-[#f0f0ec] p-8 rounded-sm">
        <h2 className="text-2xl mb-4 tracking-tight">What I'm looking for</h2>
        <p className="text-[#666] leading-relaxed mb-4">
          I'm particularly interested in roles that involve:
        </p>
        <ul className="space-y-2 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Growth and conversion optimization in complex product environments
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Design systems and operational design for multi-product platforms
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Digital transformation projects where design enables business
              efficiency
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              B2B SaaS with sophisticated user needs
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              AI-assisted design workflows and productivity tools
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-[#e5e5e0]">
        <p className="text-[#666] leading-relaxed">
          Whether you're hiring, looking for a collaborator, or just want to
          talk shop about design systems, growth, or operational efficiency—
          drop me a line. I typically respond within 24-48 hours.
        </p>
      </div>
    </div>
  );
}
