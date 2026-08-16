# Task Backlog

```yaml
id: TASK-001
status: done
purpose: Establish the portfolio evidence baseline and project governance.
batch_scope:
  - Inspect the existing site architecture and content.
  - Review updated_portfolio.json, the current DOCX resume, and the LinkedIn profile PDF.
  - Resolve material conflicts with the user.
  - Review public GitHub repositories and choose an evidence-rich shortlist.
  - Create AGENTS.md and the complete .context documentation set.
dependencies: []
references:
  - PRD: Data and Evidence Requirements; Security and Privacy Requirements
  - SPECS: Business Logic Rules; Documentation Requirements
  - ROADMAP: M1
verification:
  - All required context files exist.
  - User confirmations are reflected consistently.
  - Active implementation scope has no blocking open question.
```

```yaml
id: TASK-002
status: done
purpose: Deliver and publish the evidence-led responsive portfolio refresh.
batch_scope:
  - Add a centralized static content model using approved facts and public repository evidence.
  - Refactor the global layout, header, navigation, transition behavior, and CSS for scrolling and responsive use.
  - Refresh home, about, capabilities, work, credentials, and contact routes.
  - Remove placeholder copy, fake testimonials, generic social links, unsupported counters, and the simulated contact form from reachable navigation.
  - Add semantic structure, keyboard focus, active navigation, safe external links, and reduced-motion handling.
  - Add site-specific metadata and a validated social preview when available.
  - Run lint, production build and static export, and bounded source checks.
  - Reconcile .context records, commit the verified state, and push it to GitHub.
dependencies:
  - TASK-001
references:
  - PRD: Goals; Core Features; Acceptance Criteria
  - SPECS: Frontend Specifications; Testing Strategy; Deployment Instructions
  - ROADMAP: M2; M3
verification:
  - npm run lint
  - npm run build
  - No reachable placeholder or fake content remains.
  - No prohibited phone, street, private repository, or secret content is introduced.
  - Selected project URLs match public GitHub repositories.
  - Static export output is generated.
  - The verified commit is pushed to the intended remote branch.
```

```yaml
id: TASK-003
status: todo
purpose: Perform optional post-release modernization and media enhancements.
batch_scope:
  - Add verified project screenshots or stable live demos.
  - Upgrade Next.js and dependencies in a dedicated migration.
  - Decide on privacy-conscious analytics.
  - Remove the historical duplicate New folder tree after approval.
dependencies:
  - TASK-002
references:
  - PRD: Future Enhancements
  - SPECS: Compatibility and Migration
  - ROADMAP: M4
verification:
  - To be defined when selected.
```
