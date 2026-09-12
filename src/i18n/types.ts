export interface StatItem {
  stat: string;
  label: string;
}

export interface CaseStudySection {
  heading: string;
}

export interface CaseStudyDictionary {
  title: string;
  subtitle: string;
  overview: {
    heading: string;
    yearLabel: string;
    year: string;
    roleLabel: string;
    role: string;
    domainLabel: string;
    domain: string;
    body: string;
  };
  problem: {
    heading: string;
    paragraphs: string[];
  };
  role: {
    heading: string;
    intro: string;
    items: string[];
  };
  constraints: {
    heading: string;
    items: string[];
  };
  approach: {
    heading: string;
    intro: string;
    boxes: { title: string; body: string }[];
  };
  decisions: {
    heading: string;
    items: { title: string; body: string }[];
  };
  outcomes: {
    heading: string;
    stats: StatItem[];
    closing: string;
  };
  learnings: {
    heading: string;
    items: string[];
  };
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    home: string;
    work: string;
    about: string;
    resume: string;
    contact: string;
    commandHint: string;
    toggleMenu: string;
    languageLabel: string;
  };
  common: {
    backToWork: string;
    downloadResume: string;
    viewSelectedWork: string;
  };
  home: {
    openToWork: string;
    heroTitle: string;
    heroSubtitle: string;
    howIWorkTitle: string;
    pillars: { title: string; body: string }[];
    featuredWorkTitle: string;
    viewAllProjects: string;
    projects: {
      cms: { title: string; blurb: string };
      ordering: { title: string; blurb: string };
    };
    aboutTitle: string;
    bioParagraphs: string[];
    moreAboutMe: string;
  };
  work: {
    title: string;
    subtitle: string;
    projects: {
      cms: { title: string; description: string; tags: string[] };
      ordering: { title: string; description: string; tags: string[] };
    };
  };
  about: {
    title: string;
    bioParagraphs: string[];
    education: {
      heading: string;
      items: { degree: string; school: string; years: string }[];
    };
    toolsSkills: {
      heading: string;
      whatIDoLabel: string;
      whatIDo: string;
      toolsLabel: string;
      tools: string;
      languagesLabel: string;
      languages: string;
      certificationsLabel: string;
      certifications: string;
    };
    awards: {
      heading: string;
      title: string;
      body: string;
    };
    domains: {
      heading: string;
      items: { title: string; body: string }[];
    };
  };
  resume: {
    downloadPdf: string;
    summaryHeading: string;
    summary: string;
    experienceHeading: string;
    jobs: {
      title: string;
      company: string;
      location: string;
      period: string;
      intro?: string;
      items: string[];
    }[];
    educationHeading: string;
    education: { degree: string; school: string; years: string }[];
    skillsHeading: string;
    skills: { label: string; body: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailHeading: string;
    emailCaption: string;
    linkedinHeading: string;
    linkedinCaption: string;
    locationHeading: string;
    locationCity: string;
    locationCaption: string;
    lookingForHeading: string;
    lookingForBody: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    body: string;
    backHome: string;
  };
  commandPalette: {
    title: string;
    description: string;
    placeholder: string;
    empty: string;
    groupPages: string;
    groupCaseStudies: string;
    groupActions: string;
    home: string;
    work: string;
    about: string;
    resume: string;
    contact: string;
    cms: string;
    ordering: string;
    emailAction: string;
    linkedinAction: string;
    downloadAction: string;
  };
  caseStudyCMS: CaseStudyDictionary;
  caseStudyOrdering: CaseStudyDictionary;
}
