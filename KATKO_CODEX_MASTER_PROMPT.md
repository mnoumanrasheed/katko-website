# KATKO Website — Codex Master Build Prompt

> **How to use this file:** Place this Markdown file, the original `Katko New Website.docx`, and the official Katko logo asset(s) in the project root. Open the project in Codex and instruct it: **“Read `KATKO_CODEX_MASTER_PROMPT.md` completely and implement the website exactly as specified. The Word brief is the authority for all content and visual direction.”**

## 0. Your role and the expected outcome

You are a senior creative developer, UI/UX director, React engineer, motion designer, accessibility specialist, and front-end technical lead. Design and **implement**, not merely describe, a polished, fully responsive, commercially credible website for **Katko** (`katko.co.za`). Deliver production-quality code, working routes and interactions, carefully integrated animations, an extensible design system, and a verified build.

The result should feel like a **bespoke premium enterprise AI / product-engineering website**: refined editorial typography, confident spacing, beautiful technical visualisations, authentic product-led storytelling, impeccable alignment, and strong yet restrained interaction design. It must not feel like a generic startup template, an AI-generated landing page, a cyberpunk demo, or an animation showcase.

**Use this exact core stack:**

- React with **JavaScript / JSX** (do not switch to TypeScript).
- Vite for a modern, fast development/build workflow, unless an existing compatible React project already exists and preserving it is safer.
- React Router for navigable pages and accessible routing.
- GSAP, with proper React scoping and cleanup, for orchestrated timeline/scroll animations.
- Framer Motion for component transitions, entrance/exit states, and small UI interactions.
- Modern CSS with carefully organised design tokens. Tailwind CSS is permissible if it adds value, but the final website must have an intentional bespoke visual language; do not dump all styling into giant JSX files.
- Reusable components, semantic HTML, responsive images, accessible controls, and maintainable content structures.

Use compatible, maintained package releases. Do not introduce a large additional framework, 3D/WebGL engine, icon package, carousel library, CMS, or other dependency without a clear need.

---

## 1. Source-of-truth and strict content lock

### Required input files

1. **`Katko New Website.docx`** — the **primary and authoritative reference** for copy, headings, products, nine-page sitemap, colours, UX, visual concepts, compliance cautions, and launch criteria. This file contains linked visual inspirations and instructions; **it does not contain a collection of licensed production image assets**.
2. **Official Katko logo** — the user will place it in the **project root** (possible `.svg`, `.png`, `.webp`, etc.). Discover its actual filename and inspect it before designing the header. Reuse the original artwork, preserve proportions and clear space, and never invent or redraw a replacement logo. If no logo is present, record the blocker and use a clearly temporary development placeholder only until it arrives.
3. Any extra genuine product screenshots or approved brand assets actually provided in the repository. Inspect them before selecting imagery.

**Before writing UI code**, read the entire DOCX, including its tables, hyperlinks, headings, image reference labels, and final acceptance criteria. Extract the content and build a quick internal page-by-page content map. Do not skim or use this prompt as a substitute for the DOCX. In any conflict, the DOCX overrides a design suggestion in this prompt; if the source conflicts with an explicit user instruction, the user's latest instruction prevails.

### Strict editorial rules — absolutely non-negotiable

- Use **only the facts, subject matter, features, positioning, brand directions, and claims explicitly supported by the supplied DOCX and approved assets**.
- Preserve the **three homepage hero headlines and supporting-copy sentences verbatim**, including punctuation and capitalisation. Preserve the specified CTA labels.
- For other sections, use headings and capability labels from the DOCX. Where page-ready prose is absent, use concise, faithful wording derived from those exact bullet points **without adding any new substantive claim**. No speculative product descriptions or invented selling points.
- Never fabricate case studies, customer names, client logos, testimonials, awards, figures, years of experience, team biographies, address, contact number, email, regulatory certifications, commercial partnerships, deployment footprints, or operational integrations.
- Do not claim that NourDoc is certified, clinically validated, HIPAA-compliant, POPIA-compliant, connected to a specific EMR, or producing guaranteed clinical outcomes unless new verified evidence is supplied. Describe clinical features as the brief does, and preserve qualifiers such as **“where applicable”**.
- Do not display Facebook, Instagram, WhatsApp, TikTok, YouTube, CRM providers, or other channel badges as **working integrations** unless verified. They can be represented as conceptual channel references only when clearly noncommittal; otherwise omit them.
- Never turn illustrative interface designs into fake proof. Label non-real product UIs **“Illustrative interface”** discreetly but visibly.
- Do not generate filler copy, fake blog content, fake addresses, stock statistics, empty review sliders, fabricated partner carousels, or Lorem Ipsum.
- If a critical fact or final content block is not supplied, **do not improvise**. Keep the visible site honest and elegant using approved source material, and put outstanding questions in `CONTENT_APPROVAL_CHECKLIST.md` for human confirmation.
- Use **professional South African English**. Avoid overly Americanised jargon, aggressive promises, and unsubstantiated international/global-presence claims.

