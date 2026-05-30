import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ImageModal } from "../components/ImageModal";
import cmsHero from "../../imports/hero.jpg";
import cmsProblem from "../../imports/problem.jpg";
import cmsComponentSystem from "../../imports/component_system.png";

export function CaseStudyCMS() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
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
        Legacy CMS migration for multiple restaurant brands, enabling scalable
        brand customization and autonomy for non-design teams.
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
          A multi-brand restaurant platform was operating on a legacy CMS that
          had become difficult to maintain, limited in functionality, and
          approaching end-of-life. This project involved migrating to a modern
          CMS while redesigning the component architecture to support multiple
          brands with distinct visual identities.
        </p>
      </section>

      {/* Problem */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Problem</h2>
        <p className="text-[#666] leading-relaxed mb-4">
          The legacy CMS was limited, hard to maintain, and approaching
          deprecation. Non-design teams—including brand managers, marketers, and
          operations staff—lacked autonomy to update brand content without
          design intervention.
        </p>
        <p className="text-[#666] leading-relaxed mb-4">
          Each brand required custom components, creating a maintenance burden
          and slowing down the ability to launch new brands or update existing
          ones. The existing system couldn't scale to support the organization's
          growth trajectory.
        </p>
        <div
          className="rounded-sm mt-8 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setModalImage({ src: cmsProblem, alt: "Problem illustration" })}
        >
          <img
            src={cmsProblem}
            alt="Problem illustration"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* My Role */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">My role</h2>
        <p className="text-[#666] leading-relaxed mb-4">
          As Lead Product Designer, I was responsible for:
        </p>
        <ul className="space-y-3 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Auditing the existing CMS and component library to identify pain
              points and migration requirements
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Designing a flexible component architecture that could support
              multiple brand identities with shared foundations
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Collaborating with engineering to define technical constraints and
              implementation approach
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Working with brand and marketing teams to understand their needs
              and validate solutions
            </span>
          </li>
        </ul>
      </section>

      {/* Constraints */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Constraints</h2>
        <ul className="space-y-3 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Migration had to happen without disrupting live sites serving
              millions of customers
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              New system needed to support 8+ brands with distinct visual
              identities
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Non-technical team members needed to be able to update content
              independently
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Limited engineering resources required prioritization and phased
              rollout
            </span>
          </li>
        </ul>
      </section>

      {/* Strategic Approach */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Strategic approach</h2>
        <p className="text-[#666] leading-relaxed mb-6">
          Instead of simply recreating existing components in the new CMS, I saw
          this as an opportunity to rethink how we approached multi-brand
          design at scale.
        </p>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">
            Component variant system
          </h3>
          <p className="text-[#666] leading-relaxed">
            Designed a flexible component architecture with reusable variants
            that could be themed per brand. This reduced the number of unique
            components from hundreds to dozens, while actually increasing design
            flexibility.
          </p>
        </div>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">Self-service tooling</h3>
          <p className="text-[#666] leading-relaxed">
            Created intuitive CMS workflows that empowered non-design teams to
            update content, choose appropriate component variants, and maintain
            brand consistency without design review for routine updates.
          </p>
        </div>
        <div
          className="rounded-sm mt-8 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setModalImage({ src: cmsComponentSystem, alt: "Component system" })}
        >
          <img
            src={cmsComponentSystem}
            alt="Component system"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Key Design Decisions */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Key design decisions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg mb-3 tracking-tight">
              Shared foundations, flexible surfaces
            </h3>
            <p className="text-[#666] leading-relaxed">
              Established shared layout grids, spacing systems, and accessibility
              patterns across all brands, while allowing flexibility in color,
              typography, and imagery to maintain brand distinction.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 tracking-tight">
              Progressive enhancement
            </h3>
            <p className="text-[#666] leading-relaxed">
              Designed components to work well with minimal configuration out of
              the box, with advanced options available for power users. This
              reduced onboarding friction while supporting sophisticated use
              cases.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 tracking-tight">Migration-friendly</h3>
            <p className="text-[#666] leading-relaxed">
              Created mapping between old and new components to streamline
              content migration, with clear upgrade paths for deprecated
              patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Outcomes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <div className="text-3xl mb-2">75%</div>
            <p className="text-[#666]">
              Reduction in design requests for routine content updates
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <div className="text-3xl mb-2">60%</div>
            <p className="text-[#666]">
              Fewer unique components to maintain across all brands
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <div className="text-3xl mb-2">100%</div>
            <p className="text-[#666]">
              Successful migration with zero customer-facing downtime
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <div className="text-3xl mb-2">3 weeks</div>
            <p className="text-[#666]">
              Reduced time to launch new brand from months to weeks
            </p>
          </div>
        </div>
        <p className="text-[#666] leading-relaxed">
          The migration was completed on schedule without disrupting live sites.
          Non-design teams gained the autonomy they needed, and the design team
          could focus on strategic initiatives rather than routine updates.
        </p>
      </section>

      {/* Learnings */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Learnings</h2>
        <ul className="space-y-4 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Technical migrations are opportunities for strategic redesign, not
              just lift-and-shift exercises
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Designing for non-design users requires different thinking than
              designing for end customers—tooling needs to be both powerful and
              forgiving
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Close collaboration with brand and engineering teams from day one
              prevented misalignment and rework later
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Constraints (like needing to support multiple brands) can actually
              lead to better, more scalable design solutions
            </span>
          </li>
        </ul>
      </section>
    </div>
    </>
  );
}
