<!--
  Title: type(scope): summary, for example "fix(export): keep controls columns
  aligned". The type is one of feat · fix · docs · style · refactor · perf ·
  test · build · ci · chore · revert, in lowercase.

  The pr-format check reads this description. Keep the ## headings as they are,
  replace each comment with your answer, and the check runs again when you save.
-->

## What and why

<!-- Two or three sentences: what changes, and what problem it solves. Write it
     for someone who has not seen the ticket.

     Example: "Prospect CSV export dropped the controls columns when a zone had
     no overlay, which shifted every later column left and made the file unusable
     in Excel. Adds a null guard in buildRow() so those columns render empty." -->

## Ticket

<!-- One of these two. Replace this comment with your answer.

       ZON-1234

       No ticket — <reason>. For example: raised in #incidents and fixed the same
       hour · internal tooling, no user-facing change · follow-up to #1234 ·
       dependency bump from a security alert.

     If there is no ticket, "What and why" above has to carry the whole story:
     what prompted it, what it does, and what would have gone wrong without it.
     "No ticket" by itself is not an answer — this pull request IS the record. -->

## Changes

<!-- Bullet the substantive changes, area first. Skip noise — formatting,
     lockfile churn, generated files.

     Example:
       - `lib/export/buildRow.ts` — null-guard the controls columns
       - `lib/export/__tests__/buildRow.test.ts` — case for a zone with no overlay -->

-

## How this was tested

<!-- Tick what you actually did. An unticked box with a reason underneath is a
     good answer. A ticked box that is not true is the thing to avoid. -->

- [ ] Unit tests added or updated
- [ ] Test suite passes locally
- [ ] Type check passes
- [ ] Checked by hand

<!-- If you checked by hand, say what you did and what you saw — "created a
     prospect in staging, exported CSV, controls columns present and aligned".

     If you left a box unticked, say why. "No unit test, this is a Terraform
     variable rename" is a perfectly good reason. Silence is not. -->

## Risk and rollback

<!-- "None" is a valid answer for a copy change. It is not valid for a database
     migration, a config or environment change, a dependency bump, or anything
     touching auth, billing or deployment. -->

- What could this break:
- How to undo it:

## Reviewer notes

<!-- Optional. What to look at first, or a decision you want a second opinion on. -->

---

<!--
  SOC 2 (CM-3): this pull request is the change record. The description, the
  review conversation and the approval are the evidence an auditor samples at
  random. A merged pull request with an empty body proves nothing happened
  correctly, however good the code was.
-->