**Important distinction:** the Word file is a developer brief containing some exact approved marketing copy and many section directions. These directions are **not permission to fabricate missing body copy**. Your job is to assemble a complete, coherent interface from the approved material and surface any unresolved content gaps clearly in the handoff.

---

## 2. Brand and art direction — adhere precisely

| Token | Exact value | Treatment |
|---|---|---|
| Katko Orange | `#F38C13` | Dominant branded accent, CTAs, interaction states, active elements, key emphasis |
| Warm Amber Yellow | `#F8BF00` | Secondary and selective highlights, small badges, diagram details |
| Charcoal | `#20272D` | Primary headings, typography, premium dark sections |
| White | `#FFFFFF` | Main bright canvas and generous negative space |
| Cool light grey | `#F5F6F7` | Alternating content sections, subtle cards, muted surfaces |

### Visual character

- Use **Inter** throughout, with a deliberate editorial headline scale and exceptionally readable body typography. Pair regular/medium copy with confident semibold/bold headings, not excessively stylised display fonts.
- Light-led website: mostly white/light-grey surfaces with selective charcoal dark sections. Orange supplies identity; amber supports it. **Do not make orange and yellow compete in large saturated blocks.**
- Build using a cohesive 12-column desktop layout, a max-width content container around 1200–1320 px, strong alignment, comfortable line lengths, and a consistent 8 px spacing rhythm.
- Card radii generally **8–12 px**; shadows soft and restrained; borders subtle; iconography consistent and purposeful.
- Make the header clean, elegant and fixed/sticky only if it remains unobtrusive. Use the official logo at the correct aspect ratio.
- Prioritise sophisticated, custom **dashboard compositions, technical system diagrams, journey views, and workflow illustrations** rather than generic AI graphics.
- Use strong page composition: asymmetrical but balanced hero layouts, generous negative space, coherent image crops, clean divider lines, and varied section rhythm. Each page should have its own focal visual without becoming a different brand.
- Verify contrast, especially **white-on-orange**. Prefer charcoal text on an orange CTA if white text fails WCAG requirements at the actual size/weight. Dark text on amber backgrounds.
- No excessive glassmorphism, huge gradients, neon lighting, futuristic robots, random floating blobs, tiny text, animation overload, or clichéd stock-tech aesthetics.

### Suggested design tokens and system

Define colour, typography, spacing, radius, border, surface, and shadow tokens centrally (CSS custom properties). Create design primitives for a primary orange button, secondary outline/quiet button, eyebrow labels, responsive section headings, product cards, service cards, CTA bands, timelines, form inputs, feedback notices, and restrained highlight chips. Ensure their styling is consistent across all pages.

---

## 3. Mandatory routes and navigation

Implement **exactly nine primary pages**, with the two legal pages available only through the footer. All pages must work on direct navigation and refresh.

| # | Page | Suggested route |
|---|---|---|
| 01 | Home | `/` |
| 02 | NourDoc | `/nourdoc` |
| 03 | LeadHive AI | `/leadhive-ai` |
| 04 | Artificial Intelligence Services | `/artificial-intelligence-services` |
| 05 | Customer Experience | `/customer-experience` |
| 06 | Our Approach | `/our-approach` |
| 07 | Risk & Compliance | `/risk-compliance` |
| 08 | About Us | `/about-us` |
| 09 | Contact Us | `/contact-us` |
| Footer-only | Privacy Policy | `/privacy-policy` |
| Footer-only | Terms of Use | `/terms-of-use` |

Global navigation must reflect the brief:

