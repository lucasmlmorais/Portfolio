import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ImageModal } from "../components/ImageModal";
import { Reveal } from "../components/Reveal";
import { ReadingProgress } from "../components/ReadingProgress";
import orderingHero from "../../imports/ordering_experience.png";
import orderingProblem from "../../imports/problem_2.png";
import orderingSolution from "../../imports/solution_2.png";

export function CaseStudyOrdering() {
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
        Ordering Experience Optimization for a Restaurant Platform
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-[#666] mb-8 sm:mb-12 leading-relaxed">
        Conversion was stuck at 6%. I traced it to one screen — forcing
        location selection before the menu — and fixing it got conversion to
        8%.
      </p>

      <div
        className="rounded-sm mb-12 sm:mb-16 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
        onClick={() => setModalImage({ src: orderingHero, alt: "Ordering Experience Optimization for Restaurant Platform" })}
      >
        <img
          src={orderingHero}
          alt="Ordering Experience Optimization for Restaurant Platform"
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
            <p className="text-lg">Senior Product Designer</p>
          </div>
          <div>
            <h3 className="text-sm text-[#888] mb-2">Domain</h3>
            <p className="text-lg">QSR, E-commerce, Growth</p>
          </div>
        </div>
        <p className="text-[#666] leading-relaxed">
          After launching dedicated sites for the group's main brands, the
          goal shifted to growing conversion and online revenue. Logged-in
          users converted far better than anonymous visitors, but overall
          conversion sat at just 6%. The fix meant simplifying login and
          pulling logged-in features into the main journey, instead of
          hiding them behind it.
        </p>
      </section>
      </Reveal>

      {/* Problem */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Problem</h2>
        <p className="text-[#666] leading-relaxed mb-4">
          Logged-in users converted significantly better than anonymous
          visitors — but they were a small share of total traffic.
        </p>
        <p className="text-[#666] leading-relaxed mb-4">
          The bigger issue was the ordering flow itself: users had to pick a
          restaurant location before they could even see the menu. That one
          decision point, unrelated to what they actually wanted to order,
          was quietly costing conversions. Overall conversion sat at 6%,
          well below industry benchmarks.
        </p>
        <p className="text-[#666] leading-relaxed mb-4">
          The loyalty program had real value and low adoption, because it
          wasn't surfaced anywhere that mattered. Registration and login had
          already drawn criticism in heuristic reviews, and logged-in
          features were buried where new users would never find them.
        </p>
        <div
          className="rounded-sm mt-8 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setModalImage({ src: orderingProblem, alt: "Original flow diagram" })}
        >
          <img
            src={orderingProblem}
            alt="Original flow diagram"
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
          As Senior Product Designer, I led the redesign with product,
          engineering, and analytics:
        </p>
        <ul className="space-y-3 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Analyzed behavior data to find where users dropped off</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Ran research to understand how people thought about location and ordering</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Designed and tested flows that cut friction without losing functionality</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Wove loyalty touchpoints into the flow instead of a separate page</span>
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
            <span>Pickup and delivery, each with location-specific pricing and availability</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Compatible with POS systems across hundreds of locations</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>ADA compliant, with performance as a hard requirement</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Couldn't disrupt the experience for existing loyal customers</span>
          </li>
        </ul>
      </section>
      </Reveal>

      {/* Strategic Approach */}
      <Reveal>
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Strategic approach</h2>
        <p className="text-[#666] leading-relaxed mb-6">
          Data showed logged-in users converted better, so the whole
          initiative centered on getting more users logged in — and giving
          them a reason to. We split the work into smaller streams, ordered
          by technical dependencies and expected impact.
        </p>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">
            Redesigned registration and login
          </h3>
          <p className="text-[#666] leading-relaxed">
            Customized registration per brand and added a birthday field
            that gave users an immediate reason to sign up, while fixing
            the friction flagged in earlier heuristic reviews.
          </p>
        </div>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">
            Moved logged-in features into the main flow
          </h3>
          <p className="text-[#666] leading-relaxed">
            Reordering, favorites, and loyalty benefits moved out of buried
            pages into the primary ordering flow — visible to anonymous
            users too, next to a clear prompt to create an account.
          </p>
        </div>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">
            Bypassed the location friction point
          </h3>
          <p className="text-[#666] leading-relaxed">
            Let people browse the menu first. Location moved to checkout,
            pre-filled from geolocation or order history.
          </p>
        </div>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">
            Made the value visible
          </h3>
          <p className="text-[#666] leading-relaxed">
            Added moments throughout the flow that showed the actual
            savings and convenience of logging in, instead of asking for an
            account on faith.
          </p>
        </div>
        <div
          className="rounded-sm mt-8 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setModalImage({ src: orderingSolution, alt: "Redesigned flow diagram" })}
        >
          <img
            src={orderingSolution}
            alt="Redesigned flow diagram"
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
              Fake door for logged-in features
            </h3>
            <p className="text-[#666] leading-relaxed">
              Showed logged-in-only features to anonymous visitors, next to
              a clear sign-up prompt. Login and registration rates rose 10
              to 20%.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 tracking-tight">
              Feature placement over feature design
            </h3>
            <p className="text-[#666] leading-relaxed">
              Reorder, favorites, and loyalty moved from separate pages into
              the main journey. Usage of those features rose 30 to 60%.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 tracking-tight">
              Brand-customized registration with incentives
            </h3>
            <p className="text-[#666] leading-relaxed">
              Registration screens customized per brand, with a birthday
              field that gave users value in exchange for the data.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 tracking-tight">
              Benchmark, test, then ship
            </h3>
            <p className="text-[#666] leading-relaxed">
              Every change got a clear goal, a benchmark against comparable
              products, a round of usability testing, and an A/B test
              before full rollout.
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
            { stat: "6% → 8%", label: "Overall conversion — a 33% relative increase" },
            { stat: "10–20%", label: "More logins and registrations from strategic touchpoints" },
            { stat: "30–60%", label: "More usage of reorder, favorites, and loyalty features" },
            { stat: "100%", label: "ADA compliant, with improved screen reader support" },
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
          Making account benefits visible earned more signups than
          requiring them ever did.
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
            <span>A metric can hide a strategy in plain sight — logged-in users' higher conversion became the whole plan</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Showing value before asking for commitment lifted registrations by 10–20%</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Placement matters as much as design — the same features saw 30–60% more use once they left buried pages</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Splitting a big initiative into workstreams ordered by dependency and impact means shipping value continuously, not waiting for a big bang</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>Benchmark, test, then ship — validating each hypothesis before full rollout kept risk low</span>
          </li>
        </ul>
      </section>
      </Reveal>
    </div>
    </>
  );
}
