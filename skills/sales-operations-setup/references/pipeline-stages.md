# Sales Pipeline Stage Definitions

## Overview
Clear pipeline stage definitions are critical for accurate forecasting, consistent sales process, and pipeline management. This document provides standard stage definitions for different sales models.

---

## B2B SaaS Pipeline (7 Stages)

### Stage 1: Prospecting (10% probability)
**Entry Criteria:**
- Lead meets ICP (Ideal Customer Profile)
- Contact information verified
- Initial interest expressed

**Exit Criteria:**
- Discovery call scheduled
- Key stakeholder identified

**Activities:**
- Cold outreach (email, phone, LinkedIn)
- Research company and contacts
- Personalize messaging
- Book discovery meeting

**Timeline:** 1-2 weeks
**Key Metrics:** Response rate, meeting set rate

---

### Stage 2: Discovery/Qualification (20% probability)
**Entry Criteria:**
- Discovery call completed
- BANT/MEDDIC qualification started
- Budget range discussed

**Exit Criteria:**
- Pain points clearly identified
- Budget confirmed or path to budget identified
- Decision process understood
- Champion identified

**Activities:**
- Discovery questions (pain, budget, timeline, authority)
- Present high-level solution fit
- Identify key stakeholders
- Agree on next steps

**Timeline:** 1-2 weeks
**Key Metrics:** Qualification rate, no-show rate

---

### Stage 3: Demo/Presentation (30% probability)
**Entry Criteria:**
- Decision-makers attending demo
- Technical requirements gathered
- Use cases identified

**Exit Criteria:**
- Demo completed successfully
- Technical fit confirmed
- Stakeholder buy-in achieved

**Activities:**
- Customized product demonstration
- Address technical questions
- Map features to pain points
- Provide trial/POC if applicable

**Timeline:** 1-3 weeks
**Key Metrics:** Demo-to-proposal rate, technical win rate

---

### Stage 4: Proposal (40% probability)
**Entry Criteria:**
- Pricing discussed
- Proposal requested
- Decision criteria defined

**Exit Criteria:**
- Proposal delivered and reviewed
- Pricing accepted in principle
- Contract terms discussed

**Activities:**
- Create custom proposal
- ROI/business case development
- Address pricing objections
- Negotiate terms

**Timeline:** 1-2 weeks
**Key Metrics:** Proposal acceptance rate, discount rate

---

### Stage 5: Negotiation (60% probability)
**Entry Criteria:**
- Verbal commitment received
- Legal/procurement engaged
- Contract redlines in progress

**Exit Criteria:**
- Final terms agreed
- Legal approval received
- Ready for signatures

**Activities:**
- Contract negotiations
- Address legal concerns
- Finalize pricing and terms
- Coordinate with legal teams

**Timeline:** 1-4 weeks
**Key Metrics:** Contract turnaround time, close rate

---

### Stage 6: Closed Won (100% probability)
**Entry Criteria:**
- Contract signed by all parties
- Payment terms confirmed
- Implementation scheduled

**Exit Criteria:**
- Deal marked as won
- Handed off to onboarding/CS
- Revenue recognized

**Activities:**
- Celebrate win
- Handoff to customer success
- Request referrals/case study
- Update forecasts

**Timeline:** Complete
**Key Metrics:** Time to close, deal size, discount given

---

### Stage 7: Closed Lost (0% probability)
**Entry Criteria:**
- Prospect declined or went dark
- Lost to competitor
- No budget/timing issues

**Exit Criteria:**
- Loss reason documented
- Competitive intel captured
- Nurture sequence added if applicable

**Activities:**
- Document loss reason
- Conduct win/loss analysis
- Capture competitive intelligence
- Set re-engagement timeline

**Timeline:** Complete
**Key Metrics:** Loss reasons, competitor win rates

---

## Enterprise Sales Pipeline (9 Stages)

More complex, longer sales cycle:

1. **Target Account Research** (5%) - 2-4 weeks
2. **Initial Contact** (10%) - 2-4 weeks
3. **Discovery & Qualification** (20%) - 3-6 weeks
4. **Technical Evaluation** (30%) - 4-8 weeks
5. **Business Case Development** (40%) - 2-4 weeks
6. **Proposal & Presentation** (50%) - 2-4 weeks
7. **Negotiation** (70%) - 4-8 weeks
8. **Legal Review** (80%) - 2-6 weeks
9. **Closed Won/Lost** (100% or 0%)

**Total Cycle:** 4-9 months average

---

## Transactional Sales Pipeline (5 Stages)

Shorter, simpler sales cycle:

1. **Lead** (10%) - 1-3 days
2. **Contacted** (25%) - 1-2 days
3. **Qualified** (50%) - 1-2 days
4. **Proposal** (75%) - 1-3 days
5. **Closed Won/Lost** (100% or 0%)

**Total Cycle:** 1-2 weeks average

---

## Pipeline Stage Best Practices

### Stage Design Principles

1. **Clear Entry/Exit Criteria**
   - No ambiguity about when to move stages
   - Buyer-focused, not seller-focused
   - Based on verifiable actions

2. **Consistent Probabilities**
   - Based on historical conversion data
   - Updated quarterly based on actuals
   - Different by segment/product if needed

3. **Actionable Activities**
   - Specific actions for each stage
   - Clear next steps defined
   - Resources and templates available