`Home | Products ▼ | AI Services | Customer Experience | Our Approach | Risk & Compliance | About Us | Contact Us`

- **Products** dropdown: **NourDoc** and **LeadHive AI**.
- Responsive desktop navigation and an accessible mobile menu. Support keyboard activation, `Escape` to close, correct focus behaviour, outside click handling as appropriate, and an obvious active route indicator.
- Orange conversion CTA in the header, connected to a real relevant route/action (for example, the Contact page); no dead links.
- Footer: relevant product/service links, verified contact/social details only, legal links, and brand identity. Do not invent socials or contact details.
- Legal text not contained in the source must **not** be presented as approved legal language. Provide implementation-ready templates **outside the published site** or a clearly gated launch item; seek approved legal text before making legal pages publicly final.
- Include an intentional, branded 404 page and route-level scroll restoration.

---

## 4. Home page — exact hero carousel and architecture

The homepage must quickly explain Katko's three offering areas: **NourDoc, LeadHive AI, and AI & Product Engineering Services**. Use a visually dominant yet clean three-slide hero, product introductions, service previews, an honest credibility approach, and clear conversion paths. Do not fabricate trust metrics, testimonials, or client logos.

### Hero slide 1 — NourDoc

**Exact headline:**

> Let AI Handle the Documentation. Let Doctors Focus on Care.

**Exact supporting copy:**

> Introduce AI-assisted clinical documentation that helps healthcare professionals capture consultations, generate structured notes and streamline documentation workflows.

- Primary CTA: **Explore NourDoc** → `/nourdoc`
- Secondary CTA: **Book a Demo** → contact/demo enquiry state
- **Visual:** realistic healthcare environment paired with a refined clinical software dashboard. White/light-grey base, charcoal type, selective orange details. An original UI illustration is acceptable but must be identified as illustrative, not a genuine product capture.
- **Do not use:** robotic doctors, exaggerated medical holograms, fake hospital logos, or unverified outcome claims.
- Source's inspiration label: **“AI Medical Scribe Features | SOAP Notes, ICD-10, Voice to EMR”** (Vivalyn Labs). This is **visual reference**, not authority to copy design, brand, screenshot, or claims.

### Hero slide 2 — LeadHive AI

**Exact headline:**

> Turn Every Conversation into a Business Opportunity.

**Exact supporting copy:**

> Engage prospects, qualify leads and automate customer interactions across digital channels using AI-powered conversational workflows.

- Primary CTA: **Explore LeadHive AI** → `/leadhive-ai`
- Secondary CTA: **Request a Demo** → contact/demo enquiry state
- **Visual:** a central lead-management dashboard visually connected to messaging previews, social channels, and a transparent lead-qualification workflow. Use believable interface hierarchy and restrained motion.
- Facebook, Instagram, WhatsApp, TikTok and YouTube are potential **channel references only where supported by the actual product**. Do not depict unsupported integrations as delivered functionality.
- **Do not use:** fabricated integrations, unsupported APIs, or guaranteed conversion claims.
- Source's inspiration label: **“AI Conversation Agent | Omnichannel Chatbot & Booking | AELESTRA”**. Treat as visual inspiration only.

### Hero slide 3 — AI & Engineering Services

**Exact headline:**

> Build Smarter. Engineer for Impact.

**Exact supporting copy:**

> From agentic AI and generative AI to enterprise software engineering and product discovery, Katko helps organisations turn complex challenges into practical digital solutions.

- Primary CTA: **Explore Our Services** → `/artificial-intelligence-services`
- Secondary CTA: **Discuss Your Project** → `/contact-us`
- **Visual:** elegant original diagram of interconnected systems, AI workflows, intelligent automation, and digital architecture. This should feel technically credible rather than science fiction.
- Source's inspiration label: **“Introducing LUCI: Your AI That Sees, Remembers & Acts | LUCI”**. Reference the visual logic only, not claims or assets.

### Carousel behaviour — build and test all requirements

