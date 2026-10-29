# Katko Website — Asset Credits & Visual Manifest

This document records the provenance, licensing, and implementation approach for all visual and graphical assets used across the Katko website.

---

## 1. Brand Identity Assets

| Asset | File Location | Provenance & Usage |
|---|---|---|
| **Katko Official Logo** | `logo.png` / `public/logo.png` / `src/assets/logo.png` | Official brand asset provided in the project root. Proportions preserved; served with correct clear space and transparency across desktop and mobile headers and footers. |

---

## 2. Bespoke Technical & Product Visualisations

In accordance with Section 6 of `KATKO_CODEX_MASTER_PROMPT.md`, external mood-board links from `Katko New Website.docx` were treated as **inspirational visual direction** rather than licensed production artwork. All product dashboards, journey maps, architecture schematics, and timelines were custom-engineered as responsive, editable SVG/HTML/React components.

| Component | Placement | Technical Implementation | Inspiration Reference from Brief |
|---|---|---|---|
| **NourDoc Clinical Workspace** | `NourDocDashboardVisual.jsx` (Hero Slide 1 & `/nourdoc`) | Custom React/CSS component featuring ambient audio waveform, real-time consultation transcription, interactive SOAP note tabs (Subjective, Objective, Assessment, Plan), and ICD-10 / CPT coding suggestions. Labelled discreetly as *"Illustrative interface"*. | *AI Medical Scribe Features* (Vivalyn Labs) & *CLARA Healthcare Intelligence*. |
| **LeadHive AI Hub** | `LeadHiveDashboardVisual.jsx` (Hero Slide 2 & `/leadhive-ai`) | Custom component showing live multi-channel prospect conversations, dynamic qualification score badges, intent classification, and pipeline routing strip. Labelled discreetly as *"Illustrative interface"*. | *AI Conversation Agent* (AELESTRA) & *ZeroAI CRM*. |
| **Enterprise GenAI & RAG Architecture** | `AIServicesArchitectureVisual.jsx` (Hero Slide 3 & `/artificial-intelligence-services`) | Custom architectural schematic detailing enterprise data stores, vector embeddings, planner-actor agent orchestration, domain workers, and POPIA guardrails. Labelled *"System architecture diagram"*. | *Multi-Agent Orchestration 2026* & *LUCI*. |
| **Customer Experience Model** | `CustomerExperienceJourneyVisual.jsx` (`/customer-experience`) | Custom interactive artefact showcasing user research steps, journey task flows, design system primitives, and live token previews. Labelled *"Design system artefact"*. | *The Project Manager and UI/UX Designer Dynamic*. |
| **Six-Stage Delivery Stepper** | `OurApproachTimelineVisual.jsx` (`/our-approach` & Homepage) | Custom interactive lifecycle stepper connecting all six stages (*Discover, Define, Design, Engineer, Validate, Deploy & Optimise*) with desktop progress line and mobile vertical stack. | *work-curtdoty*. |
| **GRC Risk & Governance Matrix** | `RiskComplianceFrameworkVisual.jsx` (`/risk-compliance` & Homepage) | Custom multi-card information graphic presenting POPIA alignment, zero-trust engineering, human-in-the-loop review, and access controls. Labelled *"GRC control architecture"*. | *GRC Dashboard by Isaac Sanchez*. |
| **Delivery Model & Metrics** | `AboutTeamVisual.jsx` (`/about-us`) | Custom metrics and delivery philosophy card highlighting South African market positioning and engineering principles. | *South African collaborative business team context*. |

---

## 3. Iconography & Typography

| Asset | Source | Licence |
|---|---|---|
| **Inter Font Family** | Google Fonts (`https://fonts.googleapis.com`) | SIL Open Font License (OFL) 1.1. Loaded via `index.html`. |
| **Lucide React Icons** | `lucide-react` package | MIT License. Consistent, crisp enterprise vector icons. |
