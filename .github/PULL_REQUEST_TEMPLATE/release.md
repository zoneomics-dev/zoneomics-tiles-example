<!--
  Release: development into the production branch (main, or production in
  zoneomics-dev). Title: chore(release): <date>, for example
  "chore(release): 2026-09-30". A sync back into development uses this template
  too, titled like "chore(sync): main into development".

  Every pull request in a release already carries its own change record, so
  this one needs three short answers. The pr-format check reads them. Keep the
  ## headings as they are and replace each comment with your answer.
-->

## What this release contains

<!-- A line on what the release is for, then the pull requests it carries.
     GitHub lists the commits; this is the readable summary.

     Example:
       Zoning Summary Report v2 and the Bassett disclaimer.
       - #1301 ZON-4152 Zoning Summary Report v2
       - #1305 ZON-4160 Bassett disclaimer -->

## Verified on staging

<!-- This exact code has been running on staging. Say what you checked there,
     for example "ran a zoning report and a CSV export on staging, both
     correct". For a sync back into development, say why this does not apply. -->

## Rollback

- How to undo it:

<!-- Usually: revert the merge commit on the production branch, and the
     pipeline redeploys the previous version. Say so, or say what is different
     this time — a migration, a config change, a data backfill. -->

---

<!--
  SOC 2 (CM-3): a release is a deployment to production. This description, the
  approvals and the pr-format check are its change record.
-->
