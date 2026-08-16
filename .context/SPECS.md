# Development Specifications

## Development Intent

Refresh the existing portfolio within its current Next.js Pages Router architecture. Centralize evidence-backed content, simplify page composition, and remove viewport-locking and placeholder patterns that undermine responsive behavior and credibility.

## Technical Stack

- Next.js 13.4 Pages Router
- React 18
- JavaScript and JSX
- Tailwind CSS 3
- Framer Motion
- React Icons
- Static export through `next.config.js`
- npm with the existing `package-lock.json`

## Architecture Overview

- `pages/` owns route composition and page-level metadata.
- `components/` owns global layout, navigation, shared cards, and transitions.
- `data/portfolioData.js` is the canonical UI content module derived from approved evidence.
- `styles/globals.css` owns global tokens, responsive page behavior, focus, selection, and reduced-motion rules.
- `public/` contains existing local assets and the validated social preview asset when available.

## Target Routes

- `/` - hero and professional positioning
- `/about` - experience, impact, education, and selected skills
- `/services` - capabilities
- `/work` - selected public projects
- `/credentials` - education, certification, publications, and recognition
- `/contact` - direct contact and professional profiles

The old testimonials route is removed from reachable navigation because no verified testimonial set exists.

## Runtime Model

The site is entirely client-rendered and statically exported. It has no API dependency for normal use.

## Configuration and Environments

- Preserve `output: 'export'`.
- Preserve the existing lockfile and dependency versions for this batch.
- Do not introduce environment variables.
- Keep all public URLs explicit in the content module.

## Frontend Specifications

### Layout

- Replace fixed `h-screen` and hidden-overflow page containers with minimum height and vertical scrolling.
- Reserve mobile bottom space for fixed navigation.
- Use a consistent content container and responsive horizontal padding.
- Keep decorative layers non-interactive with `pointer-events: none`.

### Header and Navigation

- Header uses the existing logo/name treatment, approved social links, and a compact responsive layout.
- Desktop navigation is a vertical rail; mobile navigation is a bottom dock.
- Every nav link has an accessible label and `aria-current` on the active route.
- Navigation does not include testimonials.

### Motion

- Keep route and content motion restrained.
- Disable or reduce animation when `prefers-reduced-motion: reduce` is active.
- Never delay access to primary content behind animation.

### Content Components

- Project cards show category, title, concise evidence-based description, selected technologies, and an exact GitHub link.
- Timeline items show role, organization, dates, location, and concise outcomes.
- Metrics use confirmed labels and values only.
- Capability cards describe demonstrated work rather than unsupported freelance services.
- Contact uses direct actions instead of a simulated form.

## Backend Specifications

No backend is included. The legacy demo API route may remain unused but must not be presented as a product capability.

## API Contracts

None.

## Database and Data Model

No database. Portfolio content is a static JavaScript module with these conceptual groups:

- `profile`
- `impactMetrics`
- `experience`
- `education`
- `capabilities`
- `skills`
- `projects`
- `credentials`
- `socialLinks`

## Business Logic Rules

- The confirmed JSON values override conflicting legacy PDF or DOCX values.
- Public GitHub README content may support project descriptions.
- Private and internal repositories and employer projects are excluded from the project gallery.
- Unverified live demo URLs are not displayed.
- Contact output is limited to approved public fields.

## Validation Rules

- Every project URL must start with `https://github.com/Reeju2019/` and reference a public repository.
- No text may contain placeholder terms such as `Lorem ipsum`, `Jane Doe`, or generic social hosts.
- No phone-number or street-address string may appear in source-controlled site content.
- Images that communicate content require non-empty alt text; decorative images use empty alt text intentionally.
- Lists rendered from data use stable semantic keys.

## Security Rules

- Never add `.env` or secret-bearing configuration.
- Do not embed tokens or API keys.
- Add safe external-link attributes.
- Treat external content as untrusted text and never render raw HTML from repository sources.

## Error Handling Rules

- Static content must render without network access.
- Broken external destinations must not prevent navigation within the site.
- Use source-code and GitHub-profile links when no verified live demo exists.

## Testing Strategy

- Run `npm ci` when dependencies are absent.
- Run `npm run lint`.
- Run `npm run build` and confirm static export output.
- Run source checks for placeholders, prohibited contact fields, and exact repository URLs.
- Review responsive classes and overflow behavior at 320px, 640px, 960px, and 1200px design breakpoints.
- Verify reduced-motion CSS and keyboard-focus styles structurally.

## Development Milestones

- M1: Evidence and governance baseline.
- M2: Responsive content and UI refresh.
- M3: Verification and GitHub release.

## Implementation Constraints

- Use 2-space indentation in new JavaScript and CSS where practical.
- Preserve the current package manager and lockfile.
- Avoid unrelated dependency upgrades.
- Reuse the current palette unless contrast requires adjustment.
- Keep the static GitHub Pages behavior intact.

## Compatibility and Migration

- This is a content and layout refactor, not a framework migration.
- Existing inbound links to core routes remain valid.
- Testimonials are intentionally replaced by a credentials route in reachable navigation.

## Performance Considerations

- Remove particles from mobile or replace them with static CSS decoration.
- Avoid large generic thumbnails in project cards.
- Prefer a small number of above-the-fold assets.
- Load no remote images at runtime.

## Deployment Instructions

- Build a static export.
- Commit the verified state to the repository.
- Push through the established GitHub remote.
- GitHub Pages remains the public hosting target; do not create a second hosting project unless requested.

## Documentation Requirements

- Update `TASKS.md` and `PROGRESS.md` after the active batch.
- Record risks or unresolved defects in `ISSUES.md`.
- Record reusable architectural and evidence decisions in `LEARNING.md`.

## Open Technical Questions

None blocking TASK-002.
