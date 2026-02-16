# KPI Library — Complete Reference

A categorised library of KPIs with formulas, targets, benchmarks, and owner suggestions. Use this as a pick-list when designing dashboards or setting goals.

---

## How to Use This Library

1. **Pick your function** (Sales, Marketing, Product, CS, Finance, HR)
2. **Select Tier-1 KPIs** (3-5 critical metrics you review weekly)
3. **Select Tier-2 KPIs** (5-10 important metrics reviewed monthly)
4. **Define Tier-3 KPIs** (monitored quarterly or on-demand)
5. **For each KPI**, fill in: target, data source, owner, refresh cadence

---

## Revenue & Sales KPIs

### Tier 1 — Critical (Weekly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| S1 | Monthly Recurring Revenue (MRR) | `Σ monthly subscription values` | ↑ MoM | VP Sales / CRO |
| S2 | Annual Recurring Revenue (ARR) | `MRR × 12` | Per annual plan | CRO |
| S3 | Net New ARR | `New ARR + Expansion − Contraction − Churned` | Per quarterly plan | CRO |
| S4 | Pipeline Coverage Ratio | `Total Pipeline / Revenue Target` | 3-5× | VP Sales |
| S5 | Win Rate | `Deals Won / Total Closed Opportunities × 100` | 20-30 % | VP Sales |

### Tier 2 — Important (Monthly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| S6 | Sales Velocity | `(Opps × Win Rate × ACV) / Cycle Length` | ↑ trend | Sales Ops |
| S7 | Average Deal Size (ACV) | `Total Revenue / # Deals Won` | ↑ trend | VP Sales |
| S8 | Sales Cycle Length | `Avg days from opp creation to close` | ↓ trend | Sales Ops |
| S9 | Quota Attainment % | `Reps at ≥ 100 % / Total Reps × 100` | 60-80 % | VP Sales |
| S10 | Pipeline Creation Rate | `New opp value created in period` | 1-2× target | Sales Ops |
| S11 | Stage Conversion Rates | `Advanced / Total in stage × 100` | Per stage | Sales Ops |
| S12 | Demo-to-Close Rate | `Won / Demos × 100` | 30-40 % | Sales Manager |

### Tier 3 — Monitor (Quarterly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| S13 | CAC (Customer Acquisition Cost) | `(S&M costs) / # New Customers` | < 1/3 LTV | Finance |
| S14 | CAC Payback Period | `CAC / (MRR × Gross Margin %)` | < 12 months | Finance |
| S15 | LTV : CAC Ratio | `Customer LTV / CAC` | ≥ 3:1 | Finance |
| S16 | Magic Number | `(Quarterly Rev Growth × 4) / Prior Q S&M Spend` | > 0.75 | Finance |
| S17 | Competitive Win Rate | `Wins vs Competitor / Total Competitive Deals × 100` | > 50 % | Sales Ops |
| S18 | Rep Ramp Time | `Days to first month at 100 % quota` | 3-6 months | Sales Enablement |
| S19 | Sales Team Retention | `End headcount / Start headcount × 100` | > 85 % YoY | HR |

---

## Marketing KPIs

### Tier 1 — Critical (Weekly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| M1 | Marketing Qualified Leads (MQLs) | Count of leads meeting MQL criteria | Per plan | Demand Gen |
| M2 | MQL → SQL Conversion Rate | `SQLs / MQLs × 100` | 20-30 % | Demand Gen |
| M3 | Marketing-Sourced Pipeline | `Pipeline from marketing-sourced opps` | 40-60 % of total | CMO |
| M4 | Cost per Lead (CPL) | `Marketing spend / # Leads` | ↓ trend | Demand Gen |