1. Autoplay changes slides **every six seconds**.
2. Provide visible previous/next arrows and clearly labelled slide indicators.
3. Pause autoplay on hover, focus within the carousel, and user control interaction; resume appropriately without surprising keyboard users.
4. Do not animate slide text and image inconsistently. Maintain a calm, sophisticated transition with well-timed opacity/translation and short layered motion.
5. Respect `prefers-reduced-motion`: no forced movement; permit manual slide selection; make rotation non-disruptive for assistive technology.
6. Mobile: prioritise title, supporting copy, CTAs and a simplified/cropped visual. Avoid the gigantic empty hero or clipping CTA buttons.
7. The first visible hero image must load fast; other slide images and below-fold assets should load responsibly. Use optimised WebP/AVIF where applicable.
8. The carousel may use GSAP for visual sequencing; keep its timers, listeners and timelines properly disposed in React.

### Homepage sections after the hero

Use only source-sanctioned topics and copy. Build a coherent, conversion-focused sequence such as:

1. Three offerings overview / introduction.
2. NourDoc product feature preview and CTA.
3. LeadHive AI product feature preview and CTA.
4. AI and product-engineering services preview (including Customer Experience).
5. Six-stage Our Approach preview.
6. Risk/Compliance and responsible delivery preview.
7. Credibility area **only if approved proof is available**; otherwise a clean capability/approach section without badges or fake logos.
8. Final project discussion/demo CTA.

Do not assume the DOCX supplies page-ready paragraphs beyond its exact hero and general source statements. Reuse approved language; track unresolved copy in the approval checklist.

---

## 5. Nine-page content blueprint — no additions beyond the brief

Use the following as page structures and visual direction. Keep the original DOCX open as the final authority for actual wording.

### Page 02 — NourDoc (`/nourdoc`)

**Purpose:** ambient clinical intelligence and documentation support for healthcare workflows.

Required content topics, in the supplied order:

- Product overview and key value proposition.
- Ambient capture and transcription.
- AI-generated SOAP notes and clinical documentation.
- ICD-10 and medical coding support, **including CPT where applicable**.
- Integration and deployment options.
- Security, privacy and clinical workflow considerations.
- Demo and trial CTAs.

**Visuals:** authentic screenshots if supplied; otherwise polished, correctly labelled illustrative clinical note previews, editable structured note cards, and a simple capture → documentation → review workflow diagram. Do not imply any specific EMR integration, diagnostic use, approval, or deployment mode that is not confirmed. Design inspiration in DOCX: **CLARA — Clinical Reasoning & Healthcare Intelligence**.

### Page 03 — LeadHive AI (`/leadhive-ai`)

Required content topics:

- AI-powered customer engagement.
- Lead capture and qualification.
- Automated conversational workflows.
- Supported social and messaging channels.
- Lead routing, CRM hand-off and analytics **where available**.
- Use cases for sales teams, service businesses and consultancies.
- Demo or consultation CTA.

**Visuals:** messaging UI preview, channel icons only when verified, qualified-lead journey, pipeline dashboard, and a clear enquiry → qualification → hand-off sequence. Illustrative UI must be labelled. Do not invent integration names or API support. DOCX reference: **ZeroAI CRM — AI-Powered Business Management**.

### Page 04 — Artificial Intelligence Services (`/artificial-intelligence-services`)

Required topics:

- AI-enabled engineering.
- Agentic AI and multi-agent systems.
- Generative AI, LLM applications and RAG.
- Intelligent workflow automation.
- Data engineering and AI integration.
- Enterprise implementation and ongoing optimisation.

**Visuals:** precise original technical architecture diagrams, purposeful use-case cards, workflow orchestration graphics and credible system interfaces. Keep diagram labels faithful to the brief. Avoid robots and meaningless AI wallpaper. DOCX reference: **Multi-Agent Orchestration: Enterprise GenAI Architecture 2026**.

### Page 05 — Customer Experience (`/customer-experience`)

Required topics:

- User and stakeholder research.
- Product discovery and requirements definition.
- Journey mapping and experience design.
- Wireframes and interactive prototypes.
- UI systems and usability validation.
- Product strategy and MVP definition.

**Visuals:** original journey maps, wireframe/prototype stacks, purposeful mini design-system panels, and approved workshop/deliverable photography if available. Design visuals as coherent professional artefacts, not anonymous giant screenshots. DOCX reference: **The Project Manager and UI/UX Designer Dynamic**.

### Page 06 — Our Approach (`/our-approach`)

Follow this **exact six-stage sequence**:

1. **Discover** business objectives and constraints.
2. **Define** requirements and measurable outcomes.
3. **Design** user journeys and technical architecture.
4. **Engineer** the solution in iterative releases.
5. **Validate** functionality, security and performance.
6. **Deploy, monitor and optimise.**

**Visuals:** horizontal connected lifecycle on desktop, changing to a vertical sequence on mobile. Use Katko Orange for the active/current visual stage and amber for supporting markers. Subtle GSAP scroll reveals/active progression are welcome, but all six stages must remain readable without JS animation. DOCX visual reference: **work-curtdoty**.

### Page 07 — Risk & Compliance (`/risk-compliance`)

Required topics:

- Data privacy and information handling.
- Secure development practices.
- AI governance, oversight and human review.
- Model risk, evaluation and monitoring.
- Access controls, auditability and incident response.
- Regulatory obligations by industry and deployment location.

**South African context:** reference **POPIA where applicable**; discuss relevant requirements according to product, processed data and client sector. Handle healthcare and sensitive data with particular care. Do not claim certification, regulatory compliance, enterprise security guarantees, or formal audit results without evidence.

**Visuals:** elegant governance/control framework, layered risk cards, an audit/control workflow, or an original informative dashboard illustration clearly marked illustrative. DOCX reference: **GRC Dashboard by Isaac Sanchez**.

### Page 08 — About Us (`/about-us`)

Required topics:

- Katko's company story and purpose.
- South African market presence and service coverage.
- AI, software engineering and product expertise.
- Industries served and relevant experience.
- Delivery philosophy and partnerships.
- Contact and engagement CTA.

**Important:** The brief lists what belongs here but does not establish specific history, exact location, named people, client relationships, awards, or partnerships. Do not invent them. Use only verifiable supplied statements; place missing facts in the approval checklist.

**Visuals:** authentic approved team/office photos if available; otherwise visually controlled South African business-context imagery only if appropriately licensed. Avoid anonymous Silicon Valley offices, unverified premises, and posed scenes misrepresented as Katko staff. DOCX image reference depicts a professional Black South African business team collaborating at a laptop.

### Page 09 — Contact Us (`/contact-us`)

Required topics:

- Short invitation to discuss a project.
- Contact form with enquiry type selection.
- Product demo and consultation options.
- **Verified** company contact information only.
- Meeting-booking integration **if required and configured**.

**Functional form:** name, business email, organisation (optional), enquiry type (NourDoc demo / LeadHive AI demo / AI services / Customer Experience / General enquiry), message, privacy notice and clear submit/error/success feedback. Any field labels beyond the brief are UX necessities, not new marketing claims. Implement accessible validation, server-side validation, spam protection, safe error handling, and a real delivery mechanism based on actual hosting credentials/configuration. **Never simulate successful submission.** If there is no backend/form service, implement a safe, documented integration boundary and clearly report the remaining configuration step before launch.

**Visuals:** minimal, calm and reassuring form composition. Orange focus/submit treatments; good spacing; no unnecessary illustration. DOCX visual reference: **Managed Services vs BPO vs EOR for Offshore Teams** (reference only).

---

## 6. Visual asset production and reference discipline

The source DOCX contains linked visual references for the three hero slides and the eight non-home page concepts. These are mood/layout/subject-matter references, **not automatically licensed production artwork**.

### Asset policy

1. Inspect the DOCX hyperlinks and any local image assets. Do not assume external linked images can be redistributed, copied, hotlinked, or presented as Katko's own product.
2. Prefer official Katko assets and genuine product screenshots when supplied. If absent, build **original editable visuals with HTML/CSS/SVG**: NourDoc structured notes, LeadHive engagement flow, AI architecture graphs, UI/UX journey maps, and six-stage approach timeline. Visually label illustrations when they resemble live product dashboards.
3. Use business/healthcare photography only from a legitimately usable source; maintain source/license records in `ASSET_CREDITS.md`. Do not use scraped company screenshots or competitor logos in the delivered site.
4. Keep illustrative interface content generic and non-sensitive: no real patient information, personal phone numbers, customer names, or clinical records.
5. If approved imagery is unavailable, use first-class original vector/UI compositions rather than knowingly unlicensed photo placeholders.
6. Optimise images with appropriate responsive widths, aspect ratios, descriptive alt text, and WebP/AVIF when practical. Avoid loading large animation/videos just to fill whitespace.
7. Keep visuals consistent with the brief's South African positioning. Flags, landmarks and city skylines must never be added as decorative shorthand.

