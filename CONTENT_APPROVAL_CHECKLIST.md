# Katko Website — Content Approval & Launch Sign-off Checklist

This document tracks items from `Katko New Website.docx` and `KATKO_CODEX_MASTER_PROMPT.md` that require human verification, client confirmation, or external configuration before final public launch.

In accordance with strict editorial rules, no speculative claims, fabricated testimonials, unverified certifications, or simulated partners have been introduced into the website.

---

## 1. Editorial & Brand Content

| Item | Status in Build | Client Action Required |
|---|---|---|
| **Logo Artwork** | Live (`/logo.png`) | Confirm the transparent PNG logo provided in the root meets high-DPI display preferences or supply an official `.svg` vector asset if desired. |
| **Contact Phone Number** | Enquiries directed via consultation forms | Confirm whether an official South African telephone number or WhatsApp business number should be published publicly. |
| **Physical Address / Office** | "South Africa" | Confirm whether a physical office address (e.g. Johannesburg / Cape Town) should be listed on the Contact and Footer sections. |
| **Company Background / History** | Grounded in brief | Confirm any specific founding milestones, executive team biographies, or company registration numbers (Pty Ltd) to incorporate. |

---

## 2. Product Capabilities & Regulatory Disclaimers

| Item | Status in Build | Client Action Required |
|---|---|---|
| **NourDoc EMR Integrations** | Labelled as "Integration Ready / Modern API" | Confirm specific EMR/EHR systems (e.g., Meditech, Healthbridge, Epic) once formal technical integrations or commercial partnerships are certified. |
| **NourDoc Clinical Disclaimer** | "Requires Physician Verification" prominently displayed | Confirm whether practice indemnities or specific HPCSA (Health Professions Council of South Africa) guidance notes should be appended. |
| **LeadHive AI Channel Connectors** | Conceptual channel readiness displayed | Confirm live API credentials for WhatsApp Business Cloud API, Instagram Messaging API, or Meta Business Suite when deploying live webhooks. |
| **POPIA Compliance Review** | Contextual adherence implemented | Undertake final Information Officer review in terms of the Protection of Personal Information Act (POPIA). |

---

## 3. Legal Documents & Form Submissions

| Item | Status in Build | Client Action Required |
|---|---|---|
| **Privacy Policy** (`/privacy-policy`) | Implemented as pre-launch draft | Have company legal counsel review and sign off on the published draft text. |
| **Terms of Use** (`/terms-of-use`) | Implemented as pre-launch draft | Have company legal counsel review and sign off on the clinical and commercial terms. |
| **Contact Form Delivery** | Form validation & mailto fallback active | Configure external SMTP provider (e.g., SendGrid, Postmark, AWS SES, Resend) or CRM webhook endpoint in production environment. |
| **Analytics & Cookie Consent** | Consent-aware foundation | Supply production Google Analytics 4 (GA4) or privacy-focused analytics measurement ID prior to launch. |

---

## 4. Verification Summary

- [x] All 9 primary pages implemented and responsive.
- [x] Exact hero headlines and supporting copy preserved verbatim.
- [x] No fabricated case studies, testimonials, or fake partner logos.
- [x] Katko Orange (`#F38C13`), Amber (`#F8BF00`), Charcoal (`#20272D`), and Cool Grey (`#F5F6F7`) applied consistently.
- [x] Interactive components (NourDoc SOAP/ICD-10 tabs, LeadHive conversation feed, 6-stage delivery timeline, GRC matrix) fully operational.