### Tier 2 — Important (Monthly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| M5 | Marketing-Sourced Revenue | `Revenue from marketing-sourced deals` | Per plan | CMO |
| M6 | Organic Traffic Growth | `(This month organic − Last month) / Last month × 100` | ↑ 5-10 % MoM | SEO / Content |
| M7 | Content Engagement Rate | `Engagements / Impressions × 100` | > 2 % | Content |
| M8 | Email Open Rate | `Opens / Delivered × 100` | > 25 % | Email Mktg |
| M9 | Email Click-Through Rate | `Clicks / Opens × 100` | > 3 % | Email Mktg |
| M10 | Event-to-Opportunity Rate | `Opps from event / Attendees × 100` | > 10 % | Events |

### Tier 3 — Monitor (Quarterly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| M11 | Brand Awareness Score | Survey / brand tracking tools | ↑ trend | Brand |
| M12 | Share of Voice | `Brand mentions / Total market mentions × 100` | ↑ trend | PR / Comms |
| M13 | Website Conversion Rate | `Conversions / Visitors × 100` | 2-5 % | Web |
| M14 | Customer Acquisition Cost (Marketing) | `Marketing spend / # Customers acquired` | ↓ trend | CMO |

---

## Product & Engineering KPIs

### Tier 1 — Critical (Weekly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| P1 | Daily Active Users (DAU) | Count of unique users active daily | ↑ trend | Product |
| P2 | Feature Adoption Rate | `Users using feature / Total users × 100` | > 30 % within 90 days | Product |
| P3 | Sprint Velocity | Story points / effort completed per sprint | Stable ± 10 % | Eng Manager |
| P4 | Deployment Frequency | `# Deployments per period` | ↑ trend (daily ideal) | Eng Manager |

### Tier 2 — Important (Monthly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| P5 | Time to Value | `Days from sign-up to key activation event` | ↓ trend | Product |
| P6 | Bug Resolution Time (P0/P1) | `Avg hours from report to fix deployed` | P0 < 4h, P1 < 24h | Eng Manager |
| P7 | Release-to-Incident Ratio | `Incidents / Releases × 100` | < 5 % | SRE / DevOps |
| P8 | Code Review Cycle Time | `Avg hours from PR open to merge` | < 24h | Eng Manager |
| P9 | Test Coverage % | `Lines covered / Total lines × 100` | > 80 % | QA |

### Tier 3 — Monitor (Quarterly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| P10 | Technical Debt Ratio | `Remediation cost / Development cost × 100` | < 5 % | CTO |
| P11 | Uptime / Availability | `Uptime mins / Total mins × 100` | ≥ 99.9 % | SRE |
| P12 | Customer-Reported Defect Rate | `Customer bugs / Total tickets × 100` | ↓ trend | QA |

---

## Customer Success KPIs

### Tier 1 — Critical (Weekly/Monthly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| C1 | Net Revenue Retention (NRR) | `(Start ARR + Expansion − Contraction − Churn) / Start ARR × 100` | > 110 % | VP CS |
| C2 | Gross Churn Rate | `Churned ARR / Start ARR × 100` | < 5 % annual | VP CS |
| C3 | Net Promoter Score (NPS) | Survey-based (−100 to +100) | > 40 | VP CS |
| C4 | Customer Health Score | Composite (usage + support + engagement) | > 70 % green | CS Ops |

### Tier 2 — Important (Monthly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| C5 | Expansion Revenue | `Upsell ARR + Cross-sell ARR in period` | Per plan | VP CS |
| C6 | CSAT (Customer Satisfaction) | Survey average (1-5 or 1-10) | > 4.2 / 5 | Support |
| C7 | First Response Time | `Avg time from ticket to first reply` | < 1 hour (P1) | Support |
| C8 | Ticket Resolution Time | `Avg time from ticket to resolution` | < 24 hours | Support |
| C9 | Renewal Rate | `Renewed ARR / Renewable ARR × 100` | > 90 % | CS Manager |
| C10 | Time to First Value | `Days from onboarding start to first success milestone` | < 30 days | Onboarding |