### Original visual concepts to execute

| Placement | Preferred premium visual |
|---|---|
| NourDoc hero | Clinical workspace + elegant note-generation dashboard; quiet health-tech warmth |
| LeadHive AI hero | Messaging cards connected to an organised lead pipeline/qualification UI |
| AI Services hero | Sophisticated connected-systems architecture, clean node paths and subtle highlights |
| NourDoc page | SOAP note preview, capture flow, coding support visual cues |
| LeadHive page | Conversation flow and lead qualification pipeline with careful integration claims |
| AI Services page | Multi-agent/RAG/workflow architecture diagrams with functional labels |
| Customer Experience page | Research/journey/wireframe/prototype artefacts |
| Our Approach page | Responsive six-stage delivery lifecycle |
| Risk & Compliance page | Governance, controls, oversight and auditability information graphic |
| About Us page | Authentic approved team imagery or licensable business-context imagery |
| Contact page | Typography, forms and reassuring layout; deliberately minimal |

### Image-reference labels from the DOCX

Audit these exact references in the original Word file when establishing visual direction:

- Home slide 1 — AI Medical Scribe Features / SOAP Notes / ICD-10 / Voice to EMR (Vivalyn Labs).
- Home slide 2 — AI Conversation Agent / Omnichannel Chatbot & Booking (AELESTRA).
- Home slide 3 — Introducing LUCI: Your AI That Sees, Remembers & Acts (LUCI).
- NourDoc — CLARA Clinical Reasoning & Healthcare Intelligence.
- LeadHive AI — ZeroAI CRM, AI-Powered Business Management.
- AI Services — Multi-Agent Orchestration: Enterprise GenAI Architecture 2026.
- Customer Experience — The Project Manager and UI/UX Designer Dynamic.
- Our Approach — work-curtdoty.
- Risk & Compliance — GRC Dashboard by Isaac Sanchez.
- About Us — South African-context collaborative business team image.
- Contact — Managed Services vs BPO vs EOR for Offshore Teams (Potentiam).

Do not reproduce these artworks pixel-for-pixel. Translate the **specified visual direction** into original, on-brand designs.

---

## 7. Motion direction — GSAP + Framer Motion done properly

Motion should support clarity and premium craft, not distract from commercial content.

### GSAP responsibilities

- Carefully timed hero-slide text + illustrative visual choreography.
- Subtle scroll-triggered section reveals or graphic line-draw/diagram progressions where they genuinely clarify content.
- The six-step Our Approach active-stage visual progression on desktop; a simpler equivalent on mobile.
- Proper `gsap.context()` / scoped setup and cleanup; unregister ScrollTriggers, handlers and timers on teardown. Use GSAP's React integration if appropriate.

### Framer Motion responsibilities

- Navigation/menu open/close transitions, route content transitions when useful, cards, button microinteractions, accordion/FAQ transitions **only if an FAQ is authorised in the source**.
- Soft staggered reveals for small components, hover/tap feedback, and success/error state transitions.
- Animate properties that are inexpensive to composite: primarily `transform` and `opacity`.

### Constraints

- Do **not** make GSAP and Framer Motion simultaneously control the same DOM transform/opacity property.
- Motion should be subtle, short, and consistent; avoid dramatic zooms, perpetual floating elements, heavy parallax, scroll-jacking, spinning interfaces and large page-entry delays.
- Use `prefers-reduced-motion`, proper cleanup, and logical non-animated fallbacks.
- No layout shifts, blocked interactions, inaccessible carousel announcements, or animations that hide content until JS runs.
- Prioritise stable text readability, working CTAs, Core Web Vitals, and 60 fps where practical over animation quantity.

---

## 8. Responsive behaviour and interaction detail

