# Project Learnings

## Evidence Decisions

- `updated_portfolio.json` is the user-approved authoritative source for current facts.
- The current DOCX resume corroborates most newer claims but contains formatting and text defects.
- The LinkedIn PDF is historical and must not override newer contact, metrics, or education data.
- Public GitHub repositories may support project descriptions and exact links; employer websites must not be searched for project details.
- High-level confirmed Beiersdorf impact metrics may appear in experience content, but private employer projects must not appear in the public project gallery.

## Public Content Boundary

- Approved contact: Hamburg, `reeju.gr@gmail.com`, LinkedIn, and GitHub.
- Prohibited public contact: phone number and street address.
- Prohibited content: private repository links, credentials, internal code, unsupported skill ratings, and fake testimonials.

## Public Project Selection

The strongest evidence-rich public repositories for the current positioning are:

- FoodVisionAI - BLIP-2 and LoRA, Gemini, FastAPI, and a documented three-stage food analysis pipeline.
- Restaurant ELT Pipeline - Dagster, DuckDB, Azure ingestion, and Bronze, Silver, and Gold architecture.
- IoT Smoke Detection Data Pipeline - Kafka, Airflow, Flask, PostgreSQL, machine learning, and monitoring.
- Heart Disease Prediction Web Application - Flask, model serving, Docker, Sphinx, and a public repository.

Repositories with minimal or template READMEs or unclear ownership should not be featured as primary case studies merely because they are public.

## Architecture Learnings

- Global `overflow-hidden`, fixed `h-screen`, and fixed-height page shells are the main responsive failure mode.
- The mobile bottom navigation requires explicit content padding to avoid overlap.
- The current avatar is a generic template image and should not represent the candidate.
- Placeholder services, work thumbnails, and testimonial entries undermine credibility more than a smaller set of real projects.
- A centralized data module reduces claim drift across routes.

## Implementation Guidance

- Preserve static export and Pages Router.
- Prefer content-led CSS cards and typography to generic project screenshots.
- Keep motion decorative and respect reduced-motion settings.
- Use direct contact links instead of a form without a backend.
- Verify project URLs exactly and never infer private live-demo URLs.

## TASK-002 Implementation Results

- One canonical `data/portfolioData.js` module now supplies profile, impact, experience, education, capabilities, projects, credentials, and social data to the reachable routes.
- The fixed mobile dock and desktop navigation rail use labelled 44px-or-larger controls, an active-page state, visible keyboard focus, and explicit bottom content clearance.
- Removing global viewport locks (`overflow-hidden` and fixed `h-screen` page shells) restored vertical scrolling for phone and short-height layouts.
- The legacy placeholder service slider, fake testimonial route/data, and unused demo API route were removed instead of remaining as directly reachable or source-visible false content.
- Direct email and professional-profile links are a more truthful static-site contact model than the legacy form, which had no delivery backend.
- The generated social-sharing asset uses the site palette and contains no text or identity claims; metadata provides the exact accessible title and description separately.

## Verification Learnings

- The original lockfile required npm metadata reconciliation before GitHub's clean-install command could succeed; after synchronization, `npm ci`, lint, and the static build all pass.
- The export contains exactly one semantic `main` and no form on each of the six intended content routes.
- The current audit findings require a dedicated dependency migration; `npm audit fix --force` is intentionally excluded from this content-and-layout batch because it would change the framework line without focused regression testing.
