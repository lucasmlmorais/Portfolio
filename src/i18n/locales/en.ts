import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Lucas Morais, Senior Product Designer",
    description:
      "Portfolio of Lucas Morais, a Senior Product Designer working on design systems and growth for multi-brand restaurant and B2B e-commerce platforms.",
  },
  nav: {
    brand: "Lucas Morais",
    home: "Home",
    work: "Work",
    about: "About",
    resume: "Resume",
    contact: "Contact",
    commandHint: "Open command palette",
    toggleMenu: "Toggle menu",
    languageLabel: "Language",
  },
  common: {
    backToWork: "Back to work",
    downloadResume: "Download resume",
    viewSelectedWork: "View selected work",
  },
  home: {
    openToWork: "Open to new opportunities",
    heroTitle: "I design systems for platforms that have outgrown themselves.",
    heroSubtitle:
      "Eight years leading product design for restaurant tech and B2B platforms, cutting hundreds of components down to dozens and turning one bad screen into 33% more conversion.",
    howIWorkTitle: "How I work",
    pillars: [
      {
        title: "Systems over screens",
        body: "I'd rather ship one component with ten configurations than ten one-off screens. Slower on day one, faster for the next two years.",
      },
      {
        title: "Data before opinions",
        body: "The best redesign I shipped this year didn't start with a hunch. It started with a drop-off number in the funnel. I look for that number before I open Figma.",
      },
      {
        title: "Built for non-designers too",
        body: "Half the people using what I ship aren't designers: brand managers, marketers, ops staff. If they need me to update a banner, the tool failed.",
      },
      {
        title: "Clarity before solutions",
        body: "Strong products make complex businesses simple to operate, not with more features, but by organizing complexity to support better decisions.",
      },
    ],
    featuredWorkTitle: "Featured work",
    viewAllProjects: "View all projects",
    projects: {
      cms: {
        title: "CMS Migration for a Multi-Brand Restaurant Platform",
        blurb:
          "Migrated a legacy CMS for 3 restaurant brands. Cut unique components by 60% and let marketing teams update content without design in the loop.",
      },
      ordering: {
        title: "Ordering Experience Optimization for a Restaurant Platform",
        blurb:
          "Built a browsing menu that skips the location requirement and sped up that step for people who decide to order. Overall conversion went from 6% to 8%.",
      },
    },
    aboutTitle: "About",
    bioParagraphs: [
      "I've spent most of the last five years inside one product: a multi-brand restaurant platform where I helped unify systems that used to be fragmented by brand. Before that, digital transformation consulting and conversational design for chatbots.",
      "I like the parts of design work that are a little unglamorous: the CMS nobody wants to touch, the edge case in the system, the screen everyone assumed was fine until the data said otherwise.",
    ],
    moreAboutMe: "More about my background",
  },
  work: {
    title: "Selected work",
    subtitle:
      "Two case studies, one recurring theme: a platform outgrowing what it was built on, first the CMS, then the ordering flow.",
    projects: {
      cms: {
        title: "CMS Migration for a Multi-Brand Restaurant Platform",
        description:
          "Migrated a legacy CMS for 3 restaurant brands. Cut unique components from hundreds to dozens and gave non-design teams control over routine updates.",
        tags: ["Systems Design", "B2B", "QSR"],
      },
      ordering: {
        title: "Ordering Experience Optimization for a Restaurant Platform",
        description:
          "Traced a stuck 6% conversion rate to the start of the ordering flow, which required a location before users could even browse the menu. A browsing menu without that requirement, plus surfacing loyalty features, got it to 8%.",
        tags: ["Growth", "E-commerce", "QSR"],
      },
    },
  },
  about: {
    title: "About",
    bioParagraphs: [
      "I came into design after two years studying information systems management at UFMG: I switched in 2014 to a bachelor's in graphic design, and later added a postgrad in interaction design. That technical background is probably why I gravitate toward the parts of product work that are more plumbing than polish: component systems, edge cases, the CMS nobody wants to touch.",
      "Most of the last five years have been inside one multi-brand restaurant platform, unifying systems that used to run separately for each brand in the group. Before that, I spent two years designing conversational flows for Brazil's largest chatbot consultancy, for clients ranging from computer hardware to pulp and paper.",
    ],
    education: {
      heading: "Education",
      items: [
        {
          degree: "Postgraduate Specialization in Interaction Design",
          school: "Pontifical Catholic University of Minas Gerais",
          years: "2019 - 2020",
        },
        {
          degree: "Bachelor's Degree in Graphic Design",
          school: "Universidade do Estado de Minas Gerais",
          years: "2014 - 2018",
        },
      ],
    },
    toolsSkills: {
      heading: "Tools & Skills",
      whatIDoLabel: "What I do",
      whatIDo:
        "Product design, UX/UI, interaction design, discovery workshops, conversational design, AI-assisted workflows",
      toolsLabel: "Tools",
      tools: "Figma, Figma Make, FigJam, Adobe Suite",
      languagesLabel: "Languages",
      languages:
        "Portuguese (native), English (full professional), German (professional working), Spanish (limited working)",
      certificationsLabel: "Certifications",
      certifications:
        "Qualitative UX Research, UX Weekend, Design Sprint, Design Thinking Facilitation, B1",
    },
    awards: {
      heading: "Awards",
      title: "1st Place at Students to Business (S2B)",
      body: "Microsoft Innovation Center",
    },
    domains: {
      heading: "Domains of experience",
      items: [
        {
          title: "QSR & Restaurant Tech",
          body: "Multi-brand platforms, ordering systems, loyalty programs, operations dashboards, POS integration",
        },
        {
          title: "B2B E-commerce",
          body: "Enterprise dashboards, SaaS platforms, analytics tools, admin interfaces, permission systems",
        },
        {
          title: "Digital Transformation",
          body: "Legacy system migrations, process digitization, change management, training and adoption",
        },
        {
          title: "Growth & Optimization",
          body: "Conversion optimization, funnel analysis, A/B testing, user research, behavioral analytics",
        },
        {
          title: "Design Systems",
          body: "Component libraries, design tokens, documentation, governance, multi-brand theming",
        },
        {
          title: "AI-Assisted Workflows",
          body: "Using AI tools to move faster on production work, including shipping this portfolio's code with Claude Code",
        },
      ],
    },
  },
  resume: {
    downloadPdf: "Download PDF",
    summaryHeading: "Professional Summary",
    summary:
      "Product designer with 8 years across restaurant tech, B2B e-commerce, and conversational interfaces. Currently focused on design systems and growth for a multi-brand restaurant platform, the kind of work that's more plumbing than polish and usually pays off later.",
    experienceHeading: "Professional Experience",
    jobs: [
      {
        title: "Product Designer",
        company: "dti digital",
        location: "Belo Horizonte, Brazil",
        period: "April 2021 - Present",
        intro:
          "Product Designer working end-to-end on the ideation and development of digital products with agile squads.",
        items: [
          "Since 2022, lead client relationships and design operations for the account, coordinating with UX Research, Visual Design, and UX Writing specialists",
          "UX design reference across data analytics, internal management platforms, mobile community apps, restaurant/QSR platforms, e-commerce, and international products",
          "Facilitate discovery workshops and support continuous discovery on longer engagements",
          "Mentor new designers on the design process and workshop facilitation",
          "Write monthly for the internal Design Guild on soft skills",
        ],
      },
      {
        title: "UX Designer",
        company: "Avenue Code",
        location: "Belo Horizonte, Brazil",
        period: "November 2019 - April 2021",
        intro:
          "UX Designer responsible for understanding user and client needs, designing conversational flows, and defining interactions between people and chatbots.",
        items: [
          "Designed conversational experiences across WhatsApp, Facebook Messenger, Google Business Messenger, and web",
          "Worked as a consultant for the leading chatbot company in Brazil, contributing to projects for companies across multiple industries, from computer hardware to pulp and paper",
          "Facilitated discovery inceptions, aligned product improvements, and briefly supported the design manager as a Buddy, helping track team needs and career development",
        ],
      },
      {
        title: "UX/UI Designer",
        company: "Paiva Piovesan Softwares",
        location: "Belo Horizonte, Brazil",
        period: "January 2019 - November 2019",
        items: [
          "Responsible for the design department, conducted usability tests, user interviews, and experience analysis while designing interfaces for the company's software products",
          "Strong advocate for introducing Scrum into the development process and acted as a Scrum Master adapted to the team's needs",
        ],
      },
      {
        title: "UX/UI Design Intern",
        company: "Paiva Piovesan Softwares",
        location: "Belo Horizonte, Brazil",
        period: "June 2018 - December 2018",
        items: [
          "Worked on interface design for the Finance product across web and mobile versions for Android and iPhone",
          "Created promotional materials for the company's website and social media, as well as internal communication assets",
        ],
      },
    ],
    educationHeading: "Education",
    education: [
      {
        degree: "Postgraduate Specialization in Interaction Design",
        school: "Pontifical Catholic University of Minas Gerais",
        years: "2019 - 2020",
      },
      {
        degree: "Bachelor's Degree in Graphic Design",
        school: "Universidade do Estado de Minas Gerais",
        years: "2014 - 2018",
      },
    ],
    skillsHeading: "Skills & Capabilities",
    skills: [
      {
        label: "Core Competencies",
        body: "Product Design, UX/UI Design, Interaction Design, Design Thinking, Discovery Workshops, Conversational Design, AI-assisted Design Workflows",
      },
      { label: "Tools", body: "Figma, Figma Make, FigJam, Adobe Suite" },
      {
        label: "Languages",
        body: "Portuguese (Native), English (Full Professional), German (Professional Working), Spanish (Limited Working)",
      },
      {
        label: "Certifications",
        body: "Qualitative UX Research, UX Weekend, Design Sprint, Design Thinking Facilitation, B1",
      },
      {
        label: "Technical Background",
        body: "2 years of Information Systems Management (UFMG, not completed), with a foundation in programming logic and information systems",
      },
      {
        label: "Product Domains",
        body: "Data Analytics, Internal Management Platforms, Mobile Apps, QSR & Restaurant Platforms, E-commerce, International Products, Chatbots & Conversational Interfaces",
      },
      {
        label: "Awards",
        body: "1st Place at Students to Business (S2B), Microsoft Innovation Center",
      },
    ],
  },
  contact: {
    title: "Get in touch",
    subtitle:
      "Open to new roles and interesting collaborations, especially around growth, systems design, or making messy operations simpler. Email's fastest.",
    emailHeading: "Email",
    emailCaption: "Best for project details",
    linkedinHeading: "LinkedIn",
    linkedinCaption: "Good for a quick hello",
    locationHeading: "Location",
    locationCity: "Belo Horizonte, Minas Gerais, Brazil",
    locationCaption: "BRT (UTC-3) · open to remote work and occasional travel",
    lookingForHeading: "What I'm looking for",
    lookingForBody:
      "Growth and conversion work in complicated product environments. Design systems for platforms with more than one brand. Digital transformation where design is solving an operational problem, not decorating one. If that's what you're building, let's talk. I usually reply within a day or two.",
  },
  notFound: {
    title: "404",
    subtitle: "Page not found",
    body: "That page doesn't exist, or it moved and nobody updated the link.",
    backHome: "Back to home",
  },
  commandPalette: {
    title: "Jump to",
    description: "Navigate the portfolio",
    placeholder: "Where to?",
    empty: 'No match. Try "work" or "contact".',
    groupPages: "Pages",
    groupCaseStudies: "Case studies",
    groupActions: "Actions",
    home: "Home",
    work: "Selected work",
    about: "About",
    resume: "Resume",
    contact: "Contact",
    cms: "Multi-brand CMS migration",
    ordering: "Ordering flow optimization",
    emailAction: "Email Lucas",
    linkedinAction: "Open LinkedIn",
    downloadAction: "Download resume",
  },
  caseStudyCMS: {
    title: "CMS Migration for a Multi-Brand Restaurant Platform",
    subtitle:
      "A legacy CMS was holding back 3 restaurant brands. I used the migration to rethink multi-brand design from the ground up, instead of just porting old components to new tech.",
    overview: {
      heading: "Overview",
      yearLabel: "Year",
      year: "2022-2026",
      roleLabel: "Role",
      role: "Lead Product Designer",
      domainLabel: "Domain",
      domain: "QSR, B2B, Systems Design",
      body: "Three brands in the group (Outback, Carrabba's, and Bonefish Grill) ran on a legacy CMS approaching end-of-life, hard to maintain and blocking growth. The migration was a chance to redesign the component architecture: a shared visual system and editing workflow across brands, with separate applications per brand to preserve each one's specific features.",
    },
    problem: {
      heading: "Problem",
      paragraphs: [
        "The legacy CMS was hard to maintain and approaching deprecation. Its rigid layouts gave brand managers, marketers, and ops staff little flexibility, so even routine updates often meant waiting on the platform's developers.",
        "Each brand also ran its own custom components: duplicated work, slower brand launches, and a system that couldn't keep up with the company's growth.",
      ],
    },
    role: {
      heading: "My role",
      intro: "As Lead Product Designer:",
      items: [
        "Audited the existing CMS to find migration requirements and pain points",
        "Designed the system's visual components and variants, balancing standardization across brands with identity flexibility",
        "Worked side by side with the platform specialist engineer responsible for the content, page, and component editing workflow",
        "Worked with brand and marketing teams to validate the new workflows",
      ],
    },
    constraints: {
      heading: "Constraints",
      items: [
        "Zero downtime: the sites serve millions of customers",
        "Support 3 brands with distinct visual identities, each as its own application in the codebase",
        "Non-technical teams need to update content independently",
        "Limited engineering time meant a phased rollout",
      ],
    },
    approach: {
      heading: "Strategic approach",
      intro:
        "Rather than rebuild the same components in a new CMS, I treated this as a chance to rethink multi-brand design at scale.",
      boxes: [
        {
          title: "Component variant system",
          body: "A flexible architecture with themeable variants, shared across the 3 brands, replaced hundreds of one-off components with a few dozen. And made the system more flexible, not less.",
        },
        {
          title: "Self-service tooling",
          body: "CMS workflows simple enough that brand and marketing teams could update content and pick the right variant without a design review for routine changes.",
        },
      ],
    },
    decisions: {
      heading: "Key design decisions",
      items: [
        {
          title: "Shared foundations, flexible surfaces",
          body: "One layout grid, spacing system, and set of accessibility patterns across every brand. Color, type, and imagery stayed flexible enough to keep each brand distinct.",
        },
        {
          title: "Progressive enhancement",
          body: "Components worked out of the box with minimal setup, with advanced options underneath for power users: less onboarding friction, more room for edge cases.",
        },
        {
          title: "Migration-friendly",
          body: "Mapped every old component to its replacement, with clear upgrade paths for anything deprecated.",
        },
        {
          title: "Separate applications, shared visual system",
          body: "Each brand ran as its own application in the codebase, which allowed for brand-specific features when it made sense: Bonefish Grill has table reservations, while Outback and Carrabba's use a waitlist instead. The component system and content editing workflow were shared; the code for each application wasn't.",
        },
      ],
    },
    outcomes: {
      heading: "Outcomes",
      stats: [
        { stat: "75%", label: "Fewer design requests for routine content updates" },
        { stat: "60%", label: "Fewer unique components to maintain across all brands" },
        { stat: "100%", label: "Migration completed with zero customer-facing downtime" },
        { stat: "6 → 3 months", label: "Time to launch a brand on the new CMS: 6 months for Outback, the first and most involved, 3 months each for Carrabba's and Bonefish Grill" },
      ],
      closing:
        "The design team stopped fielding routine update requests and started spending that time on new brand launches instead.",
    },
    learnings: {
      heading: "Learnings",
      items: [
        "A technical migration is a chance for a strategic redesign, not just a lift-and-shift",
        "Tooling for non-designers has to be powerful and forgiving, different from designing for end customers",
        "Loop in brand and engineering from day one, or pay for it in rework later",
        "A real constraint (separate applications per brand, but a shared component system) forced a more careful balance between standardization and flexibility than an easier brief would have",
      ],
    },
  },
  caseStudyOrdering: {
    title: "Ordering Experience Optimization for a Restaurant Platform",
    subtitle:
      "Conversion was stuck at 6%. I built a browsing menu that skips the location requirement and sped up that step with remembered selections and smart defaults when people decide to order, which got conversion to 8%.",
    overview: {
      heading: "Overview",
      yearLabel: "Year",
      year: "2022-2026",
      roleLabel: "Role",
      role: "Senior Product Designer",
      domainLabel: "Domain",
      domain: "QSR, E-commerce, Growth",
      body: "After launching dedicated sites for the group's main brands, the goal shifted to growing conversion and online revenue. Logged-in users converted far better than anonymous visitors, but overall conversion sat at just 6%. The fix meant simplifying login and pulling logged-in features into the main journey, instead of hiding them behind it.",
    },
    problem: {
      heading: "Problem",
      paragraphs: [
        "Logged-in users converted significantly better than anonymous visitors, but they were a small share of total traffic.",
        "The bigger issue was at the start of the ordering flow: seeing the menu with real prices and promotions required picking a location first, even for people who just wanted to browse what the brand offered. That friction, ahead of any purchase decision, was quietly costing conversions. Overall conversion sat at 6%, well below industry benchmarks.",
        "The loyalty program had real value and low adoption, because it wasn't surfaced anywhere that mattered. Registration and login had already drawn criticism in heuristic reviews, and logged-in features were buried where new users would never find them.",
      ],
    },
    role: {
      heading: "My role",
      intro: "As Senior Product Designer, I led the redesign with product, engineering, and analytics:",
      items: [
        "Analyzed behavior data to find where users dropped off",
        "Ran research to understand how people thought about location and ordering",
        "Designed and tested flows that cut friction without losing functionality",
        "Wove loyalty touchpoints into the flow instead of a separate page",
      ],
    },
    constraints: {
      heading: "Constraints",
      items: [
        "Pickup and delivery, each with location-specific pricing and availability",
        "Compatible with POS systems across hundreds of locations",
        "ADA compliant, with performance as a hard requirement",
        "Couldn't disrupt the experience for existing loyal customers",
      ],
    },
    approach: {
      heading: "Strategic approach",
      intro:
        "Data showed logged-in users converted better, so the whole initiative centered on getting more users logged in and giving them a reason to. We split the work into smaller streams, ordered by technical dependencies and expected impact.",
      boxes: [
        {
          title: "Redesigned registration and login",
          body: "Customized registration per brand and added a birthday field that gave users an immediate reason to sign up, while fixing the friction flagged in earlier heuristic reviews.",
        },
        {
          title: "Moved logged-in features into the main flow",
          body: "Reordering, favorites, and loyalty benefits moved out of buried pages into the primary ordering flow, visible to anonymous users too, next to a clear prompt to create an account.",
        },
        {
          title: "Open menu, location only when it's time to order",
          body: "Built a general menu that doesn't require a location, for people who just want to browse. When someone decides to order, location is still required, but now with remembered previous selections and smart defaults, right on the location and fulfillment method screen.",
        },
        {
          title: "Made the value visible",
          body: "Added moments throughout the flow that showed the actual savings and convenience of logging in, instead of asking for an account on faith.",
        },
      ],
    },
    decisions: {
      heading: "Key design decisions",
      items: [
        {
          title: "Fake door for logged-in features",
          body: "Showed logged-in-only features to anonymous visitors, next to a clear sign-up prompt. Login and registration rates rose 10 to 20%.",
        },
        {
          title: "Feature placement over feature design",
          body: "Reorder, favorites, and loyalty moved from separate pages into the main journey. Usage of those features rose 30 to 60%.",
        },
        {
          title: "Brand-customized registration with incentives",
          body: "Registration screens customized per brand, with a birthday field that gave users value in exchange for the data.",
        },
        {
          title: "Benchmark, test, then ship",
          body: "Every change got a clear goal, a benchmark against comparable products, a round of usability testing, and an A/B test before full rollout.",
        },
      ],
    },
    outcomes: {
      heading: "Outcomes",
      stats: [
        { stat: "6% → 8%", label: "Overall conversion (a 33% relative increase)" },
        { stat: "10–20%", label: "More logins and registrations from strategic touchpoints" },
        { stat: "30–60%", label: "More usage of reorder, favorites, and loyalty features" },
        { stat: "100%", label: "ADA compliant, with improved screen reader support" },
      ],
      closing:
        "Making account benefits visible earned more signups than requiring them ever did.",
    },
    learnings: {
      heading: "Learnings",
      items: [
        "A metric can hide a strategy in plain sight: logged-in users' higher conversion became the whole plan",
        "Showing value before asking for commitment lifted registrations by 10–20%",
        "Placement matters as much as design: the same features saw 30–60% more use once they left buried pages",
        "Splitting a big initiative into workstreams ordered by dependency and impact means shipping value continuously, not waiting for a big bang",
        "Benchmark, test, then ship: validating each hypothesis before full rollout kept risk low",
      ],
    },
  },
};