- Design **mobile first**, then refine tablet and desktop. Test at approximately **360, 390, 768, 1024, 1440 and 1920 px** viewports; avoid horizontal overflow and cut-off visuals.
- Hero headline and CTA remain clearly visible without requiring a full-screen landscape device.
- Responsive navigation: logical hamburger menu, accessible Products submenu, large usable touch targets, body scroll handling and clear close action.
- Product/dashboard mockups must stack/recompose on smaller screens, not merely shrink to unreadable miniature UIs.
- Diagram legends and labels remain legible on mobile. Make the approach timeline vertical; simplify crowded network diagrams and retain their meaning.
- Hover effects must not be the only way to discover content. Provide equivalent focus states.
- Keep all controls keyboard accessible, with visible focus indication and correct labels.
- Respect system zoom, text resize and reduced-motion preferences. Check long text wrapping and low-bandwidth fallbacks.

---

## 9. Engineering architecture and project quality

Start by inspecting the repository: existing framework, commands, assets, dependencies, file structure and hosting assumptions. **Preserve existing user files and unrelated modifications.** If the directory is empty, scaffold a clean Vite React project in place.

Suggested organisation; adapt intelligently to the existing repository:

```text
src/
  assets/
  components/
    layout/            Header, Footer, MobileMenu, PageShell
    ui/                Button, Container, SectionHeading, FormField, etc.
    visuals/           Original reusable SVG/HTML product & workflow graphics
    sections/          HeroCarousel, ProductFeature, Services, CTA, Timeline
  content/             Source-grounded navigation, slides, copy and page data
  hooks/               Motion preference, carousel timing, scroll utilities
  pages/               Home, NourDoc, LeadHiveAI, AIServices, etc.
  styles/              Tokens, globals and component styles
  utils/               Small pure helpers
  App.jsx
  main.jsx
public/                 Favicons, static optimised images, robots.txt
```

Quality requirements:

- Consistent JSX composition and reusable component APIs; do not put the entire website in one monolithic component.
- Proper React state/effect handling; no memory leaks from carousel intervals, window listeners or animations.
- Route-aware head metadata and page titles/descriptions grounded in the approved copy, canonical URLs, and an XML sitemap. Ensure `robots.txt` and a helpful 404.
- Asset compression, sensible loading priorities, code-splitting by route when beneficial, lazy-loading below the fold, preloading only critical assets, and no avoidable cumulative layout shifts.
- Responsive image dimensions/aspect-ratio reservations. Keep runtime dependencies light.
- Semantic landmarks, accessible forms, meaningful alt text, contrast checks and keyboard paths. Aim at WCAG 2.2 AA practices.
- Do not silently introduce tracking. Analytics should be consent-aware and configured only with appropriate IDs/consent mechanisms. If unconfigured, document the setup gap without inventing an endpoint.
- Security: escape/sanitise externally supplied content, validate form input on server, do not expose secrets in Vite `VITE_*` variables, use secure headers/HTTPS where deployment supports them, maintain dependencies and plan backups where a backend/CMS is used.
- Content must be easy to update. Implement source-grounded content as structured data. Choose a production CMS only after reviewing real hosting needs and credentials; do not claim a CMS exists if only JSON data is present. Document the chosen path and migration plan.
- Existing URL migration, redirects and live SEO traffic can only be finalised after auditing the deployed website. If not available, produce a redirect checklist rather than inventing legacy paths.
- Contact forms must never use a fake success `setTimeout` as if an email was delivered; set up real submission using verified backend configuration or make the missing deployment integration explicit.

---

## 10. South African market and regulatory precision

- Write and present the brand for South African businesses while keeping a credible international standard of design and English.
- Use authentic/approved local business imagery only; avoid decorative flag/landmark gimmicks.
- Display geographic details, legal entity names, contact data, case studies, partnerships and client names only when verified.
- Use POPIA as a **contextual regulatory consideration where applicable**, not as a proof badge or a claim of Katko certification.
- NourDoc-related imagery/copy must respect the sensitivity of health information, human review, and clinical workflow. No real patient data.
- Keep calls to action direct, specific and aligned with the actual product or service.

---

## 11. Functional acceptance checklist

Do not mark the task complete until all applicable items below have been checked in the actual running site.

### Design and content

- [ ] All **nine primary pages** exist and each has a coherent, responsive composition.
- [ ] Logo from root is used correctly (if provided), without distortion.
- [ ] Exact orange `#F38C13`, amber `#F8BF00`, charcoal `#20272D`, white and grey palette is used consistently.
- [ ] Exact hero headlines, supporting copy and CTA labels are preserved.
- [ ] Content accurately reflects all page-specific topics in the DOCX.
- [ ] Visual directions are honoured for every page; illustrations are authentic/original or legitimately licensed.
- [ ] No invented testimonials, statistics, clients, contact details, certifications, channels or integrations.
- [ ] Responsive visual hierarchy is elegant at all target viewport sizes.

