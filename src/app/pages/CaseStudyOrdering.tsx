import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ImageModal } from "../components/ImageModal";
import orderingHero from "../../imports/ordering_experience.png";
import orderingProblem from "../../imports/problem_2.png";
import orderingSolution from "../../imports/solution_2.png";

export function CaseStudyOrdering() {
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
        Ordering Experience Optimization for a Restaurant Platform
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-[#666] mb-8 sm:mb-12 leading-relaxed">
        Redesigned ordering flow to reduce friction, increase conversion from 6%
        to 8%, and improve loyalty program adoption.
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
          After launching custom websites for the group's main brands, the goal
          was to increase both conversion and online revenue. Analysis revealed
          that conversion was significantly higher among app users and logged-in
          users than among anonymous visitors, yet overall conversion sat at only
          6%. The challenge was to simplify the login process and better integrate
          logged-in features into the main user journey.
        </p>
      </section>

      {/* Problem */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Problem</h2>
        <p className="text-[#666] leading-relaxed mb-4">
          Product metrics revealed that conversion was significantly higher among
          logged-in users compared to anonymous visitors. However, the share of
          logged-in users was relatively low compared to overall traffic.
        </p>
        <p className="text-[#666] leading-relaxed mb-4">
          The ordering flow had major friction, especially in location selection.
          Users had to choose a restaurant location before seeing the menu,
          creating an unnecessary decision point that caused many to abandon.
          Overall conversion sat at only 6%—far below industry benchmarks.
        </p>
        <p className="text-[#666] leading-relaxed mb-4">
          The loyalty program, despite offering significant value, had low
          adoption because it wasn't surfaced at strategic moments. Registration
          and login screens had already received criticism in heuristic reviews,
          and logged-in features were buried in the experience, making it
          difficult for users to understand their value.
        </p>
        <div
          className="rounded-sm mt-8 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setModalImage({ src: orderingProblem, alt: "Original flow diagram" })}
        >
          <img
            src={orderingProblem}
            alt="Original flow diagram"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* My Role */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">My role</h2>
        <p className="text-[#666] leading-relaxed mb-4">
          As Senior Product Designer, I led the redesign effort, working closely
          with product management, engineering, and analytics teams to:
        </p>
        <ul className="space-y-3 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Analyze user behavior data to identify specific drop-off points
              and friction areas
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Conduct user research to understand mental models around ordering
              and location selection
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Design and test alternative flows that reduced friction while
              maintaining necessary functionality
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Integrate loyalty touchpoints strategically throughout the
              experience
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
              Needed to support both pickup and delivery options with
              location-specific pricing and availability
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Required compatibility with existing POS systems across hundreds of
              restaurant locations
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Had to maintain ADA compliance and improve performance metrics
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Couldn't disrupt the experience for existing loyal customers while
              improving it for new ones
            </span>
          </li>
        </ul>
      </section>

      {/* Strategic Approach */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Strategic approach</h2>
        <p className="text-[#666] leading-relaxed mb-6">
          Based on data showing logged-in users had significantly higher
          conversion, we defined an initiative focused on integrating logged-in
          features into the primary flow and acquiring more logged-in users. We
          grouped improvements into smaller workstreams, ordered by technical
          dependencies and expected impact.
        </p>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">
            Redesigned registration and login
          </h3>
          <p className="text-[#666] leading-relaxed">
            Customized registration and login screens for each brand, reducing
            friction while adding value through birthday promotion fields. This
            addressed criticism from previous heuristic reviews and created a
            smoother path to account creation.
          </p>
        </div>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">
            Integrated logged-in features into main flow
          </h3>
          <p className="text-[#666] leading-relaxed">
            Moved features like reordering previous items, saving favorites, and
            loyalty program benefits from buried pages into the primary ordering
            flow. Made these features visible to anonymous visitors alongside
            clear calls to action for creating an account.
          </p>
        </div>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">
            Bypass the location friction point
          </h3>
          <p className="text-[#666] leading-relaxed">
            Instead of forcing location selection upfront, allowed users to
            browse the menu first. Location selection was integrated at checkout
            with smart defaults based on geolocation and order history.
          </p>
        </div>
        <div className="bg-[#f0f0ec] p-6 rounded-sm mb-6">
          <h3 className="text-lg mb-3 tracking-tight">
            Clear value communication
          </h3>
          <p className="text-[#666] leading-relaxed">
            Created touchpoints throughout the experience to help users
            understand the value of creating an account and logging in—showing
            personalized savings, convenience features, and loyalty benefits at
            strategic moments.
          </p>
        </div>
        <div
          className="rounded-sm mt-8 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setModalImage({ src: orderingSolution, alt: "Redesigned flow diagram" })}
        >
          <img
            src={orderingSolution}
            alt="Redesigned flow diagram"
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
              Fake door approach for logged-in features
            </h3>
            <p className="text-[#666] leading-relaxed">
              Made logged-in features visible to anonymous visitors alongside
              calls to action for creating an account. This created incentive
              points that increased login and registration rates by 10% to 20%
              while helping users understand the value of accounts.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 tracking-tight">
              Feature integration into primary flow
            </h3>
            <p className="text-[#666] leading-relaxed">
              Moved reorder, favorites, and loyalty benefits from separate pages
              into the main ordering journey. This increased usage of these
              features by 30% to 60% depending on the feature, making them core
              to the experience rather than buried utilities.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 tracking-tight">
              Brand-customized registration with incentives
            </h3>
            <p className="text-[#666] leading-relaxed">
              Customized registration screens for each brand and added birthday
              promotion fields, creating immediate value for users while
              collecting useful marketing data. This balanced business needs with
              user benefit.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 tracking-tight">
              Research and hypothesis testing process
            </h3>
            <p className="text-[#666] leading-relaxed">
              For each improvement, we defined clear goals, benchmarked existing
              patterns in other products, conducted usability testing with
              interactive prototypes, and ran A/B tests with real users—ensuring
              decisions were validated before full implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#e5e5e0]">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Outcomes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <div className="text-3xl mb-2">6% → 8%</div>
            <p className="text-[#666]">
              Overall conversion rate increased by 33%, resulting in significant
              revenue growth
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <div className="text-3xl mb-2">10-20%</div>
            <p className="text-[#666]">
              Increase in login and registration rates through strategic
              touchpoints and value communication
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <div className="text-3xl mb-2">30-60%</div>
            <p className="text-[#666]">
              Increase in feature usage (reorder, favorites, loyalty benefits) by
              integrating them into the main flow
            </p>
          </div>
          <div className="bg-[#f0f0ec] p-6 rounded-sm">
            <div className="text-3xl mb-2">100%</div>
            <p className="text-[#666]">
              ADA compliance achieved with improved screen reader support
            </p>
          </div>
        </div>
        <p className="text-[#666] leading-relaxed">
          By simplifying the login process and better integrating logged-in
          features into the main journey, we transformed the ordering experience.
          More users created accounts, used loyalty benefits, and completed
          purchases—creating sustainable growth through improved user engagement.
        </p>
      </section>

      {/* Learnings */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 tracking-tight">Learnings</h2>
        <ul className="space-y-4 text-[#666] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Product metrics can reveal opportunities hidden in plain sight—the
              insight that logged-in users had higher conversion became the
              foundation for our entire strategy
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Making features visible to anonymous users (fake door approach) can
              drive adoption by showing value before requiring commitment—this
              increased registration rates by 10-20%
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Feature placement matters as much as feature design—moving
              capabilities into the main flow increased usage by 30-60% compared
              to when they were buried in separate pages
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Breaking large initiatives into smaller workstreams ordered by
              dependencies and impact helps teams deliver value incrementally
              while learning along the way
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#2a2a2a] mt-1">•</span>
            <span>
              Validating hypotheses through benchmarking, usability testing, and
              A/B tests before full implementation reduces risk and builds
              confidence in design decisions
            </span>
          </li>
        </ul>
      </section>
    </div>
    </>
  );
}
