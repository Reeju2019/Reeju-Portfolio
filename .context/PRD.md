# Product Requirements Document

## Product Vision

Create a credible, fast, accessible portfolio that presents Reeju Bhattacherji as a data and automation professional with supporting full-stack and applied-AI depth. The site should help recruiters and technical reviewers understand the career story, inspect selected public work, and make contact without encountering placeholder or unsupported content.

## Product Overview

This project refreshes the existing statically exported Next.js portfolio. It retains the dark, high-contrast visual identity while replacing outdated copy, generic project thumbnails, placeholder services, fake testimonials, and a non-functional contact form with evidence-backed content and responsive layouts.

## Problem Statement

The current site is visually distinctive but difficult to use on smaller or shorter screens because pages are fixed to the viewport and globally hide overflow. Its content is also outdated: it presents an old career direction, contains placeholder text and generic social links, and does not show current public data, automation, and AI projects.

## Goals

- Present a focused career thesis: Data Analyst, Data Engineer, and Supply Chain Automation Specialist with applied-AI and full-stack capability.
- Use only user-confirmed career evidence and public GitHub repository evidence.
- Make every route usable on phones, tablets, laptops, and short desktop viewports.
- Replace generic project imagery with informative, accessible project cards.
- Provide clear, working paths to email, LinkedIn, GitHub, credentials, and selected repositories.
- Preserve static export compatibility for GitHub Pages.

## Non-Goals

- Rebuilding the project in a different framework.
- Adding authentication, persistence, analytics, a CMS, or a server-side contact form.
- Searching employer websites or exposing private employer projects.
- Publishing private repositories, phone numbers, street addresses, or unsupported claims.
- Performing a broad dependency/framework migration in this batch.

## Target Users

- Recruiters screening for data, analytics, automation, and applied-AI roles.
- Hiring managers evaluating technical scope and business impact.
- Engineers and collaborators reviewing public projects.

## Primary User Workflows

1. Arrive on the home page and understand Reeju's positioning, location, and strongest evidence within one viewport.
2. Review experience, current education, and a curated skill set.
3. Inspect selected public GitHub projects and open their source repositories.
4. Review certification, publication, and award evidence.
5. Contact Reeju through email or a professional social profile.

## Core Features

- Responsive global header and navigation with active-state and accessible labels.
- Evidence-led hero with a concise professional summary and primary calls to action.
- About page with professional timeline, education, selected capabilities, and confirmed outcome metrics.
- Capabilities page covering data engineering, automation and APIs, applied AI, and full-stack delivery.
- Work page featuring FoodVisionAI, Restaurant ELT Pipeline, IoT Smoke Detection Data Pipeline, and Heart Disease Prediction Web Application.
- Credentials page for the current MSc, Google Data Analytics certificate, publications, and documented recognition.
- Contact page with email, LinkedIn, and GitHub only.
- Site-specific metadata and a social preview when a valid asset is available.

## Functional Requirements

- All navigation links must resolve under static export.
- External links must open safely and identify their destinations.
- No visible form may imply message delivery without a working service.
- Page content must scroll when it exceeds the viewport.
- Mobile navigation must remain reachable without covering page content.
- Interactive controls must be keyboard accessible and have visible focus states.
- Motion must respect the user's reduced-motion preference.

## Data and Evidence Requirements

Source priority is:

1. User-confirmed `updated_portfolio.json` values.
2. Public GitHub repository content for project descriptions and links.
3. `Reeju_B_Resume_FullStack_Data_AI_Engineer.docx` as corroborating evidence.
4. `Profile.pdf` as historical context only.

Confirmed professional values include 400+ OMP instances, 400MB+ optimization logs, 5x faster debugging, 20% improved profile-level debugging efficiency, MSc dates October 2024 to September 2026, and current grade 1.9. Employer work may be summarized at this confirmed aggregate level but private employer projects must not appear in the public project gallery.

Approved public contact fields are Hamburg, Germany; `reeju.gr@gmail.com`; LinkedIn; and GitHub. Phone number and street address are prohibited from the site.

## Integration Requirements

- GitHub profile and selected public repository URLs.
- `mailto:` contact action.
- Existing GitHub Pages static deployment model.

## UI/UX Requirements

- Keep a dark, technical, high-contrast aesthetic with the existing warm accent family.
- Prefer typography, spacing, gradients, borders, and CSS shapes over generic stock imagery.
- Use a readable content width and responsive type scale.
- Keep tap targets at least 44px where practical.
- Avoid horizontal scrolling from 320px viewport width upward.
- Ensure the last content is not hidden behind mobile navigation.

## Security and Privacy Requirements

- Do not commit credentials or environment files.
- Do not publish private repository metadata or confidential employer details.
- Do not expose phone or street address.
- External links must use `rel="noreferrer"` or an equivalent safe value when opening a new tab.

## Error Handling Requirements

- Missing decorative images must not block content comprehension.
- Repository cards must remain useful even without screenshots or live demos.
- Contact actions must fall back to standard email and profile links.

## Performance Requirements

- Production build must complete successfully.
- Avoid adding runtime dependencies for effects achievable with existing React, Tailwind, Framer Motion, or CSS.
- Keep particles and decorative effects out of the critical mobile experience.
- Use optimized local assets and meaningful alt text.

## Constraints

- Existing Next.js 13.4 Pages Router and static export.
- Existing package manager and lockfile.
- Existing GitHub repository and GitHub Pages URL.
- No external employer research for portfolio content.

## Out of Scope

- A downloadable CV redesign.
- Live project demos that are not already confirmed and stable.
- Blog, admin panel, content editor, or message database.
- Private or internal project source links.

## Acceptance Criteria

- No placeholder lorem ipsum, fake testimonials, generic social URLs, unsupported counters, or non-functional contact form remains in reachable navigation.
- All personal facts match the approved evidence baseline.
- Selected project cards link to the exact public repositories and use repository-supported descriptions.
- Pages are scrollable and usable at mobile, tablet, desktop, and short-height layouts by construction.
- Keyboard focus, active navigation, semantic headings, and reduced-motion handling are present.
- `npm run lint` and `npm run build` pass, or exact external limitations are recorded.
- `.context` records and task status are current.

## Future Enhancements

- Add verified screenshots or live demos for selected projects.
- Upgrade Next.js and dependency versions in a separate migration batch.
- Add privacy-conscious analytics only after an explicit product decision.
- Replace the historical duplicate `New folder/` tree after repository cleanup approval.

## Open Questions

None blocking the active implementation batch.
