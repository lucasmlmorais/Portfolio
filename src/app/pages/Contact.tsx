import { Mail, Linkedin, MapPin } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight">Get in touch</h1>
      <p className="text-base sm:text-lg md:text-xl text-[#666] mb-12 sm:mb-16 leading-relaxed max-w-2xl">
        Open to new roles and interesting collaborations — especially around
        growth, systems design, or making messy operations simpler. Email's
        fastest.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
        <Reveal>
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
          <p className="text-sm text-[#888] mt-2">Best for project details</p>
        </Reveal>

        <Reveal delay={0.08}>
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
          <p className="text-sm text-[#888] mt-2">Good for a quick hello</p>
        </Reveal>
      </div>

      <Reveal>
        <div className="border-t border-[#e5e5e0] pt-8 sm:pt-12 mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={20} className="text-[#666]" />
            <h2 className="text-2xl tracking-tight">Location</h2>
          </div>
          <p className="text-lg text-[#666]">Belo Horizonte, Minas Gerais, Brazil</p>
          <p className="text-sm text-[#888] mt-2">
            BRT (UTC-3) · open to remote work and occasional travel
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="bg-[#f0f0ec] p-8 rounded-sm">
          <h2 className="text-2xl mb-4 tracking-tight">What I'm looking for</h2>
          <p className="text-[#666] leading-relaxed">
            Growth and conversion work in complicated product environments.
            Design systems for platforms with more than one brand. Digital
            transformation where design is solving an operational problem,
            not decorating one. If that's what you're building, let's talk —
            I usually reply within a day or two.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
