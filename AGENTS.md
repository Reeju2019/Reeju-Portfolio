# Portfolio Agent Instructions

## Required Reading Before Code Changes

Read in order:

1. `AGENTS.md`
2. `.context/PRD.md`
3. `.context/SPECS.md`
4. `.context/ROADMAP.md`
5. `.context/TASKS.md`
6. `.context/PROGRESS.md`
7. `.context/ISSUES.md`
8. `.context/LEARNING.md`
9. Relevant `.context/.archive/` sources when present
10. `.context/base_prompt.md` for CLI handoffs

## Execution Rules

- Find the active or explicitly selected task and verify its dependencies.
- Implement only that task batch; do not implement future tasks.
- Preserve the existing Next.js Pages Router structure and established visual identity unless the active task explicitly changes them.
- Ground every personal fact, metric, date, project, skill, and link in the approved evidence sources.
- Do not expose private employer code, credentials, phone numbers, street addresses, or private repository details.
- Public project claims must be supported by the candidate evidence or the public GitHub repository itself.
- Run the verification listed for the active task and record exact limitations.
- Update `TASKS.md` and `PROGRESS.md`; update `ISSUES.md` and `LEARNING.md` when relevant.

## Project Constraints

- Keep the portfolio statically exportable for GitHub Pages.
- Maintain keyboard, touch, reduced-motion, and responsive behavior.
- Do not ship placeholder copy, fake testimonials, broken forms, or unsupported metrics.
- Avoid adding dependencies unless the active task requires them.
- Never commit `.env`, credentials, API keys, authorization headers, or personal contact details beyond the approved public fields.

## Definition of Done

Implementation is complete; lint and production build pass or exact limitations are documented; responsive and accessibility checks are complete; task and progress records are current; unresolved issues and useful learnings are recorded; release scope is explicit.
