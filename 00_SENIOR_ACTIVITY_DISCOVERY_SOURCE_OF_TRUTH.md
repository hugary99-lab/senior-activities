# Senior Activity Discovery / Life Nearby — Source of Truth

Last updated: 2026-10-07

## Rule for future work
Before making any material product, data, UX, deployment, or code change, read this file first and treat it as the authoritative project record. Update this file whenever the direction, schema, milestone, deployment, or major decision changes.

## Product identity
- Working names: Senior Activity Discovery / Life Nearby / More Life Nearby
- Purpose: Help older adults, families, and caregivers find realistic nearby activities that fit the person's needs and preferences.
- Primary user: Family member or caregiver helping an older adult choose something suitable.
- Secondary user: Older adult searching directly.
- Core question: **What can Mom or Dad realistically do this week?**

## Current product direction
- Do not build another generic directory.
- Build caregiver-oriented decision support and activity matching.
- Focus first on useful, current local inventory.
- Geographic rollout direction: start with York Region / Vaughan and expand carefully.
- Include both structured programs and lower-barrier social activities.

## Activity scope
Examples include:
- Fitness and movement
- Walking groups
- Arts and crafts
- Learning / workshops
- Book clubs
- Movie nights
- Coffee / social groups
- Cards / mahjong
- Ping-pong
- Cultural groups
- Dances
- Volunteering
- Mentoring
- Community contribution

## Matching / role taxonomy
Activities may help a person:
- Participate
- Socialize
- Learn
- Volunteer
- Mentor
- Contribute

The product should help match by practical fit, not just category.

## Important matching dimensions
- Location / travel practicality
- Date / day / time
- Cost
- Physical intensity
- Social intensity
- Accessibility / barrier level
- Age or eligibility rules
- Registration requirements
- Availability / status
- Interests
- Need for caregiver involvement
- Indoor / outdoor when relevant

## Current technical setup
- GitHub repository: https://github.com/hugary99-lab/senior-activities
- Default branch: main
- Repository visibility: public
- Static prototype files are present, including index.html and plan.html.
- Netlify configuration is present.
- Current README describes the product as a prototype for older adults, families, and caregivers.

## Supabase backend status
- Organization: GH Org (`wyhnwrbacyiigliatjqg`).
- Project: **more-life-nearby** (`nisietxeomosxabixlba`), Canada Central (`ca-central-1`).
- Dashboard: https://supabase.com/dashboard/project/nisietxeomosxabixlba
- Organization projects: https://supabase.com/dashboard/org/wyhnwrbacyiigliatjqg
- **Paused on 2026-10-07 at Gary's request; Supabase status verified as `INACTIVE`.**
- Reason: free an active free-project slot in GH Org for a separate WayTold backend. The More Life Nearby project was paused, not repurposed for WayTold.
- Existing database data remains saved. Supabase-dependent functionality is unavailable while paused. This does not pause the separately hosted static prototype.
- Resume this existing project through its dashboard when More Life Nearby backend work resumes. Recheck free-project capacity and billing before restoring; restoring may require freeing another active slot or upgrading.
- Related project repository: https://github.com/hugary99-lab/waytold-family-stories
- WayTold backend creation is still pending; freeing the slot does not mean its backend has been created.

## Data acquisition direction
Potential sources include:
- Municipal program systems such as ACTIVE Net
- PerfectMind / Xplor
- Municipal websites / HTML pages
- Toronto / municipal open data where relevant
- Libraries
- Senior centres
- Community centres
- Organizer-submitted activities

Normalize source data into a common activity model with:
- Activity title
- Organizer
- Venue
- Address / city
- Category / role
- Date / recurrence
- Start / end time
- Age / eligibility
- Price
- Availability / registration status
- Registration URL
- Source ID
- Source URL
- Last verified timestamp

## Current validation gate
- Current working gate: build at least 30 useful current records and run 5 matching tests / personas.
- Measure whether a caregiver can find a suitable option quickly.
- The repository README mentions a 50-record validation milestone; this file records the newer working gate of 30 records + 5 matching tests as of 2026-10-07.

## Product principles
- Useful fit beats raw listing volume.
- Current verified activity data is critical.
- Avoid stigmatizing framing; prefer inclusive language over making the product feel like a narrow "55+" directory.
- Map / nearby discovery can help, but recommendation quality comes first.
- Do not expand into a reverse marketplace until the discovery/matching layer proves value.
- Caregiver decision support is the key differentiation.

## Open items
- Reach the current 30-record verified inventory gate.
- Define and run five representative matching tests/personas.
- Reconcile current prototype UI with the caregiver decision-support positioning.
- Establish repeatable source-refresh / verification workflow.
- Decide which city/source to add after Vaughan/York Region validation.
- Define useful analytics for search → match → activity detail → registration/source click.

## Change log
### 2026-10-07
- Established this file as the durable source of truth.
- Reaffirmed caregiver decision-support positioning.
- Recorded current validation gate as 30 records + 5 matching tests.

- Paused More Life Nearby's Supabase project at Gary's request and verified `INACTIVE`; preserved the project reference, dashboard link, reason, and restoration guidance.
