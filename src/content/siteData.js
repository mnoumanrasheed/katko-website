/**
 * Katko Site Content - Strictly grounded in Katko New Website.docx & KATKO_CODEX_MASTER_PROMPT.md
 * Source of truth: Developer Implementation Brief
 */

export const siteConfig = {
  name: 'Katko',
  domain: 'katko.co.za',
  tagline: 'AI & Technology Solutions',
  summary: 'Contemporary, enterprise-ready AI solutions, ambient clinical documentation with NourDoc, omnichannel conversational lead qualification with LeadHive AI, and bespoke digital product engineering.',
  region: 'South Africa & International',
  contact: {
    email: 'info@katko.co.za',
    phoneNote: 'Direct phone & email consultations',
    location: 'South Africa',
    address: 'No 1 Paul Kruger Street, Parow Valley, 7500, Cape Town, South Africa',
    representatives: [
      {
        name: 'Belinda Ferreira',
        role: 'Consultation & Client Services',
        phone: '+27 74 212 3121',
        email: 'belinda@katko.co.za'
      },
      {
        name: 'Hasnain',
        role: 'Technical Architecture & Operations',
        phone: '+27 74 973 4770',
        email: 'hasnain@katko.co.za'
      }
    ]
  }
};

export const navigationLinks = [
  { 
    label: 'Products', 
    isDropdown: true,
    children: [
      { 
        label: 'NourDoc', 
        path: '/nourdoc', 
        description: 'Ambient clinical documentation & medical coding' 
      },
      { 
        label: 'LeadHive AI', 
        path: '/leadhive-ai', 
        description: 'Omnichannel lead qualification & conversation agent' 
      }
    ]
  },
  { label: 'AI Services', path: '/artificial-intelligence-services' },
  { label: 'Customer Experience', path: '/customer-experience' },
  { label: 'Our Approach', path: '/our-approach' },
  { label: 'Risk & Compliance', path: '/risk-compliance' },
  { label: 'About Us', path: '/about-us' }
];

export const footerLinks = {
  products: [
    { label: 'NourDoc', path: '/nourdoc' },
    { label: 'LeadHive AI', path: '/leadhive-ai' }
  ],
  services: [
    { label: 'AI Services', path: '/artificial-intelligence-services' },
    { label: 'Customer Experience', path: '/customer-experience' },
    { label: 'Our Approach', path: '/our-approach' },
    { label: 'Risk & Compliance', path: '/risk-compliance' }
  ],
  company: [
    { label: 'About Us', path: '/about-us' },
    { label: 'Discuss Your Project', path: '/contact-us' }
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Use', path: '/terms-of-use' }
  ]
};

// Exact hero headlines, copy, and CTAs verbatim from the brief
export const heroSlides = [
  {
    id: 'nourdoc',
    badge: 'Ambient Clinical Intelligence',
    headline: 'Let AI Handle the Documentation. Let Doctors Focus on Care.',
    supportingCopy: 'Introduce AI-assisted clinical documentation that helps healthcare professionals capture consultations, generate structured notes and streamline documentation workflows.',
    primaryCta: { label: 'Explore NourDoc', path: '/nourdoc' },
    secondaryCta: { label: 'Book a Demo', path: '/contact-us?enquiry=nourdoc' },
    accentColor: 'var(--color-orange)',
    referenceTag: 'Illustrative interface'
  },
  {
    id: 'leadhive',
    badge: 'Conversational Lead Intelligence',
    headline: 'Turn Every Conversation into a Business Opportunity.',
    supportingCopy: 'Engage prospects, qualify leads and automate customer interactions across digital channels using AI-powered conversational workflows.',
    primaryCta: { label: 'Explore LeadHive AI', path: '/leadhive-ai' },
    secondaryCta: { label: 'Request a Demo', path: '/contact-us?enquiry=leadhive' },
    accentColor: 'var(--color-orange)',
    referenceTag: 'Illustrative interface'
  },
  {
    id: 'services',
    badge: 'Enterprise Product & AI Engineering',
    headline: 'Build Smarter. Engineer for Impact.',
    supportingCopy: 'From agentic AI and generative AI to enterprise software engineering and product discovery, Katko helps organisations turn complex challenges into practical digital solutions.',
    primaryCta: { label: 'Explore Our Services', path: '/artificial-intelligence-services' },
    secondaryCta: { label: 'Discuss Your Project', path: '/contact-us?enquiry=services' },
    accentColor: 'var(--color-orange)',
    referenceTag: 'System architecture'
  }
];

