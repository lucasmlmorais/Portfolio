import { Link } from "react-router";
import { ArrowRight, Download } from "lucide-react";
import cmsThumbnail from "../../imports/web-portfolio-cms-1.png";
import orderingThumbnail from "../../imports/web-portfolio-2.jpg";
import profileImage from "../../imports/profile-1.jpg";
import { Reveal } from "../components/Reveal";
import { SpotlightGlow } from "../components/SpotlightGlow";
import { handleSpotlightMove } from "../lib/spotlight";

export function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-[#e5e5e0]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-[#666]">Open to new opportunities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 sm:mb-6 leading-tight">
            I design systems for platforms that have outgrown themselves.
          </h1>
          <p className="text-base sm:text-lg text-[#666] mb-6 sm:mb-8 leading-relaxed">
            Eight years leading product design for restaurant tech and B2B
            platforms — cutting hundreds of components down to dozens, and
            turning one bad screen into 33% more conversion.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2a2a2a] text-[#fafaf8] rounded-sm hover:bg-[#444] transition-colors text-sm sm:text-base"
            >
              View selected work
              <ArrowRight size={16} />
            </Link>
            <a
              href={`${import.meta.env.BASE_URL}Lucas_Morais_Resume.pdf`}
              download="Lucas_Morais_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#2a2a2a] text-[#2a2a2a] rounded-sm hover:bg-[#f0f0ec] transition-colors text-sm sm:text-base"
            >
              <Download size={16} />
              Download resume
            </a>
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-[#e5e5e0]">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl mb-8 sm:mb-12 tracking-tight">How I work</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <Reveal delay={0}>
            <h3 className="text-xl mb-3 tracking-tight">Systems over screens</h3>
            <p className="text-[#666] leading-relaxed">
              I'd rather ship one component with ten configurations than ten
              one-off screens. Slower on day one, faster for the next two
              years.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="text-xl mb-3 tracking-tight">Data before opinions</h3>
            <p className="text-[#666] leading-relaxed">
              The best redesign I shipped this year didn't start with a
              hunch — it started with a drop-off number in the funnel. I look
              for that number before I open Figma.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <h3 className="text-xl mb-3 tracking-tight">Built for non-designers too</h3>
            <p className="text-[#666] leading-relaxed">
              Half the people using what I ship aren't designers — brand
              managers, marketers, ops staff. If they need me to update a
              banner, the tool failed.
            </p>
          </Reveal>
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
          <Reveal>
            <Link
              to="/case-study/cms-migration"
              onMouseMove={handleSpotlightMove}
              className="group relative block border border-[#e5e5e0] rounded-sm overflow-hidden hover:border-[#2a2a2a] transition-colors"
            >
              <SpotlightGlow />
              <div className="aspect-video overflow-hidden">
                <img
                  src={cmsThumbnail}
                  alt="CMS Migration for Multi-Brand Restaurant Platform"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 tracking-tight group-hover:text-[#666] transition-colors">
                  CMS Migration for a Multi-Brand Restaurant Platform
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  Migrated a legacy CMS for 8 restaurant brands — cut unique
                  components by 60% and let marketing teams update content
                  without design in the loop.
                </p>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/case-study/ordering-optimization"
              onMouseMove={handleSpotlightMove}
              className="group relative block border border-[#e5e5e0] rounded-sm overflow-hidden hover:border-[#2a2a2a] transition-colors"
            >
              <SpotlightGlow />
              <div className="aspect-video overflow-hidden">
                <img
                  src={orderingThumbnail}
                  alt="Ordering Experience Optimization for Restaurant Platform"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 tracking-tight group-hover:text-[#666] transition-colors">
                  Ordering Experience Optimization for a Restaurant Platform
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  Moved location selection out of the critical path. Overall
                  conversion went from 6% to 8%.
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Short Bio */}
      <section className="py-12 sm:py-16 md:py-24">
        <h2 className="text-2xl sm:text-3xl mb-8 sm:mb-12 tracking-tight">About</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            <p className="text-lg text-[#666] leading-relaxed mb-4">
              I've spent most of the last five years inside one product: a
              restaurant platform that grew from one brand to eight while I
              rebuilt the systems underneath it. Before that, digital
              transformation consulting and conversational design for
              chatbots.
            </p>
            <p className="text-lg text-[#666] leading-relaxed mb-4">
              I like the parts of design work that are a little unglamorous —
              the CMS nobody wants to touch, the edge case in the system, the
              screen everyone assumed was fine until the data said otherwise.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-[#2a2a2a] hover:text-[#666] transition-colors"
            >
              More about my background
              <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="aspect-square rounded-sm overflow-hidden">
            <img
              src={profileImage}
              alt="Profile photo"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
