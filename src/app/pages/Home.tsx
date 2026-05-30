import { Link } from "react-router";
import { ArrowRight, Download } from "lucide-react";
import cmsThumbnail from "../../imports/web-portfolio-cms-1.png";
import orderingThumbnail from "../../imports/web-portfolio-2.jpg";
import profileImage from "../../imports/profile-1.jpg";

export function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-[#e5e5e0]">
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg text-[#666] italic mb-6 sm:mb-8">
            Lucas Morais
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 sm:mb-6 leading-tight">
            Senior Product Designer focused on growth, scale, and operational
            efficiency
          </h1>
          <p className="text-base sm:text-lg text-[#666] mb-6 sm:mb-8 leading-relaxed">
            Experienced in digital transformation, QSR, B2B e-commerce, and
            AI-assisted workflows. I design systems that enable teams to move
            faster and businesses to scale efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2a2a2a] text-[#fafaf8] rounded-sm hover:bg-[#444] transition-colors text-sm sm:text-base"
            >
              View selected work
              <ArrowRight size={16} />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#2a2a2a] text-[#2a2a2a] rounded-sm hover:bg-[#f0f0ec] transition-colors text-sm sm:text-base">
              <Download size={16} />
              Download resume
            </button>
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-[#e5e5e0]">
        <h2 className="text-2xl sm:text-3xl mb-8 sm:mb-12 tracking-tight">What I bring</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl mb-3 tracking-tight">Strategic thinking</h3>
            <p className="text-[#666] leading-relaxed">
              I connect design decisions to business outcomes, balancing user
              needs with operational constraints and growth objectives.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-3 tracking-tight">Systems design</h3>
            <p className="text-[#666] leading-relaxed">
              I build scalable component architectures and design systems that
              empower teams to ship faster without sacrificing quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-3 tracking-tight">
              Operational efficiency
            </h3>
            <p className="text-[#666] leading-relaxed">
              I optimize workflows and reduce friction in both user experiences
              and team processes, enabling sustainable growth at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-[#e5e5e0]">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Featured work</h2>
          <Link
            to="/work"
            className="text-sm text-[#666] hover:text-[#2a2a2a] transition-colors inline-flex items-center gap-2"
          >
            View all projects
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/case-study/cms-migration"
            className="group border border-[#e5e5e0] rounded-sm overflow-hidden hover:border-[#2a2a2a] transition-colors"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={cmsThumbnail}
                alt="CMS Migration for Multi-Brand Restaurant Platform"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2 tracking-tight group-hover:text-[#666] transition-colors">
                CMS Migration for a Multi-Brand Restaurant Platform
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">
                Legacy CMS migration for multiple restaurant brands, enabling
                scalable brand customization and autonomy for non-design teams.
              </p>
            </div>
          </Link>
          <Link
            to="/case-study/ordering-optimization"
            className="group border border-[#e5e5e0] rounded-sm overflow-hidden hover:border-[#2a2a2a] transition-colors"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={orderingThumbnail}
                alt="Ordering Experience Optimization for Restaurant Platform"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2 tracking-tight group-hover:text-[#666] transition-colors">
                Ordering Experience Optimization for a Restaurant Platform
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">
                Redesigned ordering flow to reduce friction, increase conversion
                from 6% to 8%, and improve loyalty program adoption.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Short Bio */}
      <section className="py-12 sm:py-16 md:py-24">
        <h2 className="text-2xl sm:text-3xl mb-8 sm:mb-12 tracking-tight">About</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-[#666] leading-relaxed mb-4">
              I'm a Senior Product Designer with 8+ years of experience focused on
              digital products that need to grow, scale, and operate efficiently.
              My experience spans digital transformation consultancies, QSR, and
              B2B e-commerce, where I've worked on products with complex
              constraints, multiple stakeholders, and meaningful business goals.
            </p>
            <p className="text-lg text-[#666] leading-relaxed mb-4">
              I believe good design is about creating systems and experiences that
              help products become more valuable for users and businesses.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-[#2a2a2a] hover:text-[#666] transition-colors"
            >
              Read more about my experience
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="aspect-square rounded-sm overflow-hidden">
            <img
              src={profileImage}
              alt="Profile photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