export const threeOfferings = [
  {
    id: 'nourdoc',
    title: 'NourDoc',
    category: 'Healthcare AI',
    tagline: 'Ambient Clinical Documentation & Coding',
    description: 'Capture natural patient consultations, generate structured SOAP documentation, and support ICD-10 medical coding so healthcare practitioners spend less time on screens and more on care.',
    path: '/nourdoc',
    ctaText: 'View NourDoc Details',
    features: [
      'Ambient capture & clinical transcription',
      'Structured SOAP notes generation',
      'ICD-10 & CPT coding support where applicable',
      'Review & physician validation workflow'
    ]
  },
  {
    id: 'leadhive',
    title: 'LeadHive AI',
    category: 'Conversational AI',
    tagline: 'Omnichannel Lead Capture & Qualification',
    description: 'Engage digital prospects 24/7 across supported messaging channels, qualify enquiry intents, and route high-value opportunities directly to sales pipelines and consultants.',
    path: '/leadhive-ai',
    ctaText: 'View LeadHive AI Details',
    features: [
      'AI-powered customer engagement',
      'Automated qualification workflows',
      'Multi-channel messaging readiness',
      'Intelligent lead routing & CRM hand-off'
    ]
  },
  {
    id: 'services',
    title: 'AI & Engineering Services',
    category: 'Custom Engineering',
    tagline: 'Agentic AI, Architecture & Product Delivery',
    description: 'Partner with Katko to architect and deploy production agentic workflows, generative LLM applications, user-centred experience systems, and resilient enterprise software.',
    path: '/artificial-intelligence-services',
    ctaText: 'Explore Engineering Services',
    features: [
      'Agentic AI & multi-agent systems',
      'Generative AI, LLMs & enterprise RAG',
      'User experience discovery & UX/UI design',
      'End-to-end delivery lifecycle'
    ]
  }
];

export const ourApproachStages = [
  {
    number: '01',
    title: 'Discover',
    stage: 'Stage 1',
    description: 'Discover business objectives and constraints.',
    details: 'Engage stakeholders to uncover underlying operational realities, technical constraints, user needs, and strategic business goals.'
  },
  {
    number: '02',
    title: 'Define',
    stage: 'Stage 2',
    description: 'Define requirements and measurable outcomes.',
    details: 'Translate discovery findings into prioritised functional requirements, technical specifications, compliance guardrails, and success metrics.'
  },
  {
    number: '03',
    title: 'Design',
    stage: 'Stage 3',
    description: 'Design user journeys and technical architecture.',
    details: 'Craft intuitive user experiences, clickable prototypes, data models, API boundaries, and resilient system architectures.'
  },
  {
    number: '04',
    title: 'Engineer',
    stage: 'Stage 4',
    description: 'Engineer the solution in iterative releases.',
    details: 'Develop modular, maintainable software and AI integrations in rapid, transparent sprints with rigorous automated testing.'
  },
  {
    number: '05',
    title: 'Validate',
    stage: 'Stage 5',
    description: 'Validate functionality, security and performance.',
    details: 'Conduct comprehensive end-to-end testing, security evaluations, data handling reviews, and usability validation before release.'
  },
  {
    number: '06',
    title: 'Deploy & Optimise',
    stage: 'Stage 6',
    description: 'Deploy, monitor and optimise.',
    details: 'Execute controlled rollouts with comprehensive observability, health telemetry, feedback loops, and ongoing operational optimisation.'
  }
];
