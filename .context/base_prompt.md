# CLI Agent Base Prompt

Replace `TASK-XXX` with the task ID to execute.

```text
You are working in:
H:\portfolio

Execute task batch: TASK-XXX

Operating rules:

1. Read in order:
   - AGENTS.md
   - .context/PRD.md
   - .context/SPECS.md
   - .context/ROADMAP.md
   - .context/TASKS.md
   - .context/PROGRESS.md
   - .context/ISSUES.md
   - .context/LEARNING.md

2. Find TASK-XXX in .context/TASKS.md and verify every dependency.
   - If a dependency is not done, stop and report the blocker.
   - If the task is already done, inspect whether an explicitly requested follow-up remains before editing.

3. Execute only TASK-XXX.
   - Preserve unrelated user work.
   - Do not implement future tasks.
   - Keep the Next.js Pages Router, npm lockfile, and static-export model unless the selected task explicitly changes them.

4. Enforce the evidence boundary.
   - Ground personal facts in the approved evidence hierarchy from PRD.md.
   - Use public GitHub repository content only for public project claims.
   - Do not expose phone numbers, street addresses, private repositories, employer-internal project details, credentials, or unsupported metrics.

5. Follow SPECS.md for responsive, accessibility, privacy, compatibility, and implementation requirements.

6. Run the verification listed for TASK-XXX.
   - Fix task-related failures before finishing.
   - If a command cannot run, document the exact reason and resulting limitation.

7. Update documentation before finishing.
   - Update the task status in .context/TASKS.md.
   - Update .context/PROGRESS.md.
   - Update .context/ISSUES.md for blockers, defects, risks, or unresolved decisions.
   - Update .context/LEARNING.md with reusable discoveries and decisions.

8. Final response:
   - Summarize what changed.
   - List verification and results.
   - Mention intentionally deferred files or features.
   - Mention blockers or follow-up issues.

Begin by reading the context files, then execute TASK-XXX end to end.
```