### Tier 3 — Monitor (Quarterly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| C11 | Customer Effort Score (CES) | Survey-based (1-7) | < 3 | Support |
| C12 | Logo Churn Rate | `Lost customers / Start customers × 100` | < 10 % annual | VP CS |
| C13 | Support Ticket Volume | `# Tickets / # Active Customers` | ↓ trend | Support |

---

## Finance & Operations KPIs

### Tier 1 — Critical (Monthly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| F1 | Burn Rate | `Monthly cash outflows` | Per plan | CFO |
| F2 | Runway | `Cash on hand / Monthly burn rate` | > 18 months | CFO |
| F3 | Gross Margin % | `(Revenue − COGS) / Revenue × 100` | > 70 % (SaaS) | CFO |
| F4 | Rule of 40 | `Revenue growth % + Profit margin %` | ≥ 40 | CFO |

### Tier 2 — Important (Monthly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| F5 | Operating Expense Ratio | `OpEx / Revenue × 100` | ↓ trend | CFO |
| F6 | Revenue per Employee | `Total Revenue / # Employees` | ↑ trend | CFO |
| F7 | Budget Variance | `(Actual − Budget) / Budget × 100` | ± 5 % | FP&A |
| F8 | Cash Conversion Cycle | `DSO + DIO − DPO` (days) | ↓ trend | Controller |

### Tier 3 — Monitor (Quarterly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| F9 | Burn Multiple | `Net Burn / Net New ARR` | < 1.5× | CFO |
| F10 | Headcount Plan Attainment | `Actual hires / Planned hires × 100` | > 90 % | HR + Finance |

---

## People & HR KPIs

### Tier 1 — Critical (Monthly/Quarterly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| H1 | Employee Engagement Score | Survey-based (0-100 or 1-5) | > 4.0 / 5 | CHRO |
| H2 | Regretted Attrition Rate | `Regretted leavers / Total headcount × 100` | < 10 % annual | CHRO |
| H3 | Time to Hire | `Avg days from requisition to offer acceptance` | < 45 days | Talent Acq |

### Tier 2 — Important (Monthly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| H4 | Offer Acceptance Rate | `Offers accepted / Offers extended × 100` | > 85 % | Talent Acq |
| H5 | Internal Mobility Rate | `Internal moves / Total hires × 100` | > 20 % | CHRO |
| H6 | Training Completion Rate | `Completed / Assigned × 100` | > 90 % | L&D |
| H7 | 90-Day Retention | `Employees past 90 days / New hires × 100` | > 95 % | HR |

### Tier 3 — Monitor (Quarterly)

| # | KPI | Formula | Target | Owner |
|---|-----|---------|--------|-------|
| H8 | Diversity Index | Varies by dimension (gender, ethnicity, etc.) | Improvement trend | DEI |
| H9 | Manager Effectiveness Score | 360 survey / skip-level feedback | > 4.0 / 5 | CHRO |
| H10 | Revenue per Employee | `Total Revenue / Headcount` | ↑ trend | Finance + HR |

---

## How to Select KPIs

### Step 1: Start with company goals
What are the 3-5 things the company must achieve this quarter/year?

### Step 2: Identify the outcomes
For each goal, what measurable outcome signals success?

### Step 3: Find leading indicators
For each outcome, what upstream activity predicts it?

### Step 4: Assign tiers
- **Tier 1**: Review weekly in leadership meetings
- **Tier 2**: Review monthly in department meetings
- **Tier 3**: Review quarterly or on-demand

### Step 5: Define the KPI sheet

For each selected KPI, fill in:

| Field | Description |
|-------|-------------|
| **Name** | Clear, concise label |
| **Formula** | Exact calculation |
| **Target** | Quantified goal |
| **Benchmark** | Industry standard |
| **Owner** | Single DRI |
| **Data Source** | Where the data comes from |
| **Refresh Cadence** | How often it's updated |
| **RAG Thresholds** | Green / Amber / Red boundaries |
| **Action Trigger** | What happens when it goes Amber or Red |