### Behaviour

- [ ] Hero has three slides in the specified order, with working arrows/indicators, six-second auto-rotation, pause rules and accessible reduced-motion behaviour.
- [ ] Navigation, Products dropdown, mobile menu, links and CTAs work.
- [ ] Forms have correct field validation, failure states and an honestly configured delivery path.
- [ ] GSAP and Framer Motion are both used purposefully, without animation conflicts or leaks.
- [ ] Reduced-motion, keyboard focus, touch controls and sensible accessibility support are verified.

### Technical and launch readiness

- [ ] Dependency installation and `npm run build` succeed.
- [ ] A dev server starts and route-refresh/deep-link handling is tested for the target hosting platform.
- [ ] Responsive/cross-browser checks are performed; no visible JS console errors.
- [ ] Basic SEO metadata, canonical strategy, sitemap and robots are present.
- [ ] Performance, image, accessibility and security considerations are reviewed.
- [ ] Legal documents, analytics, CMS, form backend and legacy redirects are not falsely marked complete if approval/configuration is pending.
- [ ] Final developer handoff clearly separates **completed**, **requires external configuration**, and **requires content/legal approval**.

---

## 12. Required implementation sequence — work autonomously

Proceed with development. Do not stop after giving a design plan or an isolated hero example.

### Phase 1 — Repository and source audit

1. List project files, inspect root logo assets and the DOCX. Determine whether an app already exists.
2. Extract all approved content, brand colours, visual references and route requirements.
3. Briefly state your implementation plan and identify any **genuinely blocking** missing item. Do not block ordinary UI implementation because legal copy, production photos or service credentials are missing.

### Phase 2 — Design system and core shell

1. Establish typography, brand variables, layout, buttons, cards, headers, navigation and footer.
2. Build a cohesive responsive page shell, route handling and shared CTAs.
3. Prepare original on-brand technical visuals and asset attribution/approval records.

### Phase 3 — Build the complete site

1. Implement all three hero slides and the accessible six-second carousel.
2. Implement the homepage's product/service/conversion sections.
3. Implement **all eight other primary pages** as outlined above.
4. Implement legal-page route handling without falsely claiming unapproved legal content is final.
5. Implement contact form UX and the real backend integration if configured; otherwise document the missing production connection.

### Phase 4 — Motion, SEO, polish and QA

1. Apply GSAP and Framer Motion with their distinct responsibilities and reduced-motion support.
2. Add responsive fine-tuning, image optimisation, accessibility and SEO basics.
3. Run the dev/build commands and check/fix errors. If a browser/visual preview tool is available, inspect desktop, tablet and mobile screenshots and fix visual flaws.
4. Test every route, carousel control, dropdown, CTA and form state.

### Phase 5 — Handoff

1. Provide concise run commands, key file locations and a list of completed features.
2. Create `CONTENT_APPROVAL_CHECKLIST.md` for all source-material gaps (e.g. legal copy, official contact details, genuine product screenshots, verified integrations, company story, approved testimonials/case studies if desired).
3. Create `ASSET_CREDITS.md` documenting actual source/licence/approval for each third-party image. Original UI visuals can be noted as custom-built.
4. Create/update `README.md` with installation, scripts, deployment requirements, SEO/CMS/form configuration, and any outstanding launch tasks.
5. Do not claim production launch is complete without verifying the real deployment and backend integrations.

## 13. Definition of done and final instruction

**Your output must be real, runnable, production-minded React/JavaScript source code** for the complete Katko site, not a written proposal, wireframe-only answer, static screenshot, single HTML mock-up, or unfinished starter project.

The website must accurately translate the supplied Word brief into a **visually premium, technically credible, accessible, South African-market-ready digital presence**, with sophisticated but restrained GSAP and Framer Motion. Maintain strict source fidelity at every step.

**Begin now:** inspect the repository, fully read `Katko New Website.docx`, find the root logo, plan the component/content architecture, and then implement and verify the entire website end-to-end. Continue through working code, QA and the final handoff without stopping at the planning stage.
