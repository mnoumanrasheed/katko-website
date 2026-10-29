# Katko Website (`katko.co.za`)

Modern, enterprise-grade web application for **Katko** (`katko.co.za`), built strictly in accordance with `KATKO_CODEX_MASTER_PROMPT.md` and the developer implementation brief `Katko New Website.docx`.

---

## 1. Project Overview & Architecture

Katko delivers three core offerings:
1. **NourDoc**: Ambient clinical intelligence, automated clinical transcription, structured SOAP notes, and ICD-10 / CPT medical coding support for healthcare professionals.
2. **LeadHive AI**: Omnichannel conversational AI platform for 24/7 lead capture, intelligent qualification scoring, and direct CRM hand-off.
3. **AI & Product Engineering Services**: Bespoke multi-agent orchestration, enterprise RAG (Retrieval-Augmented Generation), customer experience discovery (UI/UX design systems), and full-lifecycle software delivery.

### Tech Stack:
- **Framework**: React 18 with JavaScript (JSX)
- **Build Tool**: Vite 6 (ultra-fast HMR and optimized production bundle)
- **Routing**: React Router v6 (`react-router-dom`) with route-aware title/meta updates and automatic scroll restoration (`ScrollToTop`)
- **Animation & Motion**:
  - **GSAP**: Orchestrated hero-slide transitions, progress indicators, and timeline sequencing with proper React scoping and cleanup.
  - **Framer Motion**: Microinteractions, badge transitions, and modal states.
  - **Accessibility**: Automatic detection of `prefers-reduced-motion` to bypass animations for users requiring reduced motion.
- **Design System & Styling**: Pure CSS design tokens (`tokens.css`, `globals.css`, `components.css`) adhering to the brand palette:
  - Katko Orange: `#F38C13` (Dominant primary accent & CTAs)
  - Warm Amber Yellow: `#F8BF00` (Secondary accent & highlights)
  - Charcoal: `#20272D` (Headings & dark contrast sections)
  - White: `#FFFFFF` (Primary bright canvas & spacious negative space)
  - Cool Light Grey: `#F5F6F7` (Alternating section backgrounds & subtle cards)
  - Typography: **Inter** throughout

---

## 2. Directory Structure

```text
d:\katkcoz\
├── public/
│   ├── logo.png             # Official brand logo
│   ├── robots.txt           # Production robots directive
│   └── sitemap.xml          # Comprehensive XML sitemap for SEO
├── src/
│   ├── assets/
│   │   └── logo.png         # Bundled brand logo
│   ├── components/
│   │   ├── layout/          # Header, Footer, PageShell, ScrollToTop
│   │   ├── ui/              # Button, Container, SectionHeading, Badge
│   │   ├── visuals/         # Custom SVG/HTML dashboard & architecture graphics
│   │   │   ├── NourDocDashboardVisual.jsx
│   │   │   ├── LeadHiveDashboardVisual.jsx
│   │   │   ├── AIServicesArchitectureVisual.jsx
│   │   │   ├── CustomerExperienceJourneyVisual.jsx
│   │   │   ├── OurApproachTimelineVisual.jsx
│   │   │   ├── RiskComplianceFrameworkVisual.jsx
│   │   │   └── AboutTeamVisual.jsx
│   │   └── sections/        # HeroCarousel, OfferingsOverview, Previews, CTASection
│   ├── content/
│   │   └── siteData.js      # Structured content extracted verbatim from brief
│   ├── hooks/
│   │   └── usePrefersReducedMotion.js
│   ├── pages/               # Exactly 9 primary pages + 2 legal + 404
│   │   ├── Home.jsx
│   │   ├── NourDoc.jsx
│   │   ├── LeadHiveAI.jsx
│   │   ├── AIServices.jsx
│   │   ├── CustomerExperience.jsx
│   │   ├── OurApproach.jsx
│   │   ├── RiskCompliance.jsx
│   │   ├── AboutUs.jsx
│   │   ├── ContactUs.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfUse.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── globals.css
│   │   └── components.css
│   ├── App.jsx
│   └── main.jsx
├── CONTENT_APPROVAL_CHECKLIST.md  # Client verification & approval matrix
├── ASSET_CREDITS.md              # Provenance & license documentation
├── package.json
└── vite.config.js
```

---

## 3. Routes & Sitemap

| # | Route | Page Title / Focus | Navigation Location |
|---|---|---|---|
| 01 | `/` | Home | Main Menu |
| 02 | `/nourdoc` | NourDoc — Ambient Clinical Documentation | Products Dropdown |
| 03 | `/leadhive-ai` | LeadHive AI — Conversational Intelligence | Products Dropdown |
| 04 | `/artificial-intelligence-services` | AI & Engineering Services | Main Menu |
| 05 | `/customer-experience` | Customer Experience & UI/UX | Main Menu |
| 06 | `/our-approach` | Our Approach — 6-Stage Delivery Lifecycle | Main Menu |
| 07 | `/risk-compliance` | Risk & Compliance — POPIA & Governance | Main Menu |
| 08 | `/about-us` | About Us — Company Story & Philosophy | Main Menu |
| 09 | `/contact-us` | Contact Us — Enquiries & Demos | Main Menu / Header CTA |
| — | `/privacy-policy` | Privacy Policy (Draft for Legal Sign-off) | Footer Only |
| — | `/terms-of-use` | Terms of Use (Draft for Legal Sign-off) | Footer Only |
| — | `*` | 404 Page Not Found | Catch-all |

---

## 4. Development & Production Commands

### Install dependencies:
```bash
npm install
```

### Run local development server:
```bash
npm run dev
# Server runs at http://127.0.0.1:3000/
```

### Build production bundle:
```bash
npm run build
# Compiles optimized assets to dist/
```

### Preview production build locally:
```bash
npm run preview
```

---

## 5. Contact Form & Backend Integration

The contact form on `/contact-us` includes:
- Client-side validation for full name, business email format, enquiry type selection, minimum message length, and mandatory POPIA privacy consent.
- Direct URL pre-selection: Passing `?enquiry=nourdoc`, `?enquiry=leadhive`, etc. automatically selects the appropriate topic.
- Honest submission feedback: Displays a confirmed submission summary with an immediate direct mailto fallback.
- **Production Mail Delivery Setup**: To connect live form submissions to an automated email service or CRM webhook, configure an API endpoint (e.g. Next.js API route, Cloudflare Worker, or AWS Lambda) using environment variables (e.g., SendGrid, Postmark, Resend).

---

## 6. Pre-Launch Checklist

Review [CONTENT_APPROVAL_CHECKLIST.md](file:///d:/katkcoz/CONTENT_APPROVAL_CHECKLIST.md) for items requiring human sign-off prior to commercial release:
- [ ] Legal sign-off on Privacy Policy and Terms of Use.
- [ ] Confirmation of public contact telephone number or WhatsApp channel.
- [ ] Configuration of production SMTP or webhook delivery endpoint.
- [ ] Integration of Google Analytics 4 (GA4) measurement ID.
