# Issues and Decisions

```yaml
id: ISSUE-001
status: resolved
severity: high
area: career evidence
details: Supplied sources conflicted on Beiersdorf metrics, MSc dates and grade, and contact information.
references:
  - PRD: Data and Evidence Requirements
  - TASK-001
resolution: The user designated updated_portfolio.json as authoritative and confirmed 400+ instances, 400MB+ logs, 5x debugging speed, 20% efficiency improvement, MSc Oct 2024-Sep 2026, and grade 1.9.
```

```yaml
id: ISSUE-002
status: resolved
severity: high
area: privacy and employer content
details: The earlier site and source documents contained phone and street details and internal employer-project descriptions.
references:
  - PRD: Security and Privacy Requirements
  - TASK-001
resolution: Publish only Hamburg, email, LinkedIn, and GitHub. Exclude private employer projects from the public gallery and do not research employer websites.
```

```yaml
id: ISSUE-003
status: open
severity: high
area: dependencies
details: The site uses Next.js 13.4 and an older dependency set. On 2026-08-16, `npm audit --omit=dev` reported 12 production dependency findings (3 moderate, 8 high, 1 critical), including the pinned Next.js line and transitive build tooling. The static GitHub Pages export has no long-running Next.js server, which limits exposure to several server-only advisories but does not remove the need to upgrade.
references:
  - SPECS: Compatibility and Migration
  - TASK-003
resolution: Preserve the current stack for TASK-002 as scoped; do not apply an unreviewed forced upgrade. Upgrade Next.js and audit the dependency graph in a separate migration batch.
```

```yaml
id: ISSUE-004
status: open
severity: low
area: repository hygiene
details: A historical New folder directory duplicates much of the old application source.
references:
  - PRD: Future Enhancements
  - TASK-003
resolution: Leave it untouched during the responsive refresh and remove only after explicit cleanup approval.
```

```yaml
id: ISSUE-005
status: resolved
severity: medium
area: package management
details: The original package-lock.json was not accepted by `npm ci` because optional platform packages, including fsevents metadata, were missing from the lockfile.
references:
  - SPECS: Testing Strategy
  - TASK-002
resolution: Regenerated the lock metadata with the existing declared dependency ranges, then confirmed a clean `npm ci` succeeds. No package.json dependency range was changed.
```
