import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ImageModal } from "../components/ImageModal";
import { Reveal } from "../components/Reveal";
import { ReadingProgress } from "../components/ReadingProgress";
import cmsHero from "../../imports/hero.jpg";
import cmsProblem from "../../imports/problem.jpg";
import cmsComponentSystem from "../../imports/component_system.png";

export function CaseStudyCMS() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

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
        to="/work"
        className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#2a2a2a] transition-colors mb-8 sm:mb-12"
      >
        <ArrowLeft size={14} />
        Back to work
      </Link>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight">
        CMS Migration for a Multi-Brand Restaurant Platform
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-[#666] mb-8 sm:mb-12 leading-relaxed">
        A legacy CMS was holding back 8 restaurant brands. I used the
        migration to rethink multi-brand design from the ground up, instead
        of just porting old components to new tech.
      </p>

      <div
        className="rounded-sm mb-12 sm:mb-16 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
        onClick={() => setModalImage({ src: cmsHero, alt: "CMS Migration for Multi-Brand Restaurant Platform" })}
      >
        <img
          src={cmsHero}
          alt="CMS Migration for Multi-Brand Restaurant Platform"
          className="w-full h-auto"
        />
      </div>

      {/* Overview */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm text-[#888] mb-2">Year</h3>
            <p className="text-lg">2022-2026</p>
          </div>
          <div>
            <h3 className="text-sm text-[#888] mb-2">Role</h3>
            <p className="text-lg">Lead Product Designer</p>
          </div>
          <div>
            <h3 className="text-sm text-[#888] mb-2">Domain</h3>
            <p className="text-lg">QSR, B2B, Systems Design</p>
          </div>
        </div>
        <p className="text-[#666] leading-relaxed">
          A multi-brand restaurant platform ran on a legacy CMS approaching
          end-of-life — hard to maintain, limited, and blocking growth. The
          migration became a chance to redesign the component architecture
          itself, so brands with distinct identities could share one system
          instead of each duplicating their own.
        </p>
      </section>
      </Reveal>

      {/* Problem */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Problem</h2>
        <p className="text-[#666] leading-relaxed mb-4">
          The legacy CMS was hard to maintain and approaching deprecation.
          Brand managers, marketers, and ops staff had no way to update
          content without pulling in a designer.
        </p>
        <p className="text-[#666] leading-relaxed mb-4">
          Each brand also ran its own custom components — duplicated work,
          slower brand launches, and a system that couldn't keep up with the
          company's growth.
        </p>
        <div
          className="rounded-sm mt-8 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setModalImage({ src: cmsProblem, alt: "Problem illustration" })}
        >
          <img
            src={cmsProblem}
            alt="Problem illustration"
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </div>
      </section>
      </Reveal>

      {/* My Role */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">My role</h2>
        <p className="text-[#666] leading-relaxed mb-4">
          As Lead Product Designer:
        </p>
        <ul className="space-y-3 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Audited the existing CMS to find migration requirements and pain points</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Designed a component architecture that could support multiple brands on shared foundations</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Worked with engineering to define technical constraints and the rollout plan</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Worked with brand and marketing teams to validate the new workflows</span>
          </li>
        </ul>
      </section>
      </Reveal>

      {/* Constraints */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Constraints</h2>
        <ul className="space-y-3 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Zero downtime — the sites serve millions of customers</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Support 8+ brands with distinct visual identities</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Non-technical teams need to update content independently</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Limited engineering time meant a phased rollout</span>
          </li>
        </ul>
      </section>
      </Reveal>

      {/* Strategic Approach */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Strategic approach</h2>
        <p className="text-[#666] leading-relaxed mb-6">
          Rather than rebuild the same components in a new CMS, I treated
          this as a chance to rethink multi-brand design at scale.
        </p>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">
            Component variant system
          </h3>
          <p className="text-[#666] leading-relaxed">
            A flexible architecture with themeable variants replaced
            hundreds of one-off components with a few dozen — and made the
            system more flexible, not less.
          </p>
        </div>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">Self-service tooling</h3>
          <p className="text-[#666] leading-relaxed">
            CMS workflows simple enough that brand and marketing teams could
            update content and pick the right variant without a design
            review for routine changes.
          </p>
        </div>
        <div
          className="rounded-sm mt-8 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setModalImage({ src: cmsComponentSystem, alt: "Component system" })}
        >
          <img
            src={cmsComponentSystem}
            alt="Component system"
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </div>
      </section>
      </Reveal>

      {/* Key Design Decisions */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Key design decisions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg mb-3 tracking-tight">
              Shared foundations, flexible surfaces
            </h3>
            <p className="text-[#666] leading-relaxed">
              One layout grid, spacing system, and set of accessibility
              patterns across every brand. Color, type, and imagery stayed
              flexible enough to keep each brand distinct.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 tracking-tight">
              Progressive enhancement
            </h3>
            <p className="text-[#666] leading-relaxed">
              Components worked out of the box with minimal setup, with
              advanced options underneath for power users — less onboarding
              friction, more room for edge cases.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 tracking-tight">Migration-friendly</h3>
            <p className="text-[#666] leading-relaxed">
              Mapped every old component to its replacement, with clear
              upgrade paths for anything deprecated.
            </p>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Outcomes */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Outcomes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { stat: "75%", label: "Fewer design requests for routine content updates" },
            { stat: "60%", label: "Fewer unique components to maintain across all brands" },
            { stat: "100%", label: "Migration completed with zero customer-facing downtime" },
            { stat: "3 weeks", label: "Time to launch a new brand, down from months" },
          ].map((item, index) => (
            <Reveal key={item.stat} delay={index * 0.08}>
              <div className="bg-[#f0f0ec] p-6 rounded-sm h-full">
                <div className="text-3xl mb-2">{item.stat}</div>
                <p className="text-[#666]">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-[#666] leading-relaxed">
          The design team stopped fielding routine update requests and
          started spending that time on new brand launches instead.
        </p>
      </section>
      </Reveal>

      {/* Learnings */}
      <Reveal>
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Learnings</h2>
        <ul className="space-y-4 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>A technical migration is a chance for a strategic redesign, not just a lift-and-shift</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Tooling for non-designers has to be powerful and forgiving — different from designing for end customers</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Loop in brand and engineering from day one, or pay for it in rework later</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>A hard constraint — support 8+ brands — forced a better, more scalable system than an easier brief would have</span>
          </li>
        </ul>
      </section>
      </Reveal>
    </div>
    </>
  );
}