4. **Appropriate Granularity**
   - 5-9 stages typical (not too many, not too few)
   - Aligned to buyer's journey
   - Meaningful for forecasting

### Stage Velocity Metrics

Track average time in each stage:
- Identify bottlenecks
- Set stage duration targets
- Alert on stalled deals
- Optimize conversion paths

### Pipeline Hygiene Rules

**Automatic Stage Regression:**
- No activity for 30 days: move back one stage
- No activity for 60 days: move to nurture
- No activity for 90 days: close as lost

**Required Fields by Stage:**
- Discovery: Budget range, decision process, pain points
- Demo: Technical requirements, decision criteria
- Proposal: Pricing discussed, competitor info
- Negotiation: Close date, contract value, legal contact

**Validation Rules:**
- Can't skip stages (except closed lost)
- Amount required for proposal+ stages
- Close date required for negotiation+ stages
- Next steps required for all open stages

---

## Stage-Specific Playbooks

### Discovery Stage Questions

**Pain/Need:**
- What challenges are you trying to solve?
- What's the business impact of this problem?
- What have you tried so far?
- What happens if you don't solve this?

**Budget:**
- What budget have you allocated for this?
- What's the cost of your current solution?
- What ROI would justify investment?
- When does your budget year reset?

**Authority:**
- Who else will be involved in this decision?
- What's your role in the evaluation?
- Who has final sign-off authority?
- Who controls the budget?

**Timeline:**
- When do you need this implemented?
- What's driving the timeline?
- What could delay the decision?
- Do you have other projects competing for resources?

### Demo Stage Best Practices

- Customize to their use case
- Focus on their pain points (not feature dump)
- Show, don't tell
- Include their data if possible
- Address objections proactively
- Get commitment for next steps
- Invite economic buyer if possible

### Negotiation Stage Tactics

- Understand their approval process
- Identify potential blockers early
- Create urgency (end of quarter, price increase, etc.)
- Trade concessions (if X, then Y)
- Get legal involved early
- Set clear timeline expectations
- Maintain deal momentum

---

## Forecasting by Stage

### Weighted Pipeline Formula

```
Forecast = Σ (Deal Value × Stage Probability)
```

**Example:**
- 10 deals in Discovery ($100K each) × 20% = $200K
- 5 deals in Demo ($100K each) × 30% = $150K
- 3 deals in Proposal ($100K each) × 40% = $120K
- 2 deals in Negotiation ($100K each) × 60% = $120K
- **Total Weighted Pipeline: $590K**

### Pipeline Coverage Requirements

**Coverage Ratio = Pipeline / Target**

Typical ratios by stage:
- Discovery: Need 10x coverage
- Demo: Need 5x coverage
- Proposal: Need 3x coverage
- Negotiation: Need 1.5x coverage

**Example:** To hit $100K quota:
- Need $1M in Discovery+
- Need $500K in Demo+
- Need $300K in Proposal+
- Need $150K in Negotiation

---

## Multi-Product Pipelines

When selling multiple products:

### Option 1: Separate Pipelines
- Different pipeline for each product
- Different stages/probabilities
- Clearer reporting
- More complex management

### Option 2: Unified Pipeline
- Single pipeline with product field
- Same stages, different cycle times
- Simpler management
- Less granular forecasting

### Option 3: Product Categories
- Group similar products
- 2-3 pipelines (not 10+)
- Balance complexity and clarity

---

## Common Pipeline Problems & Solutions

### Problem: Deals stuck in stages
**Solution:**
- Set stage duration targets
- Alert on aged opportunities
- Require activity to stay in stage
- Coach reps on deal progression

### Problem: Stage skipping
**Solution:**
- Enforce stage validation rules
- Required fields by stage
- Manager approval for skips
- Regular pipeline reviews

### Problem: Inaccurate probabilities
**Solution:**
- Review actual conversion rates
- Adjust probabilities quarterly
- Segment by deal size/type
- Trust data over intuition

### Problem: Poor pipeline hygiene
**Solution:**
- Automated decay rules
- Weekly pipeline scrubs
- CRM validation rules
- Accountability in 1:1s

### Problem: Inflated pipeline
**Solution:**
- Enforce qualification criteria
- Required fields to advance
- Regular qualification reviews
- Manager approval for large deals

---

## Pipeline Review Cadence

### Daily (Individual Rep)
- Update pipeline in CRM
- Log all activities
- Review next steps
- Prioritize day's activities

### Weekly (Manager + Rep)
- 1:1 pipeline review
- Deal progression strategies
- Stuck deal analysis
- Activity planning

### Monthly (Sales Leadership)
- Forecast accuracy review
- Stage conversion analysis
- Pipeline velocity trends
- Territory/rep performance

### Quarterly (Executive Team)
- QBR with full funnel review
- Win/loss analysis
- Competitive landscape
- Process optimization

---

## Technology & Automation

### CRM Configuration
- Custom stages per product/segment
- Automated probability assignment
- Stage duration tracking
- Required field validation
- Deal decay automation

### Reporting Dashboards
- Pipeline by stage
- Stage conversion rates
- Pipeline velocity
- Forecast vs. actuals
- Pipeline coverage ratios
- Aged opportunities report

### Alerts & Notifications
- Deals with no activity (30 days)
- Deals stuck in stage (>60 days)
- Large deals moving backward
- Forecast commit changes
- Pipeline coverage shortfalls
